#!/bin/bash
set -e

SRC="public/app-icon-master.png"

echo "Generating iOS app icons..."
sips -z 1024 1024 "$SRC" --out public/icons/ios/AppIcon-1024.png
sips -z 180 180 "$SRC" --out public/icons/ios/AppIcon-180.png
sips -z 167 167 "$SRC" --out public/icons/ios/AppIcon-167.png
sips -z 152 152 "$SRC" --out public/icons/ios/AppIcon-152.png
sips -z 120 120 "$SRC" --out public/icons/ios/AppIcon-120.png
sips -z 87 87 "$SRC" --out public/icons/ios/AppIcon-87.png
sips -z 80 80 "$SRC" --out public/icons/ios/AppIcon-80.png
sips -z 58 58 "$SRC" --out public/icons/ios/AppIcon-58.png
sips -z 40 40 "$SRC" --out public/icons/ios/AppIcon-40.png

echo "Generating Android app icons..."
sips -z 512 512 "$SRC" --out public/icons/android/playstore-icon-512.png
sips -z 192 192 "$SRC" --out public/icons/android/mipmap-xxxhdpi-192.png
sips -z 144 144 "$SRC" --out public/icons/android/mipmap-xxhdpi-144.png
sips -z 96 96 "$SRC" --out public/icons/android/mipmap-xhdpi-96.png
sips -z 72 72 "$SRC" --out public/icons/android/mipmap-hdpi-72.png
sips -z 48 48 "$SRC" --out public/icons/android/mipmap-mdpi-48.png

echo "Generating Web & Favicon assets..."
sips -z 512 512 "$SRC" --out public/icons/web/icon-512x512.png
sips -z 192 192 "$SRC" --out public/icons/web/icon-192x192.png
sips -z 180 180 "$SRC" --out public/apple-touch-icon.png
sips -z 32 32 "$SRC" --out public/favicon-32x32.png
sips -z 16 16 "$SRC" --out public/favicon-16x16.png
cp public/favicon-32x32.png public/favicon.ico

echo "All icons generated successfully!"

