FROM node:18
WORKDIR /app
COPY package*.json ./
COPY tsconfig.json ./
RUN npm install
COPY . .
RUN npm install -g nodemon
EXPOSE 3000
CMD ["npm", "run", "dev"]