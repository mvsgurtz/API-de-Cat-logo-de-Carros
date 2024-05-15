import { Router } from "express";
import { CarController } from "../controllers/car.controller";
import { bodyIsValid } from "../middlewares/bodyIsValid.middleware";
import { carCreateSchema, carUpdateSchema } from "../schemas/car.schema";

export const carRouter = Router();

const carInstance =  new CarController();

carRouter.post('',bodyIsValid.execute(carCreateSchema), carInstance.createCar)
carRouter.get('', carInstance.getManyCars)
carRouter.get('/:id', carInstance.getOneCar)
carRouter.patch('/:id',bodyIsValid.execute(carUpdateSchema), carInstance.updateCar)
carRouter.delete('/:id',carInstance.deleteCar)