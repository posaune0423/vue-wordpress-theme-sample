# vue-wordpress-theme-sample
This is sample wordpress Vue.js theme settings working on Docker.

I really respect settings below
- [wp-docker](https://github.com/viralpatel/wp-docker) created by [Viral Patel](https://github.com/viralpatel)
- [Aetherium](https://github.com/torounit/Aetherium) created by [Hiroshi Urabe](https://github.com/torounit)
- [vuejs-wordpress-theme-starter](https://github.com/EvanAgee/vuejs-wordpress-theme-starter) created by [EvanAgee](https://github.com/EvanAgee)


Also, in this environment upload_max_filesize in php.ini is configured by upload.ini for uploading files or folders which exceed default upload_max_filesize.

## Prerequisites
- [Docker](https://www.docker.com/)

## How to use
```bash
$ git clone https://github.com/posaune0423/wp-local.git

$ cd vue-wordpress-theme-sample

$ docker-compose up -d --build
```
then automatically apache web server start on http://localhost:8000

## how to log in to container's shell
```bash
$ docker exec -it $(docker ps -aqf "name=docker-vue-wordpress-theme-sample_wordpress") /bin/bash
```

#### Now, you are get ready for developing your own awesome theme !