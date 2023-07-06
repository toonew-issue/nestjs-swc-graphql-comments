FROM node:18.16.0

WORKDIR /app

COPY package*.json pnpm-lock.yaml ./

RUN npm install --ignore-scripts -g pnpm@^8 && \
    npm cache clean --force

RUN pnpm i  --no-optional --ignore-scripts

COPY . .

RUN pnpm run build

RUN ["node","dist/main.js"]
