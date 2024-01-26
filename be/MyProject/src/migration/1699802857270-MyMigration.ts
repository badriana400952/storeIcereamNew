import { MigrationInterface, QueryRunner } from "typeorm";

export class MyMigration1699802857270 implements MigrationInterface {
    name = 'MyMigration1699802857270'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "toping" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "price" integer NOT NULL, "image" character varying NOT NULL, "quantity" integer NOT NULL, "productId" integer, CONSTRAINT "PK_5604a12bc70e84ef58c5553b45f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "product" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "price" integer NOT NULL, "image" character varying NOT NULL, "quantity" integer NOT NULL, "userId" integer, CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "handphone" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "checkout" ("id" SERIAL NOT NULL, "quantity" integer NOT NULL, "totalAmount" integer NOT NULL, "userId" integer, "productId" integer, "topingId" integer, CONSTRAINT "PK_c3c52ebf395ba358759b1111ac1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "toping" ADD CONSTRAINT "FK_4d1ba7af070641d689a88e27b2c" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_329b8ae12068b23da547d3b4798" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "checkout" ADD CONSTRAINT "FK_3f9f9c92797750f1892489f2a38" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "checkout" ADD CONSTRAINT "FK_7d35422254e58316856128cfd9f" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "checkout" ADD CONSTRAINT "FK_76670de24ff110a0df16126b301" FOREIGN KEY ("topingId") REFERENCES "toping"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "checkout" DROP CONSTRAINT "FK_76670de24ff110a0df16126b301"`);
        await queryRunner.query(`ALTER TABLE "checkout" DROP CONSTRAINT "FK_7d35422254e58316856128cfd9f"`);
        await queryRunner.query(`ALTER TABLE "checkout" DROP CONSTRAINT "FK_3f9f9c92797750f1892489f2a38"`);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_329b8ae12068b23da547d3b4798"`);
        await queryRunner.query(`ALTER TABLE "toping" DROP CONSTRAINT "FK_4d1ba7af070641d689a88e27b2c"`);
        await queryRunner.query(`DROP TABLE "checkout"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "product"`);
        await queryRunner.query(`DROP TABLE "toping"`);
    }

}
