import {Body, Controller, Get, Post} from "@nestjs/common";
import {MessageService} from "./message.service";
import {MessageListReadDto} from "./dto/message-list-read.dto";
import {MessageCreatDto} from "./dto/message-create.dto";



@Controller('message')
export class MessageController {


    constructor(private readonly messageService: MessageService) {}



    @Get()
    async getMessage(): Promise<MessageListReadDto> {
        const messageList: MessageListReadDto = await this.messageService.getMessage()

        return messageList
    }


    @Post()
    async addMessage(@Body() messageCreateDto: MessageCreatDto): Promise<void> {
        await this.messageService.addMessage(messageCreateDto)
    }
}
