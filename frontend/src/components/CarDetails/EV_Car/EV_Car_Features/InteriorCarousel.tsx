
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const interiorImages = [
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

const InteriorCarousel = ({ car }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const currentImage = interiorImages[currentIndex];

    const nextSlide = () => {
        setCurrentIndex(
            (prev) => (prev + 1) % interiorImages.length
        );
    };

    const previousSlide = () => {
        setCurrentIndex(
            (prev) =>
                (prev - 1 + interiorImages.length) %
                interiorImages.length
        );
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
                    className="relative aspect-[16/8] w-4.5/5 rounded-2xl mx-auto bg-cover bg-center transition-all duration-500"
                    style={{ backgroundImage: `url(${car.images.interior?.[currentImage.key]})`, }}
                >

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 z-10 max-w-xl p-4 text-white sm:p-4">

                        <h2 className="mb-4 text-3xl font-mono sm:text-5xl"> {currentImage.title} </h2>
                        <p className="text-sm leading-7 text-white/80 sm:text-base">  {currentImage.description} </p>
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

                {interiorImages.map((item, index) => (
                    <button
                        key={item.key}
                        onClick={() => setCurrentIndex(index)}
                        className={`group relative aspect-[4/2] overflow-hidden rounded-xl ${currentIndex === index ? "ring-2 ring-black" : ""}`}
                    >

                        <img src={car.images.interior?.[item.key]} alt={item.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-black/30" />

                        <p className="absolute bottom-3 left-3 text-sm text-white">
                            {item.title}
                        </p>

                    </button>
                ))}

            </div>

        </section>
    );
};

export default InteriorCarousel;
