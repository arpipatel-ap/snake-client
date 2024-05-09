let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  if (key === "w" ){
    connection.write("Move: up");
  }
  if (key === "a"){
    connection.write("Move: left");
  } 
  if (key === "s"){
    connection.write("Move: down");
  }
  if (key === "d"){
    connection.write("Move: right");
  }
  if (key === '1') {
    conn.write("Say: Hello, everyone!");
  } 
  if (key === '2') {
    conn.write("Say: Let's have fun!");
  } 
  if (key === '3') {
    conn.write("Say: Snake party!");
  }
  if (key === '4') {
    conn.write("Say: Enjoy the game!");
  }

  if (key === '\u0003') {
    process.exit();
  } 
};
setupInput();

module.exports = setupInput;
