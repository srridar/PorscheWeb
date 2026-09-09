import { Search } from "lucide-react";
import Header from "@/components/common/Header";
import { ArrowDown } from "lucide-react";
import { useState, useMemo } from "react";
import { car_list } from '@/data/car_card_data/all_car';
import GasolineCarCard from "./GasolineCarCard";
import ElectricCarCard from "./ElectricCarCard";
import Footer from "../common/Footer";



const CarSelection = () => {

    const FILTER_TYPES = ["All", "Electric", "Gasoline"] as const;
    const MODEL_CATEGORIES = ["All Models", "911", "Taycan", "Panamera", "Macan", "Cayenne"] as const;

    const [selectedType, setSelectedType] = useState<(typeof FILTER_TYPES)[number]>("All");
    const [selectedModel, setSelectedModel] = useState<(typeof MODEL_CATEGORIES)[number]>("All Models");
    const [searchQuery, setSearchQuery] = useState("");


    const gasoline_cars = car_list.cars.gasoline;
    const electric_cars = car_list.cars.electric;

    const filteredCars = useMemo(() => {

        const allCars = [...gasoline_cars, ...electric_cars];

        return allCars.filter((car) => {

            const matchType = selectedType === 'All' || car.fuelType?.toLowerCase() === selectedType.toLowerCase();
            const matchModel = selectedModel === "All Models" || car?.modelId?.toLowerCase() === selectedModel.toLowerCase();

            const query = searchQuery.toLowerCase().trim();

            const matchSearch = query === "" || car.name.toLowerCase().includes(query)
                || car.modelId?.toLowerCase().includes(query) || car.variantId?.toLowerCase().includes(query);

            return matchType && matchModel && matchSearch;


        })

    }, [
        gasoline_cars,
        electric_cars,
        selectedType,
        selectedModel,
        searchQuery,
    ]);


    const filteredGasolineCars = filteredCars.filter(
        (car) => car.fuelType.toLowerCase() === "gasoline"
    );

    const filteredElectricCars = filteredCars.filter(
        (car) => car.fuelType.toLowerCase() === "electric"
    );

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

            <section className=" bg-neutral-950 px-6 py-12 text-white sm:px-10 lg:px-16 ">

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

                <div className="flex flex-col mt-8 gap-4 lg:flex-row lg:items-center lg:justify-between">

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
            </section>


            {
                filteredGasolineCars.length > 0 && (
                    <section className="bg-neutral-950 px-6 py-12 text-white sm:px-10 lg:px-16">
                        <div className="mx-auto max-w-7xl">

                            <div>
                                <div className="my-8 pb-4 rounded w-60 p-2 bg-[#181717aa]">
                                    <h2 className="text-xl  font-semibold text-[#7b7272]">Gasoline Machines </h2>
                                </div>
                                <div className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:grid-cols-3">
                                    {filteredGasolineCars.map((car) => (
                                        <div key={car.carId}>
                                            <GasolineCarCard car={car} />
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </section>

                )
            }




            {
                filteredElectricCars.length > 0 && (
                    <section className="bg-black px-6 py-12 text-white sm:px-10 lg:px-16">

                        <div className=" w-full">
                            <div className="my-8 pb-4 rounded w-60 p-2 bg-[#181717aa]">
                                <h2 className="text-xl   font-semibold text-[#7b7272]">Electric Machines </h2>
                            </div>



                            <div className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:grid-cols-3">
                                {filteredElectricCars.map((car) => (
                                    <div key={car.carId}>
                                        <ElectricCarCard car={car} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                )
            }



            <Footer />

        </div>
    );
};

export default CarSelection;