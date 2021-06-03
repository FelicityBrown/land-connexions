FROM node:16-buster

RUN apt-get update && \
    apt-get install -y \
        nginx-light \
        supervisor \
    && \
        apt-get clean && \
            rm -rf /var/lib/apt/lists/* \
                   /tmp/* \
                   /var/tmp/*

WORKDIR /srv

COPY package.json /srv/package.json

RUN yarn

COPY . /srv

RUN yarn build

COPY system/supervisord.conf /etc/supervisord.conf
CMD ./system/run.sh

EXPOSE 80
