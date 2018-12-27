FROM node:alpine

LABEL maintainer=support@secanis.ch \
    ch.secanis.tool=camarero

WORKDIR /app
ENV NODE_ENV production

COPY . /app

RUN npm install --production \
    && adduser -D myuser \
    && chown myuser:myuser -R ./
USER myuser

HEALTHCHECK --interval=15s --timeout=15s --start-period=5s --retries=3 CMD node /app/healthcheck.js

EXPOSE 3000

CMD ["node", "server.js"]