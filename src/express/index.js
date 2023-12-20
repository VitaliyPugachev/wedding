const express = require('express')
const fs = require('fs');
const path = require('path');
const app = express()
const port = 3000

app.use(express.static('data'));

app.get('/', (req, res) => {
    const result = fs.readFileSync(path.resolve(__dirname, 'data', 'data.json'), {encoding: 'utf-8'});
    const data = JSON.parse(result);
    res.send(data.data.users[0].id);
    // res.sendFile(path.resolve(__dirname, 'data', 'data.json'));
})

app.listen(port, () => {
  console.log(`Server started on ${port}`)
})