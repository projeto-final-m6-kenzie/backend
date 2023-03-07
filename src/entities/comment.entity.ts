import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import User from "./user.entity"
import Vehicle from "./vehicle.entity"

@Entity("comments")
class Comment {
    @PrimaryGeneratedColumn("uuid")
    readonly id: string

    @Column({length: 2000})
    text: string

    @CreateDateColumn()
    createdAt: Date
    
    @UpdateDateColumn()
    updatedAt: Date
    
    @ManyToOne(() => User, (user) => user.comments, {eager: true})
    user: User

    @ManyToOne(() => Vehicle, (vehicle) => vehicle.comments)
    vehicle: Vehicle
}

export default Comment
