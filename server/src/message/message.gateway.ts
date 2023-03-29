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
import {MessageService} from "./message.service";
import {MessageCreatDto} from "./dto/message-create.dto";



@WebSocketGateway({
    cors: {
        origin: '*',
    },
})
export class MessageGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {

    constructor(
        private messageService: MessageService
    ) {}


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
    async handleSendMessage(client: Socket, payload: MessageCreatDto): Promise<void> {

        const message = new MessageCreatDto()
        message.content = payload.content

        this.messageService.addMessage(message)

        await this.server.emit('recordMessage', payload)
    }
}



















