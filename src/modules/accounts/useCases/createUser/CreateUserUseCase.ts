// import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) { }

    async execute({
        name,
        email,
        password,
        driver_license,
    }: ICreateUserDTO): Promise<void> {
        const usersAlreadyExist = await this.usersRepository.findByEmail(email);

        if (usersAlreadyExist) {
            throw new Error("User already exists");
        }

        // const passwordHash = await hash(password, 8);
        // const passwordHash = password;
        await this.usersRepository.create({
            name,
            email,
            password,
            driver_license,
        });
    }
}

export { CreateUserUseCase };
