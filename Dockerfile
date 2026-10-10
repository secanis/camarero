FROM docker.io/library/httpd:2.4-alpine

LABEL maintainer="support@secanis.ch" \
    ch.secanis.tool="camarero" \
    org.opencontainers.image.title="camarero" \
    org.opencontainers.image.description="Download server for static files based on Apache httpd and Apaxy" \
    org.opencontainers.image.source="https://github.com/secanis/camarero" \
    org.opencontainers.image.licenses="MIT"

COPY apache/httpd.conf /usr/local/apache2/conf/httpd.conf
COPY --chown=daemon:daemon apaxy /var/www/

RUN mkdir -p /var/www/dl \
    && chown daemon:daemon /var/www/dl \
    && chown -R daemon:daemon /usr/local/apache2/logs

USER daemon
EXPOSE 8080
VOLUME [ "/var/www/dl" ]

HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
    CMD wget -q --spider http://127.0.0.1:8080/theme/style.css || exit 1

STOPSIGNAL SIGWINCH

CMD ["httpd-foreground"]
