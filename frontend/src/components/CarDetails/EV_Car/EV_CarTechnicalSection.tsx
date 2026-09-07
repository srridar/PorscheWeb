
import React, { useState } from "react";
import { ChevronRight, ChevronDown } from 'lucide-react';


interface TechnicalDataProps {
  technicalData: any;
}

const TechnicalData: React.FC<TechnicalDataProps> = ({ technicalData }) => {
  const { height, length, width, wheelbase, powerUnit, performance, soundLevel, charging, terrainFeatures } = technicalData;

  const acOptions = [
    {
      label: "9.6 kW AC",
      data: charging.ac["9_6kW"],
    },
    {
      label: "11 kW AC",
      data: charging.ac["11kW"],
    },
    {
      label: "22 kW AC",
      data: charging.ac["22kW"],
    },
  ];

  const [activeId, setActiveId] = useState<string | null>(null);

  const hasJ9E = acOptions.some(
    (option) => option?.data?.j9e
  );



  return (
    <section className=" text-white">

      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-16">

        <div className="mb-6">
          <p className="mb-2 text-xl font-mono "> Technical Data  </p>
        </div>

        <div className=" p-4 sm:p-6  text-white">

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
            <div className="flex justify-between items-center text-sm mb-2">
              <h3>Max. ground clearance, air suspension (normal ride height)</h3>
              <div className="text-sm flex gap-1 items-center ">
                <p>{terrainFeatures?.groundClearance?.airSuspension?.normalRideHeight?.value}</p>
                <span>{terrainFeatures?.groundClearance?.airSuspension?.normalRideHeight?.unit}</span>
              </div>

            </div>

            <div className="flex justify-between items-center text-sm mb-2">
              <h3>Max. ground clearance, air suspension (off-road level)</h3>
              <div className="text-sm flex gap-1 items-center ">
                <p>{terrainFeatures?.groundClearance?.airSuspension?.offRoadLevel?.value}</p>
                <span>{terrainFeatures?.groundClearance?.airSuspension?.offRoadLevel?.unit}</span>
              </div>
            </div>

            <div className="flex justify-between items-center text-sm mb-2">
              <h3>Max. ground clearance, air suspension (low level)</h3>

              <div className="text-sm flex gap-1 items-center ">
                <p>{terrainFeatures?.groundClearance?.airSuspension?.lowLevel?.value}</p>
                <span>{terrainFeatures?.groundClearance?.airSuspension?.lowLevel?.unit}</span>
              </div>

            </div>

            <div className="flex justify-between items-center text-sm mb-2">
              <h3>Breakover angle, air suspension (standard level)</h3>
              <div className="text-sm flex gap-1 items-center ">
                <p>{terrainFeatures?.approachAngle?.airSuspension?.standardLevel?.value}</p>
                <span>{terrainFeatures?.approachAngle?.airSuspension?.standardLevel?.unit}</span>
              </div>

            </div>

            <div className="flex justify-between items-center text-sm mb-2">
              <h3>Breakover angle, air suspension (low level)</h3>

              <div className="text-sm flex gap-1 items-center ">
                <p>{terrainFeatures?.breakoverAngle?.airSuspension?.lowLevel?.value}</p>
                <span>{terrainFeatures?.breakoverAngle?.airSuspension?.lowLevel?.unit}</span>
              </div>

            </div>

            <div className="flex justify-between items-center text-sm mb-2">
              <h3>Breakover angle, air suspension (offRoad level)</h3>
              <div className="text-sm flex gap-1 items-center ">
                <p>{terrainFeatures?.breakoverAngle?.airSuspension?.offRoadLevel?.value}</p>
                <span>{terrainFeatures?.breakoverAngle?.airSuspension?.offRoadLevel?.unit}</span>
              </div>

            </div>

            <div className="flex justify-between items-center text-sm mb-2">
              <h3>Breakover angle, air suspension (standard level)</h3>
              <div className="text-sm flex gap-1 items-center ">
                <p>{terrainFeatures?.breakoverAngle?.airSuspension?.standardLevel?.value}</p>
                <span>{terrainFeatures?.breakoverAngle?.airSuspension?.standardLevel?.unit}</span>
              </div>

            </div>

            <div className="flex justify-between items-center text-sm mb-2">
              <h3>Departure angle, air suspension (standard level)</h3>
              <div className="text-sm flex gap-1 items-center ">
                <p>{terrainFeatures?.departureAngle?.airSuspension?.standardLevel?.value}</p>
                <span>{terrainFeatures?.breakoverAngle?.airSuspension?.standardLevel?.unit}</span>
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
                <div className="grid grid-cols-3 text-gray-100 py-2">
                  <div className=""></div>
                  <div className="text-sm font-semibold "> Performance Battery Plus </div>
                  <div className="text-sm font-semibold "> J9E </div>
                </div>

                <div className="grid grid-cols-3 py-2">
                  <div className="pr-4 text-sm sm:text-sm text-gray-100"> Max. torque with Launch Control </div>

                  <div>
                    <span className="text-sm font-semibold text-gray-500"> {powerUnit?.maxTorqueWithLaunchControl?.performanceBatteryPlus?.value} </span>
                    <span className="ml-2 text-sm text-gray-500"> {powerUnit?.maxTorqueWithLaunchControl?.performanceBatteryPlus?.unit} </span>
                  </div>

                  <div>
                    <span className="text-sm font-semibold text-gray-500"> {powerUnit?.maxTorqueWithLaunchControl?.j9e?.value} </span>
                    <span className="ml-2 text-sm text-gray-500"> {powerUnit?.maxTorqueWithLaunchControl?.j9e?.unit} </span>
                  </div>

                </div>

                <div className="grid grid-cols-3 py-2">
                  <div className="pr-4 text-sm text-gray-100 sm:text-sm"> Power up to </div>

                  <div className="flex gap-1">
                    <span className="text-sm text-gray-500"> {powerUnit?.powerUpTo?.performanceBatteryPlus?.kw} kW / </span>
                    <span className="text-sm text-gray-500"> {powerUnit?.powerUpTo?.performanceBatteryPlus?.ps} PS </span>
                  </div>
                  <div className="flex gap-1 ">
                    <span className="text-sm  text-gray-500"> {powerUnit?.powerUpTo?.j9e?.kw} kW /</span>
                    <span className="text-sm text-gray-500"> {powerUnit?.powerUpTo?.j9e?.ps} PS </span>
                  </div>
                </div>

                <div className="grid grid-cols-3  py-1">
                  <div className="pr-4 text-sm text-gray-100 sm:text-sm"> Overboost power with Launch Control </div>
                  <div className="flex items-center  text-gray-500 gap-1 ">
                    <span className="text-sm font-semibold "> {powerUnit?.overboostPowerWithLaunchControl?.performanceBatteryPlus?.kw}{" "} kW / </span>
                    <span className=" text-sm "> {powerUnit?.overboostPowerWithLaunchControl?.performanceBatteryPlus?.ps}{" "} PS</span>
                  </div>
                  <div className="flex items-center text-gray-500 gap-1">
                    <span className="text-sm  "> {powerUnit?.overboostPowerWithLaunchControl?.j9e?.kw} kW / </span>
                    <span className="text-sm "> {powerUnit?.overboostPowerWithLaunchControl?.j9e?.ps} PS </span>
                  </div>
                </div>

              </div>
            </div>

          </div>

          <div id="performance" className="mt-6 ">

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
                  <div className="flex justify-between items-center py-2 ">
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


                <div>
                  <h3 className="text-sm font-medium text-gray-300 mb-3">
                    Acceleration <span className="text-gray-500">(with Launch Control)</span>
                  </h3>

                  <div className="p-4  space-y-3">

                    <div className={`grid ${hasJ9E ? "grid-cols-3" : "grid-cols-2"} pb-2  text-xs font-semibold text-gray-400 uppercase tracking-wider`}>
                      <div>Metric</div>
                      <div>Performance Battery Plus</div>
                      {hasJ9E && <div>J9E</div>}
                    </div>


                    <div className={`grid ${hasJ9E ? "grid-cols-3" : "grid-cols-2"} items-center py-1.5 text-sm`}>
                      <div className="text-gray-300 font-medium">0 - 100 km/h</div>
                      <div className="flex items-baseline gap-1">
                        <span className="font-semibold text-white">
                          {performance?.acceleration?.zeroTo100?.withLaunchControl?.value ?? "—"}
                        </span>
                        <span className="text-xs text-gray-400">
                          {performance?.acceleration?.zeroTo100?.withLaunchControl?.unit}
                        </span>
                      </div>
                      {hasJ9E && (
                        <div className="flex items-baseline gap-1">
                          <span className="font-semibold text-white">
                            {performance?.acceleration?.zeroTo100?.withLaunchControl?.value ?? "—"}
                          </span>
                          <span className="text-xs text-gray-400">
                            {performance?.acceleration?.zeroTo100?.withLaunchControl?.unit}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className={`grid ${hasJ9E ? "grid-cols-3" : "grid-cols-2"} items-center py-1.5 text-sm`}>
                      <div className="text-gray-300 font-medium">0 - 160 km/h</div>
                      <div className="flex items-baseline gap-1">
                        <span className="font-semibold text-white">
                          {performance?.acceleration?.zeroTo160?.performanceBatteryPlus?.value ?? "—"}
                        </span>
                        <span className="text-xs text-gray-400">
                          {performance?.acceleration?.zeroTo160?.performanceBatteryPlus?.unit}
                        </span>
                      </div>
                      {hasJ9E && (
                        <div className="flex items-baseline gap-1">
                          <span className="font-semibold text-white">
                            {performance?.acceleration?.zeroTo160?.j9e?.value ?? "—"}
                          </span>
                          <span className="text-xs text-gray-400">
                            {performance?.acceleration?.zeroTo160?.j9e?.unit}
                          </span>
                        </div>
                      )}
                    </div>


                    <div className={`grid ${hasJ9E ? "grid-cols-3" : "grid-cols-2"} items-center py-1.5 text-sm`}>
                      <div className="text-gray-300 font-medium">0 - 200 km/h</div>
                      <div className="flex items-baseline gap-1">
                        <span className="font-semibold text-white">
                          {performance?.acceleration?.zeroTo200?.performanceBatteryPlus?.value ?? "—"}
                        </span>
                        <span className="text-xs text-gray-400">
                          {performance?.acceleration?.zeroTo200?.performanceBatteryPlus?.unit}
                        </span>
                      </div>
                      {hasJ9E && (
                        <div className="flex items-baseline gap-1">
                          <span className="font-semibold text-white">
                            {performance?.acceleration?.zeroTo200?.j9e?.value ?? "—"}
                          </span>
                          <span className="text-xs text-gray-400">
                            {performance?.acceleration?.zeroTo200?.j9e?.unit}
                          </span>
                        </div>
                      )}
                    </div>


                    <div className={`grid ${hasJ9E ? "grid-cols-3" : "grid-cols-2"} items-center py-1.5 text-sm`}>
                      <div className="text-gray-300 font-medium">80 - 120 km/h</div>
                      <div className="flex items-baseline gap-1">
                        <span className="font-semibold text-white">
                          {performance?.acceleration?.inGear80To120?.performanceBatteryPlus?.value ?? "—"}
                        </span>
                        <span className="text-xs text-gray-400">
                          {performance?.acceleration?.inGear80To120?.performanceBatteryPlus?.unit}
                        </span>
                      </div>
                      {hasJ9E && (
                        <div className="flex items-baseline gap-1">
                          <span className="font-semibold text-white">
                            {performance?.acceleration?.inGear80To120?.j9e?.value ?? "—"}
                          </span>
                          <span className="text-xs text-gray-400">
                            {performance?.acceleration?.inGear80To120?.j9e?.unit}
                          </span>
                        </div>
                      )}
                    </div>

                  </div>
                </div>
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

          <div id="charging" className="mt-6" >

            <div className="flex cursor-pointer items-center justify-between mb-4" onClick={() => setActiveId(activeId === "charging" ? null : "charging")}>
              <p className="font-medium  text-white/40"> Charging</p>
              {activeId === "charging_unit" ? (
                <ChevronDown className="h-5 w-5 text-gray-400" />
              ) : (
                <ChevronRight className="h-5 w-5 text-gray-400" />
              )}

            </div>

            <div className={`grid transition-all duration-500 ease-in-out ${activeId === "charging"
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="mb-8">
                  <div className="grid grid-cols-1 gap-2">
                    <div className="flex justify-between ">
                      <p className="text-sm text-gray-500"> Gross battery energy content (Performance Battery Plus) </p>

                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-gray-500">
                          {charging?.battery?.performanceBatteryPlus?.grossEnergy?.value}
                        </span>

                        <span className="text-sm text-gray-500">
                          {charging?.battery?.performanceBatteryPlus?.grossEnergy?.unit}
                        </span>
                      </div>

                    </div>

                    <div className="flex justify-between">
                      <p className="text-sm text-gray-500"> Gross battery energy content(J9E)</p>

                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-gray-500">
                          {charging?.battery?.j9e?.grossEnergy?.value}
                        </span>

                        <span className="text-sm text-gray-500">
                          {charging?.battery?.j9e?.grossEnergy?.unit}
                        </span>
                      </div>

                    </div>
                  </div>
                </div>


                <div className="mb-8">
                  <div className="mb-4">
                    <h3 className="text-sm underline text-white/40">
                      AC charging (charging time from 0 to 100 %)
                    </h3>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="text-gray-500">
                        <tr className="text-left">
                          <th className="px-2 py-1 text-xs tracking-wider">
                            Charging power
                          </th>

                          <th className="px-2 py-1 text-xs tracking-wider">
                            Performance Battery Plus
                          </th>

                          {hasJ9E && (
                            <th className="px-2 py-1 text-xs tracking-wider">
                              J9E
                            </th>
                          )}
                        </tr>
                      </thead>

                      <tbody>
                        {acOptions.map((option) => (
                          <tr key={option.label}>
                            <td className="px-2 py-2 text-sm font-medium text-gray-500">
                              {option.label}
                            </td>


                            <td className="px-2 py-2">
                              <div className="flex items-baseline gap-2">
                                <span className="text-sm font-semibold text-gray-500">
                                  {option?.data?.performanceBatteryPlus?.chargeTime?.value?.toFixed(
                                    option?.data?.performanceBatteryPlus?.chargeTime?.value % 1 === 0
                                      ? 0
                                      : 1
                                  )}
                                </span>

                                <span className="text-sm text-gray-500">
                                  {option?.data?.performanceBatteryPlus?.chargeTime?.unit}
                                </span>
                              </div>
                            </td>


                            {hasJ9E && (
                              <td className="px-2 py-2">
                                {option?.data?.j9e ? (
                                  <div className="flex items-baseline gap-2">
                                    <span className="text-sm font-semibold text-gray-500">
                                      {option.data.j9e.chargeTime.value.toFixed(
                                        option.data.j9e.chargeTime.value % 1 === 0
                                          ? 0
                                          : 1
                                      )}
                                    </span>

                                    <span className="text-sm text-gray-500">
                                      {option.data.j9e.chargeTime.unit}
                                    </span>
                                  </div>
                                ) : (
                                  <span className="text-sm text-gray-500">—</span>
                                )}
                              </td>
                            )}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mb-8">

                  <div className="mb-2">
                    <p className="text-sm underline  text-white/40"> DC charging (maximum charging power) </p>
                  </div>

                  <div className="mb-5 grid gap-2 grid-cols-1">

                    <div className="px-2  flex justify-between items-center">
                      <p className="text-sm  text-gray-500">
                        Performance Battery Plus
                      </p>

                      <div className="flex items-baseline gap-2">
                        <span className="text-sm font-semibold text-gray-500">
                          {
                            charging.dc.maximumPower.performanceBatteryPlus.value
                          }
                        </span>

                        <span className="text-sm text-gray-500">
                          {charging.dc.maximumPower.performanceBatteryPlus.unit}
                        </span>
                      </div>
                    </div>
                    {
                      charging?.dc?.maximumPower?.j9e && (

                        <div className="px-2  flex justify-between items-center ">
                          <p className=" text-sm  tracking-wide text-gray-500">
                            J9E
                          </p>

                          <div className="flex items-baseline gap-2">
                            <span className="text-sm font-semibold text-gray-500">
                              {charging.dc.maximumPower.j9e.value}
                            </span>

                            <span className="text-sm text-gray-500">
                              {charging.dc.maximumPower.j9e.unit}
                            </span>
                          </div>
                        </div>

                      )
                    }


                  </div>

                  <div className="mb-5">

                    <div className="mb-2">
                      <p className="text-sm underline text-white/50">  Charging time </p>
                    </div>

                    <div className="grid grid-cols-1 ">

                      <div className="px-2 sm:px-4 flex justify-between">
                        <p className=" text-sm  text-gray-500">
                          400 V infrastructure ( 10 – 80 %)
                        </p>

                        <div className="flex items-baseline gap-2">
                          <span className="text-sm font-semibold text-gray-500">
                            {
                              charging?.dc?.chargeTime?.infrastructure400V?.value
                            }
                          </span>

                          <span className="text-sm text-gray-500">
                            {charging?.dc?.chargeTime?.infrastructure400V?.unit}
                          </span>
                        </div>
                      </div>


                      <div className="px-2 py-1 sm:px-4 flex justify-between">
                        <p className=" text-sm font-medium text-gray-500"> Maximum charging power (10 - 80%)</p>

                        <div className="flex items-baseline gap-2">
                          <span className="text-sm font-semibold text-gray-500">{charging?.dc?.chargeTime?.maximumChargingPower?.value}</span>
                          <span className="text-sm text-gray-500">{charging?.dc?.chargeTime?.maximumChargingPower?.unit}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-5">
                    <div className="mb-2">
                      <p className="text-sm underline text-white/50">  Recharged range in 10 min with (WLTP) maximum DC charging power </p>
                    </div>

                    <div className="grid grid-cols-1 ">

                      <div className=" px-2 py-1 sm:px-4 flex justify-between">
                        <p className=" text-sm  text-gray-500">
                          Performance Battery Plus
                        </p>

                        <div className="flex items-baseline gap-2">
                          <span className="text-sm font-semibold text-gray-500">
                            {charging.dc.rechargedRangeIn10Min.performanceBatteryPlus.min} -  {charging.dc.rechargedRangeIn10Min.performanceBatteryPlus.max}   {charging.dc.rechargedRangeIn10Min.performanceBatteryPlus.unit}
                          </span>
                        </div>
                      </div>

                      {
                        charging?.dc?.rechargedRangeIn10Min?.j9e && (
                          <div className="px-2 py-1 sm:px-4 flex justify-between">
                            <p className="mb-2 text-sm uppercase  text-gray-500">
                              J9E
                            </p>

                            <div className="flex items-baseline gap-2">
                              <span className="text-sm font-semibold text-gray-500">
                                {charging?.dc?.rechargedRangeIn10Min?.j9e?.min}   –    {charging?.dc?.rechargedRangeIn10Min?.j9e?.max}  {charging?.dc?.rechargedRangeIn10Min?.j9e?.unit}
                              </span>
                            </div>
                          </div>

                        )
                      }

                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>



      </div>

    </section >
  );
};




export default TechnicalData;