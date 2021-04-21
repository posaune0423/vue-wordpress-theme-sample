# docker-wordpress

This repository is based on [here](https://github.com/viralpatel/wp-docker) created by [Viral Patel](https://github.com/viralpatel)

This repository is for setting up local Wordpress environment using docker.

Also, in this environment upload_max_filesize in php.ini is configured by upload.ini for uploading files or folders which exceed default upload_max_filesize.

## How to use

```zsh
$ git clone https://github.com/posaune0423/wp-local.git

$ cd wp-local

$ docker-compose up -d
```

## log in to container's shell

```zsh
$ docker exec -it $(docker ps -aqf "name=docker-wordpress_wordpress") /bin/bash
```
