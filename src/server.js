import react from 'react'

const http = require('http'); 

const host='127.0.0.1'; 
const port='3000';

const server = http.createServer((req, res)=>{
    console.log(req.url); 
    url= req.url; 

    res.statusCode=200; 

    if(url=='/')
    res.end(app); 
    else if ( url=='/ReadNow')
    res.end(read); 
    else if (url == '/carrer')
    res.end(carrer); 
    else if (url == '/blog')
    res.end(blog); 
    else 
    {
          res.end('404 Not Found');
          res.statusCode=404; 
    }
       
})

server.listen(port, ()=>{
    console.log(`server running at https://localhost:${port}`)
})
