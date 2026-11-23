$port = 8000
$root = $PSScriptRoot
if (-not $root) { $root = (Get-Location).Path }

$listener = New-Object System.Net.HttpListener
$prefix = "http://localhost:$port/"
$listener.Prefixes.Add($prefix)

try {
    $listener.Start()
} catch {
    Write-Host "Port $port in use or unavailable, attempting port 8080..."
    $port = 8080
    $listener = New-Object System.Net.HttpListener
    $prefix = "http://localhost:$port/"
    $listener.Prefixes.Add($prefix)
    $listener.Start()
}

Write-Host "============================================="
Write-Host " Celeste Website Local Server Running"
Write-Host " URL: $prefix"
Write-Host " Root Directory: $root"
Write-Host " Press Ctrl+C to terminate the server."
Write-Host "============================================="

$mimeTypes = @{
    ".html"  = "text/html; charset=utf-8"
    ".htm"   = "text/html; charset=utf-8"
    ".css"   = "text/css; charset=utf-8"
    ".js"    = "application/javascript; charset=utf-8"
    ".json"  = "application/json; charset=utf-8"
    ".png"   = "image/png"
    ".jpg"   = "image/jpeg"
    ".jpeg"  = "image/jpeg"
    ".gif"   = "image/gif"
    ".svg"   = "image/svg+xml"
    ".ico"   = "image/x-icon"
    ".webp"  = "image/webp"
    ".woff"  = "font/woff"
    ".woff2" = "font/woff2"
    ".ttf"   = "font/ttf"
    ".txt"   = "text/plain; charset=utf-8"
}

while ($listener.IsListening) {
    try {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $rawUrl = $request.Url.LocalPath
        $decodedUrl = [System.Uri]::UnescapeDataString($rawUrl).TrimStart('/')
        if ([string]::IsNullOrWhiteSpace($decodedUrl)) {
            $decodedUrl = "index.html"
        }

        $decodedUrl = $decodedUrl.Replace('/', [System.IO.Path]::DirectorySeparatorChar)
        $filePath = [System.IO.Path]::GetFullPath([System.IO.Path]::Combine($root, $decodedUrl))

        if (-not $filePath.StartsWith($root, [System.StringComparison]::OrdinalIgnoreCase)) {
            $response.StatusCode = 403
            $buffer = [System.Text.Encoding]::UTF8.GetBytes("403 Forbidden")
            $response.ContentLength64 = $buffer.Length
            $response.OutputStream.Write($buffer, 0, $buffer.Length)
            $response.Close()
            continue
        }

        if ([System.IO.Directory]::Exists($filePath)) {
            $filePath = [System.IO.Path]::Combine($filePath, "index.html")
        }

        if ([System.IO.File]::Exists($filePath)) {
            $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
            $contentType = "application/octet-stream"
            if ($mimeTypes.ContainsKey($ext)) {
                $contentType = $mimeTypes[$ext]
            }

            $response.ContentType = $contentType
            $response.Headers.Add("Access-Control-Allow-Origin", "*")
            $bytes = [System.IO.File]::ReadAllBytes($filePath)
            $response.ContentLength64 = $bytes.Length
            $response.StatusCode = 200
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $response.StatusCode = 404
            $buffer = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found: $decodedUrl")
            $response.ContentLength64 = $buffer.Length
            $response.OutputStream.Write($buffer, 0, $buffer.Length)
        }

        $response.Close()
    } catch {
        # Ignore disconnect / write errors
    }
}
