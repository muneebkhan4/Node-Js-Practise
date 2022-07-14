const http = require('http')
const fs = require('fs')
const port = process.env.PORT || 3000;

const server = http.createServer((req, res)=>{
    res.setHeader('Content-Type', 'text/html');
    if(req.url=='/'){
        res.statusCode = 200;
        let x = fs.readFileSync('hello.html');
        res.end(x.toString());
    }
    else{
        res.statusCode = 404;
        res.end('<h1>Not Found!</h1> <p>Bande da putar ban!</p>')
    }
});

server.listen(port, ()=>{
    console.log(`Server is listening at Port: ${port}`);
});