import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import type { CarData } from "@/data/911_Car_model/type/911Types";
import type {
    CayenneEV,
    CayenneGAS,
} from "@/data/Cayenne_Car_model/CayenneTypes";
import type { MacanCar } from "@/data/Macan_Car_model/macanType";
import type { PanameraCar } from "@/data/Panamera_Car_model/panameraType";
import type { TaycanCar } from "@/data/Taycan_Car_model/taycanType";


// --------------------------------------------------
// Interior image keys
// --------------------------------------------------

type InteriorKey =
    | "interior"
    | "dashboard"
    | "frontSeats"
    | "rearSeats"
    | "centerConsole";


// --------------------------------------------------
// Interior carousel data
// --------------------------------------------------

interface InteriorImage {
    key: InteriorKey;
    title: string;
    description: string;
}

const interiorImages: InteriorImage[] = [
    {
        key: "interior",
        title: "Interior",
        description:
            "A refined interior combining premium materials, comfort and a driver-focused cockpit.",
    },
    {
        key: "dashboard",
        title: "Dashboard",
        description:
            "The modern dashboard places essential information and controls directly in the driver's view.",
    },
    {
        key: "frontSeats",
        title: "Front Seats",
        description:
            "Sporty front seats provide excellent support while maintaining premium comfort.",
    },
    {
        key: "rearSeats",
        title: "Rear Seats",
        description:
            "Comfortable rear seating designed for everyday usability and long journeys.",
    },
    {
        key: "centerConsole",
        title: "Center Console",
        description:
            "The center console integrates intuitive controls with a clean and sophisticated design.",
    },
];


// --------------------------------------------------
// Supported car types
// --------------------------------------------------

type InteriorCarouselCar =
    | CarData
    | CayenneEV
    | CayenneGAS
    | MacanCar
    | PanameraCar
    | TaycanCar;



const InteriorCarousel = ({ car }: { car: InteriorCarouselCar }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentImage = interiorImages[currentIndex];

    const nextSlide = () => {
        setCurrentIndex( (prev) => (prev + 1) % interiorImages.length);
    };

    const previousSlide = () => {
        setCurrentIndex( (prev) => (prev - 1 + interiorImages.length) % interiorImages.length);
    };

    const getImage = () => {
        return car.images.interior[currentImage.key];
    };

    return (
        <section className="w-full p-2">
            <div className="relative overflow-hidden rounded-2xl">

                <button
                    onClick={previousSlide}
                    className="absolute left-5 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-gray-500 text-black transition hover:bg-white"
                >
                    <ChevronLeft size={22} />
                </button>


    
                <div
                    key={currentImage.key}
                    className="relative mx-auto aspect-[16/8] w-4/5 rounded-2xl bg-cover bg-center transition-all duration-500"
                    style={{
                        backgroundImage: `url(${getImage()})`,
                    }}
                >

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    <div className="absolute bottom-0 left-0 z-10 max-w-xl p-4 text-white sm:p-8">
                        <h2 className="mb-4 font-mono text-3xl sm:text-5xl">  {currentImage.title} </h2>
                        <p className="text-sm leading-7 text-white/80 sm:text-base"> {currentImage.description} </p>
                    </div>
                </div>

                <button
                    onClick={nextSlide}
                    className="absolute right-5 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-gray-500 text-black transition hover:bg-white"
                >
                    <ChevronRight size={22} />
                </button>

            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">

                {interiorImages.map((item, index) => {
                    const image = car.images.interior[item.key];
                    return (
                        <button
                            key={item.key}
                            onClick={() => setCurrentIndex(index)}
                            className={`group relative aspect-[4/2] overflow-hidden rounded-xl ${
                                currentIndex === index
                                    ? "ring-2 ring-black"
                                    : ""
                            }`}
                        >
                            <img  src={image}  alt={item.title}  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"/>
                            <div className="absolute inset-0 bg-black/30" />
                            <p className="absolute bottom-3 left-3 text-sm text-white"> {item.title} </p>

                        </button>
                    );
                })}
            </div>
        </section>
    );
};

export default InteriorCarousel;