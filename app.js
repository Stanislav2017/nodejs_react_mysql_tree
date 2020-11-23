const express = require('express');
const config = require('config');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = config.get('port') || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/node', require('./routes/node.routes'));
app.post('/api/auth/login', (req, res, next) => {
    const token = jwt.sign({ userId: 1000 }, config.get('token_secret'), { expiresIn: '8h'});
    return res.json({ token, userId: 1000 });
});

const server = require('http').createServer(app);

server.listen(PORT, () => console.log(`App has been started on PORT: ${PORT}`));