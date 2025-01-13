require('dotenv').config();
const app = require('./app');
const connection = require('./src/db');




const port = 5000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

