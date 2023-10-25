import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number
    @Column({
        nullable: false
    })
    fname: string
    @Column({
        nullable: false
    })
    lname: string
    @Column({
        unique: true,
        nullable: false
    })
    email: string
    @Column({
        unique: true,
        nullable: false
    })
    phonenumber: number
    @Column()
    password: boolean
}