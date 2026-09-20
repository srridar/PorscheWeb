
import type { CarData } from "@/data/911_Car_model/type/911Types";
import type {CayenneEV, CayenneGAS} from '@/data/Cayenne_Car_model/CayenneTypes'
import type { MacanCar } from "@/data/Macan_Car_model/macanType";
import type {PanameraCar} from "@/data/Panamera_Car_model/panameraType"
import type { TaycanCar} from "@/data/Taycan_Car_model/taycanType"

import InteriorCarousel from "../CarDetails/EV_Car/EV_Car_Features/InteriorCarousel";
import ExteriorCarousel from "../CarDetails/EV_Car/EV_Car_Features/ExteriorCarousel";
import EvCarKeyFeatures from "./EvCarKeyFeatures";
import GasCarKeyFeatures from "./GasCarKeyFeatures";



const EVFeatures = ({ car }: { car: CarData | CayenneEV | CayenneGAS | MacanCar | PanameraCar | TaycanCar}) => {


  return (
    <section className=" px-6 py-20 text-[#8f8282]  sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl ">

        <div className="text-center w-full ">
          <p className="mb-7 text-5xl font-semibold capitalize ">  {car.name} </p>
          <span className="mb-3 bg-white  text-center px-3 text-sm font-medium border rounded-2xl lowercase text-gray-700"> {car.fuelType} </span>
          <div className="mt-6 flex flex-col items-center gap-2 ">
            <h2 className="text-xl font-medium tracking-tight ">  {car?.price?.formatted} {car?.price?.currency} </h2>
            <p className="mt-1 text-sm ">  Tax included · Price increases as you add features. </p>
          </div>
        </div>

        <div className="mt-16 ">
          <div className="grid md:grid-cols-3">
            <div className="border-b  p-7 md:border-b-0 ">
              <span className="mt-3 inline-block rounded border border-white/10 px-3 py-1 text-xs font-semibold ">
                {car.transmission}
              </span>

              <p className="mt-4 text-sm leading-6 ">
                Seamless power delivery for a smooth and responsive driving experience.
              </p>
            </div>

            <div className="border-b  p-7 md:border-b-0 ">

              <span className="mt-3 inline-block rounded border border-white/10 px-3 py-1 text-xs font-semibold">
                {car.driveType}
              </span>

              <p className="mt-4 text-sm leading-6 ">
                Intelligent power distribution for enhanced traction and confident handling.
              </p>
            </div>


            <div className="p-7">
              <span className="mt-3 inline-block rounded border border-white/10 px-3 py-1 text-xs font-semibold ">
                {car.fuelType}
              </span>

              <p className="mt-4 text-sm leading-6 ">  Electric performance with instant response, efficiency, and refinement. </p>
            </div>
          </div>
        </div>
        {
          car.fuelType === "Gasoline" ? (<GasCarKeyFeatures carId={car.carId} />) : (<EvCarKeyFeatures carId={car.carId} />)
        }
        <div className="mt-20">
          <div className="  ">
            <div className="flex justify-center gap-1 p-2 rounded-full mb-10">
              <h3 className="rounded-full  px-3 py-1 text-4xl text-center font-mono ">
                Experience Every Detail
              </h3>
            </div>

            <InteriorCarousel car={car} />
          </div>
        </div>

        <div className="mt-20">
          <div className="">
            <div className="flex justify-center gap-1 p-2 rounded-full mb-10">
              <h3 className="rounded-full  px-3 py-1 text-4xl text-center font-mono ">
                Every Line Has a Purpose
              </h3>
            </div>

            <ExteriorCarousel car={car} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EVFeatures;