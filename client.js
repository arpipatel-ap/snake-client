const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    IP, // IP address here,
    PORT, // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

   // Event handler for incoming data
   conn.on("data", (data) => {
    console.log("Server says:", data);
  });

  conn.on("connect", (connect) => {
    console.log("Successfully connected to game server");
    conn.write("Name: XYZ");
    conn.write("Say: Hello"); 
   
  });

  return conn;
};

module.exports = connect;




// conn.write("Move: up");
    // conn.write("Move: up");
    // conn.write("Move: up");

    // setTimeout(() => {
    //   conn.write("Move: up");
    // }, 50);
    // setTimeout(() => {
    //   conn.write("Move: up");
    // }, 100);
    // setTimeout(() => {
    //   conn.write("Move: up");
    // }, 150);



    // setInterval(() => {
    //   conn.write("Move: up");
    // }, 50);
