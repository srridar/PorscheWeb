
import { car_list } from "@/data/car_card_data/all_car";

interface EvCarKeyFeaturesProps {
  carId: string;
}

const EvCarKeyFeatures = ({ carId }: EvCarKeyFeaturesProps) => {
  const allCars = car_list.cars.electric;

  const car = allCars.find((car) => car.carId === carId);

  if (!car) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-xl text-gray-500">Car not found</p>
      </div>
    )
  }

  return (
    <div className="mx-auto  w-full max-w-6xl px-4 text-[#aaa] sm:px-6 lg:my-20 lg:px-8">

      <div className="px-6 py-12 sm:px-10 lg:px-16 mb-20">
        <h1 className="text-xl text-center font-semibold tracking-tight text-[#736868] sm:text-4xl lg:text-4xl">
          What does its engine provide you?
        </h1>
      </div>


      <div className="grid grid-cols-1 text-[#736868] items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-1">

          <div>
            <h2 className="text-2xl font-medium  sm:text-3xl lg:text-4xl">
              {car.powerUpTo.ps} PS / {car.powerUpTo.kw} kW
            </h2>
            <p className="mt-1 text-sm "> Power </p>
          </div>

          <div>
            <h2 className="text-2xl font-medium  sm:text-3xl lg:text-4xl">
              {car.overboostPowerWithLaunchControl.ps} PS /{" "}
              {car.overboostPowerWithLaunchControl.kw} kW
            </h2>

            <p className="mt-2 max-w-md text-xs leading-relaxed  sm:text-sm">
              Overboost Power with Launch Control up to (kW) / Overboost Power
              with Launch Control up to (PS)
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-medium  sm:text-3xl lg:text-4xl">
              {car.maxTorqueWithLaunchControl.value}{" "}
              {car.maxTorqueWithLaunchControl.unit}
            </h2>

            <p className="mt-1 text-sm "> Maximum Torque </p>
          </div>

          <div>
            <h2 className="text-2xl font-medium  sm:text-3xl lg:text-4xl"> {car.topSpeed.value} {car.topSpeed.unit} </h2>
            <p className="mt-1 text-sm text-[#888]"> Top Speed </p>
          </div>

        </div>

        <div className="flex w-full mx-auto items-center justify-center lg:w-[130%] lg:-ml-[15%]">
          <img
            src={car.featuredImage}
            alt={car.name}
            className=" h-auto w-full  lg:w-full max-w-5xl object-contain rounded-l-full rounded-r-2xl"
          />
        </div>

      </div>
    </div>
  );
};

export default EvCarKeyFeatures;

