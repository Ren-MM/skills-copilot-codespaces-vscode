// Create web server
// 1. Initialize express
// 2. Initialize the route
// 3. Listen to the port

// 1. Initialize express
const express = require('express');
const app = express();

// 2. Initialize the route
const comments = require('./routes/comments');
app.use('/comments', comments);

// 3. Listen to the port
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening to port ${port}`));