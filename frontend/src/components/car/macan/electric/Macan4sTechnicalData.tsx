
import React, { useState } from "react";
import { ChevronRight, ChevronDown } from 'lucide-react';
import CapacitiesShared from "./shared/CapacitiesShared";
import PerformanceShared from "./shared/PerformanceShared";
import SoundShared from "./shared/SoundShared";


interface TechnicalDataProps {
    technicalData: any;
}

const MacanTechnicalData: React.FC<TechnicalDataProps> = ({ technicalData }) => {
    const { height, length, width, wheelbase, powerUnit, performance, soundLevel, charging, terrainFeatures } = technicalData;

    const [activeId, setActiveId] = useState<string | null>(null);


    return (
        <section className="relative text-white bg-[#131212]">

            <div className=" mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-16">

                <div className="mb-6">
                    <p className="mb-2 text-xl font-mono "> Technical Data  </p>
                </div>

                <div className="w-full text-white p-4 md:p-6 flex flex-col gap-6">
                    {/* Images Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 rounded-2xl">
                        <div className="w-full overflow-hidden rounded-xl bg-neutral-900 p-1">
                            <img
                                src="/images/car-layout.png"
                                alt="Car layout"
                                className="h-[200px] sm:h-[250px] w-full rounded-lg object-cover"
                            />
                        </div>

                        <div className="w-full overflow-hidden rounded-xl bg-neutral-900 p-1">
                            <img
                                src="/images/vehicledimensions.png"
                                alt="Vehicle dimensions"
                                className="h-[200px] sm:h-[250px] w-full rounded-lg object-cover"
                            />
                        </div>
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                        {/* Basic Dimensions Cards */}
                        <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 w-full">
                            {[
                                { level: "Height", value: height },
                                { level: "Length", value: length },
                                { level: "Width", value: width },
                                { level: "Wheelbase", value: wheelbase },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between rounded-xl px-4 py-3.5 bg-[#222121] transition-colors gap-1"
                                >
                                    <span className="text-xs sm:text-sm font-medium text-gray-400">
                                        {item.level}
                                    </span>
                                    <span className="text-sm font-semibold text-white tracking-wide">
                                        {item.value || "—"}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Terrain Features Detail List */}
                        <div className="space-y-4 text-xs sm:text-sm w-full bg-[#181818] p-4 sm:p-5 rounded-xl ">
                            <div className="flex justify-between items-center py-2 border-b border-white/5 gap-4">
                                <h3 className="text-gray-300">
                                    Max. clearance between ground and water-sensitive parts, steel suspension (DIN)
                                </h3>
                                <div className="flex gap-1 items-center font-semibold text-white whitespace-nowrap">
                                    <p>{terrainFeatures?.groundClearance?.steelSuspension?.value ?? "—"}</p>
                                    <span>{terrainFeatures?.groundClearance?.steelSuspension?.unit}</span>
                                </div>
                            </div>

                            <div className="flex justify-between items-center py-2 border-b border-white/5 gap-4">
                                <h3 className="text-gray-300">
                                    Max. ground clearance, steel suspension (PASM DIN)
                                </h3>
                                <div className="flex gap-1 items-center font-semibold text-white whitespace-nowrap">
                                    <p>{terrainFeatures?.groundClearance?.steelSuspensionPASM?.value ?? "—"}</p>
                                    <span>{terrainFeatures?.groundClearance?.steelSuspensionPASM?.unit}</span>
                                </div>
                            </div>

                            <div className="flex justify-between items-center py-2 border-b border-white/5 gap-4">
                                <h3 className="text-gray-300">
                                    Max. ground clearance, air suspension (extra off-road level)
                                </h3>
                                <div className="flex gap-1 items-center font-semibold text-white whitespace-nowrap">
                                    <p>{terrainFeatures?.groundClearance?.airSuspensionExtraOffRoad?.value ?? "—"}</p>
                                    <span>{terrainFeatures?.groundClearance?.airSuspensionExtraOffRoad?.unit}</span>
                                </div>
                            </div>

                            <div className="flex justify-between items-center py-2 border-b border-white/5 gap-4">
                                <h3 className="text-gray-300">
                                    Max. ground clearance, air suspension (low level)
                                </h3>
                                <div className="flex gap-1 items-center font-semibold text-white whitespace-nowrap">
                                    <p>{terrainFeatures?.groundClearance?.airSuspensionLow?.value ?? "—"}</p>
                                    <span>{terrainFeatures?.groundClearance?.airSuspensionLow?.unit}</span>
                                </div>
                            </div>

                            <div className="flex justify-between items-center py-2 border-b border-white/5 gap-4">
                                <h3 className="text-gray-300">
                                    Max. clearance between ground and water-sensitive parts, steel suspension (DIN)
                                </h3>
                                <div className="flex gap-1 items-center font-semibold text-white whitespace-nowrap">
                                    <p>{terrainFeatures?.waterClearance?.steelSuspensionDIN?.value ?? "—"}</p>
                                    <span>{terrainFeatures?.waterClearance?.steelSuspensionDIN?.unit}</span>
                                </div>
                            </div>

                            <div className="flex justify-between items-center py-2 border-b border-white/5 gap-4">
                                <h3 className="text-gray-300">
                                    Max. clearance between ground and water-sensitive parts, steel suspension (EC)
                                </h3>
                                <div className="flex gap-1 items-center font-semibold text-white whitespace-nowrap">
                                    <p>{terrainFeatures?.waterClearance?.steelSuspensionEC?.value ?? "—"}</p>
                                    <span>{terrainFeatures?.waterClearance?.steelSuspensionEC?.unit}</span>
                                </div>
                            </div>

                            <div className="flex justify-between items-center py-2 border-b border-white/5 gap-4">
                                <h3 className="text-gray-300">
                                    Breakover angle, steel suspension (PASM DIN)
                                </h3>
                                <div className="flex gap-1 items-center font-semibold text-white whitespace-nowrap">
                                    <p>{terrainFeatures?.breakoverAngle?.steelSuspensionPASMDIN?.value ?? "—"}</p>
                                    <span>{terrainFeatures?.breakoverAngle?.steelSuspensionPASMDIN?.unit}</span>
                                </div>
                            </div>

                            <div className="flex justify-between items-center py-2 border-b border-white/5 gap-4">
                                <h3 className="text-gray-300">
                                    Breakover angle, air suspension (low level)
                                </h3>
                                <div className="flex gap-1 items-center font-semibold text-white whitespace-nowrap">
                                    <p>{terrainFeatures?.breakoverAngle?.airSuspensionLow?.value ?? "—"}</p>
                                    <span>{terrainFeatures?.breakoverAngle?.airSuspensionLow?.unit}</span>
                                </div>
                            </div>

                            <div className="flex justify-between items-center py-2 border-b border-white/5 gap-4">
                                <h3 className="text-gray-300">
                                    Breakover angle, air suspension (off-road level)
                                </h3>
                                <div className="flex gap-1 items-center font-semibold text-white whitespace-nowrap">
                                    <p>{terrainFeatures?.breakoverAngle?.airSuspensionOffRoad?.value ?? "—"}</p>
                                    <span>{terrainFeatures?.breakoverAngle?.airSuspensionOffRoad?.unit}</span>
                                </div>
                            </div>

                            <div className="flex justify-between items-center py-2 border-b border-white/5 gap-4">
                                <h3 className="text-gray-300">
                                    Breakover angle, air suspension (extra off-road level)
                                </h3>
                                <div className="flex gap-1 items-center font-semibold text-white whitespace-nowrap">
                                    <p>{terrainFeatures?.breakoverAngle?.airSuspensionExtraOffRoad?.value ?? "—"}</p>
                                    <span>{terrainFeatures?.breakoverAngle?.airSuspensionExtraOffRoad?.unit}</span>
                                </div>
                            </div>

                            <div className="flex justify-between items-center py-2 gap-4">
                                <h3 className="text-gray-300">
                                    Breakover angle (Steel suspension)
                                </h3>
                                <div className="flex gap-1 items-center font-semibold text-white whitespace-nowrap">
                                    <p>{terrainFeatures?.departureAngle?.steelSuspensionPASMDIN?.value ?? "—"}</p>
                                    <span>{terrainFeatures?.departureAngle?.steelSuspensionPASMDIN?.unit}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-5xl">

                    <div id="power" className="mt-6 " >

                        <div className="flex cursor-pointer items-center border-b border-white/10 pb-2 justify-between" onClick={() => setActiveId(activeId === "power" ? null : "power")}>
                            <p className="text-white/40"> Power</p>
                            {activeId === "power" ? (<ChevronDown className="h-5 w-5 text-gray-400" />) : (<ChevronRight className="h-5 w-5 text-gray-400" />)}
                        </div>

                        <div className={`grid transition-all duration-500 ease-in-out ${activeId === "power"
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                            }`}>
                            <div className="overflow-hidden">


                                <div className="grid grid-cols-3 py-2">
                                    <div className="pr-4 text-sm sm:text-sm text-gray-100"> Torque Electric Motor </div>
                                    <div>
                                        <span className="text-sm font-semibold text-gray-500"> {powerUnit?.electricMotorTorque?.value} </span>
                                        <span className="ml-2 text-sm text-gray-500"> {powerUnit?.electricMotorTorque?.unit} </span>
                                    </div>

                                </div>

                                <div className="grid grid-cols-3 py-2">
                                    <div className="pr-4 text-sm sm:text-sm text-gray-100"> Power Electric Motor (kW)</div>
                                    <div>
                                        <span className="text-sm font-semibold text-gray-500"> {powerUnit?.electricMotorPower?.value} </span>
                                        <span className="ml-2 text-sm text-gray-500"> {powerUnit?.electricMotorPower?.unit} </span>
                                    </div>

                                </div>

                                <div className="grid grid-cols-3 py-2">
                                    <div className="pr-4 text-sm sm:text-sm text-gray-100"> Max. torque with Launch Control </div>
                                    <div>
                                        <span className="text-sm font-semibold text-gray-500"> {powerUnit?.maxTorqueWithLaunchControl?.value} </span>
                                        <span className="ml-2 text-sm text-gray-500"> {powerUnit?.maxTorqueWithLaunchControl?.unit} </span>
                                    </div>

                                </div>

                                <div className="grid grid-cols-3 py-2">
                                    <div className="pr-4 text-sm text-gray-100 sm:text-sm"> Power up to </div>

                                    <div className="flex gap-1">
                                        <span className="text-sm text-gray-500"> {powerUnit?.powerUpTo?.kw} kW / </span>
                                        <span className="text-sm text-gray-500"> {powerUnit?.powerUpTo?.ps} PS </span>
                                    </div>

                                </div>

                                <div className="grid grid-cols-3  py-1">
                                    <div className="pr-4 text-sm text-gray-100 sm:text-sm"> Overboost power with Launch Control </div>
                                    <div className="flex items-center  text-gray-500 gap-1 ">
                                        <span className="text-sm font-semibold "> {powerUnit?.overboostPowerWithLaunchControl?.kw}{" "} kW / </span>
                                        <span className=" text-sm "> {powerUnit?.overboostPowerWithLaunchControl?.ps}{" "} PS</span>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>

                    < PerformanceShared activeId={activeId} setActiveId={setActiveId} technicalData={technicalData} />

                    < SoundShared activeId={activeId} setActiveId={setActiveId} technicalData={technicalData} />


                    <div id="charging" className="mt-6 ">

                        <div className="flex w-full border-b border-white/10 pb-4 cursor-pointer items-center justify-between text-left focus:outline-none"
                            onClick={() => setActiveId(activeId === "charging" ? null : "charging")}
                        >
                            <span className="text-base font-medium text-white/40">
                                Charging & Battery
                            </span>
                            {activeId === "charging" ? (
                                <ChevronDown className="h-5 w-5 text-gray-400" />
                            ) : (
                                <ChevronRight className="h-5 w-5 text-gray-400" />
                            )}
                        </div>


                        <div className={`grid transition-all pl-4 duration-500 ease-in-out ${activeId === "charging"
                            ? "grid-rows-[1fr] opacity-100 mt-4"
                            : "grid-rows-[0fr] opacity-0"
                            }`}
                        >
                            <div className="overflow-hidden space-y-6">


                                {charging?.battery?.grossEnergyContent && (
                                    <div className="flex items-center w-full justify-between py-2 text-sm">
                                        <p className="font-medium  text-gray-200">
                                            Gross battery energy content
                                        </p>
                                        <div className="flex items-baseline gap-1 mt-2">
                                            <span className="text-sm  text-white">
                                                {charging.battery.grossEnergyContent.value ?? "—"}
                                            </span>
                                            <span className="text-sm text-gray-400">
                                                {charging.battery.grossEnergyContent.unit}
                                            </span>
                                        </div>
                                    </div>
                                )}



                                {charging?.dcCharging && (
                                    <div>
                                        <h3 className="text-sm font-medium text-gray-300">
                                            DC Fast Charging Time
                                        </h3>
                                        <div className=" p-4 space-y-1">
                                            {charging.dcCharging.chargingTime?.maximumChargingPower && (
                                                <div className="flex items-center justify-between py-2.5 text-sm">

                                                    <p className="font-medium text-gray-200">Max Charging Power ({charging.dcCharging.chargingTime.maximumChargingPower.chargeRange})</p>

                                                    <div className="flex items-baseline gap-1">
                                                        <span className="font-semibold text-white">
                                                            {charging.dcCharging.chargingTime.maximumChargingPower.value ?? "—"}
                                                        </span>
                                                        <span className="text-xs text-gray-400">
                                                            {charging.dcCharging.chargingTime.maximumChargingPower.unit}
                                                        </span>
                                                    </div>
                                                </div>
                                            )}

                                            {charging.dcCharging.chargingTime?.["400VInfrastructure"] && (
                                                <div className="flex items-center justify-between py-2 text-sm">

                                                    <p className="font-medium text-gray-200">Max Charging Power ({charging.dcCharging.chargingTime.maximumChargingPower.chargeRange})</p>

                                                    <div className="flex items-baseline gap-1">
                                                        <span className="font-semibold text-white">
                                                            {charging.dcCharging?.chargingTime?.["400VInfrastructure"]?.value ?? "—"}
                                                        </span>
                                                        <span className="text-xs text-gray-400">
                                                            {charging.dcCharging.chargingTime?.["400VInfrastructure"]?.unit}
                                                        </span>
                                                    </div>
                                                </div>
                                            )}

                                            {charging?.dcCharging?.maximumChargingPower && (
                                                <div className="flex items-center justify-between py-2 text-sm">
                                                    <p className="font-medium  text-gray-200">
                                                        Max DC Charging Power
                                                    </p>
                                                    <div className="flex items-baseline gap-1 mt-2">
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
                                    </div>
                                )}


                                {charging?.dcCharging?.rechargedRangeIn10Minutes && (
                                    <div>

                                        <div className="pl-4 space-y-1">
                                            {charging.dcCharging.rechargedRangeIn10Minutes.maximumChargingPower && (
                                                <div className="flex items-center justify-between py-2.5 text-sm">

                                                    <p className="font-medium text-gray-200">Recharged range (WLTP) in 10 min with maximum DC charging power</p>

                                                    <div className="flex items-baseline gap-1">
                                                        <span className="font-semibold text-white">
                                                            {charging.dcCharging.rechargedRangeIn10Minutes.maximumChargingPower.value ?? "—"}
                                                        </span>
                                                        <span className="text-xs text-gray-400">
                                                            {charging.dcCharging.rechargedRangeIn10Minutes.maximumChargingPower.unit}
                                                        </span>
                                                    </div>
                                                </div>
                                            )}

                                            {charging.dcCharging.rechargedRangeIn10Minutes["150kW"] && (
                                                <div className="flex items-center justify-between py-2.5 text-sm">

                                                    <p className="font-medium text-gray-200">Recharged range (WLTP) in 10 min with 150 kW</p>


                                                    <div className="flex items-baseline gap-1">
                                                        <span className="font-semibold text-white">
                                                            {charging.dcCharging.rechargedRangeIn10Minutes["150kW"].value ?? "—"}
                                                        </span>
                                                        <span className="text-xs text-gray-400">
                                                            {charging.dcCharging.rechargedRangeIn10Minutes["150kW"].unit}
                                                        </span>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}


                                {charging?.acCharging?.chargingTime && (
                                    <div>
                                        <h3 className="text-sm font-medium text-gray-300 mb-3"> AC Charging (0-100%) </h3>
                                        <div className="rounded bg-[#222121] p-4 space-y-1">
                                            {charging.acCharging.chargingTime["9_6kW"] && (
                                                <div className="flex items-center justify-between py-2.5 text-sm">
                                                    <span className="font-medium text-gray-200">9.6 kW</span>
                                                    <div className="flex items-baseline gap-1">
                                                        <span className="font-semibold text-white">
                                                            {charging.acCharging.chargingTime["9_6kW"].value ?? "—"}
                                                        </span>
                                                        <span className="text-xs text-gray-400">
                                                            {charging.acCharging.chargingTime["9_6kW"].unit}
                                                        </span>
                                                    </div>
                                                </div>
                                            )}

                                            {charging.acCharging.chargingTime["11kW"] && (
                                                <div className="flex items-center justify-between py-2.5 text-sm">
                                                    <span className="font-medium text-gray-200">11 kW</span>
                                                    <div className="flex items-baseline gap-1">
                                                        <span className="font-semibold text-white">
                                                            {charging.acCharging.chargingTime["11kW"].value ?? "—"}
                                                        </span>
                                                        <span className="text-xs text-gray-400">
                                                            {charging.acCharging.chargingTime["11kW"].unit}
                                                        </span>
                                                    </div>
                                                </div>
                                            )}
                                            {charging.acCharging.chargingTime["19_2kW"] && (
                                                <div className="flex items-center justify-between py-2.5 text-sm">
                                                    <span className="font-medium text-gray-200">19.2 kW</span>
                                                    <div className="flex items-baseline gap-1">
                                                        <span className="font-semibold text-white">
                                                            {charging.acCharging.chargingTime["19_2kW"].value ?? "—"}
                                                        </span>
                                                        <span className="text-xs text-gray-400">
                                                            {charging.acCharging.chargingTime["19_2kW"].unit}
                                                        </span>
                                                    </div>
                                                </div>
                                            )}
                                            {charging.acCharging.chargingTime["22kW"] && (
                                                <div className="flex items-center justify-between py-2.5 text-sm">
                                                    <span className="font-medium text-gray-200">22 kW</span>
                                                    <div className="flex items-baseline gap-1">
                                                        <span className="font-semibold text-white">
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

                    < CapacitiesShared activeId={activeId} setActiveId={setActiveId} technicalData={technicalData} />

                </div>
            </div>

        </section >
    );
};



export default MacanTechnicalData;