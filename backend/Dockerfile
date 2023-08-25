FROM node:latest as base

RUN mkdir -p /home/node/app
# RUN mkdir -p /home/node/app/node_modules
RUN chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY ./package.json ./

USER node

RUN npm install

COPY --chown=node:node ./src/ ./src/

FROM base as production

ENV NODE_PATH=./build

RUN npm i pg

RUN npm run build

EXPOSE 80

