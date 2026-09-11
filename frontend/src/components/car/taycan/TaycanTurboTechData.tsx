
import React, { useState } from "react";
import { ChevronRight, ChevronDown } from 'lucide-react';


interface TechnicalDataProps {
    technicalData: any;
}

const TaycanTurboTechnicalData: React.FC<TechnicalDataProps> = ({ technicalData }) => {
    const { height, length, width, wheelbase, powerUnit, performance, soundLevel, charging, terrainFeatures } = technicalData;
    const [activeId, setActiveId] = useState<string | null>(null);

    return (
        <section className=" text-white">

            <div className="mx-auto max-w-7xl px-3 py-10 ">

                <div className=" p-4 rounded-2xl text-white">
                    <div className="flex flex-col gap-2   rounded-2xl">
                        <div className="w-full overflow-hidden rounded-xl p-1">
                            <img
                                src="/images/car-layout.png"
                                alt="Car layout"
                                className=" h-auto w-[500px] rounded-lg object-cover "
                            />
                        </div>

                        <div className="w-full  overflow-hidden rounded-xl  p-1">
                            <img
                                src="/images/vehicledimensions.png"
                                alt="Vehicle dimensions"
                                className="h-auto w-[500px]  rounded-lg object-cover "
                            />
                        </div>
                    </div>


                    <div className="grid grid-cols-1 gap-3 rounded-xl mt-8 w-full md:grid-cols-2">
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


                    <div className="mt-4 ">
                        <div className="flex justify-between items-center text-sm mb-2">
                            <h3>Max. ground clearance, air suspension (normal ride height)</h3>
                            <div className="text-sm flex gap-1 items-center ">
                                <p>{terrainFeatures?.groundClearance?.airSuspensionNormal?.value}</p>
                                <span>{terrainFeatures?.groundClearance?.airSuspensionNormal?.unit}</span>
                            </div>

                        </div>

                        <div className="flex justify-between items-center text-sm mb-2">
                            <h3>Max. ground clearance, air suspension (off-road level)</h3>
                            <div className="text-sm flex gap-1 items-center ">
                                <p>{terrainFeatures?.groundClearance?.airSuspensionOffRoad?.value}</p>
                                <span>{terrainFeatures?.groundClearance?.airSuspensionOffRoad?.unit}</span>
                            </div>
                        </div>

                        <div className="flex justify-between items-center text-sm mb-2">
                            <h3>Max. ground clearance, air suspension (low level)</h3>

                            <div className="text-sm flex gap-1 items-center ">
                                <p>{terrainFeatures?.groundClearance?.airSuspensionLow?.value}</p>
                                <span>{terrainFeatures?.groundClearance?.airSuspensionLow?.unit}</span>
                            </div>

                        </div>

                        <div className="flex justify-between items-center text-sm mb-2">
                            <h3>Approach angle, air suspension (standard level)</h3>
                            <div className="text-sm flex gap-1 items-center ">
                                <p>{terrainFeatures?.approachAngle?.airSuspensionStandard?.value}</p>
                                <span>{terrainFeatures?.approachAngle?.airSuspensionStandardLevel?.unit}</span>
                            </div>
                        </div>


                        {terrainFeatures.breakoverAngle.airSuspensionStandard && (
                            <div className="flex items-center justify-between py-1 text-sm">
                                <div>
                                    <p className="font-medium text-gray-200"> Normal driving height (standard Level)</p>
                                </div>
                                <div className="flex items-baseline gap-1">
                                    <span className="font-semibold text-white">
                                        {terrainFeatures.breakoverAngle.airSuspensionStandard.value ?? "—"}
                                    </span>
                                    <span className="text-xs text-gray-400">
                                        {terrainFeatures.breakoverAngle.airSuspensionStandard.unit}
                                    </span>
                                </div>
                            </div>
                        )}

                        {terrainFeatures.breakoverAngle.airSuspensionLow && (
                            <div className="flex items-center justify-between py-1 text-sm">
                                <p className="font-medium text-gray-200">Lowered for efficiency & high speed (low Level)</p>

                                <div className="flex items-baseline gap-1">
                                    <span className="font-semibold text-white">
                                        {terrainFeatures.breakoverAngle.airSuspensionLow.value ?? "—"}
                                    </span>
                                    <span className="text-xs text-gray-400">
                                        {terrainFeatures.breakoverAngle.airSuspensionLow.unit}
                                    </span>
                                </div>
                            </div>
                        )}

                        {terrainFeatures.breakoverAngle.airSuspensionOffRoad && (
                            <div className="flex items-center justify-between py-2.5 text-sm">
                                <p className="font-medium text-gray-200">Raised for maximum clearance (off-Road Level)</p>

                                <div className="flex items-baseline gap-1">
                                    <span className="font-semibold text-white">
                                        {terrainFeatures.breakoverAngle.airSuspensionOffRoad.value ?? "—"}
                                    </span>
                                    <span className="text-xs text-gray-400">
                                        {terrainFeatures.breakoverAngle.airSuspensionOffRoad.unit}
                                    </span>
                                </div>
                            </div>
                        )}

                        <div className="flex justify-between items-center text-sm mb-2">
                            <h3>Departure angle, air suspension (standard level)</h3>
                            <div className="text-sm flex gap-1 items-center ">
                                <p>{terrainFeatures?.departureAngle?.airSuspensionStandard?.value}</p>
                                <span>{terrainFeatures?.departureAngle?.airSuspensionStandard?.unit}</span>
                            </div>
                        </div>

                        <div className="flex justify-between items-center text-sm mb-2">
                            <h3>Overhang front</h3>
                            <div className="text-sm flex gap-1 items-center ">
                                <p>{terrainFeatures?.overhang?.front?.value}</p>
                                <span>{terrainFeatures?.overhang?.front?.unit}</span>
                            </div>

                        </div>

                        <div className="flex justify-between items-center text-sm mb-2">
                            <h3>Overhang rear</h3>
                            <div className="text-sm flex gap-1 items-center ">
                                <p>{terrainFeatures?.overhang?.rear?.value}</p>
                                <span>{terrainFeatures?.overhang?.rear?.unit}</span>
                            </div>

                        </div>
                    </div>
                    
                </div>

                <div className="max-w-5xl">

                    <div id="power" className="mt-6">
                        <div className="flex cursor-pointer items-center justify-between"
                            onClick={() => setActiveId(activeId === "power" ? null : "power")}
                        >
                            <p className="text-white/40">Power</p>

                            {activeId === "power" ? (
                                <ChevronDown className="h-5 w-5 text-gray-400" />
                            ) : (
                                <ChevronRight className="h-5 w-5 text-gray-400" />
                            )}
                        </div>

                        <div className={`grid transition-all duration-500 ease-in-out ${activeId === "power"
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                            }`}
                        >
                            <div className="overflow-hidden">
                                <div className="grid grid-cols-2 py-2">
                                    <div className="pr-4 text-sm text-gray-100 sm:text-sm">  Max. torque with Launch Control </div>

                                    <div className="flex items-center gap-1 text-gray-500">
                                        <span className="text-sm font-semibold">
                                            {powerUnit?.maxTorqueWithLaunchControl?.value}
                                        </span>

                                        <span className="text-sm">
                                            {powerUnit?.maxTorqueWithLaunchControl?.unit}
                                        </span>
                                    </div>
                                </div>


                                <div className="grid grid-cols-2 py-2">
                                    <div className="pr-4 text-sm text-gray-100 sm:text-sm">
                                        Power up to
                                    </div>

                                    <div className="flex items-center gap-1 text-gray-500">
                                        <span className="text-sm font-semibold"> {powerUnit?.powerUnit?.kw} </span>
                                        <span className="text-sm">kW /</span>
                                        <span className="text-sm"> {powerUnit?.powerUnit?.ps}</span>
                                        <span className="text-sm">PS</span>
                                    </div>
                                </div>


                                <div className="grid grid-cols-2 py-2">
                                    <div className="pr-4 text-sm text-gray-100 sm:text-sm">
                                        Overboost power with Launch Control
                                    </div>

                                    <div className="flex items-center gap-1 text-gray-500">
                                        <span className="text-sm font-semibold"> {powerUnit?.overboostPowerWithLaunchControl?.kw} </span>
                                        <span className="text-sm">kW /</span>
                                        <span className="text-sm"> {powerUnit?.overboostPowerWithLaunchControl?.ps}</span>
                                        <span className="text-sm">PS</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div id="performance" className="mt-6">

                        <button
                            type="button"
                            className="flex w-full cursor-pointer items-center justify-between text-left focus:outline-none"
                            onClick={() => setActiveId(activeId === "performance" ? null : "performance")}
                        >
                            <span className="text-base font-medium text-white/40 hover:text-white/60 transition-colors">
                                Performance
                            </span>
                            {activeId === "performance" ? (
                                <ChevronDown className="h-5 w-5 text-gray-400" />
                            ) : (
                                <ChevronRight className="h-5 w-5 text-gray-400" />
                            )}
                        </button>


                        <div className={`grid transition-all duration-500 ease-in-out ${activeId === "performance"
                            ? "grid-rows-[1fr] opacity-100 mt-4"
                            : "grid-rows-[0fr] opacity-0"
                            }`}
                        >
                            <div className="overflow-hidden space-y-6">

                                {performance?.topSpeed && (
                                    <div className="flex justify-between items-center px-2">
                                        <p className="text-sm font-medium text-gray-300">Top speed</p>
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-base font-semibold text-white">
                                                {performance.topSpeed.value ?? "—"}
                                            </span>
                                            <span className="text-xs text-gray-400">
                                                {performance.topSpeed.unit}
                                            </span>
                                        </div>
                                    </div>
                                )}


                                {performance?.acceleration && (
                                    <div>
                                        <h3 className="text-sm font-medium text-gray-300 mb-3">Acceleration</h3>

                                        <div className="rounded-xl px-2">

                                            {performance.acceleration["0To100"] && (
                                                <div className="flex items-center justify-between py-1 text-sm">
                                                    <p className="text-sm text-gray-500"> {performance.acceleration["0To100"].test}</p>

                                                    <div className="flex items-baseline gap-1">
                                                        <span className=" text-white">
                                                            {performance.acceleration["0To100"].value ?? "—"}
                                                        </span>
                                                        <span className="text-xs text-gray-400">
                                                            {performance.acceleration["0To100"].unit}
                                                        </span>
                                                    </div>
                                                </div>
                                            )}


                                            {performance.acceleration["0To160"] && (
                                                <div className="flex items-center justify-between py-1 text-sm">
                                                    <p className="text-sm text-gray-500"> {performance.acceleration["0To160"].test} </p>

                                                    <div className="flex items-baseline gap-1">
                                                        <span className=" text-white">
                                                            {performance.acceleration["0To160"].value ?? "—"}
                                                        </span>
                                                        <span className="text-xs text-gray-400">
                                                            {performance.acceleration["0To160"].unit}
                                                        </span>
                                                    </div>
                                                </div>
                                            )}


                                            {performance.acceleration["0To200"] && (
                                                <div className="flex items-center justify-between py-1 text-sm">
                                                    <p className="text-sm text-gray-500"> {performance.acceleration["0To200"].test}</p>

                                                    <div className="flex items-baseline gap-1">
                                                        <span className="text-white">
                                                            {performance.acceleration["0To200"].value ?? "—"}
                                                        </span>
                                                        <span className="text-xs text-gray-400">
                                                            {performance.acceleration["0To200"].unit}
                                                        </span>
                                                    </div>
                                                </div>
                                            )}

                                            {performance.acceleration["80To120"] && (
                                                <div className="flex items-center justify-between py-1 text-sm">
                                                    <p className="text-sm text-gray-500"> {performance.acceleration["80To120"].test} </p>

                                                    <div className="flex items-baseline gap-1">
                                                        <span className=" text-white">
                                                            {performance.acceleration["80To120"].value ?? "—"}
                                                        </span>
                                                        <span className="text-xs text-gray-400">
                                                            {performance.acceleration["80To120"].unit}
                                                        </span>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div id="sound" className="mt-6">
                        <div className="flex cursor-pointer items-center justify-between" onClick={() => setActiveId(activeId === "sound" ? null : "sound")}>
                            <p className="font-medium text-white/40">
                                sound
                            </p>
                            {activeId === "sound" ? (
                                <ChevronDown className="h-5 w-5 text-gray-400" />
                            ) : (
                                <ChevronRight className="h-5 w-5 text-gray-400" />
                            )}
                        </div>

                        <div className={`grid transition-all duration-500 ease-in-out ${activeId === "sound"
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                            }`}>
                            <div className="overflow-hidden">
                                <div className="flex justify-between items-center">
                                    <p className="text-sm text-gray-500">
                                        Sound level of passing vehicle
                                    </p>

                                    <p className="mt-4 text-sm font-semibold tracking-tight text-gray-500">
                                        {soundLevel.passingVehicle.value}

                                        <span className="ml-2 text-sm font-normal text-gray-500">
                                            {soundLevel.passingVehicle.unit}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div id="charging" className="mt-6 ">

                        <button
                            type="button"
                            className="flex w-full cursor-pointer items-center justify-between text-left focus:outline-none"
                            onClick={() => setActiveId(activeId === "charging" ? null : "charging")}
                        >
                            <span className="text-base font-medium text-white/40 hover:text-white/60 transition-colors">
                                Charging & Battery
                            </span>
                            {activeId === "charging" ? (
                                <ChevronDown className="h-5 w-5 text-gray-400" />
                            ) : (
                                <ChevronRight className="h-5 w-5 text-gray-400" />
                            )}
                        </button>

                        <div className={`grid transition-all duration-500 ease-in-out ${activeId === "charging" ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"}`}>
                            <div className="overflow-hidden space-y-6">

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {charging?.battery?.grossEnergyContent && (
                                        <div className="rounded  bg-[#222121] p-4 flex flex-col justify-between">
                                            <span className="text-sm   text-gray-400">
                                                Gross Battery Capacity
                                            </span>
                                            <div className="flex items-baseline gap-1 mt-4">
                                                <span className="text-sm  text-white">
                                                    {charging.battery.grossEnergyContent.value ?? "—"}
                                                </span>
                                                <span className="text-sm text-gray-400">
                                                    {charging.battery.grossEnergyContent.unit}
                                                </span>
                                            </div>
                                        </div>
                                    )}

                                    {charging?.dcCharging?.maximumChargingPower && (
                                        <div className="rounded bg-[#222121] p-4 flex flex-col justify-between">
                                            <span className="text-sm text-gray-400">
                                                Max DC Charging Power
                                            </span>
                                            <div className="flex items-baseline gap-1 mt-4">
                                                <span className="text-sm  text-white">
                                                    {charging.dcCharging.maximumChargingPower.value ?? "—"}
                                                </span>
                                                <span className="text-sm text-gray-400">
                                                    {charging.dcCharging.maximumChargingPower.unit}
                                                </span>
                                            </div>
                                        </div>
                                    )}
                                </div>


                                {charging?.dcCharging && (
                                    <div>
                                        <h3 className="text-sm font-medium text-gray-300 ">DC Fast Charging</h3>
                                        <div className=" rounded-xl p-4 space-y-1">
                                            {charging.dcCharging.chargingTime?.maximumChargingPower && (
                                                <div className="flex items-center justify-between py-1 text-sm">
                                                    <div>
                                                        <p className=" text-sm text-gray-200">Max Charging Power range ({charging.dcCharging.chargingTime.maximumChargingPower.chargeRange})</p>
                                                    </div>
                                                    <div className="flex items-baseline gap-1">
                                                        <span className="text-white">
                                                            {charging.dcCharging.chargingTime.maximumChargingPower.value ?? "—"}
                                                        </span>
                                                        <span className="text-xs text-gray-400">
                                                            {charging.dcCharging.chargingTime.maximumChargingPower.unit}
                                                        </span>
                                                    </div>
                                                </div>
                                            )}

                                            {charging.dcCharging.chargingTime?.["400VInfrastructure"] && (
                                                <div className="flex items-center justify-between py-1 text-sm">
                                                    <div>
                                                        <p className="text-sm text-gray-200">400V Infrastructure range ({charging.dcCharging.chargingTime["400VInfrastructure"].chargeRange})</p>
                                                    </div>
                                                    <div className="flex items-baseline gap-1">
                                                        <span className=" text-white">
                                                            {charging.dcCharging.chargingTime["400VInfrastructure"].value ?? "—"}
                                                        </span>
                                                        <span className="text-xs text-gray-400">
                                                            {charging.dcCharging.chargingTime["400VInfrastructure"].unit}
                                                        </span>
                                                    </div>
                                                </div>
                                            )}

                                            {charging.dcCharging.rechargedRangeIn10Minutes?.maximumChargingPower && (
                                                <div className="flex items-center justify-between py-1 text-sm">
                                                    <div>
                                                        <p className="font-medium text-gray-200">Recharged range (WLTP) in 10 min with maximum DC charging power</p>
                                                    </div>
                                                    <div className="flex items-baseline gap-1">
                                                        <span className=" text-white">
                                                            {charging.dcCharging.rechargedRangeIn10Minutes.maximumChargingPower.value ?? "—"}
                                                        </span>
                                                        <span className="text-xs text-gray-400">
                                                            {charging.dcCharging.rechargedRangeIn10Minutes.maximumChargingPower.unit}
                                                        </span>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}

                                {charging?.acCharging?.chargingTime && (
                                    <div>
                                        <h3 className="text-sm font-medium text-gray-300 ">AC Charging (0-100%)</h3>
                                        <div className="rounded p-4 ">
                                            {charging.acCharging.chargingTime["9_6kW"] && (
                                                <div className="flex items-center justify-between py-1 text-sm">
                                                    <span className="font-medium text-gray-200">Charging time with 9.6 kW</span>
                                                    <div className="flex items-baseline gap-1">
                                                        <span className=" text-white">
                                                            {charging.acCharging.chargingTime["9_6kW"].value ?? "—"}
                                                        </span>
                                                        <span className="text-xs text-gray-400">
                                                            {charging.acCharging.chargingTime["9_6kW"].unit}
                                                        </span>
                                                    </div>
                                                </div>
                                            )}

                                            {charging.acCharging.chargingTime["11kW"] && (
                                                <div className="flex items-center justify-between py-1 text-sm">
                                                    <span className=" text-gray-200"> Charging time with 11 kW</span>
                                                    <div className="flex items-baseline gap-1">
                                                        <span className=" text-white">
                                                            {charging.acCharging.chargingTime["11kW"].value ?? "—"}
                                                        </span>
                                                        <span className="text-xs text-gray-400">
                                                            {charging.acCharging.chargingTime["11kW"].unit}
                                                        </span>
                                                    </div>
                                                </div>
                                            )}

                                            {charging.acCharging.chargingTime["22kW"] && (
                                                <div className="flex items-center justify-between py-1 text-sm">
                                                    <span className="font-medium text-gray-200">Charging time with 22 kW</span>
                                                    <div className="flex items-baseline gap-1">
                                                        <span className=" text-white">
                                                            {charging.acCharging.chargingTime["22kW"].value ?? "—"}
                                                        </span>
                                                        <span className="text-xs text-gray-400">
                                                            {charging.acCharging.chargingTime["22kW"].unit}
                                                        </span>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </section >
    );
};


export default TaycanTurboTechnicalData;