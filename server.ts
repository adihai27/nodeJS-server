var http = require('http');

const hostName = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    if (req.url == '/'){
        res.writeHead(200, {'content-type':'text/plain' }) ;
        res.write('This is home Page');
        res.end();
    }
    else if (req.url == "/student"){
        res.writeHead(200, { 'content-type':'text/plain' });
        res.write('This is Student Page');
        res.end();
    }
    else if (req.url == "/admin"){
        res.writeHead(200, { 'content-type':'text/plain' });
        res.write('This is Admin Page');
        res.end();
    }
    else res.end('Invalid Request!');
});

server.listen(port);
console.log('Noode.js web server at prt ${port} is running');
