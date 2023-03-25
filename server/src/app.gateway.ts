import {
    MessageBody, OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
    WsResponse,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';




interface Message {
    text: string
}


@WebSocketGateway({
    cors: {
        origin: '*',
    },
})
export class AppGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer()
    server: Server;


    afterInit(server: any): any {
    }


    handleConnection(client: any, ...args: any[]): any {
    }


    handleDisconnect(client: any): any {
    }

    @SubscribeMessage('events')
    findAll(@MessageBody() data: any): Observable<WsResponse<number>> {
        return from([1, 2, 3])
            .pipe(map(item => ({
                event: 'events',
                data: item
            })));
    }


    @SubscribeMessage('identity')
    async identity(@MessageBody() data: number): Promise<number> {
        return data;
    }


    @SubscribeMessage('sendMessage')
    async handleSendMessage(client: Socket, payload: Message): Promise<void> {
        await this.server.emit('recordMessage', payload)

        console.log(`Send Message`)
        console.log(payload)
    }


}



















