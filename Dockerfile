# Stage 1: Build the application
FROM node:18-alpine AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the app for production
RUN npm run build

# Stage 2: Serve the built application with HTTPS
FROM node:18-alpine

# Install 'serve' package globally
RUN npm install -g serve

# Set the working directory
WORKDIR /app

# Copy the built app from the previous stage
COPY --from=build /app/dist ./dist

# Copy SSL certificates from Certbot
COPY /etc/letsencrypt/live/connekt.in/fullchain.pem /etc/ssl/certs/fullchain.pem
COPY /etc/letsencrypt/live/connekt.in/privkey.pem /etc/ssl/private/privkey.pem

# Expose port 443 for HTTPS
EXPOSE 443

# Command to serve the app with HTTPS
CMD ["serve", "-s", "dist", "-l", "443", "--ssl-cert", "/etc/ssl/certs/fullchain.pem", "--ssl-key", "/etc/ssl/private/privkey.pem"]


# # Stage 1: Build the application
# FROM node:18-alpine AS build

# # Set the working directory
# WORKDIR /app

# # Copy package.json and package-lock.json
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy the rest of the application code
# COPY . .

# # Build the app for production
# RUN npm run build

# # Stage 2: Serve the built application
# FROM node:18-alpine

# # Install the 'serve' package to serve the production build
# RUN npm install -g serve

# # Set the working directory
# WORKDIR /app

# # Copy the built app from the previous stage
# COPY --from=build /app/dist ./dist

# # Expose the port on which the app will run
# EXPOSE 3000

# # Command to serve the app with SPA routing
# CMD ["serve", "-s", "dist", "-l", "3000", "--single"]

