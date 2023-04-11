import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn("uuid")
    uuid: string

    @Column()
    userName: string

    @Column()
    passwordHash: string

    @CreateDateColumn()
    dateAt: Date
}

