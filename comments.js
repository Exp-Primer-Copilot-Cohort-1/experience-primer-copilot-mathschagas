// Create web server
// 1. Import express
const express = require('express');
// 2. Create an app
const app = express();
// 3. Create a port
const port = 3000;

// 4. Create a route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// 5. Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

// 6. Create a new route
app.get('/comments', (req, res) => {
  res.send('Comments Page');
});

// 7. Create a new route
app.get('/comments/:commentId', (req, res) => {
  res.send(`Comment ID: ${req.params.commentId}`);
});