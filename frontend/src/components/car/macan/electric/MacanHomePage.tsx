import { Macan } from '@/data/Macan_Car_model/Macan';
import HeroSection from "@/components/common/HeroSection";
import Features from '@/components/common/Features'
import Footer from "@/components/common/Footer";
import MacanTechnicalData from './MacanTechnicalData';


const MacanHomePage = () => {

    const modelId = "macan";
    const variantId = "electric";
    const carId = "macan-electric";

    const car = Macan.flatMap((model) => model.variants.flatMap((variant) => variant.cars)).find(
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
            <MacanTechnicalData technicalData={car.technical_data} />
            <Footer />

        </div>
    );
};

export default MacanHomePage;