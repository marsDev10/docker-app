import { AppDataSource } from "../../ormconfig.js";

import { User } from "../../models/user.js";

const userRepository = AppDataSource.getMongoRepository(User);

/**
 * Regresa los datos del usuario a partir del correo
 */
export const getUserByEmail = async (email: string) => {
    try {

        const user = await userRepository.findOneBy({
            email,
        });

        if(!user) {
            return false;
        }

        return user;

    } catch (error) {
        console.error("Error al crear usuario:", error);
    }
}