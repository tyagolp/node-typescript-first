import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListAvailableCarsUserCase } from "./ListAvailableCarsUserCase";

class ListAvailableCarsController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { brand, category_id, name } = request.query;

        const listAvailableCarsUserCase = container.resolve(
            ListAvailableCarsUserCase
        );

        const cars = await listAvailableCarsUserCase.execute({
            brand: brand as string,
            category_id: category_id as string,
            name: name as string,
        });

        return response.json(cars);
    }
}

export { ListAvailableCarsController };
