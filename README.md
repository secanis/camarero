# camarero

Download Server for your static binary files.
Camarero allows you to upload over a small UI your files and manage them easily.

This tool was developed for a fast public file sharing without any role and user management.
If you need user and role management, have a look to [Filebrowser](https://filebrowser.githuib.io) or something like [Nextcloud](https://nextcloud.com).

## How to use

You can easily setup this tool with a docker container, basic auth user will be `admin` and the password `camarero`

    docker run -p 3000:3000 secanis/camarero:latest

For more security and persistent files you can use the following one command:

    docker run -p 3000:3000 -v /data/passwd:/app/public/passwd -v /data/upload:/app/public/data secanis/camarero:latest

## Configuration

You can set the following environment variables to configure Camarero further:

    CAMARERO_PORT           default 3000
    CAMARERO_UPLOAD_PATH    default 'public/data'
    CAMARERO_PASSWD_PATH    default 'public/passwd'

## Work in Progress

Currently this project is jsut a MVP and has no expaned features and possibilities.

So hold on and come back soon :)

If you have feedback to the current work, please write me or create an issue. Thank you.