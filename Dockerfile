FROM node:22-alpine

WORKDIR /app

# Copy package files first to leverage Docker layer caching
COPY package*.json ./

# Copy scripts folder so postinstall script can run during npm install
COPY scripts/ ./scripts/

# Install dependencies (forced for clean build)
RUN npm install

# Copy application files
COPY . .

# Set environment variables for dev server
ENV HOST=0.0.0.0
ENV PORT=3000
ENV NODE_ENV=development

EXPOSE 3000

# Run Nuxt dev server
CMD ["npm", "run", "dev"]
