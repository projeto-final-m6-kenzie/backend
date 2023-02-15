import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Vehicle from "./vehicle.entity";

@Entity("vehicle_images")
class VehicleImage {
    @PrimaryGeneratedColumn("uuid")
    readonly id: string

    @Column()
    url: string

    @Column({default: false})
    isMainImg: boolean

    @ManyToOne(() => Vehicle, (vehicle) => vehicle.images)
    vehicle: Vehicle
}

export default VehicleImage
