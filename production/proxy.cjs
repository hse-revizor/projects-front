const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');

// Load environment variables
const PROJECTS_SERVICE_URL = process.env.PROJECTS_SERVICE_URL;

if (!PROJECTS_SERVICE_URL) {
  console.error('Please set the PROJECTS_SERVICE_URL environment variable.');
  process.exit(1);
}

const app = express();

// Serve static files from the "build" folder
app.use(express.static(path.join(__dirname, 'build')));

// Proxy requests to the rules service
app.use(
  '/projects-api',
  createProxyMiddleware({
    target: PROJECTS_SERVICE_URL,
    changeOrigin: true,
    pathRewrite: { '^/projects-api': '' }, // Remove the "/rules-api" prefix
  })
);

// Handle all other routes by serving the front-end app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


