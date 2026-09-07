
import React, { useState } from "react";
import { ChevronRight, ChevronDown } from 'lucide-react';


interface TechnicalDataProps {
    technicalData: any;
}

const PanameraTechnicalData: React.FC<TechnicalDataProps> = ({ technicalData }) => {

    const [activeId, setActiveId] = useState<string | null>(null);

    const { height, length, width, wheelbase, powerUnit, performance, capacities, soundLevel, terrainFeatures } = technicalData;
    return (
        <section className=" text-white">

            <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-16">

                <div className="mb-6">
                    <p className="mb-2 text-xl font-mono "> Technical Data </p>
                </div>

                <div className="p-4 sm:p-6 rounded text-white">

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


                    <div className="mt-8 w-full md:w-3/4 lg:w-2/3 ">
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

                <div className="max-w-5xl">

                    <div id="power" className="mt-4" >

                        <div className="flex cursor-pointer items-center justify-between mb-4" onClick={() => setActiveId(activeId === "power" ? null : "power")}>
                            <p className="text-white/40 font-semibold"> Power</p>
                            {activeId === "power" ? (<ChevronDown className="h-5 w-5 text-gray-400" />) : (<ChevronRight className="h-5 w-5 text-gray-400" />)}
                        </div>

                        <div className={`grid transition-all duration-500 ease-in-out ${activeId === "power"
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                            }`}>
                            <div className="overflow-hidden">

                                <div className="grid grid-cols-2 py-2">
                                    <div className="pr-4 text-sm text-gray-100 sm:text-sm">Number of cylinders</div>
                                    <div>
                                        <span className="text-sm font-semibold text-gray-500">
                                            {powerUnit.numberOfCylinders}
                                        </span>
                                    </div>
                                </div>


                                <div className="grid grid-cols-2 py-2">
                                    <div className="pr-4 text-sm text-gray-100 sm:text-sm">Bore</div>
                                    <div>
                                        <span className="text-sm font-semibold text-gray-500">
                                            {powerUnit.bore.value}
                                        </span>
                                        <span className="ml-1 text-sm text-gray-500">
                                            {powerUnit.bore.unit}
                                        </span>
                                    </div>
                                </div>


                                <div className="grid grid-cols-2 py-2">
                                    <div className="pr-4 text-sm text-gray-100 sm:text-sm">Stroke</div>
                                    <div>
                                        <span className="text-sm font-semibold text-gray-500">
                                            {powerUnit.stroke.value}
                                        </span>
                                        <span className="ml-1 text-sm text-gray-500">
                                            {powerUnit.stroke.unit}
                                        </span>
                                    </div>
                                </div>


                                <div className="grid grid-cols-2 py-2">
                                    <div className="pr-4 text-sm text-gray-100 sm:text-sm">Displacement</div>
                                    <div>
                                        <span className="text-sm font-semibold text-gray-500">
                                            {powerUnit.displacement.value}
                                        </span>
                                        <span className="ml-1 text-sm text-gray-500">
                                            {powerUnit.displacement.unit}
                                        </span>
                                    </div>
                                </div>


                                <div className="grid grid-cols-2 py-2">
                                    <div className="pr-4 text-sm text-gray-100 sm:text-sm">Power</div>
                                    <div className="flex gap-1">
                                        <span className="text-sm font-semibold text-gray-500">
                                            {powerUnit.power.kW.value} {powerUnit.power.kW.unit} /
                                        </span>
                                        <span className="text-sm text-gray-500">
                                            {powerUnit.power.PS.value} {powerUnit.power.PS.unit}
                                        </span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 py-2">
                                    <div className="pr-4 text-sm text-gray-100 sm:text-sm">Max. torque</div>
                                    <div>
                                        <span className="text-sm font-semibold text-gray-500">
                                            {powerUnit.maxTorque.value}
                                        </span>
                                        <span className="ml-1 text-sm text-gray-500">
                                            {powerUnit.maxTorque.unit}
                                        </span>
                                    </div>
                                </div>


                                <div className="grid grid-cols-2 py-2">
                                    <div className="pr-4 text-sm text-gray-100 sm:text-sm">Max. output per liter</div>
                                    <div className="flex gap-1">
                                        <span className="text-sm font-semibold text-gray-500">
                                            {powerUnit.maxOutputPerLiter.kWPerLiter.value} {powerUnit.maxOutputPerLiter.kWPerLiter.unit} /
                                        </span>
                                        <span className="text-sm text-gray-500">
                                            {powerUnit.maxOutputPerLiter.PSPerLiter.value} {powerUnit.maxOutputPerLiter.PSPerLiter.unit}
                                        </span>
                                    </div>
                                </div>


                                <div className="grid grid-cols-2 py-2">
                                    <div className="pr-4 text-sm text-gray-100 sm:text-sm">Maximum engine speed</div>
                                    <div>
                                        <span className="text-sm font-semibold text-gray-500"> {powerUnit.maximumEngineSpeed.value} </span>
                                        <span className="ml-1 text-sm text-gray-500"> {powerUnit.maximumEngineSpeed.unit}  </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div id="performance" className="mt-4">
                        <div className="flex cursor-pointer items-center justify-between"
                            onClick={() => setActiveId(activeId === "performance" ? null : "performance")}
                        >
                            <p className="text-white/40">Performance</p>
                            {activeId === "performance" ? (
                                <ChevronDown className="h-5 w-5 text-gray-400" />
                            ) : (
                                <ChevronRight className="h-5 w-5 text-gray-400" />
                            )}
                        </div>

                        <div className={`grid transition-all duration-500 ease-in-out ${activeId === "performance"
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                            }`}
                        >
                            <div className="overflow-hidden">

                                <div className="flex items-center justify-between py-2">
                                    <p className="text-sm text-gray-100">Top speed</p>
                                    <p className="text-sm font-semibold text-gray-500">
                                        {performance.topSpeed.value}
                                        <span className="ml-1 font-normal text-gray-500">
                                            {performance.topSpeed.unit}
                                        </span>
                                    </p>
                                </div>

                                <div className="mt-4">
                                    <h3 className="mb-2 text-sm text-gray-100">Acceleration</h3>
                                    <div className="space-y-2 pl-2">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-gray-100">0 - 100 km/h</span>
                                            <span className="text-sm font-semibold text-gray-500">
                                                {performance.acceleration.zeroTo100.value}{" "}
                                                <span className="font-normal">{performance.acceleration.zeroTo100.unit}</span>
                                            </span>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-gray-100">0 - 160 km/h</span>
                                            <span className="text-sm font-semibold text-gray-500">
                                                {performance.acceleration.zeroTo160.value}{" "}
                                                <span className="font-normal">{performance.acceleration.zeroTo160.unit}</span>
                                            </span>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-gray-100">0 - 200 km/h</span>
                                            <span className="text-sm font-semibold text-gray-500">
                                                {performance.acceleration.zeroTo200.value}{" "}
                                                <span className="font-normal">{performance.acceleration.zeroTo200.unit}</span>
                                            </span>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-gray-100">
                                                In-gear acceleration ({performance.acceleration.inGear.speedRange})
                                            </span>
                                            <span className="text-sm font-semibold text-gray-500">
                                                {performance.acceleration.inGear.value}{" "}
                                                <span className="font-normal">{performance.acceleration.inGear.unit}</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {performance.sportChronoPackage && (
                                    <div className="mt-4">
                                        <h3 className="mb-2 text-sm text-gray-100">
                                            Acceleration with Sport Chrono Package
                                        </h3>
                                        <div className="space-y-2 pl-2">
                                            <div className="flex items-center justify-between">
                                                <span className="text-sm text-gray-100">0 - 100 km/h</span>
                                                <span className="text-sm font-semibold text-gray-500">
                                                    {performance.sportChronoPackage.zeroTo100.value}{" "}
                                                    <span className="font-normal">
                                                        {performance.sportChronoPackage.zeroTo100.unit}
                                                    </span>
                                                </span>
                                            </div>

                                            <div className="flex items-center justify-between">
                                                <span className="text-sm text-gray-100">0 - 160 km/h</span>
                                                <span className="text-sm font-semibold text-gray-500">
                                                    {performance.sportChronoPackage.zeroTo160.value}{" "}
                                                    <span className="font-normal">
                                                        {performance.sportChronoPackage.zeroTo160.unit}
                                                    </span>
                                                </span>
                                            </div>

                                            <div className="flex items-center justify-between">
                                                <span className="text-sm text-gray-100">0 - 200 km/h</span>
                                                <span className="text-sm font-semibold text-gray-500">
                                                    {performance.sportChronoPackage.zeroTo200.value}{" "}
                                                    <span className="font-normal">
                                                        {performance.sportChronoPackage.zeroTo200.unit}
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div id="sound" className="mt-4">
                        <div className="flex cursor-pointer items-center justify-between" onClick={() => setActiveId(activeId === "sound" ? null : "sound")}>
                            <p className="font-medium text-white/40">Sound level</p>
                            {activeId === "sound" ? (
                                <ChevronDown className="h-5 w-5 text-gray-400" />
                            ) : (
                                <ChevronRight className="h-5 w-5 text-gray-400" />
                            )}
                        </div>

                        <div className={`grid transition-all duration-500 ease-in-out ${activeId === "sound" ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                            <div className="overflow-hidden space-y-2 pt-2">

                                <div className="flex items-center justify-between py-1">
                                    <p className="text-sm text-gray-100">  Sound level according to regulation </p>
                                    <p className="text-sm font-semibold text-gray-500"> {soundLevel.standard} </p>
                                </div>


                                <div className="flex items-center justify-between py-1">
                                    <p className="text-sm text-gray-100">
                                        Sound level of stationary vehicle
                                    </p>
                                    <p className="text-sm font-semibold text-gray-500">
                                        {soundLevel.stationaryVehicle.value}
                                        <span className="ml-1 font-normal text-gray-500"> {soundLevel.stationaryVehicle.unit} </span>
                                    </p>
                                </div>


                                <div className="flex items-center justify-between py-1">
                                    <p className="text-sm text-gray-100"> Sound level of stationary vehicle at engine speed </p>
                                    <p className="text-sm font-semibold text-gray-500">
                                        {soundLevel.stationaryVehicleRpm.value}
                                        <span className="ml-1 font-normal text-gray-500"> {soundLevel.stationaryVehicleRpm.unit} </span>
                                    </p>
                                </div>


                                <div className="flex items-center justify-between py-1">
                                    <p className="text-sm text-gray-100"> Sound level of passing vehicle </p>
                                    <p className="text-sm font-semibold text-gray-500">
                                        {soundLevel.passingVehicle.value}
                                        <span className="ml-1 font-normal text-gray-500"> {soundLevel.passingVehicle.unit} </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

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