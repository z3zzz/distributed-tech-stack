# builder name not supported in Elastic Beanstalk -> So use 0 phase (default name for phase)
FROM node:16-alpine 

WORKDIR /app
COPY package.json . 
RUN npm install
RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache
COPY . .

RUN npm run build

# dispose all files created in above 0 phase, except bundle.js file.
FROM node:16-alpine 

WORKDIR /app
COPY --from=0 /app/dist /app/dist
RUN npm install serve

CMD ["npm", "exec", "serve", "-s", "dist"]
