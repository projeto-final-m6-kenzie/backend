import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import Vehicle from "./vehicle.entity";

@Entity("vehicle_images")
class VehicleImage {
    @PrimaryGeneratedColumn("uuid")
    readonly id: string

    @Column()
    url: string

    @ManyToOne(() => Vehicle, (vehicle) => vehicle.images)
    vehicle: Vehicle

    @OneToOne(() => Vehicle, (vehicle) => vehicle.coverPhoto)
    announcement: Vehicle
}

export default VehicleImage
