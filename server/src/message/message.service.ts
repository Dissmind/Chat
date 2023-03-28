import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {MessageEntity} from "../database/entities/message.entity";
import {Repository} from "typeorm";
import {MessageListReadDto} from "./dto/message-list-read.dto";
import {MessageReadDto} from "./dto/message-read.dto";
import {MessageAddDto} from "./dto/message-add.dto";



Injectable()
export class MessageService {

    constructor(
        @InjectRepository(MessageEntity)
        private messageRepository: Repository<MessageEntity>
    ) {}



    async addMessage(messageAddDto: MessageAddDto): Promise<void> {
        const message = new MessageEntity()
        message.content =  messageAddDto.text

        await this.messageRepository.save(this.messageRepository.create(message))
    }


    async getMessage(): Promise<MessageListReadDto> {
        const messageList: Array<MessageEntity> = await this.messageRepository.find({
            order: {
                dateAt: "ASC"
            }
        })

        const response: MessageListReadDto = new MessageListReadDto()
        response.list = messageList.map(i => {
            const dto = new MessageReadDto()

            dto.uuid = i.uuid
            dto.text = i.content
            dto.dateAt = i.dateAt.toISOString()

            return dto
        })

        return response
    }
}