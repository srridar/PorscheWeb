
import React, { useState } from "react";
import { ChevronRight, ChevronDown } from 'lucide-react';
import SharedTechnicalDataSection from "@/components/common/SharedTechnicalDataSection";


interface TechnicalDataProps {
    technicalData: any;
}

const PanameraTechnicalData: React.FC<TechnicalDataProps> = ({ technicalData }) => {

    const [activeId, setActiveId] = useState<string | null>(null);

    const { height, length, width, wheelbase, capacities, terrainFeatures } = technicalData;
    return (
        <section className=" text-white">

            <div className="mx-auto max-w-7xl px-3 py-10 ">

           

                <div className="p-4  rounded text-white">

                    <div className="flex flex-col gap-2  rounded-2xl">
                        <div className="w-full  overflow-hidden rounded-xl p-1">
                            <img
                                src="/images/car-layout.png"
                                alt="Car layout"
                                className=" w-[500px] h-auto rounded-lg object-cover "
                            />
                        </div>

                        <div className="w-full  overflow-hidden rounded-xl  p-1">
                            <img
                                src="/images/vehicledimensions.png"
                                alt="Vehicle dimensions"
                                className="h-auto w-[500px] rounded-lg object-cover "
                            />
                        </div>
                    </div>


                    <div className="grid grid-cols-1 gap-3 rounded-xl mt-8 w-full  md:grid-cols-2">
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


                    <div className="mt-8 w-full ">
                        {terrainFeatures?.groundClearance?.airSuspensionNormal && (
                            <div className="flex justify-between items-center py-2.5 text-sm">
                                <h3 className="text-gray-300 font-medium">
                                    Max. ground clearance, air suspension (normal ride height)
                                </h3>
                                <div className="flex gap-1 items-center font-semibold text-white shrink-0 ml-4">
                                    <p>{terrainFeatures.groundClearance.airSuspensionNormal.value}</p>
                                    <span className="text-xs text-gray-400 font-normal">
                                        {terrainFeatures.groundClearance.airSuspensionNormal.unit}
                                    </span>
                                </div>
                            </div>
                        )}

                        {terrainFeatures?.groundClearance?.airSuspensionLow && (
                            <div className="flex justify-between items-center py-2.5 text-sm">
                                <h3 className="text-gray-300 font-medium">
                                    Max. ground clearance, air suspension (low level)
                                </h3>
                                <div className="flex gap-1 items-center font-semibold text-white shrink-0 ml-4">
                                    <p>{terrainFeatures.groundClearance.airSuspensionLow.value}</p>
                                    <span className="text-xs text-gray-400 font-normal">
                                        {terrainFeatures.groundClearance.airSuspensionLow.unit}
                                    </span>
                                </div>
                            </div>
                        )}

                        {terrainFeatures?.breakoverAngle?.airSuspensionStandard && (
                            <div className="flex justify-between items-center py-2.5 text-sm">
                                <h3 className="text-gray-300 font-medium">
                                    Breakover angle, air suspension (standard level)
                                </h3>
                                <div className="flex gap-1 items-center font-semibold text-white shrink-0 ml-4">
                                    <p>{terrainFeatures.breakoverAngle.airSuspensionStandard.value}</p>
                                    <span className="text-xs text-gray-400 font-normal">
                                        {terrainFeatures.breakoverAngle.airSuspensionStandard.unit}
                                    </span>
                                </div>
                            </div>
                        )}

                        {terrainFeatures?.breakoverAngle?.airSuspensionLow && (
                            <div className="flex justify-between items-center py-2.5 text-sm">
                                <h3 className="text-gray-300 font-medium">
                                    Breakover angle, air suspension (low level)
                                </h3>
                                <div className="flex gap-1 items-center font-semibold text-white shrink-0 ml-4">
                                    <p>{terrainFeatures.breakoverAngle.airSuspensionLow.value}</p>
                                    <span className="text-xs text-gray-400 font-normal">
                                        {terrainFeatures.breakoverAngle.airSuspensionLow.unit}
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

                <div className="w-full">

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

                                <div className="flex flex-col py-1">
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm text-gray-100"> Luggage compartment volume </p>
                                        <p className="text-sm font-semibold text-gray-500">
                                            {capacities.luggageCompartment.openVolume.value}
                                            <span className="ml-1 font-normal text-gray-500">
                                                {capacities.luggageCompartment.openVolume.unit}
                                            </span>
                                        </p>
                                    </div>
                                    {capacities.luggageCompartment.openVolume.description && (
                                        <p className="text-xs text-gray-400 mt-0.5">
                                            {capacities.luggageCompartment.openVolume.description}
                                        </p>
                                    )}
                                </div>


                                <div className="flex flex-col py-1">
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm text-gray-100"> Luggage compartment volume with folded rear seats </p>
                                        <p className="text-sm font-semibold text-gray-500">
                                            {capacities.luggageCompartment.largestVolume.value}
                                            <span className="ml-1 font-normal text-gray-500">
                                                {capacities.luggageCompartment.largestVolume.unit}
                                            </span>
                                        </p>
                                    </div>
                                    {capacities.luggageCompartment.largestVolume.description && (
                                        <p className="text-xs text-gray-400 mt-0.5"> {capacities.luggageCompartment.largestVolume.description} </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </section >
    )
}

export default PanameraTechnicalData