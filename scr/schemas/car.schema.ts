import { z } from "zod";

const carSchema = z.object({
    id: z.string(),
    name: z.string(),
    description: z.string().optional(),
    brand: z.string(),
    year: z.number(),
    km: z.number(),
})

const carCreateSchema = carSchema.omit({id:true});

export {carSchema, carCreateSchema}
