import { MigrationInterface, QueryRunner } from "typeorm";

export class migrations1676494179143 implements MigrationInterface {
    name = 'migrations1676494179143'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "addresses" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "cep" character varying NOT NULL, "state" character varying NOT NULL, "city" character varying NOT NULL, "street" character varying NOT NULL, "number" integer, "complement" character varying, CONSTRAINT "PK_745d8f43d3af10ab8247465e450" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "vehicle_images" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "url" character varying NOT NULL, "isMainImg" boolean NOT NULL DEFAULT false, "vehicleId" uuid, CONSTRAINT "PK_62a037bce2dae7af30fc41cc984" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."veicules_veicule_type_enum" AS ENUM('Car', 'Motorbike')`);
        await queryRunner.query(`CREATE TYPE "public"."veicules_announcementtype_enum" AS ENUM('Auction', 'Sale')`);
        await queryRunner.query(`CREATE TABLE "veicules" ("id" uuid NOT NULL, "brand" character varying(30) NOT NULL, "model" character varying(30) NOT NULL, "veicule_type" "public"."veicules_veicule_type_enum" NOT NULL, "year" character varying NOT NULL, "km" double precision NOT NULL, "announcementType" "public"."veicules_announcementtype_enum" DEFAULT 'Sale', "price" double precision NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "userId" uuid, CONSTRAINT "PK_4bb5573008a863bbdd8c3dff188" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL, "name" character varying(70) NOT NULL, "email" character varying(70) NOT NULL, "password" character varying NOT NULL, "phone" character varying NOT NULL, "isAnnouncer" boolean NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "addressId" uuid NOT NULL, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "REL_bafb08f60d7857f4670c172a6e" UNIQUE ("addressId"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "comments" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "text" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "userId" uuid, "vehicleId" uuid, CONSTRAINT "PK_8bf68bc960f2b69e818bdb90dcb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "vehicle_images" ADD CONSTRAINT "FK_9a907b93045b8793801158fbba2" FOREIGN KEY ("vehicleId") REFERENCES "veicules"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "veicules" ADD CONSTRAINT "FK_cba99b9e798d2c8f9205abc0581" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_bafb08f60d7857f4670c172a6ea" FOREIGN KEY ("addressId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_7e8d7c49f218ebb14314fdb3749" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_1780f918d3523791d18590d67a4" FOREIGN KEY ("vehicleId") REFERENCES "veicules"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_1780f918d3523791d18590d67a4"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_7e8d7c49f218ebb14314fdb3749"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_bafb08f60d7857f4670c172a6ea"`);
        await queryRunner.query(`ALTER TABLE "veicules" DROP CONSTRAINT "FK_cba99b9e798d2c8f9205abc0581"`);
        await queryRunner.query(`ALTER TABLE "vehicle_images" DROP CONSTRAINT "FK_9a907b93045b8793801158fbba2"`);
        await queryRunner.query(`DROP TABLE "comments"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "veicules"`);
        await queryRunner.query(`DROP TYPE "public"."veicules_announcementtype_enum"`);
        await queryRunner.query(`DROP TYPE "public"."veicules_veicule_type_enum"`);
        await queryRunner.query(`DROP TABLE "vehicle_images"`);
        await queryRunner.query(`DROP TABLE "addresses"`);
    }

}
