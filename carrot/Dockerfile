FROM node:10.16.0

WORKDIR /usr/src/app
EXPOSE 8080

RUN npm rebuild node-sass
COPY package.json package.json
RUN npm install && \
    npm install --only=dev

COPY . .
CMD npm run build