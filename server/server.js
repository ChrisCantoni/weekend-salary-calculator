// Establish server for Salary Calculator project
const express = require('express');
const app = express();
const PORT = 5001;

app.use(express.static('./server/public'));

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
})