FROM node:12.15.0


RUN apt-get update
RUN apt-get install -y \ 
  git-flow \
  vim \
  bzip2 

ENV EDITOR=vim

EXPOSE 8080

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN npm install material-components-web


# RUN groupadd -g 1000 app
# RUN groupadd -g 999 docker
# RUN useradd -m -u 1000 -g 999 -s /bin/bash app

COPY . ./

USER node
