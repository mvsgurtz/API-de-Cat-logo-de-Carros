import supertest from "supertest";
import { app } from "../../app";
import { prisma } from "../../database/prsima";
import { validCar } from "../Mocks/services.mock";

describe("DELETE /cars/:id", () => {
  const request = supertest(app);
  const endpoint = "/cars";

  beforeAll(async () => {});

  beforeEach(async () => {
    await prisma.car.deleteMany();
  });

  afterAll(async () => {
    await prisma.car.deleteMany();
  });

  test("Should be able to delete a car", async () => {
    const createdCar = await prisma.car.create({ data: validCar });

    const idParameter = endpoint + "/" + createdCar.id;

    const response = await request.delete(idParameter);

    expect(response.status).toBe(204);
  });
});
