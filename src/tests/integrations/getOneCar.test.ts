import supertest from "supertest";
import { app } from "../../app";
import { prisma } from "../../database/prsima";
import { CarServices } from "../../services/car.service";
import { validCar } from "../Mocks/services.mock";

describe("GET /cars/:id", () => {
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

  test("Should be able to get a many cars successfully", async () => {
    const receivedValue = await prisma.car.create({ data: validCar });
    const idParameter = endpoint + "/" + receivedValue.id;

    const response = await request.get(idParameter);

    const expectedValue = 
      {
        id: expect.any(String),
        name: "Carro 1",
        description: "Description Carro 1",
        brand: "Honda",
        year: 2023,
        km: 300,
      };
    

    expect(response.body).toEqual(expectedValue);
    expect(response.status).toBe(200);
  });
});
