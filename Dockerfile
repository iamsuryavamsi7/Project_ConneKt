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

# Step 6: Install serve globally
RUN npm install -g serve

# Step 7: Expose the port for the server
EXPOSE 3000

# Step 8: Start serve with the current directory
CMD ["serve", "-s", "."]
