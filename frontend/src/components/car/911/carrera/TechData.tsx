import React from 'react'
import { ChevronRight, ChevronDown } from 'lucide-react';

interface TechnicalDataProps {
    technicalData: any;
    activeId: string | null;
    setActiveId: React.Dispatch<React.SetStateAction<string | null>>;
}

const TechData: React.FC<TechnicalDataProps> = ({ technicalData, activeId, setActiveId, }) => {

    const { powerUnit, performance, soundLevel, } = technicalData;

    return (
        <div>
            <div id="power" className="mt-4" >

                <div className="flex cursor-pointer items-center justify-between " onClick={() => setActiveId(activeId === "power" ? null : "power")}>
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
                                    {powerUnit.power.kw.value} {powerUnit.power.kw.unit} /
                                </span>
                                <span className="text-sm text-gray-500">
                                    {powerUnit.power.ps.value} {powerUnit.power.ps.unit}
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
                                    {powerUnit.maxOutputPerLiter.kwPerLiter.value} {powerUnit.maxOutputPerLiter.kwPerLiter.unit}  /
                                </span>
                                <span className="text-sm text-gray-500">
                                    {powerUnit.maxOutputPerLiter.psPerLiter.value} {powerUnit.maxOutputPerLiter.psPerLiter.unit}
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
                <div className="flex cursor-pointer items-center justify-between" onClick={() => setActiveId( activeId === "performance" ? null : "performance")}>
                    <p className="text-white/40">Performance</p>
                    {activeId === "performance" ? (
                        <ChevronDown className="h-5 w-5 text-gray-400" />
                    ) : (
                        <ChevronRight className="h-5 w-5 text-gray-400" />
                    )}
                </div>

                <div className={`grid pl-4 transition-all duration-500 ease-in-out ${activeId === "performance" ? "grid-rows-[1fr] opacity-100": "grid-rows-[0fr] opacity-0"
                }`}
                >
                    <div className="overflow-hidden">
                        <div className="flex items-center justify-between py-2">
                            <p className="text-sm text-gray-100">  Top speed </p>

                            <p className="text-sm font-semibold text-gray-500">
                                {performance.topSpeed.value}
                                <span className="ml-1 font-normal"> {performance.topSpeed.unit}</span>
                            </p>
                        </div>


                        <div className="mt-4">
                            <h3 className="mb-2 text-sm text-gray-100"> Acceleration</h3>

                            <div className="space-y-3 pl-2">
                                <div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-gray-100">  0 - 100 km/h</span>

                                        <span className="text-sm font-semibold text-gray-500">
                                            {performance.acceleration.zeroTo100.standard.value}{" "}
                                            <span className="font-normal"> {performance.acceleration.zeroTo100.standard.unit}</span>
                                        </span>
                                    </div>

                                    {performance.acceleration.zeroTo100.sportChrono && (
                                        <div className="mt-1 flex justify-between pl-2">
                                            <span className="text-xs text-gray-400">Sport Chrono </span>
                                            <span className="text-xs text-gray-500">
                                                {performance.acceleration.zeroTo100.sportChrono.value}{" "}
                                                {performance.acceleration.zeroTo100.sportChrono.unit}
                                            </span>
                                        </div>
                                    )}
                                </div>

                                <div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-gray-100">0 - 160 km/h</span>
                                        <span className="text-sm font-semibold text-gray-500">
                                            {performance.acceleration.zeroTo160.standard.value}{" "}
                                            <span className="font-normal"> {performance.acceleration.zeroTo160.standard.unit} </span>
                                        </span>
                                    </div>

                                    {performance.acceleration.zeroTo160.sportChrono && (
                                        <div className="mt-1 flex justify-between pl-2">
                                            <span className="text-xs text-gray-400">Sport Chrono</span>
                                            <span className="text-xs text-gray-500">
                                                {performance.acceleration.zeroTo160.sportChrono.value}{" "}
                                                {performance.acceleration.zeroTo160.sportChrono.unit}
                                            </span>
                                        </div>
                                    )}
                                </div>


                                {performance.acceleration.zeroTo200 && (
                                    <div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-gray-100">  0 - 200 km/h </span>
                                            <span className="text-sm font-semibold text-gray-500">
                                                {performance.acceleration.zeroTo200.standard.value}{" "}
                                                <span className="font-normal">{performance.acceleration.zeroTo200.standard.unit}</span>
                                            </span>
                                        </div>

                                        {performance.acceleration.zeroTo200.sportChrono && (
                                            <div className="mt-1 flex justify-between pl-2">
                                                <span className="text-xs text-gray-400"> Sport Chrono </span>
                                                <span className="text-xs text-gray-500">
                                                    {performance.acceleration.zeroTo200.sportChrono.value}{" "}
                                                    {performance.acceleration.zeroTo200.sportChrono.unit}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                )}


                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-100">
                                        In-gear acceleration ( {performance.acceleration.inGear80To120.speedRange})
                                    </span>

                                    <span className="text-sm font-semibold text-gray-500">
                                        {performance.acceleration.inGear80To120.value}{" "}
                                        <span className="font-normal"> {performance.acceleration.inGear80To120.unit} </span>
                                    </span>
                                </div>

                            </div>
                        </div>

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

export default TechData;