import { CarImage } from "../infra/typeorm/entities/CarImage";

interface ICarsImagesRepository {
    // findByName(name: string): Promise<Category>;
    // list(): Promise<Category[]>;
    create(car_id: string, image_name: string): Promise<CarImage>;
}

export { ICarsImagesRepository };
