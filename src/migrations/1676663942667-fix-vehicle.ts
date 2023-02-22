import { MigrationInterface, QueryRunner } from "typeorm";

export class fixVehicle1676663942667 implements MigrationInterface {
    name = 'fixVehicle1676663942667'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vehicles" ALTER COLUMN "km" TYPE double precision`);
        await queryRunner.query(`ALTER TABLE "vehicles" ALTER COLUMN "price" TYPE double precision`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vehicles" ALTER COLUMN "price" TYPE double precision`);
        await queryRunner.query(`ALTER TABLE "vehicles" ALTER COLUMN "km" TYPE double precision`);
    }

}
