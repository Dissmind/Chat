import {Controller, Get} from "@nestjs/common";
import {MessageService} from "./message.service";
import {MessageListReadDto} from "./dto/message-list-read.dto";



@Controller('message')
export class MessageController {


    constructor(private readonly messageService: MessageService) {}



    @Get()
    async getMessage(): Promise<MessageListReadDto> {
        const messageList: MessageListReadDto = await this.messageService.getMessage()

        return messageList
    }
}
