# Nuxt User Example

Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.

## Test deployment

The test deployment is done via docker-compose with `nginx-certbot` image which automatically issues certificate for the domain. Please don't forget to create `.env` file in the project root, which will contain:

```
GITHUB_CLIENT_ID="your_github_client_id"
GITHUB_CLIENT_SECRET="your_github_client_secret"
CERTBOT_DOMAIN="your_certbot_domain"
CERTBOT_EMAIL="your_certbot_email"
```
