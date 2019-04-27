# stage: 1
FROM node:10.15.3
RUN mkdir -p /node-app
WORKDIR /node-app
COPY . /node-app
RUN yarn install
RUN yarn start
EXPOSE 80
