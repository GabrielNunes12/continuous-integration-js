FROM node:20

WORKDIR /app

COPY . .

RUN npm install

ENTRYPOINT ["node", "hello_world.js"]

CMD ["Hello World!"]