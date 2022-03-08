import { Server } from "mock-socket";
import { getMockDevices } from "./MockDevices";

export function setupMockSocketServer() {
  const mockServer = new Server("ws://api.com/v1/refresh");

  mockServer.on("connection", (socket) => {
    socket.on("message", (message) => {
      console.log("Message from client: ", message);
    });
    socket.on("close", () => {console.log("Connection closed with: ", socket)});

    setInterval(() => {
      socket.send(JSON.stringify(getMockDevices()));
    }, 500);
  });
  // console.log(mockServer.clients()); // array of all connected clients
  // mockServer.emit('room', 'message');
  //mockServer.stop();
}
