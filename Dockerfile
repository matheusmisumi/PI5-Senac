FROM node:alpine
#Dockerfile needs some refactor, the package.json does not exists on the workspace created by docker
RUN npm install

RUN npm install --global pm2@latest

EXPOSE 3000

RUN mkdir $HOME/PI5/
COPY package-lock.json $HOME/PI5/
VOLUME $HOME/PI5
COPY . $HOME/PI5
WORKDIR $HOME/PI5

CMD pm2 start app.js  -i 1 --no-daemon