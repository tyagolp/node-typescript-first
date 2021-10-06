import { AppError } from "@shared/errors/AppError";

import { InMemoryCategoriesRepository } from "../../repositories/in-memory/CategoriesRepositoryInMemory";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

let createCategoryUseCase: CreateCategoryUseCase;

let categoriesRepositoryInMemory: InMemoryCategoriesRepository;

describe("Create Category", () => {
    beforeEach(() => {
        categoriesRepositoryInMemory = new InMemoryCategoriesRepository();
        createCategoryUseCase = new CreateCategoryUseCase(
            categoriesRepositoryInMemory
        );
    });

    it("should create a new category", async () => {
        const category = {
            name: "Category test",
            description: "Category description test ",
        };

        await createCategoryUseCase.execute(category);

        const categoryCreated = await categoriesRepositoryInMemory.findByName(
            category.name
        );

        expect(categoryCreated).toHaveProperty("id");
    });

    it("should not be able to create a new category with same name exists", async () => {
        expect(async () => {
            const category = {
                name: "Category test",
                description: "Category description test ",
            };

            await createCategoryUseCase.execute(category);

            await createCategoryUseCase.execute(category);
        }).rejects.toBeInstanceOf(AppError);
    });
});
