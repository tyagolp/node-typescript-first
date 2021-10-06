import { Repository, getRepository } from "typeorm";

import { ICarsImagesRepository } from "@modules/cars/repositories/ICarsImagesRepository";

import { CarImage } from "../entities/CarImage";

class CarsImagesRepository implements ICarsImagesRepository {
    private repository: Repository<CarImage>;

    constructor() {
        this.repository = getRepository(CarImage);
    }
    async create(car_id: string, image_name: string): Promise<CarImage> {
        const carImage = this.repository.create({ car_id, image_name });
        await this.repository.save(carImage);
        return carImage;
    }

    // async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    //     const category = this.repository.create({ name, description });
    //     await this.repository.save(category);
    // }

    // async list(): Promise<Category[]> {
    //     const categories = await this.repository.find();
    //     return categories;
    // }

    // async findByName(name: string): Promise<Category> {
    //     const category = await this.repository.findOne({ name });

    //     return category;
    // }
}

export { CarsImagesRepository };
