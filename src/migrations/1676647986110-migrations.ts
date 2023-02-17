import { MigrationInterface, QueryRunner } from "typeorm";

export class migrations1676647986110 implements MigrationInterface {
    name = 'migrations1676647986110'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vehicle_images" DROP CONSTRAINT "FK_9a907b93045b8793801158fbba2"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_1780f918d3523791d18590d67a4"`);
        await queryRunner.query(`CREATE TYPE "public"."vehicles_veiculetype_enum" AS ENUM('Car', 'Motorbike')`);
        await queryRunner.query(`CREATE TYPE "public"."vehicles_announcementtype_enum" AS ENUM('Auction', 'Sale')`);
        await queryRunner.query(`CREATE TABLE "vehicles" ("id" uuid NOT NULL, "brand" character varying(30) NOT NULL, "model" character varying(30) NOT NULL, "veiculeType" "public"."vehicles_veiculetype_enum" NOT NULL, "year" character varying NOT NULL, "km" double precision NOT NULL, "announcementType" "public"."vehicles_announcementtype_enum" DEFAULT 'Sale', "price" double precision NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "userId" uuid, CONSTRAINT "PK_18d8646b59304dce4af3a9e35b6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "vehicle_images" ADD CONSTRAINT "FK_9a907b93045b8793801158fbba2" FOREIGN KEY ("vehicleId") REFERENCES "vehicles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "vehicles" ADD CONSTRAINT "FK_20f139b9d79f917ef735efacb00" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_1780f918d3523791d18590d67a4" FOREIGN KEY ("vehicleId") REFERENCES "vehicles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_1780f918d3523791d18590d67a4"`);
        await queryRunner.query(`ALTER TABLE "vehicles" DROP CONSTRAINT "FK_20f139b9d79f917ef735efacb00"`);
        await queryRunner.query(`ALTER TABLE "vehicle_images" DROP CONSTRAINT "FK_9a907b93045b8793801158fbba2"`);
        await queryRunner.query(`DROP TABLE "vehicles"`);
        await queryRunner.query(`DROP TYPE "public"."vehicles_announcementtype_enum"`);
        await queryRunner.query(`DROP TYPE "public"."vehicles_veiculetype_enum"`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_1780f918d3523791d18590d67a4" FOREIGN KEY ("vehicleId") REFERENCES "veicules"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "vehicle_images" ADD CONSTRAINT "FK_9a907b93045b8793801158fbba2" FOREIGN KEY ("vehicleId") REFERENCES "veicules"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
