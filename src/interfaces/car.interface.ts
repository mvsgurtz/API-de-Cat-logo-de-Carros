import { z } from "zod";
import {
  carCreateSchema,
  carSchema,
  carUpdateSchema,
} from "../schemas/car.schema";

type Car = z.infer<typeof carSchema>;
type CarCreate = z.infer<typeof carCreateSchema>;
type CarUpdate = z.infer<typeof carUpdateSchema>;

export { Car, CarCreate, CarUpdate };
