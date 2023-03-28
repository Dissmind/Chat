import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class MessageEntity {
    @PrimaryGeneratedColumn("uuid")
    uuid: string

    @Column()
    content: string

    @CreateDateColumn()
    dateAt: Date
}

