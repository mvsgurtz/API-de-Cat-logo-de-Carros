import { prisma } from "../../database/prsima";
import { CarServices } from "../../services/car.service";
import { updatedCar, validCar, validGetManyCars } from "../Mocks/services.mock";

describe("Units Test: Update Car", () => {
  const services = new CarServices();

  beforeEach(async () => {
    await prisma.$transaction([prisma.car.deleteMany()]);
  });

  test("Should be able to update a car by id successfully", async () => {
    const createdCar = await prisma.car.create({ data: validCar });

   

   const receivedValue = await services.update(createdCar.id, updatedCar);

    const expectedValue = {
        id: createdCar.id,
        name: updatedCar.name,
        description: validCar.description,
        brand: validCar.brand,
        year: updatedCar.year,
        km: validCar.km,
    }

    expect(receivedValue).toEqual(expectedValue);
  });

  test("Should throw an error if updating a Car with non existing id", async () => {

    const nonExistingId = "abc";
    const updatedCar = {
        name: "New Car",
        year: 2025
       }

    await expect(services.update(nonExistingId, updatedCar)).rejects.toThrow("Car not found");
  });

});
