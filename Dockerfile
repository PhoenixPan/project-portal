# stage: 1
FROM node:10.15.3 as build-stage
RUN mkdir -p /node-app
WORKDIR /node-app
COPY . /node-app
RUN yarn install
RUN yarn build


# stage: 2
FROM nginx:1.15
COPY --from=build-stage /node-app/build /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]