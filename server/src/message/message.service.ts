import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {MessageEntity} from "../database/entities/message.entity";
import {Repository} from "typeorm";
import {MessageListReadDto} from "./dto/message-list-read.dto";
import {MessageReadDto} from "./dto/message-read.dto";
import {MessageCreatDto} from "./dto/message-create.dto";


Injectable()
export class MessageService {

    constructor(
        @InjectRepository(MessageEntity)
        private messageRepository: Repository<MessageEntity>
    ) {}



    async addMessage(messageAddDto: MessageCreatDto): Promise<MessageEntity> {
        const message = new MessageEntity()
        message.content = messageAddDto.content

        const createdMessage = await this.messageRepository.save(message)

        return createdMessage
    }


    async getMessage(take=30, skip=0): Promise<MessageListReadDto> {
        const messageList: Array<MessageEntity> = await this.messageRepository.find({
            order: {
                dateAt: "ASC"
            },
            take,
            skip
        })

        const response: MessageListReadDto = new MessageListReadDto()
        response.list = messageList.map(i => {
            const dto = new MessageReadDto()

            dto.uuid = i.uuid
            dto.content = i.content
            dto.dateAt = i.dateAt.toISOString()

            return dto
        })

        return response
    }
}