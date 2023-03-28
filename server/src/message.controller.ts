import {Controller, Get} from "@nestjs/common";
import {MessageListReadDto, MessageService} from "./message.service";



@Controller('message')
export class MessageController {


    constructor(private readonly messageService: MessageService) {}



    @Get()
    async getMessage(): Promise<MessageListReadDto> {
        const messageList: MessageListReadDto = await this.messageService.getMessage()

        return messageList
    }
}
