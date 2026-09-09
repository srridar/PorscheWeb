

export interface PowerValue {
  kw: number;
  ps: number;
}

export interface Value {
  value: number;
  unit: string;
}

export interface CarDetailsProps {
  carId: string;
  modelId: string;
  variantId: string;
  name: string;
  year: number;

  fuelType: string;
  driveType: string;
  transmission: string;

  price: {
    amount?: number;
    currency: string;
    formatted: string;
    taxIncluded: boolean;
    tax: string;
  };

  image: string;
  maxTorqueWithLaunchControl: Value;
  powerUpTo: PowerValue;
  overboostPowerWithLaunchControl: PowerValue;

  topSpeed: {
    value: number;
    unit: string;
  };
}

const ElectricCarCard = ({ car }: { car: CarDetailsProps }) => {
  const power = car.powerUpTo;
  const torque = car.maxTorqueWithLaunchControl;

  return (
    <article className=" overflow-hidden rounded border border-gray-800 bg-[#221f1f] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">


      <div className="relative aspect-[16/9] overflow-hidden ">
        <img
          src={car.image}
          alt={car.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute left-5 top-5 rounded-full bg-black/80 px-4 py-2 text-xs font-medium text-white backdrop-blur">
          {car.year}
        </div>


        <div className="absolute right-5 top-5 rounded-full bg-white/90 px-4 py-2 text-xs font-medium text-black backdrop-blur">
          {car.fuelType}
        </div>
      </div>


      <div className="p-6">

        <div className="mb-5">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-400">  {car.name} </h2>

          <div className="mt-2 flex items-center gap-4 text-sm  text-gray-500">
            <span className="px-3 py-1 bg-gray-950 rounded-2xl">{car.driveType}</span>
            <span className="px-3 py-1 bg-gray-300 rounded-2xl">{car.transmission}</span>
          </div>
        </div>


        <div className="grid grid-cols-3  py-5">


          <div className=" border-gray-200 pr-4">
            <p className="text-sm  tracking-wider text-gray-400"> Power </p>

            <p className="text-sm text-gray-300 mt-2 font-semibold">
              {power?.kw ?? "—"}  <span className="text-xs">kW</span>
            </p>
          </div>

          <div className=" border-gray-200 px-4">
            <p className="text-sm  tracking-wider text-gray-400"> Torque </p>

            <p className=" text-sm font-semibold mt-2 text-gray-300">
              {torque?.value ?? "—"}
              <span className="ml-1 text-xs font-normal text-gray-500">
                {torque?.unit ?? "Nm"}
              </span>
            </p>
          </div>


          <div className="pl-4">
            <p className="text-sm tracking-wider text-gray-400"> Top Speed </p>

            <p className=" text-sm font-semibold mt-2 text-gray-300">
              {car.topSpeed.value}
              <span className="ml-1 text-xs font-normal text-gray-500">
                {car.topSpeed.unit}
              </span>
            </p>
          </div>

        </div>


        <div className="mt-7 flex items-end justify-between gap-4">

          <div>
            <p className="text-xs  tracking-wider text-gray-400"> Starting from </p>
            <p className="mt-1 text-xl font-semibold text-gray-450"> {car.price.formatted} </p>

            {car.price.taxIncluded && (
              <p className="mt-1 text-xs text-gray-400"> Incl. {car.price.tax} </p>
            )}
          </div>

          <button
            type="button"
            className="rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#171515]"
          >
            Explore
          </button>

        </div>


      </div>
    </article>
  );
};

export default ElectricCarCard;