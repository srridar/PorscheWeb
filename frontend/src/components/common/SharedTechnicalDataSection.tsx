import React from 'react'
import { ChevronRight, ChevronDown } from 'lucide-react';

interface TechnicalDataProps {
    technicalData: any;
    activeId: string | null;
    setActiveId: React.Dispatch<React.SetStateAction<string | null>>;
}

const SharedTechnicalDataSection: React.FC<TechnicalDataProps> = ({ technicalData, activeId, setActiveId, }) => {

    const { powerUnit, performance, soundLevel, } = technicalData;

    return (
        <div>
            <div id="power" className="mt-4" >

                <div className="flex cursor-pointer items-center justify-between mb-4" onClick={() => setActiveId(activeId === "power" ? null : "power")}>
                    <p className="text-white/40 font-semibold"> Power</p>
                    {activeId === "power" ? (<ChevronDown className="h-5 w-5 text-gray-400" />) : (<ChevronRight className="h-5 w-5 text-gray-400" />)}
                </div>

                <div className={`grid transition-all pl-4 duration-500 ease-in-out ${activeId === "power"
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
                                    {powerUnit.maxOutputPerLiter.kWPerLiter.value} {powerUnit.maxOutputPerLiter.kWPerLiter.unit}  /
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

                <div className={`grid transition-all pl-4 duration-500 ease-in-out ${activeId === "performance"
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

                                {performance?.acceleration?.zeroTo200 && (

                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-gray-100">0 - 200 km/h</span>
                                        <span className="text-sm font-semibold text-gray-500">
                                            {performance.acceleration.zeroTo200.value}{" "}
                                            <span className="font-normal">{performance.acceleration.zeroTo200.unit}</span>
                                        </span>
                                    </div>

                                )
                                }


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

                        {performance?.acceleration?.sportChrono && (
                            <div className="mt-4">
                                <h3 className="mb-2 text-sm text-gray-100">
                                    Acceleration with Sport Chrono Package
                                </h3>
                                <div className="space-y-2 pl-2">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-gray-100">0 - 100 km/h</span>
                                        <span className="text-sm font-semibold text-gray-500">
                                            {performance.acceleration.sportChrono.zeroTo100.value}{" "}
                                            <span className="font-normal">
                                                {performance.acceleration.sportChrono.zeroTo100.unit}
                                            </span>
                                        </span>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-gray-100">0 - 160 km/h</span>
                                        <span className="text-sm font-semibold text-gray-500">
                                            {performance.acceleration.sportChrono.zeroTo160.value}{" "}
                                            <span className="font-normal">
                                                {performance.acceleration.sportChrono.zeroTo160.unit}
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

                <div className={`grid transition-all pl-4 duration-500 ease-in-out ${activeId === "sound" ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="overflow-hidden space-y-2 pt-2">

                        <div className="flex items-center justify-between py-1">
                            <p className="text-sm text-gray-100">  Sound level according to regulation </p>
                            <p className="text-sm font-semibold text-gray-500"> {soundLevel.standard} </p>
                        </div>


                        {
                            soundLevel?.stationaryVehicle && (
                                <div className="flex items-center justify-between py-1">
                                    <p className="text-sm text-gray-100">
                                        Sound level of stationary vehicle
                                    </p>
                                    <p className="text-sm font-semibold text-gray-500">
                                        {soundLevel.stationaryVehicle.value}
                                        <span className="ml-1 font-normal text-gray-500"> {soundLevel.stationaryVehicle.unit} </span>
                                    </p>
                                </div>
                            )
                        }




                        {
                            soundLevel?.stationaryVehicleRpm && (
                                <div className="flex items-center justify-between py-1">
                                    <p className="text-sm text-gray-100"> Sound level of stationary vehicle at engine speed </p>
                                    <p className="text-sm font-semibold text-gray-500">
                                        {soundLevel.stationaryVehicleRpm.value}
                                        <span className="ml-1 font-normal text-gray-500"> {soundLevel.stationaryVehicleRpm.unit} </span>
                                    </p>
                                </div>

                            )
                        }


                        {soundLevel?.passingVehicle && (
                            <div className="flex items-center justify-between py-1">
                                <p className="text-sm text-gray-100"> Sound level of passing vehicle </p>
                                <p className="text-sm font-semibold text-gray-500">
                                    {soundLevel.passingVehicle.value}
                                    <span className="ml-1 font-normal text-gray-500"> {soundLevel.passingVehicle.unit} </span>
                                </p>
                            </div>
                        )}

                    </div>
                </div>
            </div>

        </div>
    )
}

export default SharedTechnicalDataSection