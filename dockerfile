FROM node:22-alpine AS base
LABEL org.opencontainers.image.source https://github.com/siberiacancode/junior-bootcamp-portal

FROM base AS builder

WORKDIR /app
COPY package*.json yarn.lock ./
RUN yarn --production --frozen-lockfile && \
    yarn add typescript

COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
RUN yarn build

FROM base AS runner

ENV NEXT_TELEMETRY_DISABLED=1

WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/src/markdown/shiki.ts ./src/markdown/shiki.ts
COPY --from=builder /app/next.config.ts ./next.config.ts

CMD [ "yarn", "start" ]
