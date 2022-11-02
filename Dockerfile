# see https://docs.docker.com/engine/reference/builder/#understand-how-arg-and-from-interact
ARG NODE_VERSION=node:16.14.2

FROM $NODE_VERSION AS dependency-base

# create destination directory
RUN mkdir -p /app
WORKDIR /app

# copy the app, note .dockerignore
COPY package.json .
COPY package-lock.json .
RUN npm ci

FROM dependency-base AS production-base

# build will also take care of building
# if necessary
COPY . .
RUN npm run build

FROM $NODE_VERSION-slim AS production

COPY --from=production-base /app/.output /app/.output

# Service hostname
ENV NUXT_HOST=0.0.0.0

# Service version
ARG NUXT_APP_VERSION
ENV NUXT_APP_VERSION=${NUXT_APP_VERSION}

# bake env variables
ARG CLIENT_ID
ENV CLIENT_ID=${CLIENT_ID}
ARG CLIENT_SECRET
ENV CLIENT_SECRET=${CLIENT_SECRET}

# Run in production mode
ENV NODE_ENV=production

# start the app
CMD [ "node", "/app/.output/server/index.mjs" ]
