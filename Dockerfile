FROM node:13.12.0-alpine

RUN npm install -g serve

COPY build .

ENTRYPOINT ["serve", "-s", "."]
