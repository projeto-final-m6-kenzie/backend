import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn, JoinColumn } from "typeorm"
import Comment from "./comment.entity"
import User from "./user.entity"
import VehicleImage from "./vehicle_image.entity"

export enum VehicleType {
    CAR = "Car",
    MOTORBIKE = "Motorbike"
}

export enum AnnouncementType {
    AUCTION = "Auction",
    SALE = "Sale"
}

@Entity("vehicles")
class Vehicle {
    @PrimaryGeneratedColumn("uuid")
    readonly id: string

    @Column({length: 140})
    title: string

    @Column({
        type: "enum",
        enum: VehicleType,
    })
    vehicleType: VehicleType

    @Column()
    year: string

    @Column({
        type: "float8",
        scale: 2
    })
    km: number

    @Column({length: 2000})
    description: string

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

    @Column({
        default: true,
        nullable: true
    })
    published: boolean

    @OneToOne(() => VehicleImage, {eager: true})
    @JoinColumn()
    coverPhoto: VehicleImage;

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
