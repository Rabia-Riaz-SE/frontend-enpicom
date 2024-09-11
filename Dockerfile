# Base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./

RUN npm install

# Copy app source code
COPY . .

RUN npm run build

# Expose the port for Vite (usually 5173 by default)
EXPOSE 5173

# Start the app in development mode using Vite
CMD ["npm", "run", "preview"]