# camarero

Download Server for your static binary files with an [Apache](https://hub.docker.com/_/httpd) and [Apaxy-V2 by Fusengine](https://github.com/fusengine/apaxy-v2).

This tool was developed for a fast public file sharing without any role and user management.
If you need user and role management, have a look to [Filebrowser](https://filebrowser.githuib.io) or something like [Nextcloud](https://nextcloud.com).

## How to use

You can easily setup this tool with a docker container:

    docker run -p 8080:80 secanis/camarero:latest

## Configuration

If you want to set your own logo, you can map your own .png file to the directory /var/www/theme/icons/logo.png.

    docker run -p 8080:80 -v /data/mylogo.png:/var/www/theme/icons/logo.png secanis/camarero:latest