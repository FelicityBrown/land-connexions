FROM node:16-buster as builder

WORKDIR /srv

COPY package.json /srv/package.json

RUN yarn install --cache-folder /tmp/yarn_cache && rm -rf /tmp/yarn_cache

COPY . /srv

RUN yarn build


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

COPY . /srv
COPY --from=builder /srv/build /srv/build

RUN rm package.json && rm package-lock.json && yarn add nodemailer --cache-folder /tmp/yarn_cache && rm -rf /tmp/yarn_cache

COPY system/supervisord.conf /etc/supervisord.conf
CMD ./system/run.sh

EXPOSE 80
