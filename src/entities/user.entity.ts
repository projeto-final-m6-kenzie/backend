import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { Exclude } from "class-transformer";

@Entity("user")
class User {
    @PrimaryColumn("uuid")
    readonly id: string

    @Column({length: 70})
    name: string

    @Column({
        length: 70,
        unique: true
    })
    email: string

    @Exclude()
    @Column()
    password: string

    @Column()
    phone: string

    @Column()
    isAnnouncer: boolean

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}

export default User
