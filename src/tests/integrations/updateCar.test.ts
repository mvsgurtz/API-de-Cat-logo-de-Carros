import supertest from "supertest";
import { app } from "../../app";
import { prisma } from "../../database/prsima";
import { CarServices } from "../../services/car.service";
import {
  invalidCarKeyError,
  invalidUpdatedCar,
  updatedCar,
  validCar,
} from "../Mocks/services.mock";

describe("PATCH /cars/:id", () => {
  const request = supertest(app);
  const endpoint = "/cars";
  const services = new CarServices();

  beforeAll(async () => {});

  beforeEach(async () => {
    await prisma.car.deleteMany();
  });

  afterAll(async () => {
    await prisma.car.deleteMany();
  });

  test("Should be able to update a cars successfully", async () => {
    const createdCar = await prisma.car.create({ data: validCar });

    const idParameter = endpoint + "/" + createdCar.id;

    const response = await request.patch(idParameter).send(updatedCar);

    const expectedValue = {
      id: createdCar.id,
      name: updatedCar.name,
      description: createdCar.description,
      brand: createdCar.brand,
      year: updatedCar.year,
      km: createdCar.km,
    };

    expect(response.body).toEqual(expectedValue);
    expect(response.status).toBe(200);
  });

  test("Should not be able to update a car with invalid data types", async () => {
    const createdCar = await prisma.car.create({ data: validCar });

    const idParameter = endpoint + "/" + createdCar.id;

    const response = await request.patch(idParameter).send(invalidUpdatedCar);

    expect(response.status).toBe(400);
  });

});
