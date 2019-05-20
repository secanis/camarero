# camarero

Download Server for your static binary files with an [Apache](https://hub.docker.com/_/httpd) and [Apaxy-V2 by Fusengine](https://github.com/fusengine/apaxy-v2).

This tool was developed for a fast public file sharing without any role and user management.
If you need user and role management, have a look to [Filebrowser](https://filebrowser.githuib.io) or something like [Nextcloud](https://nextcloud.com).

## How to use

You can easily setup this tool with a docker container:

    docker run --rm -p 8080:8080 secanis/camarero:latest

## Configuration

To map the files from a filesystem you can mount folders or file to /var/www, ensure that you not overwrite the /var/www/theme folder.

    docker run -p 8080:8080 -v /data/myprojectfolder:/var/www/myprojectfolder secanis/camarero:latest

If you want to set your own logo, you can map your own .png file to the directory /var/www/theme/icons/logo.png.
You can customize everything by mounting the complete theme folder into the container.

    docker run -p 8080:8080 -v /data/mylogo.png:/var/www/theme/icons/logo.png secanis/camarero:latest

    // folder structure
    - theme
        - icons
        - .htaccess
        - footer.html
        - header.html
        - style.css