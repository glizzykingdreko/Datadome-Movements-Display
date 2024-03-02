const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public')); // Serve static files from the "public" directory

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
