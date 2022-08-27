const express = require('express');
const app = express();
const port = 3000;

// Setting up the public directory
app.use('/public', express.static('content'));

app.listen(port, () => console.log(`listening on http://localhost:${port}`));

