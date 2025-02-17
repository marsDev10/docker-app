import { AppDataSource } from "../../ormconfig.js";
import { User } from "../../models/user.js";
import { TRegisterUser } from "../../interfaces/user.interface.js"
import { encryptPassword } from "../../utils/crypt.utils.js";
import { getUserByEmail } from "./user.read.js";

const userRepository = AppDataSource.getMongoRepository(User);

export const createUser = async (dataUser: TRegisterUser) => {
    
        const user = await getUserByEmail(dataUser.email);

        if(!user) {

            const newUser = new User(dataUser);
            const passwordCrypt = await encryptPassword(dataUser.password);

            const savedUser = await userRepository.save({
                ...newUser,
                password: passwordCrypt,
            });

            return savedUser;

        }

        return false;
}