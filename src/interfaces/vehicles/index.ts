import Comment from "../../entities/comment.entity";
import User from "../../entities/user.entity";
import { AnnouncementType, VehicleType } from "../../entities/vehicle.entity";
import VehicleImage from "../../entities/vehicle_image.entity";

export interface IVehicle {
    id?: string;
    brand: string;
    model: string;
    veiculeType: VehicleType;
    year: string;
    km: number;
    published: boolean;
    announcementType: AnnouncementType;
    price: number;
    coverPhoto: VehicleImage
    description: string;
    createdAt: Date;
    updatedAt: Date;
    user: User;
    comments: Comment[];
    images?: VehicleImage[];
}

export interface IVehicleRequest {
    brand: string;
    model: string;
    veiculeType: VehicleType;
    year: string;
    km: number;
    coverPhoto: VehicleImage;
    price: number;
    description: string;
    user: User;
}

export interface IVehicleUpdate {
    published?: boolean;
    brand?: string;
    coverPhoto?: VehicleImage;
    model?: string;
    km?: number;
    price?: number;
    year?: string;
    description?: string;
  }
