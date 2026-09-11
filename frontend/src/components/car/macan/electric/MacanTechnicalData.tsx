
import React, { useState } from "react";
import { ChevronRight, ChevronDown } from 'lucide-react';
import PerformanceShared from "./shared/PerformanceShared";
import SoundShared from "./shared/SoundShared";
import CapacitiesShared from "./shared/CapacitiesShared";


interface TechnicalDataProps {
    technicalData: any;
}

const MacanTechnicalData: React.FC<TechnicalDataProps> = ({ technicalData }) => {
    const { height, length, width, wheelbase, powerUnit, charging, terrainFeatures } = technicalData;

    const [activeId, setActiveId] = useState<string | null>(null);


    return (
        <section className="  text-white">

            <div className="mx-auto max-w-7xl px-3 py-10 ">


                <div className="p-4 text-white   ">
                    <div className="flex flex-col gap-4  rounded-2xl">
                        <div className="w-full overflow-hidden rounded p-1">
                            <img
                                src="/images/car-layout.png"
                                alt="Car layout"
                                className="h-auto w-full md:w-[500px]  rounded-lg object-cover"
                            />
                        </div>

                        <div className="w-full overflow-hidden rounded-xl p-1">
                            <img
                                src="/images/vehicledimensions.png"
                                alt="Vehicle dimensions"
                                className="h-auto w-full md:w-[500px]  rounded-lg object-cover"
                            />
                        </div>
                    </div>

                    <div >
                        <div className="grid grid-cols-1 gap-3 rounded-xl mt-6 w-full md:grid-cols-2">
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
                                    <span className="text-sm font-medium text-gray-400">
                                        {item.level}
                                    </span>
                                    <span className="text-sm font-semibold text-white tracking-wide">
                                        {item.value || "—"}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-4 flex text-sm flex-col gap-3">

                            <div className="flex justify-between gap-3 items-center">
                                <h3>Ground clearance (Steel suspension)</h3>
                                <div className="flex gap-1 items-center">
                                    <p>{terrainFeatures?.groundClearance?.steelSuspension?.value}</p>
                                    <span>{terrainFeatures?.groundClearance?.steelSuspension?.unit}</span>
                                </div>
                            </div>

                            <div className="flex justify-between items-center gap-2">
                                <h3>Max. ground clearance, air suspension (normal ride height)</h3>
                                <div className="flex gap-1 items-center">
                                    <p>{terrainFeatures?.groundClearance?.airSuspensionNormal?.value}</p>
                                    <span>{terrainFeatures?.groundClearance?.airSuspensionNormal?.unit}</span>
                                </div>
                            </div>

                            <div className="flex justify-between items-center gap-2">
                                <h3>Max. ground clearance, air suspension (off-road level)</h3>
                                <div className="flex gap-1 items-center">
                                    <p>{terrainFeatures?.groundClearance?.airSuspensionOffRoad?.value}</p>
                                    <span>{terrainFeatures?.groundClearance?.airSuspensionOffRoad?.unit}</span>
                                </div>
                            </div>

                       
                            <div className="flex justify-between items-center gap-2">
                                <h3>Water clearance (Steel suspension)</h3>
                                <div className="flex gap-1 items-center">
                                    <p>{terrainFeatures?.waterClearance?.steelSuspension?.value}</p>
                                    <span>{terrainFeatures?.waterClearance?.steelSuspension?.unit}</span>
                                </div>
                            </div>

                            <div className="flex justify-between items-center gap-2">
                                <h3>Water clearance, air suspension (normal ride height)</h3>
                                <div className="flex gap-1 items-center">
                                    <p>{terrainFeatures?.waterClearance?.airSuspensionNormal?.value}</p>
                                    <span>{terrainFeatures?.waterClearance?.airSuspensionNormal?.unit}</span>
                                </div>
                            </div>

                            <div className="flex justify-between items-center gap-2">
                                <h3>Water clearance, air suspension (off-road level)</h3>
                                <div className="flex gap-1 items-center">
                                    <p>{terrainFeatures?.waterClearance?.airSuspensionOffRoad?.value}</p>
                                    <span>{terrainFeatures?.waterClearance?.airSuspensionOffRoad?.unit}</span>
                                </div>
                            </div>


                            <div className="flex justify-between items-center gap-2">
                                <h3>Slope angle front / rear (Steel suspension)</h3>
                                <div className="text-sm">
                                    <p>
                                        {terrainFeatures?.slopeAngle?.steelSuspension?.front?.value} / {terrainFeatures?.slopeAngle?.steelSuspension?.rear?.value}<span>{terrainFeatures?.slopeAngle?.steelSuspension?.front?.unit}</span>
                                    </p>

                                </div>
                            </div>

                            <div className="flex justify-between items-center gap-2">
                                <h3>Slope angle front / rear, air suspension (normal ride height)</h3>
                                <div className="">
                                    <p>
                                        {terrainFeatures?.slopeAngle?.airSuspensionNormal?.front?.value} / {terrainFeatures?.slopeAngle?.airSuspensionNormal?.rear?.value}
                                        <span>{terrainFeatures?.slopeAngle?.airSuspensionNormal?.front?.unit}</span>
                                    </p>

                                </div>
                            </div>

                            <div className="flex justify-between items-center gap-2">
                                <h3>Slope angle front / rear, air suspension (off-road level)</h3>
                                <div className="">
                                    <p>
                                        {terrainFeatures?.slopeAngle?.airSuspensionOffRoad?.front?.value} / {terrainFeatures?.slopeAngle?.airSuspensionOffRoad?.rear?.value}
                                        <span>{terrainFeatures?.slopeAngle?.airSuspensionOffRoad?.front?.unit}</span>
                                    </p>

                                </div>
                            </div>

                    
                            <div className="flex justify-between items-center gap-2">
                                <h3>Breakover angle (Steel suspension)</h3>
                                <div className="flex gap-1 items-center">
                                    <p>{terrainFeatures?.breakoverAngle?.steelSuspension?.value}</p>
                                    <span>{terrainFeatures?.breakoverAngle?.steelSuspension?.unit}</span>
                                </div>
                            </div>

                            <div className="flex justify-between items-center">
                                <h3>Breakover angle, air suspension (normal ride height)</h3>
                                <div className="flex gap-1 items-center">
                                    <p>{terrainFeatures?.breakoverAngle?.airSuspensionNormal?.value}</p>
                                    <span>{terrainFeatures?.breakoverAngle?.airSuspensionNormal?.unit}</span>
                                </div>
                            </div>

                            <div className="flex justify-between items-center">
                                <h3>Breakover angle, air suspension (off-road level)</h3>
                                <div className="flex gap-1 items-center">
                                    <p>{terrainFeatures?.breakoverAngle?.airSuspensionOffRoad?.value}</p>
                                    <span>{terrainFeatures?.breakoverAngle?.airSuspensionOffRoad?.unit}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-5xl">

                    <div id="power" className="mt-6" >

                        <div className="flex cursor-pointer items-center justify-between" onClick={() => setActiveId(activeId === "power" ? null : "power")}>
                            <p className="text-white/40"> Power</p>
                            {activeId === "power" ? (<ChevronDown className="h-5 w-5 text-gray-400" />) : (<ChevronRight className="h-5 w-5 text-gray-400" />)}
                        </div>

                        <div className={`grid transition-all duration-500 ease-in-out ${activeId === "power"
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                            }`}>
                            <div className="overflow-hidden">

                                <div className="flex justify-between items-center gap-3 py-2">
                                    <div className="pr-4 text-sm sm:text-sm text-gray-100"> Max. torque with Launch Control </div>

                                    <div>
                                        <span className="text-sm font-semibold text-gray-500"> {powerUnit?.maxTorqueWithLaunchControl?.value} </span>
                                        <span className="ml-2 text-sm text-gray-500"> {powerUnit?.maxTorqueWithLaunchControl?.unit} </span>
                                    </div>

                                </div>

                                <div className="flex justify-between items-center gap-3  py-2">
                                    <div className="pr-4 text-sm text-gray-100 sm:text-sm"> Power up to </div>

                                    <div className="flex gap-1">
                                        <span className="text-sm text-gray-500"> {powerUnit?.powerUpTo?.kw} kW / </span>
                                        <span className="text-sm text-gray-500"> {powerUnit?.powerUpTo?.ps} PS </span>
                                    </div>

                                </div>

                                <div className="flex justify-between items-center gap-3   py-1">
                                    <div className="pr-4 text-sm text-gray-100 "> Overboost power with Launch Control </div>
                                    <div className=" items-center  text-gray-500 gap-1 ">
                                        <span className="text-sm "> {powerUnit?.overboostPowerWithLaunchControl?.kw}{""} kW / </span>
                                        <span className=" text-sm "> {powerUnit?.overboostPowerWithLaunchControl?.ps}{" "} PS</span>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>

                    < PerformanceShared activeId={activeId} setActiveId={setActiveId} technicalData={technicalData} />

                    < SoundShared activeId={activeId} setActiveId={setActiveId} technicalData={technicalData} />


                    <div id="charging" className="mt-6 ">

                        <button
                            type="button"
                            className="flex w-full  pb-4 cursor-pointer items-center justify-between text-left focus:outline-none"
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


                        <div className={`grid transition-all pl-4 duration-500 ease-in-out ${activeId === "charging"
                            ? "grid-rows-[1fr] opacity-100 mt-4"
                            : "grid-rows-[0fr] opacity-0"
                            }`}
                        >
                            <div className="overflow-hidden space-y-6">

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {charging?.battery?.grossEnergyContent && (
                                        <div className="rounded p-4 flex flex-col justify-between">
                                            <span className="text-xs  text-gray-400">
                                                Gross Battery Capacity
                                            </span>
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

                                    {charging?.dcCharging?.maximumChargingPower && (
                                        <div className="rounded p-4 flex flex-col justify-between">
                                            <span className="text-xs  text-gray-400">
                                                Max DC Charging Power
                                            </span>
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

                                {charging?.dcCharging && (
                                    <div>
                                        <h3 className="text-sm font-medium text-gray-300 mb-3">
                                            DC Fast Charging Time
                                        </h3>
                                        <div className=" p-4 space-y-1">
                                            {charging.dcCharging.chargingTime?.maximumChargingPower && (
                                                <div className="flex items-center justify-between py-2.5 text-sm">
                                                    <div>
                                                        <p className="font-medium text-gray-200">Max Charging Power</p>
                                                        <p className="text-xs text-gray-500">
                                                            Range: {charging.dcCharging.chargingTime.maximumChargingPower.chargeRange}
                                                        </p>
                                                    </div>
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

                                            {charging.dcCharging.chargingTime?.["150kW"] && (
                                                <div className="flex items-center justify-between py-2.5 text-sm">
                                                    <div>
                                                        <p className="font-medium text-gray-200">150 kW Charger</p>
                                                        <p className="text-xs text-gray-500">
                                                            Range: {charging.dcCharging.chargingTime["150kW"].chargeRange}
                                                        </p>
                                                    </div>
                                                    <div className="flex items-baseline gap-1">
                                                        <span className="font-semibold text-white">
                                                            {charging.dcCharging.chargingTime["150kW"].value ?? "—"}
                                                        </span>
                                                        <span className="text-xs text-gray-400">
                                                            {charging.dcCharging.chargingTime["150kW"].unit}
                                                        </span>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}


                                {charging?.dcCharging?.rechargedRangeIn10Minutes && (
                                    <div>
                                        <h3 className="text-sm font-medium text-gray-300 mb-1">
                                            Recharged Range (10 min)
                                        </h3>
                                        <div className="pl-4 space-y-1">
                                            {charging.dcCharging.rechargedRangeIn10Minutes.maximumChargingPower && (
                                                <div className="flex items-center justify-between py-2.5 text-sm">
                                                    <div>
                                                        <p className="font-medium text-gray-200">Max Charging Power</p>
                                                        <p className="text-xs text-gray-500">
                                                            Standard - {charging.dcCharging.rechargedRangeIn10Minutes.maximumChargingPower.standard}
                                                        </p>
                                                    </div>
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
                                                    <div>
                                                        <p className="font-medium text-gray-200">150 kW Charger</p>
                                                        <p className="text-xs text-gray-500">
                                                            Standard - {charging.dcCharging.rechargedRangeIn10Minutes["150kW"].standard}
                                                        </p>
                                                    </div>
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

                                {/* AC Charging Section */}
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