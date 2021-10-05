import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";

import { ListAvailableCarsUserCase } from "./ListAvailableCarsUserCase";

let carsRepositoryInMemory: CarsRepositoryInMemory;

let listAvailableCarsUserCase: ListAvailableCarsUserCase;

describe("List Cars", () => {
    beforeEach(() => {
        carsRepositoryInMemory = new CarsRepositoryInMemory();
        listAvailableCarsUserCase = new ListAvailableCarsUserCase(
            carsRepositoryInMemory
        );
    });

    it("should be able to list all available cars", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "Car2",
            description: "Car description",
            daily_rate: 39,
            license_plate: "ABC-0000",
            fine_amount: 44,
            brand: "Car_brand",
            category_id: "category_id",
        });

        const cars = await listAvailableCarsUserCase.execute({});

        expect(cars).toEqual([car]);
    });

    it("should be able to list all available cars by brand", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "Car2",
            description: "Car description",
            daily_rate: 39,
            license_plate: "ABC-0000",
            fine_amount: 44,
            brand: "Car_brand_test",
            category_id: "category_id",
        });

        const cars = await listAvailableCarsUserCase.execute({
            brand: "Car_brand_test",
        });

        expect(cars).toEqual([car]);
    });

    it("should be able to list all available cars by name", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "Car3",
            description: "Car description",
            daily_rate: 39,
            license_plate: "ABC-3333",
            fine_amount: 44,
            brand: "Car_brand_333",
            category_id: "category_id",
        });

        const cars = await listAvailableCarsUserCase.execute({
            name: "Car3",
        });

        expect(cars).toEqual([car]);
    });

    it("should be able to list all available cars by category", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "Car3",
            description: "Car description",
            daily_rate: 39,
            license_plate: "ABC-3333",
            fine_amount: 44,
            brand: "Car_brand_333",
            category_id: "123456",
        });

        const cars = await listAvailableCarsUserCase.execute({
            category_id: "123456",
        });

        expect(cars).toEqual([car]);
    });
});
