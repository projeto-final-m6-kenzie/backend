import Comment from "../../entities/comment.entity";
import User from "../../entities/user.entity";
import { AnnouncementType, VeiculeType } from "../../entities/vehicle.entity";
import VehicleImage from "../../entities/vehicle_image.entity";

export interface IVehicle {
    id?: string;
    brand: string;
    model: string;
    veiculeType: VeiculeType;
    year: string;
    km: number;
    announcementType?: AnnouncementType;
    price: number;
    createdAt?: Date;
    updatedAt?: Date;
    user: User;
    comments?: Comment[];
    images?: VehicleImage[];
}