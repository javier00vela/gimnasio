FROM node:14  AS ui-build
WORKDIR /usr/src/app/
COPY ./public ./public/
RUN cd public && npm install @angular/cli && npm install && npm run build

FROM nginx
RUN rm -r /usr/share/nginx/html/*
COPY --from=ui-build /usr/src/app/public/dist/public /usr/share/nginx/html

FROM node:10 AS server-build
WORKDIR /usr/src/app/
COPY ./server ./server/
COPY --from=ui-build /usr/src/app/public/dist/public ./server
RUN cd server && npm install

 EXPOSE 3080

CMD ["node", "server/app.js"]



