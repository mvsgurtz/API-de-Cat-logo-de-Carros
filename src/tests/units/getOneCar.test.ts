import { prisma } from "../../database/prsima";
import { CarServices } from "../../services/car.service";
import { validCar, validGetManyCars } from "../Mocks/services.mock";

describe("Units Test: Get One Cars", () => {
  const services = new CarServices();

  beforeEach(async () => {
    await prisma.$transaction([prisma.car.deleteMany()]);
  });

  test("Should be able to get a car by id successfully", async () => {
    const createdCar = await prisma.car.create({ data: validCar });

    const receivedValue = await services.getOne(createdCar.id);

    const expectedValue = {
        id: createdCar.id,
        name: validCar.name,
        description: validCar.description,
        brand: validCar.brand,
        year: validCar.year,
        km: validCar.km,
    }

    expect(receivedValue).toEqual(expectedValue);
  });

  test("Should throw an error if get one a Car with non existing id", async () => {

    const nonExistingId = "abc";

    await expect(services.getOne(nonExistingId)).rejects.toThrow("Car not found");
  });
});
