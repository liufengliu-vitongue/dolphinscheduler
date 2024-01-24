ARG PUBLIC_PATH='/dolphinscheduler-ui/'
FROM node:20-slim as node-runtime

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN corepack enable

WORKDIR /app/

COPY ./package.json ./pnpm-lock.yaml index.html .*ignore .*.js ./public ./src tsconfig.json vite.config.ts /app/
