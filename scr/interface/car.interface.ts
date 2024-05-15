import { z } from "zod";
import { carCreateSchema, carSchema } from "../schemas/car.schema";

type Car = z.infer<typeof carSchema>
type CarCreate = z.infer<typeof carCreateSchema>