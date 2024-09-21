import { prisma } from "../../database/prsima";
import { CarServices } from "../../services/car.service";
import { validCar, validGetManyCars } from "../Mocks/services.mock";

describe("Units Test: Get Many Cars", () => {
  const services = new CarServices();

  beforeEach(async () => {
    await prisma.$transaction([prisma.car.deleteMany()]);
  });

  test("Should be able to get a many cars successfully", async () => {
    await prisma.car.createMany({ data: validGetManyCars });

    const receivedValue = await services.getMany();

    const expectedValue = [
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

    expect(receivedValue).toEqual(expectedValue);
  });
});
