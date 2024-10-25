FROM node:20-alpine AS base

WORKDIR /app

COPY package*.json ./

RUN npm install --frozen-lockfile

RUN npm i -g serve

COPY . .

EXPOSE 3000

RUN npm run build

CMD [ "serve", "-s", "dist" ]