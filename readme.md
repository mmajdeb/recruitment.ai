# Recruitment.ai

Recruitment.ai is a web platform that leverages Artificial Intelligence to streamline and enhance the recruitment process. This repository contains both the **API** (backend) and **Client** (frontend) applications. Follow the steps below to get started with setting up the entire project locally.

## Table of Contents

1. [Features](#features)
2. [Prerequisites](#prerequisites)
3. [Installation](#installation)
   - [Clone the Repository](#1-clone-the-repository)
   - [Setup API](#2-setup-api)
   - [Setup Client](#3-setup-client)
4. [Running the Application](#running-the-application)
5. [Development Notes](#development-notes)
6. [Contributing](#contributing)
7. [License](#license)

---

## Features

- AI-powered tools to optimize recruitment processes
- Integration with Google for authentication
- Modern frontend design using React and Material-UI
- RESTful API for seamless client-server communication

---

## Prerequisites

Before starting, ensure you have the following installed on your machine:

- **Node.js** (version 20 or above)
- **npm** (Node Package Manager)
- **Git**

---

## Installation

### 1. Clone the Repository

```sh
git clone https://github.com/MMajdeb/recruitment.ai.git
cd recruitment.ai
```

### 2. Setup API

1. Navigate to the API directory:

   ```sh
   cd api
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Create a `.env` file in the `api` directory and add the following environment variables:

   ```env
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   REDIRECT_URL=http://localhost:3000/auth/google/callback
   SESSION_SECRET=your-session-secret
   ```

4. Start the API server:

   ```sh
   npm start
   ```

   The API server will run at `http://localhost:3000`.

---

### 3. Setup Client

1. Navigate to the Client directory:

   ```sh
   cd ../client
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Create a `.env` file in the `client` directory and add the following environment variable:

   ```env
   VITE_API_URL=http://localhost:3000
   ```

4. Start the development server:

   ```sh
   npm run dev
   ```

   The client application will run at `http://localhost:5173`.

---

## Running the Application

1. Start the **API server** by following the [Setup API](#2-setup-api) instructions.
2. Start the **Client application** by following the [Setup Client](#3-setup-client) instructions.

Access the platform by visiting `http://localhost:5173` in your browser.

---

## Development Notes

- **React Version**: Ensure compatibility with the current React and React Router versions.
- **Material-UI**: The client uses Material-UI for the design system. For customization, refer to the [MUI documentation](https://mui.com/).
- **Environment Variables**: Use `.env` files to configure the environment for both the API and Client.

---

## Contributing

We welcome contributions! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes with clear messages.
4. Submit a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).

Feel free to use, modify, and distribute the code following the terms of the license.
