import Server from "./classes/server";
import { SERVER_PORT } from "./global/environment";







const server = new Server();


server.start(() => {
    console.log(`server on port ${SERVER_PORT}`);
});