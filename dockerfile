# --- Estágio 1: Build (Construção) ---
# Usamos 'builder' como apelido para consistência.
FROM node:22.15.1-alpine AS builder

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .

# Executa o build usando o caminho completo para o Angular CLI.
RUN ./node_modules/.bin/ng build --configuration production

# --- Estágio de Produção ---
FROM nginx:alpine

# 1. Copia os arquivos da subpasta 'browser' para um diretório limpo e dedicado.
COPY --from=builder /app/dist/angular-frontend/browser /usr/share/nginx/app

# 2. Copia a nossa configuração customizada do Nginx.
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 3. Dá a posse e as permissões corretas para o Nginx ler os arquivos.
RUN chown -R nginx:nginx /usr/share/nginx/app && chmod -R 755 /usr/share/nginx/app

EXPOSE 80