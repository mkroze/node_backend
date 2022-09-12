const http = require('http')
const fs = require('fs')
const port=3000;

const server= http.createServer(function(req,res){
    res.writeHead(200, { 'Content-Type' : 'text/html'})
    res.write('<h1>Hello Node!!!!</h1>\n')
    res.end()
})

server.listen(port, function(error){
    if(error){
        console.log('something went wrong', error)
    }
    else{
        console.log('server is listening on port ', port)
    }
})

fs.readFile('welcome.txt',function(error,data){
    if(error){
        res.writeHead(404)
        console.log('Error : File not found')
    }
    else {
        console.log(data.toString('utf8'))
    }
})