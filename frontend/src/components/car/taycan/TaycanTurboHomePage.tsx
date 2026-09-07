
import { Taycan } from '@/data/Taycan_Car_model/Taycan';
import HeroSection from "@/components/common/HeroSection";
import Features from '@/components/common/Features'
import Footer from "@/components/common/Footer";
import TaycanTurboTechnicalData from './TaycanTurboTechData';


const TaycanTurboHomePage = () => {

    const modelId = "taycan";
    const variantId = "electric";
    const carId = "taycan-turbo";

    const car = Taycan.flatMap((model) => model.variants.flatMap((variant) => variant.cars)).find(
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
            <TaycanTurboTechnicalData technicalData={car.technical_data} />
            <Footer />


        </div>
    );
};

export default TaycanTurboHomePage;