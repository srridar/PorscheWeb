import React, { useState } from "react";
import SharedTechnicalDataSection from "@/components/common/SharedTechnicalDataSection";


interface TechnicalDataProps {
    technicalData: any;
}

const CayenneTechnicalData: React.FC<TechnicalDataProps> = ({ technicalData }) => {
    const { height, length, width, wheelbase, terrainFeatures } = technicalData;

    const [activeId, setActiveId] = useState<string | null>(null);


    return (
        <section className=" text-white">

            <div className="mx-auto max-w-7xl px-3 py-10 ">

                <div className=" p-4 text-white">
                    <div className="grid grid-cols-1 gap-4">
                        <div className="w-full  overflow-hidden ">
                            <img
                                src="/images/car-layout.png"
                                alt="Car layout"
                                className=" h-auto w-full md:w-[500px]  rounded-lg object-cover "
                            />
                        </div>

                        <div className="w-full  overflow-hidden ">
                            <img
                                src="/images/vehicledimensions.png"
                                alt="Vehicle dimensions"
                                className="h-auto w-full md:w-[500px]   rounded-lg object-cover "
                            />
                        </div>
                    </div>


                    <div className="grid grid-cols-1 gap-3 rounded-xl mt-6 w-full">

                        <div className="grid grid-cols-2 gap-3 mt-12 w-full">
                            {[
                                { level: "Height", value: height },
                                { level: "Length", value: length },
                                { level: "Width", value: width },
                                { level: "Wheelbase", value: wheelbase },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-between rounded px-5 py-3.5 bg-[#222121] transition-colors"
                                >
                                    <span className="text-sm font-medium text-gray-400"> {item.level} </span>
                                    <span className="text-sm font-semibold text-white tracking-wide">  {item.value || "—"} </span>
                                </div>
                            ))}
                        </div>


                        <div className="mt-4 flex text-sm flex-col gap-2">
                            <div className="flex justify-between items-center text-sm mb-2">
                                <h3>Max GroundClearance (extra off-road)</h3>
                                <div className="text-sm flex gap-1 items-center">
                                    <p>{terrainFeatures?.maxGroundClearance?.value}</p>
                                    <span>{terrainFeatures?.maxGroundClearance?.unit}</span>
                                </div>
                            </div>

                            <div className="flex justify-between items-center text-sm mb-2">
                                <h3>breakover angle (extra off-road)</h3>
                                <div className="text-sm flex gap-1 items-center">
                                    <p>{terrainFeatures?.breakoverAngle?.value}</p>
                                    <span>{terrainFeatures?.breakoverAngle?.unit}</span>
                                </div>
                            </div>

                            <div className="flex justify-between items-center text-sm mb-2">
                                <h3> Departure angle (extra off-road)</h3>
                                <div className="text-sm flex gap-1 items-center">
                                    <p>{terrainFeatures?.departureAngle?.value}</p>
                                    <span>{terrainFeatures?.departureAngle?.unit}</span>
                                </div>
                            </div>

                            <div className="flex justify-between items-center text-sm mb-2">
                                <h3>Overhang front</h3>
                                <div className="text-sm flex gap-1 items-center">
                                    <p>{terrainFeatures?.overhang?.front?.value}</p>
                                    <span>{terrainFeatures?.overhang?.front?.unit}</span>
                                </div>
                            </div>

                            <div className="flex justify-between items-center text-sm mb-2">
                                <h3>Overhang rear</h3>
                                <div className="text-sm flex gap-1 items-center">
                                    <p>{terrainFeatures?.overhang?.rear?.value}</p>
                                    <span>{terrainFeatures?.overhang?.rear?.unit}</span>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <div className="max-w-5xl">
                    <SharedTechnicalDataSection activeId={activeId} setActiveId={setActiveId} technicalData={technicalData} />
                </div>

            </div>

        </section >
    );
};


export default CayenneTechnicalData;




