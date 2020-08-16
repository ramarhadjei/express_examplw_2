const http = require('http')

const server = http.createServer()

server.on('request', (req, res) =>{
    console.log('this is the method', req.method);
    if (req.method === 'GET'){
        if(req.url === '/'){
            res.writehead(200);
            res.write('This is the main page');
            res.end();
        }else if( req.url === '/puppies'){
            res.writeHead(200);
            res.write('puppies page');
            res.end();
        }
    }
});
    
server.listen(3000, 'localhost');

console.log('listening on Port 3000');