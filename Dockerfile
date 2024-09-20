# Step 1: Use the official node image as the base image
FROM node:18-alpine

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json (if available)
COPY package*.json ./

# Step 4: Install the dependencies
RUN npm install

# Step 5: Copy the rest of your application code to the working directory
COPY . .

# Step 6: Build the app for production
RUN npm run build

# Step 7: Use an nginx image to serve the build folder
FROM nginx:alpine

# Step 8: Copy the built files from the previous image to nginx's default folder
COPY --from=0 /app/dist /usr/share/nginx/html

# Step 9: Expose the port nginx will run on
EXPOSE 80

# Step 10: Start nginx
CMD ["nginx", "-g", "daemon off;"]
