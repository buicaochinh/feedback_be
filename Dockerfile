FROM node:15.12.0-alpine3.10

WORKDIR /app

COPY . .

RUN npm install

CMD ["npm", "run", "dev"]
