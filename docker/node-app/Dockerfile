# Node base image with alpine linux
FROM node:20-alpine3.17

# Create app directory
WORKDIR /usr/app

# Install app dependencies
COPY ./package.json ./
RUN npm install
COPY ./ ./

# start app command
CMD ["npm", "start"]