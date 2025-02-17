import { Request, Response, Router, NextFunction} from "express";


import { IUser, TRegisterUser } from "../interfaces/user.interface.js";
import { createUser } from "../controllers/user/user.create.js";


const router = Router();

router.post("/register", 
  async (req: Request, res: Response, _next: NextFunction) => {
    try {

      const dataUser: TRegisterUser  = req.body;

        const user = await createUser(dataUser);
 
        if(!user) {
            res
            .status(400)
            .json({ 
                message: "User already exists",
            });

            return;
        }

        res
        .status(201)
        .json({ 
          message: "User created successfully",
          user,
        });


    } catch (error){
        
      res
      .status(500)
      .json({ 
        status: 500,
        message: "Error de servidor",
      });
    }
});

export default router;