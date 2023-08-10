const express = require('express');
const app = express();

// Define a route that handles GET requests to the root URL
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server and listen on port 8080
app.listen(8080, () => {
  console.log('Server is listening on port 8080');
});
