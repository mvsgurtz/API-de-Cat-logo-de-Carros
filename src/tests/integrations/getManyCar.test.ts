import supertest from "supertest";
import { app } from "../../app";
import { prisma } from "../../database/prsima";
import { CarServices } from "../../services/car.service";
import { validCar, validGetManyCars } from "../Mocks/services.mock";

describe("GET /cars", () => {
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
        const receivedValue = await prisma.car.createMany({data: validGetManyCars})
  
      const response = await request.get(endpoint);
  
      const expectedValues = [
        {
          id: expect.any(String),
          name: "Carro 1",
          description: "Description Carro 1",
          brand: "Honda",
          year: 2023,
          km: 300,
        },
        {
          id: expect.any(String),
          name: "Carro 2",
          description: "Description Carro 2",
          brand: "Honda",
          year: 2024,
          km: 301,
        },
      ];
  
      expect(response.body).toEqual(expectedValues);
      expect(response.status).toBe(200);
    });

});











