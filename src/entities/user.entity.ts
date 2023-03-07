import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { Exclude } from "class-transformer";
import Address from "./address.entity";
import Comment from "./comment.entity";
import Vehicle from "./vehicle.entity";

@Entity("users")
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

    @Column({unique: true})
    phone: string

    @Column({ type: "date", transformer: {
        from: (value: string) => value ? value.split("-").reverse().join("/"): null,
        to: (value: string) => value
    } })
    dateOfBirth: Date

    @Column({length: 2000})
    description: string

    @Column()
    isAnnouncer: boolean

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @OneToOne(() => Address, {
        eager: true,
        nullable: false
    })@JoinColumn()
    address: Address

    @OneToMany(() => Comment, (comment) => comment.user)
    comments: Comment[]

    @OneToMany(() => Vehicle, (vehicle) => vehicle.user)
    vehicles: Vehicle[]
}

export default User
