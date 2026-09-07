
import { useParams } from "react-router-dom";

import { Cayenne_Car } from "../../../data/Cayenne_Car_model/Cayenne";
import { Macan } from "../../../data/Macan_Car_model/Macan";
import { Taycan } from "../../../data/Taycan_Car_model/Taycan";
import HeroSection from "../../common/HeroSection";
import EVFeatures from "../../common/Features";
import EV_CarTechnicalSection from "./EV_CarTechnicalSection";
import Footer from "@/components/common/Footer";

interface EVCarHomeProps {
    modelId?: string;
    variantId?: string;
    carId?: string;
}

const EVCarHomePage = () => {

    const { modelId, variantId, carId } = useParams<EVCarHomeProps>();


    const Cayenne_EV = Cayenne_Car.flatMap((model) =>
        model.variants.flatMap((variant) =>
            variant.cars.filter(
                (car) => car.fuelType === "Electric"
            )
        )
    );


    const Taycan_EV = Taycan.flatMap((model) =>
        model.variants.flatMap((variant) =>
            variant.cars.filter(
                (car) => car.fuelType === "Electric"
            )
        )
    );


    const Macan_EV = Macan.flatMap((model) =>
        model.variants.flatMap((variant) =>
            variant.cars.filter(
                (car) => car.fuelType === "Electric"
            )
        )
    );


    const All_EV_Cars = [
        ...Cayenne_EV,
        ...Taycan_EV,
        ...Macan_EV
    ];

    console.log("All Electric Cars:", All_EV_Cars);

    const car = All_EV_Cars.find(
        (car) =>
            car.modelId === modelId &&
            car.variantId === variantId &&
            car.carId === carId
    );


    if (!car) {
        return (
            <div className="min-h-screen bg-[#0A0A0A] text-white flex items-center justify-center">
                <h1 className="text-2xl scale-y-75"> Car not found  </h1>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#0A0A0A] text-white">

                <HeroSection car={car} />
          
                <EVFeatures car={car}/>
       
                <EV_CarTechnicalSection technicalData={car?.technical_data}  />
             
                <Footer/>


        </div>
    );
};

export default EVCarHomePage;