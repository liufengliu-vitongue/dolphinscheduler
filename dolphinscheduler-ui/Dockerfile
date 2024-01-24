ARG PUBLIC_PATH='/dolphinscheduler-ui/'
FROM node:20-slim as node-runtime

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN corepack enable

FROM node-runtime as app-builder

WORKDIR /app/

COPY ./package.json ./pnpm-lock.yaml index.html .*ignore .*.js ./public/ ./src/ tsconfig.json vite.config.ts /app/

ARG PUBLIC_PATH
ENV PUBLIC_PATH=$PUBLIC_PATH
RUN echo "\VITE_APP_PROD_WEB_URL=${PUBLIC_PATH}" >> .env.production

RUN npm install -g increase-memory-limit

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm build:prod

FROM nginx:alpine as server

COPY --from=app-builder /app/dist /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

