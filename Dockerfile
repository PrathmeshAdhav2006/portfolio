# Stage 1: Build the optimized static files
FROM node:18-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to leverage Docker layer caching
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the React application (generates a /dist folder)
RUN npm run build

# Stage 2: Serve the application using 'serve'
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install 'serve' globally to serve static files
RUN npm install -g serve

# Copy the build output from the builder stage
COPY --from=builder /app/dist /app/dist

# Expose the default port for 'serve'
EXPOSE 3000

# Start the server on port 3000
CMD ["serve", "-s", "dist", "-l", "3000"]