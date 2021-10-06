import { Specification } from "@modules/cars/infra/typeorm/entities/Specification";

import {
    ICreateSpecificationDTO,
    ISpecificationsRepository,
} from "../ISpecificationsRepository";

class SpecificationInMemory implements ISpecificationsRepository {
    specifications: Specification[] = [];

    async list(): Promise<Specification[]> {
        return this.specifications;
    }
    async create({
        name,
        description,
    }: ICreateSpecificationDTO): Promise<Specification> {
        const specification = new Specification();
        Object.assign(specification, { name, description });
        this.specifications.push(specification);
        return specification;
    }
    async findByName(name: string): Promise<Specification> {
        return this.specifications.find((spec) => spec.name === name);
    }
    async findByIds(ids: string[]): Promise<Specification[]> {
        const allSpecifications = this.specifications.filter((spec) =>
            ids.includes(spec.id)
        );

        return allSpecifications;
    }
}

export { SpecificationInMemory };
