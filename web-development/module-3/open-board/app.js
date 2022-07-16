let express = require("express");                   // Access   
let socket = require("socket.io");

const app = express();                              // Initialize & server ready 

app.use(express.static("public"));

let port = 5000;
let server = app.listen(port, () => {
    console.log("Listening to port " + port);
});

let io = socket(server);

io.on("connection", (socket) => {
    console.log("Made socket connection");

    // Received data
    socket.on("beginPath", (data) => {
        // data -> data from frontend
        // now transfer data to all connected computers
        io.sockets.emit("beginPath", data);
    })

    socket.on("drawStroke", (data) => {
        io.sockets.emit("drawStroke", data);
    })

    socket.on("redoUndo", (data) => {
        io.sockets.emit("redoUndo", data);
    })
})

/* 
    step 1:
        - npm init
        - enter .. 
    step 2: 
        - express npm
    step 3:
        - socket io npm
    step 4:
        -
    step 5:
        - nodemon npm
*/