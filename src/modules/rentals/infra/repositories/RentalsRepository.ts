import { getRepository, Repository } from "typeorm";

import { ICreateRentalDTO } from "@modules/rentals/dtos/ICreateRentalDTO";
import { IRentalsRepository } from "@modules/rentals/repositories/IRentalsRepository";

import { Rental } from "../entities/Rental";

class RentalsRepository implements IRentalsRepository {
    private repositories: Repository<Rental>;

    constructor() {
        this.repositories = getRepository(Rental);
    }

    async findOpenRentalByCar(car_id: string): Promise<Rental> {
        const rental = await this.repositories.findOne({ car_id });
        return rental;
    }
    async findOpenRentalByUser(user_id: string): Promise<Rental> {
        const rental = await this.repositories.findOne({ user_id });
        return rental;
    }
    async create({
        user_id,
        car_id,
        expected_return_date,
    }: ICreateRentalDTO): Promise<Rental> {
        const rental = this.repositories.create({
            user_id,
            car_id,
            expected_return_date,
        });
        await this.repositories.save(rental);

        return rental;
    }
}

export { RentalsRepository };
