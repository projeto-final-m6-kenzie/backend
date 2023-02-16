import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm"


@Entity("addresses")
class Address {
    @PrimaryGeneratedColumn("uuid")
    readonly id: string

    @Column()
    cep: string

    @Column()
    state: string

    @Column()
    city: string

    @Column()
    street: string

    @Column({
        nullable:true,
        default: null
    })
    number: number

    @Column({nullable: true})
    complement: string
}

export default Address