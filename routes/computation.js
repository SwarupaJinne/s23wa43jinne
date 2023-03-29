const express = require('express');
var router = express.Router();
const app = express();
const port = 3000;

app.get('/computation', (req, res) => {
  // Get the value of x from the query parameter (if available)
  const x = req.query.x || Math.random();

  // Select a random function from the list
  const fns = [Math.atan2, Math.atanh, Math.cbrt];
  const fn = fns[Math.floor(Math.random() * fns.length)];

  // Apply the function to x
  const y = fn(x);

  // Build the response string
  const response = `${fn.name} applied to ${x} is ${y}`;

  // Send the response
  res.send(response);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
module.exports = router;
