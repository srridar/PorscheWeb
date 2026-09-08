
import React, { useState } from "react";
import { ChevronRight, ChevronDown } from 'lucide-react';
import SharedTechnicalDataSection from "@/components/common/SharedTechnicalDataSection";


interface TechnicalDataProps {
    technicalData: any;
}

const MacanGasTechnicalData: React.FC<TechnicalDataProps> = ({ technicalData }) => {
    const { height, length, width, wheelbase, capacities, charging, terrainFeatures } = technicalData;

    const [activeId, setActiveId] = useState<string | null>(null);


    return (
        <section className=" text-white">

            <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-16">

                <div className="mb-6">
                    <p className="mb-2 text-xl font-mono "> Technical Data </p>
                </div>

                <div className=" p-4 sm:p-6 rounded-2xl text-white">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-4 rounded-2xl">
                        <div className="w-full  md:w-1/2 overflow-hidden rounded-xl p-1">
                            <img
                                src="/images/car-layout.png"
                                alt="Car layout"
                                className=" h-[300px] w-full rounded-lg object-cover "
                            />
                        </div>

                        <div className="w-full md:w-1/2 overflow-hidden rounded-xl  p-1">
                            <img
                                src="/images/vehicledimensions.png"
                                alt="Vehicle dimensions"
                                className="h-[300px] w-full rounded-lg object-cover "
                            />
                        </div>
                    </div>


                    <div className="grid grid-cols-1 gap-3 rounded-xl mt-8 w-full md:w-3/4 lg:w-2/3 sm:grid-cols-2">
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


                    <div className="mt-4 md:w-2/3">

                        {terrainFeatures?.clearanceToWaterSensitiveParts && (
                            <div>

                                <div className=" pl-4">
                                    {terrainFeatures.clearanceToWaterSensitiveParts.steelSuspension && (
                                        <div className="flex items-center justify-between py-1 text-sm">

                                            <p className="font-medium text-gray-400">Max. clearance between ground and water-sensitive parts steel suspension</p>

                                            <div className="flex items-baseline gap-1">
                                                <span className="font-semibold text-white">
                                                    {terrainFeatures.clearanceToWaterSensitiveParts.steelSuspension.value ?? "—"}
                                                </span>
                                                <span className="text-xs text-gray-400">
                                                    {terrainFeatures.clearanceToWaterSensitiveParts.steelSuspension.unit}
                                                </span>
                                            </div>
                                        </div>
                                    )}

                                    {terrainFeatures.clearanceToWaterSensitiveParts.airSuspension?.normalRideHeight && (
                                        <div className="flex items-center justify-between py-2.5 text-sm">
                                            <div>
                                                <p className="font-medium text-gray-400">Max. clearance between ground and water-sensitive parts air suspension (normal ride height)</p>

                                            </div>
                                            <div className="flex items-baseline gap-1">
                                                <span className="font-semibold text-white">
                                                    {terrainFeatures.clearanceToWaterSensitiveParts.airSuspension.normalRideHeight.value ?? "—"}
                                                </span>
                                                <span className="text-xs text-gray-400">
                                                    {terrainFeatures.clearanceToWaterSensitiveParts.airSuspension.normalRideHeight.unit}
                                                </span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        <div className="grid grid-cols-1 sm:grid-cols-2">

                            {terrainFeatures?.groundClearance?.airSuspension?.normalRideHeight && (
                                <div className=" pl-4 flex items-center py-1 justify-between">

                                    <p className="text-sm text-gray-400">  Max. ground clearance air suspension (normal ride height) </p>

                                    <div className="flex items-baseline gap-1 ">
                                        <span className="text-sm text-white">
                                            {terrainFeatures.groundClearance.airSuspension.normalRideHeight.value ?? "—"}
                                        </span>
                                        <span className="text-sm text-gray-400">
                                            {terrainFeatures.groundClearance.airSuspension.normalRideHeight.unit}
                                        </span>
                                    </div>
                                </div>
                            )}


                            {terrainFeatures?.loadingSillHeight?.steelSuspension && (
                                <div className=" pl-4 flex items-center py-1 justify-between">

                                    <p className="text-sm  text-gray-400">
                                        Loading Sill Height Steel suspension ({terrainFeatures.loadingSillHeight.steelSuspension.standard} standard)
                                    </p>

                                    <div className="flex items-baseline gap-1 ">
                                        <span className="text-sm text-white">
                                            {terrainFeatures.loadingSillHeight.steelSuspension.value ?? "—"}
                                        </span>
                                        <span className="text-sm text-gray-400">
                                            {terrainFeatures.loadingSillHeight.steelSuspension.unit}
                                        </span>
                                    </div>
                                </div>
                            )}
                        </div>


                        {terrainFeatures?.rampBreakoverAngle && (

                            <div className="pl-4">
                                {terrainFeatures.rampBreakoverAngle.steelSuspension && (
                                    <div className="flex items-center justify-between py-1 text-sm">

                                        <p className="font-medium text-gray-400">  Ramp Breakover Angle, Steel Suspension</p>

                                        <div className="flex items-baseline gap-1">
                                            <span className="font-semibold text-white">
                                                {terrainFeatures.rampBreakoverAngle.steelSuspension.value ?? "—"}
                                            </span>
                                            <span className="text-xs text-gray-400">
                                                {terrainFeatures.rampBreakoverAngle.steelSuspension.unit === "degrees"
                                                    ? "°"
                                                    : terrainFeatures.rampBreakoverAngle.steelSuspension.unit}
                                            </span>
                                        </div>
                                    </div>
                                )}

                                {terrainFeatures.rampBreakoverAngle.airSuspension?.normalRideHeight && (
                                    <div className="flex items-center justify-between py-1 text-sm">

                                        <p className="font-medium text-gray-400"> Ramp Breakover Angle, Air Suspension(normal ride height)</p>

                                        <div className="flex items-baseline gap-1">
                                            <span className="font-semibold text-white">
                                                {terrainFeatures.rampBreakoverAngle.airSuspension.normalRideHeight.value ?? "—"}
                                            </span>
                                            <span className="text-xs text-gray-400">
                                                {terrainFeatures.rampBreakoverAngle.airSuspension.normalRideHeight.unit === "degrees"
                                                    ? "°"
                                                    : terrainFeatures.rampBreakoverAngle.airSuspension.normalRideHeight.unit}
                                            </span>
                                        </div>
                                    </div>
                                )}
                            </div>

                        )}
                    </div>
                </div>

                <div className="max-w-5xl">

                    <SharedTechnicalDataSection
                        technicalData={technicalData}
                        activeId={activeId}
                        setActiveId={setActiveId}
                    />

                  
                    <div id="capacities" className="mt-6 ">

                        <button
                            type="button"
                            className="flex w-full cursor-pointer items-center justify-between text-left focus:outline-none"
                            onClick={() => setActiveId(activeId === "capacities" ? null : "capacities")}
                        >
                            <span className="text-base font-medium text-white/40 hover:text-white/60 transition-colors">
                                Capacities
                            </span>
                            {activeId === "capacities" ? (
                                <ChevronDown className="h-5 w-5 text-gray-400" />
                            ) : (
                                <ChevronRight className="h-5 w-5 text-gray-400" />
                            )}
                        </button>

                        <div className={`grid pl-4 transition-all duration-500 ease-in-out ${activeId === "capacities" ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"}`}>
                            <div className="overflow-hidden space-y-6">

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {capacities?.luggageCompartmentVolumeRearV210_2?.value && (
                                        <div className="rounded  bg-[#222121] p-4 flex flex-col justify-between">
                                            <span className="text-sm   text-gray-400">
                                                Luggage compartment volume, rear V210-2
                                            </span>
                                            <div className="flex items-baseline gap-1 mt-4">
                                                <span className="text-sm  text-white">
                                                    {capacities?.luggageCompartmentVolumeRearV210_2?.value ?? "—"}
                                                </span>
                                                <span className="text-sm text-gray-400">
                                                    {capacities?.luggageCompartmentVolumeRearV210_2?.unit}
                                                </span>
                                            </div>
                                        </div>
                                    )}

                                    {capacities?.openLuggageCompartmentVolume?.behindFrontSeats && (
                                        <div className="rounded bg-[#222121] p-4 flex flex-col justify-between">
                                            <span className="text-sm text-gray-400">
                                                Open luggage compartment volume (behind front seats)
                                            </span>
                                            <div className="flex items-baseline gap-1 mt-4">
                                                <span className="text-sm  text-white">
                                                    {capacities?.openLuggageCompartmentVolume?.behindFrontSeats.value ?? "—"}
                                                </span>
                                                <span className="text-sm text-gray-400">
                                                    {capacities?.openLuggageCompartmentVolume?.behindFrontSeats.unit}
                                                </span>
                                            </div>
                                        </div>
                                    )}

                                    {capacities?.openLuggageCompartmentVolume?.upToUpperEdgeOfRearSeats && (
                                        <div className="rounded bg-[#222121] p-4 flex flex-col justify-between">
                                            <span className="text-sm text-gray-400">
                                                Open luggage compartment volume (up to the upper edge of the rear seats)
                                            </span>
                                            <div className="flex items-baseline gap-1 mt-4">
                                                <span className="text-sm  text-white">
                                                    {capacities?.openLuggageCompartmentVolume?.upToUpperEdgeOfRearSeats?.value ?? "—"}
                                                </span>
                                                <span className="text-sm text-gray-400">
                                                    {capacities?.openLuggageCompartmentVolume?.upToUpperEdgeOfRearSeats?.unit}
                                                </span>
                                            </div>
                                        </div>
                                    )}

                                    {capacities?.largestLuggageCompartmentVolume?.behindFrontSeatsUpToRoof && (
                                        <div className="rounded bg-[#222121] p-4 flex flex-col justify-between">
                                            <span className="text-sm text-gray-400">
                                                Largest luggage compartment volume (behind front seats, up to roof)
                                            </span>
                                            <div className="flex items-baseline gap-1 mt-4">
                                                <span className="text-sm  text-white">
                                                    {capacities?.largestLuggageCompartmentVolume?.behindFrontSeatsUpToRoof?.value ?? "—"}
                                                </span>
                                                <span className="text-sm text-gray-400">
                                                    {capacities?.largestLuggageCompartmentVolume?.behindFrontSeatsUpToRoof?.unit}
                                                </span>
                                            </div>
                                        </div>
                                    )}
                                </div>


                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section >
    );
};


export default MacanGasTechnicalData;