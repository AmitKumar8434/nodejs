
const fs = require("fs");
const http = require("http");


const server = http.createServer();

server.on("request", (req, res) => {
    // fs.readFile("input.txt", (err, data) => {
    //     if (err) return console.log(err);
    //     return res.end(data);
    // });

    //2nd Way Handling Through Stream
    // const rstream = fs.createReadStream("input.txt");
    // rstream.on('data', (chunkData) => {
    //     res.write(chunkData);
    // });
    // rstream.on("end", () => {
    //     res.end();
    // });
    // rstream.on("error", (err) => {
    //     console.log("file not found");
    //     res.end("File Not Found");
    // })

    //3rd Way
    const rstream = fs.createReadStream("input.txt");
    rstream.pipe(res);
    
});

server.listen(8000, "127.0.0.1", () => {
    console.log("Listening to port 8000");
})

