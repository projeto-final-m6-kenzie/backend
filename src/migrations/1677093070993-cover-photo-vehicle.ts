import { MigrationInterface, QueryRunner } from "typeorm";

export class coverPhotoVehicle1677093070993 implements MigrationInterface {
    name = 'coverPhotoVehicle1677093070993'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vehicle_images" DROP COLUMN "isMainImg"`);
        await queryRunner.query(`ALTER TABLE "vehicles" ADD "description" character varying(2000) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "vehicles" ADD "published" boolean DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "vehicles" ALTER COLUMN "km" TYPE double precision`);
        await queryRunner.query(`ALTER TABLE "vehicles" ALTER COLUMN "price" TYPE double precision`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vehicles" ALTER COLUMN "price" TYPE double precision`);
        await queryRunner.query(`ALTER TABLE "vehicles" ALTER COLUMN "km" TYPE double precision`);
        await queryRunner.query(`ALTER TABLE "vehicles" DROP COLUMN "published"`);
        await queryRunner.query(`ALTER TABLE "vehicles" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "vehicle_images" ADD "isMainImg" boolean NOT NULL DEFAULT false`);
    }

}
