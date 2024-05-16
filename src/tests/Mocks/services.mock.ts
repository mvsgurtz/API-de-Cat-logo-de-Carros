export const validCar = {
  name: "Carro 1",
  description: "Description Carro 1",
  brand: "Honda",
  year: 2023,
  km: 300,
};

export const invalidCarKeyError = {
  fakeName: "Carro 1",
  description: "Description Carro 1",
  brand: "Honda",
  yearFake: 2023,
  km: 300,
};

export const validGetManyCars = [
  {
    name: "Carro 1",
    description: "Description Carro 1",
    brand: "Honda",
    year: 2023,
    km: 300,
  },
  {
    name: "Carro 2",
    description: "Description Carro 2",
    brand: "Honda",
    year: 2024,
    km: 301,
  }
];

export const updatedCar = {
    name: "New Car",
    year: 2025

   }

export const invalidUpdatedCar = {
    name: 123,
    year: "2025"

   }