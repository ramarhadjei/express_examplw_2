const http = require('http')

const server = http.createServer()

server.on('request', (req, res) =>{
    console.log('hello');
    res.writeHead(200);
    res.write('Hello');
    res.end();
});

server.listen(3000, 'localhost');

console.log('listening on Port 3000');