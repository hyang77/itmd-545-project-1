var socket = io.connect("/");

socket.on("message", function (data) {
  console.log("Message received: " + data);
});
