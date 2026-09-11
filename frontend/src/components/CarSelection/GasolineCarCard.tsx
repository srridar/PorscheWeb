import React from "react";
import { useNavigate } from "react-router-dom";

interface CarDetailsProps {
  carId: string;
  modelId: string;
  variantId: string;
  name: string;
  year: string;

  price: {
    amount?: number;
    currency: string;
    formatted: string;
    taxIncluded: boolean;
    tax: string;
  };

  fuelType: string;
  driveType: string;
  transmission: string;

  image: string;

  topSpeed: {
    value: number;
    unit: string;
  };

  power: {
    kW: {
      value: number;
      unit: string;
    };
    PS: {
      value: number;
      unit: string;
    };
  };

  maxTorque: {
    value: number;
    unit: string;
  };

  powerElectricMotor?: {
    kW: string;
  };

  powerCombined?: {
    kW: string;
    ps: string;
  };

  cardetailsRoute: string;
}

const GasolineCarCard = ({ car }: { car: CarDetailsProps }) => {
   
  const navigate = useNavigate();

  return (
    <article className=" overflow-hidden rounded border border-gray-800 bg-[#221f1f] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">


      <div className="relative aspect-[16/10] overflow-hidden ">
        <img
          src={car.image}
          alt={car.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute left-5 top-5 rounded-full bg-black/80 px-3 py-1.5 text-xs font-medium text-white backdrop-blur">
          {car.year}
        </div>


        <div className="absolute right-5 top-5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium text-gray-900 backdrop-blur">
          {car.fuelType}
        </div>
      </div>

      <div className="p-6">

        <div className="mb-5">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-400"> {car.name} </h2>

          <div className="mt-2 flex items-center gap-4 text-sm  text-gray-500">
            <span className="px-3 py-1 bg-gray-950 rounded-2xl">{car.driveType}</span>
            <span className="px-3 py-1 bg-gray-300 rounded-2xl">{car.transmission}</span>
          </div>
        </div>


        <div className="grid grid-cols-3  py-5">

          <div className=" border-gray-200 pr-4">
            <p className="text-sm  tracking-wider text-gray-400"> Power </p>

            <p className="mt-1 text-lg font-semibold text-gray-300">
              {car.power.kW.value}
              <span className="ml-1 text-xs font-normal text-gray-500">
                {car.power.kW.unit}
              </span>
            </p>
          </div>

          <div className=" border-gray-200 px-4">
            <p className="text-sm  tracking-wider text-gray-400">
              Torque
            </p>

            <p className="mt-1 text-lg font-semibold text-gray-300">
              {car.maxTorque.value}
              <span className="ml-1 text-xs font-normal text-gray-500">
                {car.maxTorque.unit}
              </span>
            </p>
          </div>

          <div className="pl-4">
            <p className="text-sm tracking-wider text-gray-400">
              Top Speed
            </p>

            <p className="mt-1 text-lg font-semibold text-gray-300">
              {car.topSpeed.value}
              <span className="ml-1 text-xs font-normal text-gray-500">
                {car.topSpeed.unit}
              </span>
            </p>
          </div>

        </div>


        {
          car.powerElectricMotor && (

            <div >
              <div className=" flex justify-between items-center pr-4">
                <p className="text-xs tracking-wider text-gray-400">
                  Power Electric Motor
                </p>

                <p className=" text-xs font-semibold text-gray-300">
                  {car.powerElectricMotor?.kW} kw

                </p>
              </div>

              <div className=" flex justify-between items-center pr-4 ">
                <p className="text-xs  tracking-wider text-gray-400">
                  Power Combined
                </p>

                <p className="mt-1 text-xs font-semibold text-gray-300">
                  {car.powerCombined?.kW} kw
                </p>
              </div>

            </div>

          )
        }

        <div className={`${car.powerElectricMotor ? "mt-6" : "mt-15"} flex items-end justify-between gap-4`}>
          <div>
            <p className="text-xs  tracking-wider text-gray-400"> Starting from </p>

            <p className="mt-1 text-xl font-semibold text-gray-450"> {car.price.formatted} </p>

            {car.price.taxIncluded && (
              <p className="mt-1 text-xs text-gray-400"> Incl. {car.price.tax} </p>
            )}
          </div>

          <button
            type="button"
            onClick={() => {
              if (car.cardetailsRoute) {
                navigate(`${car.cardetailsRoute}`)
              }
              else {
                navigate(`/porsche/india/${car.modelId}/${car.variantId}/${car.carId}`)
              }
            }}
            className="rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#171515]"
          >
            Explore
          </button>

        </div>
      </div>
    </article>
  );
};

export default GasolineCarCard;