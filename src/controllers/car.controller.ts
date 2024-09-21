import { Request, Response, json } from "express";
import { CarServices } from "../services/car.service";

export class CarController {
  private service = new CarServices();

  createCar = async (req: Request, res: Response): Promise<Response> => {
    const newCar = await this.service.create(req.body);

    return res.status(201).json(newCar);
  };
  getManyCars = async (req: Request, res: Response): Promise<Response> => {
    const cars = await this.service.getMany();

    return res.status(200).json(cars);
  };

  getOneCar = async (req: Request, res: Response): Promise<Response> => {
    const car = await this.service.getOne(req.params.id);

    return res.status(200).json(car);
  };

  updateCar = async (req: Request, res: Response): Promise<Response> => {
    const editedCar = await this.service.update(req.params.id, req.body);

    return res.status(200).json(editedCar);
  };

  deleteCar = async (req: Request, res: Response): Promise<Response> => {
    const deletedCar = await this.service.delete(req.params.id);

    return res.status(204).json({message: 'Car successfully deleted'});
  };
}
