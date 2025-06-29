# Build
FROM node:22.15.1-alpine AS builder

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .

RUN ./node_modules/.bin/ng build --configuration production

# Prod 
FROM nginx:alpine

# 1. Copia os arquivos da subpasta 'browser' para um diretório.
COPY --from=builder /app/dist/angular-frontend/browser /usr/share/nginx/app

# 2. Copia a configuração customizada do Nginx.
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 3. Dá as permissões corretas para o Nginx ler os arquivos.
RUN chown -R nginx:nginx /usr/share/nginx/app && chmod -R 755 /usr/share/nginx/app

EXPOSE 80