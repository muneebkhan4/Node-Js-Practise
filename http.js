const http = require('http')

const port = process.env.PORT || 3000;

const server = http.createServer((req, res)=>{
    console.log(req);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>I am Muneeb</h1> <p>I am Software Engineer.</p>')
});

server.listen(port, ()=>{
    console.log(`Server is listening at Port: ${port}`);
});