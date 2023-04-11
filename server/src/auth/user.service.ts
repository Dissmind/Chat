import {Injectable} from "@nestjs/common";

export type User = any


@Injectable()
export class UserService {
    private readonly users = [
        {
            id: 1,
            login: 'john',
            password: 'qwe123'
        },
        {
            id: 2,
            login: 'User1',
            password: '123123'
        },
        {
            id: 3,
            login: 'Dissmind',
            password: '123123'
        }
    ]


    async findOne(login: string): Promise<User | undefined> {
        return this.users.find(user => user.login === login)
    }
}