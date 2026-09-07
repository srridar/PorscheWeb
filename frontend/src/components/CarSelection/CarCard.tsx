import { ArrowUpRight } from 'lucide-react';

interface CarCardProps {
    carId?: string;
    modelId?: string;
    name?: string;

    price?: {
        formatted?: string;
    };

    specifications?: {
        fuelType?: string;
        driveType?: string;
        transmission?: string;
    };

    performance?: {
        topSpeed?: {
            value?: number;
            unit?: string;
        };

        acceleration?: {
            zeroTo100?: {
                standard?: {
                    value?: number;
                    unit?: string;
                };
            };
        };
    };

    images?: {
        hero?: string;
        exterior?: {
            front?: string;
            rear?: string;
            side?: string;
        }
    };
}


const CarCard = ({ car }: { car: CarCardProps }) => {

    return (
        <article className="group overflow-hidden rounded-2xl  bg-[#111111] transition-all duration-500 hover:-translate-y-1 ">

            <div className="relative aspect-[16/9] overflow-hidden bg-[#181818]">

                {car.images?.hero && (
                    <img
                        src={car.images.hero}
                        alt={car.name ?? "Porsche"}
                        className="h-full w-full object-contain p-6 transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                )}

                <div className="absolute left-5 top-5">
                    <span className="rounded-full bg-black/70 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-white/70 backdrop-blur-md">
                        {car.modelId}
                    </span>
                </div>

    
                <button
                    type="button"
                    className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black opacity-0 transition-all duration-300 group-hover:opacity-100"
                    aria-label={`View ${car.name}`}
                >
                    <ArrowUpRight className="h-5 w-5" />
                </button>
            </div>


      
            <div className="p-6">

                <div className="mb-6">
                    <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-gray-500"> Porsche {car.modelId} </p>
                    <h3 className="text-2xl font-semibold tracking-tight text-white"> {car.name} </h3>
                </div>


                {car.price?.formatted && (
                    <div className="mb-6 pb-6">
                        <p className="text-xs uppercase tracking-wider text-gray-500"> Starting from </p>
                        <p className="mt-1 text-lg font-medium text-white"> {car.price.formatted} </p>
                    </div>
                )}



                <div className="grid grid-cols-2 gap-x-6 gap-y-5">
                    <div className="flex items-start gap-3">
                        <div>
                            <p className="text-[10px] uppercase tracking-wider text-gray-500">  Top speed </p>
                            <p className="mt-1 text-sm font-medium text-white">
                                {car.performance?.topSpeed?.value ?? "--"} {" "} {car.performance?.topSpeed?.unit ?? ""}
                            </p>
                        </div>
                    </div>


          
                    <div className="flex items-start gap-3">
                        <div>
                            <p className="text-[10px] uppercase tracking-wider text-gray-500"> 0-100 km/h </p>
                            <p className="mt-1 text-sm font-medium text-white">
                                {car.performance?.acceleration?.zeroTo100?.standard?.value ?? "--"}
                                {" "}
                                {car.performance?.acceleration?.zeroTo100?.standard?.unit ?? "s"}
                            </p>
                        </div>
                    </div>


                    <div className="flex items-start gap-3">
                        <div>
                            <p className="text-[10px] uppercase tracking-wider text-gray-500"> Powertrain </p>
                            <p className="mt-1 text-sm font-medium text-white">  {car.specifications?.fuelType ?? "--"} </p>
                        </div>
                    </div>


        
                    <div className="flex items-start gap-3">
                        <div>
                            <p className="text-[10px] uppercase tracking-wider text-gray-500"> Transmission </p>
                            <p className="mt-1 text-sm font-medium text-white"> {car.specifications?.transmission ?? "--"} </p>
                        </div>
                    </div>

                </div>

                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                    <span className="text-xs uppercase tracking-wider text-gray-500"> Drive </span>
                    <span className="text-sm text-gray-300"> {car.specifications?.driveType ?? "--"} </span>
                </div>


  
                <button type="button"
                 className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-white py-3 text-sm font-semibold text-black transition hover:bg-gray-200"
                >
                    Explore car
                    <ArrowUpRight className="h-4 w-4" />
                </button>

            </div>

        </article>
    );

}


export default CarCard