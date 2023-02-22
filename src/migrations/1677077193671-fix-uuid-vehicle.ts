import { MigrationInterface, QueryRunner } from "typeorm";

export class fixUuidVehicle1677077193671 implements MigrationInterface {
    name = 'fixUuidVehicle1677077193671'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vehicle_images" DROP CONSTRAINT "FK_9a907b93045b8793801158fbba2"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_1780f918d3523791d18590d67a4"`);
        await queryRunner.query(`ALTER TABLE "vehicles" ALTER COLUMN "id" SET DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "vehicles" ALTER COLUMN "km" TYPE double precision`);
        await queryRunner.query(`ALTER TABLE "vehicles" ALTER COLUMN "price" TYPE double precision`);
        await queryRunner.query(`ALTER TABLE "vehicle_images" ADD CONSTRAINT "FK_9a907b93045b8793801158fbba2" FOREIGN KEY ("vehicleId") REFERENCES "vehicles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_1780f918d3523791d18590d67a4" FOREIGN KEY ("vehicleId") REFERENCES "vehicles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_1780f918d3523791d18590d67a4"`);
        await queryRunner.query(`ALTER TABLE "vehicle_images" DROP CONSTRAINT "FK_9a907b93045b8793801158fbba2"`);
        await queryRunner.query(`ALTER TABLE "vehicles" ALTER COLUMN "price" TYPE double precision`);
        await queryRunner.query(`ALTER TABLE "vehicles" ALTER COLUMN "km" TYPE double precision`);
        await queryRunner.query(`ALTER TABLE "vehicles" ALTER COLUMN "id" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_1780f918d3523791d18590d67a4" FOREIGN KEY ("vehicleId") REFERENCES "vehicles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "vehicle_images" ADD CONSTRAINT "FK_9a907b93045b8793801158fbba2" FOREIGN KEY ("vehicleId") REFERENCES "vehicles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
