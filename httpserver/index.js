//The http.createServer() method includes request
// ans response parameters which is supplied by Node.js.

//The request object can be to get information about the current HTTP request
// e.g. , url,request header, and data

//The response object can be used to send a response for a current HTTP request 

//if the response from the http server is supposed to be displayed as HTML,
//youy should include an HTTP header with the correct content type:

const http = require('http');
const fs = require('fs');

const data = fs.readFileSync(`${__dirname}/UserApi/userapi.json`, "utf-8");
const objData = JSON.parse(data);


const server = http.createServer((req, res) => {
    // console.log(req.url);
    if (req.url == "/") {
        res.end('This is Home side');
    }
    else if (req.url == '/about') {
        res.end('This is AboutUS Side');
    }
    else if (req.url == '/contact') {
        res.end('This is contactUS Side');
    }
    else if (req.url == "/userapi") {
        // fs.readFile(`${__dirname}/UserApi/userapi.json`, "utf-8", (err, data) => {
            // console.log(data);
                // const objData = JSON.parse(data);
                // console.log(objData);
        res.writeHead(200, { "content-type": "application/json" });
                res.end(objData.toString());
            // });
    }
    else {
        res.writeHead(404,{"content-type":"text/html"});
            res.end('<h1>404 Error Page. Page doesnot exist</h1>');
        }
});

server.listen(8000, "127.0.0.1", () => {
    console.log(' listening to port 8000 ');
});
