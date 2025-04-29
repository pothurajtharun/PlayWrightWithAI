# Use official Playwright base image
FROM mcr.microsoft.com/playwright:v1.52.0-jammy

# Set working directory inside container
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# Install only Chromium browser with Playwright dependencies
RUN npx playwright install --with-deps chromium

# Copy the rest of the project files
COPY . .

# Run tests by default (can be overridden)
CMD ["npx", "playwright", "test"]