#!/bin/bash
echo "Building the project for deployment..."
cd frontend
npm run build

echo "Syncing built files to Raspberry Pi..."
rsync -avz --delete dist/ pi@raspberrypi.local:/var/www/CMYKalei/frontend/dist/