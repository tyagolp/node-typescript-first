import { Request, Response } from "express";

class UploadCarImageController {
    async handle(request: Request, response: Response): Promise<Response> {
        return response.json();
    }
}

export { UploadCarImageController };
