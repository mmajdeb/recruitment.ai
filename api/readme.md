# Recruitment.ai API

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js (version 20 or above)
- npm (Node Package Manager)
- Git

### Installation

1. **Clone the repository**

   ```sh
   git clone https://github.com/MMajdeb/recruitment.ai.git
   cd recruitment.ai/api
   ```

2. **Install dependencies**

   ```sh
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root of the project and add the following environment variables:

   ```sh
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   REDIRECT_URL=your-redirect-url e.g `http://localhost:3000/auth/google/callback`
   SESSION_SECRET=your-session-secret
   ```

### Running the Application

Start the development server:

```sh
npm start
```
