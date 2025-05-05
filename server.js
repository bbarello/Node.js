var express = require("express");
const { listen } = require("socket.io");
var app = express();
var server = require("http").createSever(app);
var io = require("socket.io")(server);
users = [];
connection = [];
server.listen(3000);
app.get("/", function (req, resp){
    //rout for localhost: 3000
    resp.sendFile(__dirname + "/index.html");
})
io.socket.on("connection", function (socket){
//when client connection to server
connections.push(socket); // add plug details to custom array
console.log("connected : % socket connected", connections.length); // current location
socket.on("disconnect", function (data){
    // client disc. from server
    connections.splice(connection.indexOf(socket), 1); // delete plug details
    console.log("Disconnected: %s socket connected", connections.length); //current connection
});
socket.on("send message", function (data) {
    console.log(data);
    io.socket.emit("new message", { msg: data });
    });
});

console.log("server is listening");
