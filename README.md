# Enpicom Frontend

This repository contains the frontend service for the Enpicom project, built with React and Vite, and containerized using Docker.

## Table of Contents

- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites for Running the Application in Docker](#prerequisites-for-running-application-in-docker)
  - [Prerequisites for Running the Application on Local System](#prerequisites-for-running-application-on-local-system)
  - [Setting Up the Environment](#setting-up-the-environment)
- [Running the Application](#running-the-application)
- [Testing](#testing)

### Project Structure

- **`Dockerfile`**: Defines the Docker image for the frontend application.
- **`docker-compose.yml`**: Sets up multiple services (frontend, backend, PostgreSQL, and PgAdmin), useful for development and testing environments.
- **`src/`**:
  - **`components/`**: Contains reusable React components such as `TextInput.tsx` and `Button.tsx`.
  - **`pages/`**: Contains page-level components such as `AddDNA.tsx` and `SearchDNA.tsx`.
  - **`assets/`**: Includes static assets like images and icons used across the application.
  - **`styles/`**: Contains global and component-specific CSS modules.
  - **`App.tsx`**: The main application component that consolidates routing and layout.
  - **`main.tsx`**: Entry point for the React application.
- **`vite.config.ts`**: Configuration for the Vite build tool.
- **`tsconfig.json`**: TypeScript configuration for the project.
- **`package.json`**: Lists project dependencies and npm scripts.

## Getting Started

### Prerequisites for Running the Application in Docker

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

### Prerequisites for Running the Application on Local System

- [Node.js](http://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Setting Up the Environment

1. **Clone the Repository and Install Dependencies**:

   ```bash
   git clone https://github.com/Rabia-Riaz-SE/enpicom-frontend.git
   cd enpicom-frontend
  
2. **Configuration:**

      Create a .env file in the root of the project with the following sample data environment variables:

      ```bash

      VITE_BACKEND_API_BASEURL=http://localhost:3000
      VITE_BACKEND_API_DNA_ROUTE=dna
      VITE_PORT=5173

      ```
3. **Running the Application:**

      #### Using Docker

      1. Build and start in detached mode the Docker containers:
          ```bash

          docker-compose up --build -d  

          ```
      2. Access the application at [http://localhost:5173](http://localhost:5173)

    #### Without Docker

      1. Start the application locally:
          ```bash

          npm install
          npm run start:dev

          ```
      2. Access the application at [http://localhost:5173](http://localhost:5173)

## Compile and run the project

```bash
# development
$ npm run dev

# production mode
$ npm run preview
```

<!-- ## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
``` -->
