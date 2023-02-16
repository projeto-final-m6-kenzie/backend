import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryColumn, UpdateDateColumn } from "typeorm"
import Comment from "./comment.entity"
import User from "./user.entity"
import VehicleImage from "./vehicle_image.entity"

export enum VeiculeType {
    CAR = "Car",
    MOTORBIKE = "Motorbike"
}

export enum AnnouncementType {
    AUCTION = "Auction",
    SALE = "Sale"
}

@Entity("veicules")
class Vehicle {
    @PrimaryColumn("uuid")
    readonly id: string

    @Column({length: 30})
    brand: string

    @Column({
        length: 30
    })
    model: string

    @Column({
        type: "enum",
        enum: VeiculeType,
    })
    veicule_type: VeiculeType

    @Column()
    year: string

    @Column({
        type: "float8",
        scale: 2
    })
    km: number

    @Column({
        type: "enum",
        enum: AnnouncementType,
        default: AnnouncementType.SALE,
        nullable: true
    })
    announcementType: AnnouncementType

    @Column({
        type: "float8",
        scale: 2
    })
    price: number    

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @ManyToOne(() => User, (user) => user.vehicles, {eager: true})
    user: User

    @OneToMany(() => Comment, (comment) => comment.vehicle)
    comments: Comment[]

    @OneToMany(() => VehicleImage, (VehicleImage) => VehicleImage.vehicle)
    images: VehicleImage[]
}

export default Vehicle