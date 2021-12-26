const http = require('http')

const server = http.createServer((req,res)=>{
    console.log(req);
    if(req.url==="/"){
        res.end("welcome to home page")
    }
    if(req.url==="/about"){
        res.end("some history of my page")
    }
    // res.write("hello everyone")
    res.end(`<h1>Oops</h1><a href="/">HOME</a>`)
})

server.listen(3000)