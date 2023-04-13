import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Unique} from "typeorm";

@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn("uuid")
    uuid: string

    @Column({unique: true})
    userName: string

    @Column()
    passwordHash: string

    @CreateDateColumn()
    dateAt: Date
}

