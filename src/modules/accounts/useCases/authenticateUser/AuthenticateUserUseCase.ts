import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    user: {
        name: string;
        email: string;
    };
    token: string;
}

@injectable()
class AuthenticateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) { }

    async execute({ email, password }: IRequest): Promise<IResponse> {
        const user = await this.usersRepository.findByEmail(email);

        if (!user) {
            throw new AppError("Email or password incorrect");
        }

        const passwordMacth = await compare(password, user.password);
        if (!passwordMacth) {
            throw new AppError("Email or password incorrect");
        }

        const token = sign({}, "bab36f8f2ec82e71fa8d9345fb8a1408", {
            subject: user.id,
            expiresIn: "1d",
        });

        return {
            user: {
                name: user.name,
                email: user.email,
            },
            token,
        };
    }
}

export { AuthenticateUserUseCase };
