# ARG PUBLIC_PATH='/dolphinscheduler-ui/'
FROM node:20-slim as node-runtime

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN corepack enable

FROM node-runtime as app-builder

WORKDIR /app/

COPY ./package.json ./pnpm-lock.yaml index.html .*ignore .*.js  tsconfig.json vite.config.ts /app/
COPY ./public  /app/public
COPY ./src  /app/src

RUN npm install -g increase-memory-limit

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm build:prod

FROM swr.me-east-212.managedcognitivecloud.com/aramus-llm/dolphinscheduler-api:3.1.7 as server

RUN rm -rf /opt/dolphinscheduler/ui/*
COPY --from=app-builder /app/dist /opt/dolphinscheduler/ui