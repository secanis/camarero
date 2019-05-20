FROM httpd:alpine

LABEL maintainer=support@secanis.ch \
    ch.secanis.tool=camarero

COPY /apache/httpd.conf /usr/local/apache2/conf/httpd.conf
COPY --chown=daemon:daemon /apaxy /var/www/

RUN chown daemon:daemon -R /usr/local/apache2/logs

USER daemon
EXPOSE 8080
VOLUME [ "/var/www" ]

CMD ["httpd-foreground"]