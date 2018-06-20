const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '/dist')));

app.listen(process.env.PORT || 8080);

// TODO: add jwt validation from the query string - pased like ?token=xxx..
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

console.log("Express server running");
