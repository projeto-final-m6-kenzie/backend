import AppDataSource from "../../data-source"
import Address from "../../entities/address.entity"
import { IAddress } from "../../interfaces/address"

const createAddressService = async (data: IAddress) => {
    const addressRepository = AppDataSource.getRepository(Address)
    const address = addressRepository.create(data)
    await addressRepository.save(address)

    return address
}

export default createAddressService
