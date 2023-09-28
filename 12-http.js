const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('Welcome to page');
    }
    if(req.url === '/about') {
        res.end('This page about short info');
    }
    res.end(`
        <h1>Oops</h1>
        <a href="/">return to back</a>
    `)
});

server.listen(5000)