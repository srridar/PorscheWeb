import { Search } from "lucide-react";
import Header from "@/components/common/Header";
import { ArrowDown } from "lucide-react";
import { useState, useMemo } from "react";
import { car_911 } from '@/data/911_Car_model/911';
import { Cayenne_Car } from '@/data/Cayenne_Car_model/Cayenne';
import { Macan } from '@/data/Macan_Car_model/Macan'
import { Panamera_Car } from '@/data/Panamera_Car_model/Panamera'
import { Taycan } from '@/data/Taycan_Car_model/Taycan'

const CarSelection = () => {

    const FILTER_TYPES = ["All", "Electric", "Gasoline"] as const;
    const MODEL_CATEGORIES = ["All Models", "911", "Taycan", "Panamera", "Macan", "Cayenne"] as const;

    const [selectedType, setSelectedType] = useState<(typeof FILTER_TYPES)[number]>("All");
    const [selectedModel, setSelectedModel] = useState<(typeof MODEL_CATEGORIES)[number]>("All Models");
    const [searchQuery, setSearchQuery] = useState("");

    const allCars = useMemo(() => {
        const cars911 = car_911.flatMap((model) =>
            model.variants.flatMap((variant) => variant.cars)
        );

        const carsTaycan = Taycan.flatMap((model) =>
            model.variants.flatMap((variant) => variant.cars)
        );

        const carsPanamera = Panamera_Car.flatMap((model) =>
            model.variants.flatMap((variant) => variant.cars)
        );

        const carsMacan = Macan.flatMap((model) =>
            model.variants.flatMap((variant) => variant.cars)
        );

        const carsCayenne = Cayenne_Car.flatMap((model) =>
            model.variants.flatMap((variant) => variant.cars)
        );

        return [
            ...cars911,
            ...carsTaycan,
            ...carsPanamera,
            ...carsMacan,
            ...carsCayenne,
        ];
    }, []);

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


    const gasoline_911 = car_911.flatMap((model) =>
        model.variants.flatMap((variant) =>
            variant.cars.filter(
                (car) => car.fuelType === "Electric"
            )
        )
    );

    const gasoline_panamera = Panamera_Car.flatMap((model) =>
        model.variants.flatMap((variant) =>
            variant.cars.filter(
                (car) => car.fuelType === "Electric"
            )
        )
    );

    const gasoline_macan = Macan.flatMap((model) =>
        model.variants.flatMap((variant) =>
            variant.cars.filter(
                (car) => car.fuelType === "Electric"
            )
        )
    );

    const gasoline_cayenne = Cayenne_Car.flatMap((model) =>
        model.variants.flatMap((variant) =>
            variant.cars.filter(
                (car) => car.fuelType === "Electric"
            )
        )
    );

    const All_Gas_Cars = [
        ...gasoline_911,
        ...gasoline_panamera,
        ...gasoline_macan,
        ...gasoline_cayenne
    ]


    const All_EV_Cars = [
        ...Cayenne_EV,
        ...Taycan_EV,
        ...Macan_EV
    ];

    return (
        <div className="min-h-screen bg-white">

            <section className="relative min-h-[85vh] w-full overflow-hidden bg-black text-white">
                <Header />

                <div
                    className="absolute inset-0 bg-cover bg-no-repeat opacity-80"
                    style={{
                        backgroundImage: `url("/images/Porsche.png")`,
                        backgroundPosition: "right center",
                    }}
                />

                <div className="absolute inset-0 bg-black/60" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />

                <div className="relative z-20 mx-auto flex min-h-[calc(85vh-100px)] max-w-7xl flex-col justify-end pb-24 px-6 sm:px-10 lg:px-16">
                    <div className="max-w-2xl">
                        <h1 className="text-4xl font-light tracking-tight text-white sm:text-5xl lg:text-6xl">
                            Find Your Porsche
                        </h1>
                        <p className="mt-4  font-normal leading-relaxed text-zinc-300/80 sm:text-sm">
                            Explore our range of sports cars, SUVs, and electric vehicles.
                            Discover the Porsche that fits your driving experience.
                        </p>
                    </div>
                </div>


                <div className="absolute bottom-6 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-1.5 md:flex">
                    <span className="text-xs uppercase tracking-widest text-zinc-400">
                        Explore models
                    </span>
                    <ArrowDown className="h-5 w-5  text-zinc-400" />
                </div>
            </section>


            <section className="bg-neutral-950 px-6 py-12 text-white sm:px-10 lg:px-16">
                <div className="mx-auto max-w-7xl">

                    <header className="mb-12 space-y-8">

                        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
                            <div>
                                <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-zinc-400">
                                    Models
                                </span>
                                <h2 className="text-3xl font-light tracking-tight text-zinc-100 sm:text-4xl">
                                    Choose your Porsche
                                </h2>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {FILTER_TYPES.map((type) => {
                                    const isActive = selectedType === type;
                                    return (
                                        <button
                                            key={type}
                                            onClick={() => setSelectedType(type)}
                                            className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 focus:ring-offset-neutral-950 ${isActive
                                                ? "bg-zinc-100 text-zinc-950 shadow-sm"
                                                : "bg-zinc-900/80 text-zinc-400 border border-zinc-800 hover:bg-zinc-800 hover:text-zinc-200"
                                                }`}
                                        >
                                            {type}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

                            <div className="flex flex-wrap gap-2">
                                {MODEL_CATEGORIES.map((model) => {
                                    const isActive = selectedModel === model;
                                    return (
                                        <button
                                            key={model}
                                            onClick={() => setSelectedModel(model)}
                                            className={`rounded-lg px-4 py-2 text-sm  transition-all duration-200 ${isActive
                                                ? "bg-zinc-100 text-zinc-950 "
                                                : "bg-zinc-900 text-zinc-400 "
                                                }`}
                                        >
                                            {model}
                                        </button>
                                    );
                                })}
                            </div>


                            <div className="relative w-full lg:max-w-xs">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <Search className="h-4 w-4 text-zinc-400" />
                                </div>
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Search model or variant..."
                                    className="w-full rounded border   py-2 pl-10 pr-4 text-sm text-zinc-100 placeholder-zinc-500 transition  focus:outline-none focus:ring-1 focus:ring-zinc-500"
                                />
                            </div>
                        </div>
                    </header>


                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <article className="group overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 transition-all duration-300 hover:border-zinc-700 hover:shadow-2xl hover:shadow-black/60">

                            <div className="relative aspect-[16/10] overflow-hidden bg-zinc-950/60 p-4">
                                <img
                                    src="/images/cars/911/911carrera/911-carrera-3.avif"
                                    alt="Porsche 911 Carrera"
                                    className="h-full w-full object-contain transition-transform duration-500 ease-out group-hover:scale-105"
                                />
                            </div>


                            <div className="p-6">
                                <div className="mb-6">
                                    <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-400">
                                        911 · Carrera
                                    </span>
                                    <h3 className="mt-1 text-2xl font-light tracking-tight text-zinc-100">
                                        911 Carrera
                                    </h3>
                                </div>


                                <div className="grid grid-cols-3 gap-2 border-t border-zinc-800/80 pt-4 text-left">
                                    <div>
                                        <p className="text-[10px] uppercase tracking-wider text-zinc-500">Power</p>
                                        <p className="mt-0.5 text-sm font-medium text-zinc-200">394 PS</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] uppercase tracking-wider text-zinc-500">0–100 km/h</p>
                                        <p className="mt-0.5 text-sm font-medium text-zinc-200">4.1 s</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] uppercase tracking-wider text-zinc-500">Top Speed</p>
                                        <p className="mt-0.5 text-sm font-medium text-zinc-200">294 km/h</p>
                                    </div>
                                </div>


                                <button className="mt-6 w-full rounded-lg border border-zinc-700 bg-transparent py-2.5 text-xs font-semibold uppercase tracking-widest text-zinc-200 transition-all duration-200 hover:border-zinc-100 hover:bg-zinc-100 hover:text-zinc-950 focus:outline-none">
                                    Explore Model
                                </button>
                            </div>
                        </article>

                    </div>
                </div>
            </section>

        </div>
    );
};

export default CarSelection;