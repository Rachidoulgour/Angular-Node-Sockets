import Server from "./classes/server";
import { SERVER_PORT } from "./global/environment";
import router from "./routes/router";
import cors from 'cors';






const server = new Server();

server.app.use(cors())

server.app.use('/', router)



server.start(() => {
    console.log(`server on port ${SERVER_PORT}`);
});