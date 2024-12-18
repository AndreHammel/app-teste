# Build stage
FROM node:18-alpine AS builder

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Set working directory
WORKDIR /app

# Copy package.json and pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Build the application
RUN pnpm run build

# Production stage
FROM caddy:2-alpine

# Copy the built assets to Caddy's serving directory
COPY --from=builder /app/dist /usr/share/caddy

# Add your Caddyfile
COPY Caddyfile /etc/caddy/Caddyfile

EXPOSE 80
EXPOSE 443

