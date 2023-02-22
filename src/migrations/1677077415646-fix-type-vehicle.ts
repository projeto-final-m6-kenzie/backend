import { MigrationInterface, QueryRunner } from "typeorm";

export class fixTypeVehicle1677077415646 implements MigrationInterface {
    name = 'fixTypeVehicle1677077415646'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vehicles" RENAME COLUMN "veiculeType" TO "vehicleType"`);
        await queryRunner.query(`ALTER TYPE "public"."vehicles_veiculetype_enum" RENAME TO "vehicles_vehicletype_enum"`);
        await queryRunner.query(`ALTER TABLE "vehicles" ALTER COLUMN "km" TYPE double precision`);
        await queryRunner.query(`ALTER TABLE "vehicles" ALTER COLUMN "price" TYPE double precision`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vehicles" ALTER COLUMN "price" TYPE double precision`);
        await queryRunner.query(`ALTER TABLE "vehicles" ALTER COLUMN "km" TYPE double precision`);
        await queryRunner.query(`ALTER TYPE "public"."vehicles_vehicletype_enum" RENAME TO "vehicles_veiculetype_enum"`);
        await queryRunner.query(`ALTER TABLE "vehicles" RENAME COLUMN "vehicleType" TO "veiculeType"`);
    }

}
