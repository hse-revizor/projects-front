FROM node:22-alpine AS builder
WORKDIR /usr/src/app

COPY . .
RUN rm -rf node_modules/
RUN rm package-lock.json

RUN npm install
RUN npm run build

FROM node:22-alpine
WORKDIR /usr/src/app

ENV NODE_ENV=production

COPY --from=builder /usr/src/app/node_modules node_modules
COPY --from=builder /usr/src/app/production production

EXPOSE 3000

CMD ["node", "./production/proxy.cjs"]