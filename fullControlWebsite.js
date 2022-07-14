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
    else if(req.url=='/muneeb'){
        res.statusCode = 200;
        res.end('<h1>I am Muneeb Khan!</h1> <p>I am Software Engineer.</p>')
    }
    else if(req.url=='/about-us'){
        res.statusCode = 200;
        res.end('<h1>About us</h1> <p>I am Software Engineer with many years of experience. I am learing Mern Stack.</p>')
    }
    else if(req.url=='/contact-us'){
        res.statusCode = 200;
        res.end('<h1>Contact us:</h1> <p>000-3054312</p>')
    }
    else{
        res.statusCode = 404;
        res.end('<h1>Not Found!</h1> <p>Bande da putar ban!</p>')
    }
});

server.listen(port, ()=>{
    console.log(`Server is listening at Port: ${port}`);
});