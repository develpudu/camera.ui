FROM node:17-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm audit fix || :
WORKDIR /app/ui
RUN npm install
WORKDIR /app
RUN export NODE_OPTIONS=--openssl-legacy-provider && npm run build
EXPOSE 8081/tcp
CMD [ "node", "bin/camera.ui.js", "--no-sudo", "--no-global", "-S", "/data" ]
