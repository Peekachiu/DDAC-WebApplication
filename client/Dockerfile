# Use Node 20 (Required for newer Next.js versions)
FROM node:20-alpine

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the code
COPY . .

# 1. Declare the argument
ARG PUBLISHABLE_KEY
# 2. Set it as an environment variable so the build can see it
ENV PUBLISHABLE_KEY=$PUBLISHABLE_KEY

# Build the Next.js application
RUN npm run build

# Expose port 3000 (Default for Next.js)
EXPOSE 3000

# Start the application (Same as you do locally)
CMD ["npm", "start"]