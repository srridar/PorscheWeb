
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const exteriorImages = [
    {
        key: "front",
        title: "Front View",
        description:
            "The distinctive front design gives the Taycan its unmistakable Porsche character.",
    },
    {
        key: "rear",
        title: "Rear View",
        description:
            "The sculpted rear design combines elegance with the unmistakable Taycan identity.",
    },
    {
        key: "side",
        title: "Side View",
        description:
            "The sleek side profile highlights the Taycan's aerodynamic proportions.",
    },
    {
        key: "headlights",
        title: "Headlights",
        description:
            "Advanced LED headlights provide a distinctive appearance and excellent illumination.",
        category: "lights",
    },
    {
        key: "taillights",
        title: "Taillights",
        description:
            "The signature rear light strip emphasizes the wide and sporty stance of the Taycan.",
        category: "lights",
    },
    {
        key: "Indicators",
        title: "Indicators",
        description:
            "Distinctive indicators complement the Taycan's modern lighting design.",
        category: "lights",
    },
    {
        key: "frontWheel",
        title: "Front Wheel",
        description:
            "The aerodynamic wheel design contributes to the Taycan's sporty appearance and efficiency.",
        category: "wheels",
    },
    {
        key: "rearWheel",
        title: "Rear Wheel",
        description:
            "The rear wheels complement the Taycan's powerful stance and dynamic proportions.",
        category: "wheels",
    },
];

const ExteriorCarousel = ({ car }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const currentImage = exteriorImages[currentIndex];

    const getImage = () => {
        if (currentImage.category) {
            return car.images.exterior?.[currentImage.category]?.[currentImage.key];
        }

        return car.images.exterior?.[currentImage.key];
    };

    const nextSlide = () => {
        setCurrentIndex( (prev) => (prev + 1) % exteriorImages.length);
    };

    const previousSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + exteriorImages.length) % exteriorImages.length);
    };

    return (
        <section className="w-full p-2 mt-4">

            <div className="relative overflow-hidden rounded-2xl">
                <button
                    onClick={previousSlide}
                    className="absolute left-5 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-gray-500 text-black transition hover:bg-white"
                >
                    <ChevronLeft size={22} />
                </button>


                <div
                    key={currentImage.key}
                    className="relative mx-auto aspect-[16/8] w-4.5/5 overflow-hidden rounded-2xl bg-cover object-cover bg-top transition-all duration-500"
                    style={{  backgroundImage: `url(${getImage()})`}}
                >

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    <div className="absolute bottom-0 left-0 z-10 max-w-xl p-8 text-white sm:p-12">
                        <h2 className="mb-4 text-3xl font-mono sm:text-5xl"> {currentImage.title} </h2>
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

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8">

                {exteriorImages.map((item, index) => {
                    const image = item.category
                        ? car.images.exterior?.[item.category]?.[item.key]
                        : car.images.exterior?.[item.key];

                    return (
                        <button
                            key={`${item.category || "exterior"}-${item.key}`}
                            onClick={() => setCurrentIndex(index)}
                            className={`group relative aspect-[4/2] overflow-hidden rounded-xl ${currentIndex === index
                                    ? "ring-2 ring-black"
                                    : ""
                                }`}
                        >

                            <img
                                src={image}
                                alt={item.title}
                                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-black/30" />

                            <p className="absolute bottom-3 left-3 text-sm text-white"> {item.title} </p>

                        </button>
                    );
                })}

            </div>

        </section>
    );
};

export default ExteriorCarousel;

