# Use an official Node.js runtime as the base image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

COPY /client /client

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 3000 to the outside world

# Command to run the application
CMD ["npm", "start"]

EXPOSE 8000