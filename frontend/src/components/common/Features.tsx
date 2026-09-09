import { Car } from "lucide-react";


import InteriorCarousel from "../CarDetails/EV_Car/EV_Car_Features/InteriorCarousel";
import ExteriorCarousel from "../CarDetails/EV_Car/EV_Car_Features/ExteriorCarousel";
import EvCarKeyFeatures from "./EvCarKeyFeatures";
import GasCarKeyFeatures from "./GasCarKeyFeatures";

interface Car {
  carId: string;
  modelId: string;
  variantId: string;
  name: string;

  hero: {
    title: string;
    description: string;
  };

  year: number;
  fuelType: string;
  driveType: string;
  transmission: string;

  price?: {
    amount: number;
    currency: string;
    formatted: string;
    taxIncluded: boolean;
    tax: string;
  };

  images?: {
    hero: string;

    bootSpace?: {
      front?: string;
      rear?: string;
    }

    exterior?: {
      front?: string;
      rear?: string;
      side?: string;
    };

    lights?: {
      headlights?: string;
      taillights?: string;
      frontIndicators?: string;
      rearIndicators?: string;
    };

    wheels?: {
      frontWheel?: string;
      rearWheel?: string;
    };

    interior?: {
      interior?: string;
      dashboard?: string;
      frontSeats?: string;
      rearSeats?: string;
      centerConsole?: string;
    };

    gallery?: string[];
  };

  technical_data?: {
    capacities?: {
      luggageCompartment?: {
        front?: {
          value: number;
          unit: string;
        };

        rear?: {
          value: number;
          unit: string;
          variant?: string;
        };
      };
    };
  }

}

const EVFeatures = ({ car }: { car: Car }) => {
  const frontLuggage = car?.technical_data?.capacities?.luggageCompartment?.front;
  const rearLuggage = car?.technical_data?.capacities?.luggageCompartment?.rear;

  return (
    <section className=" px-6 py-20 text-gray-400 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl ">

        <div className="text-center w-full ">
          <p className="mb-7 text-5xl font-medium capitalize ">
            {car.name}
          </p>
          <span className="mb-3 bg-white  text-center px-3 text-sm font-medium border rounded-2xl lowercase text-gray-700">
            {car.fuelType}
          </span>

          <div className="mt-6 flex flex-col items-center gap-2 ">
            <h2 className="text-xl font-medium tracking-tight text-gray-300">
              {car?.price.formatted} {car?.price.currency}
            </h2>

            <p className="mt-1 text-sm text-gray-400">
              Tax included · Price increases as you add features.
            </p>
          </div>
        </div>

        <div className="mt-16 ">
          <div className="grid md:grid-cols-3">

            <div className="border-b  p-7 md:border-b-0 ">

              <span className="mt-3 inline-block rounded border border-white/10 px-3 py-1 text-xs font-semibold text-white">
                {car.transmission}
              </span>

              <p className="mt-4 text-sm leading-6 text-gray-200">
                Seamless power delivery for a smooth and responsive driving experience.
              </p>
            </div>


            <div className="border-b  p-7 md:border-b-0 ">

              <span className="mt-3 inline-block rounded border border-white/10 px-3 py-1 text-xs font-semibold text-white">
                {car.driveType}
              </span>

              <p className="mt-4 text-sm leading-6 text-gray-200">
                Intelligent power distribution for enhanced traction and confident handling.
              </p>
            </div>


            <div className="p-7">

              <span className="mt-3 inline-block rounded border border-white/10 px-3 py-1 text-xs font-semibold text-white">
                {car.fuelType}
              </span>

              <p className="mt-4 text-sm leading-6 text-gray-200">
                Electric performance with instant response, efficiency, and refinement.
              </p>
            </div>

          </div>
        </div>

        {
          car.fuelType === "Gasoline" ? (<GasCarKeyFeatures carId={car.carId} />) : (<EvCarKeyFeatures carId={car.carId} />)
        }

        <div className="mt-20">
          <div className="  ">
            <div className="flex justify-center gap-1 p-2 rounded-full mb-10">
              <h3 className="rounded-full  px-3 py-1 text-4xl text-center font-mono text-white">
                Experience Every Detail
              </h3>
            </div>

            <InteriorCarousel car={car} />
          </div>
        </div>

        <div className="mt-20">
          <div className="">
            <div className="flex justify-center gap-1 p-2 rounded-full mb-10">
              <h3 className="rounded-full  px-3 py-1 text-4xl text-center font-mono text-white">
                Every Line Has a Purpose
              </h3>
            </div>

            <ExteriorCarousel car={car} />
          </div>
        </div>

        {(rearLuggage?.value) && (frontLuggage?.value) && (
          <div className="mt-20">
            <div className="flex flex-col items-center justify-center gap-5 sm:flex-row sm:items-center">
              <h3 className="mt-3 text-center text-3xl font-mono tracking-tight">
                Space for every journey
              </h3>
            </div>

            <div className="mt-10 flex justify-center gap-20">
              {frontLuggage && (
                <div className="group relative w-full max-w-6xl overflow-hidden rounded-xl bg-[#434141]">
                  <div className="relative aspect-[6/5] overflow-hidden">
                    <img
                      src={car.images.bootSpace?.front}
                      alt="Front luggage compartment"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    <div className="absolute bottom-0 left-0 z-10 p-6 text-white sm:p-7">
                      <p className="text-xl uppercase tracking-[0.10em] text-white/70">
                        Front luggage compartment
                      </p>

                      <div className="mt-3 flex items-baseline gap-2">
                        <span className="text-4xl font-medium tracking-tight">
                          {frontLuggage?.value ?? "—"}
                        </span>

                        <span className="text-sm text-white/70">
                          {frontLuggage?.unit}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {rearLuggage && (
                <div className="group relative w-full max-w-6xl overflow-hidden rounded-xl bg-[#434141]">
                  <div className="relative aspect-[6/5] overflow-hidden">
                    <img
                      src={car.images.bootSpace?.rear}
                      alt="Rear luggage compartment"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    <div className="absolute bottom-0 left-0 z-10 p-6 text-white sm:p-7">
                      <p className="text-xl uppercase tracking-[0.15em] text-white/90">
                        Rear luggage compartment
                      </p>

                      <div className="mt-3 flex items-baseline gap-2">
                        <span className="text-4xl font-medium tracking-tight">
                          {rearLuggage?.value ?? "—"}
                        </span>

                        <span className="text-sm text-white/70">
                          {rearLuggage?.unit}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )
        }

      </div>
    </section>
  );
};

export default EVFeatures;