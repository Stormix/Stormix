FROM node:16.17.1

ARG PORT=${PORT}

WORKDIR /usr/src/app

COPY package.json .

RUN yarn

ADD . /usr/src/app

RUN yarn build

CMD [ "yarn", "preview" ]

EXPOSE ${PORT}