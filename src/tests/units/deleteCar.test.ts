import { prisma } from "../../database/prsima";
import { CarServices } from "../../services/car.service";
import { validCar } from "../Mocks/services.mock";

describe("Units Test: Update Car", () => {
  const services = new CarServices();

  beforeEach(async () => {
    await prisma.$transaction([prisma.car.deleteMany()]);
  });

  test("Should be able to update a car by id successfully", async () => {
    const createdCar = await prisma.car.create({ data: validCar });

    const receivedValue = await services.delete(createdCar.id);

    expect(receivedValue).toEqual("deleted successfully");
  });

  test("Should throw an error if deleting a Car with non existing id", async () => {

    const nonExistingId = "abc";

    await expect(services.delete(nonExistingId)).rejects.toThrow("Car not found");
  });
});
