
import express from 'express';
import { SERVER_PORT } from '../global/environment';
import socketIO from 'socket.io';
import http from 'http';


export default class Server{

    public app: express.Application;
    public port: number;
    public io: socketIO.Server;
    private httpServer: http.Server;

    constructor(){
        this.app = express();
        this.port = SERVER_PORT;
        this.httpServer = new http.Server(this.app);
        this.io = (socketIO as any)(this.httpServer);
    }

    private listenSockets(){
        console.log('Listening to events')

        this.io.on('connection', client =>{
            console.log('New client connected')
        })
    }

    start(callback: Function){
        this.httpServer.listen(this.port, callback());
    }
}