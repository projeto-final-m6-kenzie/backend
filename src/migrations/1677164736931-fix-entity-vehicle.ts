import { MigrationInterface, QueryRunner } from "typeorm";

export class fixEntityVehicle1677164736931 implements MigrationInterface {
    name = 'fixEntityVehicle1677164736931'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vehicles" DROP COLUMN "brand"`);
        await queryRunner.query(`ALTER TABLE "vehicles" DROP COLUMN "model"`);
        await queryRunner.query(`ALTER TABLE "vehicles" ADD "title" character varying(140) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "dateOfBirth" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "description" character varying(2000) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "vehicles" ALTER COLUMN "km" TYPE double precision`);
        await queryRunner.query(`ALTER TABLE "vehicles" ALTER COLUMN "price" TYPE double precision`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_a000cca60bcf04454e727699490" UNIQUE ("phone")`);
        await queryRunner.query(`ALTER TABLE "comments" DROP COLUMN "text"`);
        await queryRunner.query(`ALTER TABLE "comments" ADD "text" character varying(2000) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comments" DROP COLUMN "text"`);
        await queryRunner.query(`ALTER TABLE "comments" ADD "text" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_a000cca60bcf04454e727699490"`);
        await queryRunner.query(`ALTER TABLE "vehicles" ALTER COLUMN "price" TYPE double precision`);
        await queryRunner.query(`ALTER TABLE "vehicles" ALTER COLUMN "km" TYPE double precision`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "dateOfBirth"`);
        await queryRunner.query(`ALTER TABLE "vehicles" DROP COLUMN "title"`);
        await queryRunner.query(`ALTER TABLE "vehicles" ADD "model" character varying(30) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "vehicles" ADD "brand" character varying(30) NOT NULL`);
    }

}
