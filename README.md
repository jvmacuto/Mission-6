# Mission 6

This project is a full-stack web application with a frontend built using React and Vite, and a backend built using Express and deployed as serverless functions on Netlify.


## Frontend

The frontend is built using React and Vite. It is located in the `frontend` directory.

### Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the project for production.
- `npm run preview`: Preview the production build.
- `npm run lint`: Lint the project files.

### Configuration

The Vite configuration is located in `frontend/vite.config.js`.

### Dependencies

- `react`: ^18.3.1
- `react-dom`: ^18.3.1
- `vite`: ^2.6.4
- `@vitejs/plugin-react`: ^1.0.0
- Additional dependencies are listed in `frontend/package.json`.

## Backend

The backend is built using Express and deployed as serverless functions on Netlify. It is located in the `backend/functions` directory.

### Example Function

**backend/functions/app.js**:
```javascript
const express = require('express');
const serverless = require('serverless-http');

const app = express();

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

module.exports.handler = serverless(app);


```

## Deployment
The project is deployed using Netlify. The deployment configuration is specified in the netlify.toml file.

# netlify.toml

[build]
  base = ""
  publish = "frontend/dist"
  command = "cd frontend && npm install && npm run build"

[functions]
  directory = "backend/functions"

[[redirects]]
  from = "/api/*"
  to = "/.netlify/functions/:splat"
  status = 200


