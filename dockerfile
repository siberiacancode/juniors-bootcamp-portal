FROM node:24-slim AS base

LABEL org.opencontainers.image.source=https://github.com/siberiacancode/juniors-bootcamp-portal

WORKDIR /app

FROM base AS dependencies

COPY package.json yarn.lock* ./

RUN yarn install --frozen-lockfile

FROM base AS builder

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

ENV APP_DOMAIN=juniorsbootcamp.ru

COPY --from=dependencies /app/node_modules ./node_modules

COPY . .

RUN yarn build

FROM base AS runner

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

COPY --from=builder --chown=node:node /app/public ./public

RUN mkdir .next
RUN chown node:node .next

COPY --from=builder --chown=node:node /app/.next/standalone ./
COPY --from=builder --chown=node:node /app/.next/static ./.next/static

USER node

CMD ["node", "server.js"]
