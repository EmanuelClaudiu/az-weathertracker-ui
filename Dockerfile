FROM node:20-slim AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npx ng build

FROM nginx:alpine

COPY --from=builder /app/dist/az-weathertracker-ui/browser /usr/share/nginx/html
EXPOSE 80