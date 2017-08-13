FROM node:boron
# Create app directory
WORKDIR /src
# Install app dependencies
COPY package.json package-lock.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 3000
CMD [ "npm", "run", "start:prod" ]
