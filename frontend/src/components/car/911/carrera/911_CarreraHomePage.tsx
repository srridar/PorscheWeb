
import { car_911 } from '@/data/911_Car_model/911'
import HeroSection from "@/components/common/HeroSection";
import Features from '@/components/common/Features'
import Footer from "@/components/common/Footer";
import PanameraTechnicalData from './911_CarreraTechnicalData';


const Carrera_911_HomePage = () => {

    const modelId = "911";
    const variantId = "carrera";
    const carId = "911-carrera";

    const car = car_911.flatMap((model) =>
        model.variants.flatMap((variant) => variant.cars)).find(
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
            <Features car={car} /> 
            <PanameraTechnicalData technicalData={car.technical_data} />

            <Footer />


        </div>
    );
};

export default Carrera_911_HomePage;