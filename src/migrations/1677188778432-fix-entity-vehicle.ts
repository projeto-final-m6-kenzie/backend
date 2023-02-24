import { MigrationInterface, QueryRunner } from "typeorm";

export class fixEntityVehicle1677188778432 implements MigrationInterface {
    name = 'fixEntityVehicle1677188778432'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vehicles" ADD "coverPhotoId" uuid`);
        await queryRunner.query(`ALTER TABLE "vehicles" ADD CONSTRAINT "UQ_9c1bd3f5baeba43da1828ab0494" UNIQUE ("coverPhotoId")`);
        await queryRunner.query(`ALTER TABLE "vehicles" ALTER COLUMN "km" TYPE double precision`);
        await queryRunner.query(`ALTER TABLE "vehicles" ALTER COLUMN "price" TYPE double precision`);
        await queryRunner.query(`ALTER TABLE "vehicles" ADD CONSTRAINT "FK_9c1bd3f5baeba43da1828ab0494" FOREIGN KEY ("coverPhotoId") REFERENCES "vehicle_images"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vehicles" DROP CONSTRAINT "FK_9c1bd3f5baeba43da1828ab0494"`);
        await queryRunner.query(`ALTER TABLE "vehicles" ALTER COLUMN "price" TYPE double precision`);
        await queryRunner.query(`ALTER TABLE "vehicles" ALTER COLUMN "km" TYPE double precision`);
        await queryRunner.query(`ALTER TABLE "vehicles" DROP CONSTRAINT "UQ_9c1bd3f5baeba43da1828ab0494"`);
        await queryRunner.query(`ALTER TABLE "vehicles" DROP COLUMN "coverPhotoId"`);
    }

}
