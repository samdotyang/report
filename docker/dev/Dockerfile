FROM node:16-alpine

WORKDIR /app

COPY package.json yarn.lock ./
COPY prisma ./prisma
RUN yarn prisma generate
RUN yarn install

COPY next.config.js ./next.config.js
COPY tsconfig.json ./tsconfig.json


CMD ["yarn", "dev"]