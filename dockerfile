FROM node:14
USER root
WORKDIR /usr/src/app/
COPY package*.json /usr/src/app/
RUN npm install
# If you are building your code for production
# RUN npm ci --only=production
COPY . /usr/src/app/
EXPOSE 3050
CMD [ "npm" , "start" ]
