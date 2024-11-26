FROM node:23.1 AS builder
WORKDIR /app
COPY . .
RUN npm install && npm run build


FROM nginx:1.27
COPY --from=builder /app/dist /usr/share/nginx/html
COPY web_server/nginx.conf /etc/nginx/conf.d/default.conf
