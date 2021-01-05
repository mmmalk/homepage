# build stage
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
RUN ls -la

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY nginx.crt /etc/ssl/
COPY nginx.key /etc/ssl/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]