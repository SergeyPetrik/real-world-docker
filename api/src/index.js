const express = require('express');
const port = require('./configuration');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/', (req, res) => {
	res.send('API server running');
});

app.get('/user', (req, res) => {
    const user = { name: "Sergey", age: 34 };
    res.json({
        response: true,
        user
    });
});

app.listen(port, () => {
    console.log(`Listening on ${port} port`);
});
