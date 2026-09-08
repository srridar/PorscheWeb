
import { Macan } from '@/data/Macan_Car_model/Macan';
import HeroSection from "@/components/common/HeroSection";
import Features from '@/components/common/Features'
import Footer from "@/components/common/Footer";
import MacanGasTechnicalData from './MacanGasTechnicalData';


const MacanGasHomePage = () => {

    const modelId = "macan";
    const variantId = "gasoline";
    const carId = "macan_gasoline";

    const car = Macan.flatMap((model) => model.variants.flatMap((variant) => variant.cars)).find(
        (car) =>
            car.modelId === modelId &&
            car.variantId === variantId &&
            car.carId === carId
    );

    console.log("macan data "+ car);

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
            <MacanGasTechnicalData technicalData={car.technical_data} />
            <Footer />

        </div>
    );
};

export default MacanGasHomePage;