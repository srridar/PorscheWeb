import { car_911 } from "@/data/911_Car_model/911";
import type { CarData } from "@/data/911_Car_model/type/911Types";

import HeroSection from "@/components/common/HeroSection";
import Features from "@/components/common/Features";
import Footer from "@/components/common/Footer";
import VideoCard from "@/components/common/VideoCard";

import Carrera_911_TechnicalData from "./911_CarreraTechnicalData";

import { X } from "lucide-react";
import { useState } from "react";

const Carrera_911_HomePage = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    const modelId = "911";
    const variantId = "carrera";
    const carId = "911-carrera";

    const car: CarData | undefined = car_911
        .flatMap((model) =>
            model.variants.flatMap((variant) => variant.cars)
        )
        .find(
            (car) =>
                car.modelId === modelId &&
                car.variantId === variantId &&
                car.carId === carId
        );

    if (!car) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-[#0A0A0A] text-white">
                <h1 className="scale-y-75 text-2xl">
                    Car not found
                </h1>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#0A0A0A] text-white">

            <HeroSection car={car} />

            <Features car={car} />

            <div className="mx-auto max-w-7xl px-3">

                <button
                    type="button"
                    onClick={() => setMenuOpen(true)}
                    className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-gray-200"
                >
                    Technical data
                </button>

  
                <div
                    onClick={() => setMenuOpen(false)}
                    className={`fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm transition-opacity duration-500 ${
                        menuOpen
                            ? "pointer-events-auto opacity-100"
                            : "pointer-events-none opacity-0"
                    }`}
                />


                <aside
                    className={`fixed right-0 top-0 z-[70] h-screen w-full overflow-y-auto bg-black text-white shadow-2xl transition-transform duration-500 ease-in-out sm:w-[80%] lg:w-1/2 ${
                        menuOpen
                            ? "translate-x-0"
                            : "translate-x-full"
                    }`}
                >

                    <div className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-white/10 bg-black/90 px-6 backdrop-blur-md sm:px-10">

                        <h2 className="text-lg font-semibold"> Technical Data </h2>

                        <button
                            type="button"
                            onClick={() => setMenuOpen(false)}
                            className="flex h-9 w-9 items-center justify-center rounded-full transition hover:bg-white/10"
                            aria-label="Close technical data"
                        >
                            <X className="h-5 w-5" />
                        </button>

                    </div>

                    <div className="px-4 py-6 sm:px-8 lg:px-10">
                        <Carrera_911_TechnicalData technicalData={car.technical_data}/>
                    </div>

                </aside>
            </div>

            <VideoCard src={car.featuredVideo} />

            <Footer />

        </div>
    );
};

export default Carrera_911_HomePage;