import React, { useEffect, useState } from "react";
import CarListItem from "./CarListItem/CarListItem";
import { deleteCar, getCars } from "../../api/cars";
import CarsHeader from "../SearchPanel/SearchPanel";

export default function Cars() {
  const [cars, setCars] = useState([]);
  //   const cars = [
  //     {
  //       make: "Toyota",
  //       model: "Camry",
  //       color: "Red",
  //       category: "Sedan",
  //       type: "Gasoline",
  //       price_per_hour: "$30",
  //     },
  //     {
  //       make: "Honda",
  //       model: "Civic",
  //       color: "Blue",
  //       category: "Sedan",
  //       type: "Electric",
  //       price_per_hour: "$25",
  //     },
  //     // Add more cars as needed
  //   ];
  useEffect(() => {
    getCars().then((res) => {
      setCars(res.cars);
    });
  }, []);
  const deleteHandler = (id) => {
    deleteCar(id).then(() => {
      getCars().then((res) => {
        setCars(res.cars);
      });
    });
  };

  return (
    <div>
      <CarsHeader title={"Управління автомобілями"} />
      {cars.length &&
        cars?.map((car) => {
          return (
            <CarListItem
              car={car}
              deleteHandler={() => deleteHandler(car.id)}
            />
          );
        })}
    </div>
  );
}
