# Nuxt Auth Example

> This is an example project using [nuxt-auth](https://github.com/sidebase/nuxt-auth), the Nuxt3 authentication package built on [NextAuth](https://github.com/nextauthjs/next-auth).

The deployed version can be found [here](https://nuxt-auth-example.sidebase.io).

![sidebase-preview-for-light](.github/preview.png)

## Setup

Make sure to install the dependencies:

```bash
# install dependencies
npm install

# run dev server
npm run dev

# build production
npm run build

# start production build
node .output/server/index.mjs 
```

## Environment variables

The test deployment is done via docker-compose with `nginx-certbot` image which automatically issues certificate for the domain. Please don't forget to create `.env` file in the project root, which will contain:

- `GITHUB_CLIENT_*`
  - `GITHUB_CLIENT_ID` - A [GitHub OAuth](https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app) Client Id
  - `GITHUB_CLIENT_SECRET` - A [GitHub OAuth](https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app) secret
- `NUXT_SECRET` - A random string used to generate authentication tokens
- `NUXT_URL` - The URL of your authentication api (should be https://example.com/api/auth/)
- `CERTBOT_*` - NuxtAuth requires a SSL certificate to run in production. We use Certbot to automatically generate these
  - `CERTBOT_DOMAIN` - The domain for which the Certbot should register a certificate
  - `CERTBOT_EMAIL` - The email under which the domain certificate will be registered

