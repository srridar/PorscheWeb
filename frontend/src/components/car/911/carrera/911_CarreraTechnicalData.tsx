
import React, { useState } from "react";
import { ChevronRight, ChevronDown } from 'lucide-react';
import SharedTechnicalDataSection from "@/components/common/SharedTechnicalDataSection";


interface TechnicalDataProps {
    technicalData: any;
}

const Carrera_911_TechnicalData: React.FC<TechnicalDataProps> = ({ technicalData }) => {

    const [activeId, setActiveId] = useState<string | null>(null);

    const { height, length, width, wheelbase, capacities, terrainFeatures } = technicalData;
    return (
        <section className=" text-white">

            <div className="mx-auto max-w-7xl px-3 py-10">


                <div className="p-4  text-white">

                    <div className=" grid grid-cols-1 gap-4">
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


                        <div className="mt-4 flex text-sm flex-col gap-2 ">
                            {terrainFeatures?.maxGroundClearance && (
                                <div className="flex justify-between items-center py-2.5 text-sm">
                                    <h3 className="text-gray-300 font-medium">
                                        Max. ground clearance (PASM)
                                    </h3>
                                    <div className="flex gap-1 items-center font-semibold text-white shrink-0 ml-4">
                                        <p>{terrainFeatures?.maxGroundClearance?.pasm?.value}</p>
                                        <span className="text-xs text-gray-400 font-normal">
                                            {terrainFeatures?.maxGroundClearance?.pasm?.unit}
                                        </span>
                                    </div>
                                </div>
                            )}

                            {terrainFeatures?.approachAngle && (
                                <div className="flex justify-between items-center py-2.5 text-sm">
                                    <h3 className="text-gray-300 font-medium">
                                        Approach angle (PASM)
                                    </h3>
                                    <div className="flex gap-1 items-center font-semibold text-white shrink-0 ml-4">
                                        <p>{terrainFeatures.approachAngle?.pasm?.value}</p>
                                        <span className="text-xs text-gray-400 font-normal">
                                            {terrainFeatures.approachAngle?.pasm?.unit}
                                        </span>
                                    </div>
                                </div>
                            )}

                            {terrainFeatures?.departureAngle && (
                                <div className="flex justify-between items-center py-2.5 text-sm">
                                    <h3 className="text-gray-300 font-medium">
                                        Departure angle (PASM)
                                    </h3>
                                    <div className="flex gap-1 items-center font-semibold text-white shrink-0 ml-4">
                                        <p>{terrainFeatures.departureAngle.pasm.value}</p>
                                        <span className="text-xs text-gray-400 font-normal">
                                            {terrainFeatures.departureAngle.pasm.unit}
                                        </span>
                                    </div>
                                </div>
                            )}



                            {terrainFeatures?.overhang?.front && (
                                <div className="flex justify-between items-center py-2.5 text-sm">
                                    <h3 className="text-gray-300 font-medium">Overhang front</h3>
                                    <div className="flex gap-1 items-center font-semibold text-white shrink-0 ml-4">
                                        <p>{terrainFeatures.overhang.front.value}</p>
                                        <span className="text-xs text-gray-400 font-normal">
                                            {terrainFeatures.overhang.front.unit}
                                        </span>
                                    </div>
                                </div>
                            )}

                            {terrainFeatures?.overhang?.rear && (
                                <div className="flex justify-between items-center py-2.5 text-sm">
                                    <h3 className="text-gray-300 font-medium">Overhang rear</h3>
                                    <div className="flex gap-1 items-center font-semibold text-white shrink-0 ml-4">
                                        <p>{terrainFeatures.overhang.rear.value}</p>
                                        <span className="text-xs text-gray-400 font-normal">
                                            {terrainFeatures.overhang.rear.unit}
                                        </span>
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>




                </div>

                <div className="max-w-5xl">

                    <SharedTechnicalDataSection
                        technicalData={technicalData}
                        activeId={activeId}
                        setActiveId={setActiveId}
                    />

                    <div id="capacities" className="mt-6">
                        <div
                            className="flex cursor-pointer items-center justify-between"
                            onClick={() => setActiveId(activeId === "capacities" ? null : "capacities")}
                        >
                            <p className="font-medium text-white/40">Capacities</p>
                            {activeId === "capacities" ? (
                                <ChevronDown className="h-5 w-5 text-gray-400" />
                            ) : (
                                <ChevronRight className="h-5 w-5 text-gray-400" />
                            )}
                        </div>

                        <div
                            className={`grid transition-all duration-500 ease-in-out ${activeId === "capacities"
                                ? "grid-rows-[1fr] opacity-100"
                                : "grid-rows-[0fr] opacity-0"
                                }`}
                        >
                            <div className="overflow-hidden space-y-3 pt-2">
                                {/* Front Luggage Compartment */}
                                {capacities?.luggageCompartmentVolumeFront && (
                                    <div className="flex flex-col py-1">
                                        <div className="flex items-center justify-between">
                                            <p className="text-sm text-gray-100">
                                                Front luggage compartment volume
                                            </p>
                                            <p className="text-sm font-semibold text-gray-500">
                                                {capacities.luggageCompartmentVolumeFront.value ?? "—"}
                                                <span className="ml-1 font-normal text-gray-500">
                                                    {capacities.luggageCompartmentVolumeFront.unit}
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                )}


                                {capacities?.openLuggageCompartmentVolumeBehindFrontSeats?.withoutRearSeats && (
                                    <div className="flex flex-col py-1">
                                        <div className="flex items-center justify-between">
                                            <p className="text-sm text-gray-100">
                                                Luggage compartment volume behind front seats
                                            </p>
                                            <p className="text-sm font-semibold text-gray-500">
                                                {capacities.openLuggageCompartmentVolumeBehindFrontSeats.withoutRearSeats.value ?? "—"}
                                                <span className="ml-1 font-normal text-gray-500">
                                                    {capacities.openLuggageCompartmentVolumeBehindFrontSeats.withoutRearSeats.unit}
                                                </span>
                                            </p>
                                        </div>
                                        {capacities.openLuggageCompartmentVolumeBehindFrontSeats.withoutRearSeats.transmission && (
                                            <p className="text-xs text-gray-400 mt-0.5">
                                                {capacities.openLuggageCompartmentVolumeBehindFrontSeats.withoutRearSeats.transmission}
                                            </p>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section >
    )
}

export default Carrera_911_TechnicalData;