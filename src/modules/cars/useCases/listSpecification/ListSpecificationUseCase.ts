import { Category } from "../../model/Category";
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

class ListSpecificationUseCase {
    constructor(private specificationsRepository: ISpecificationsRepository) {}
    execute(): Category[] {
        const specifications = this.specificationsRepository.list();
        return specifications;
    }
}

export { ListSpecificationUseCase };
