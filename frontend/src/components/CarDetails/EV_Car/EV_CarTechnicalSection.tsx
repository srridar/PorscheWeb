
import React from "react";

interface TechnicalDataProps {
  technicalData: any;
}

const TechnicalData: React.FC<TechnicalDataProps> = ({ technicalData }) => {
  const {
    height,
    length,
    width,
    wheelbase,
    powerUnit,
    performance,
    soundLevel,
    battery,
    charging,
    range,
    capacities,
    terrainFeatures,
  } = technicalData;

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

  console.log(powerUnit)

  return (
    <section className=" text-white">

      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-16">
        <div className="mb-12">
          <p className="mb-3 text-xl font-mono "> Technical Data  </p>
        </div>

        <div className="bg-[#5c5b5b] p-3 rounded-2xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-8 bg-white rounded-2xl ">
            <div className="w-full md:w-1/2">
              <img
                src="/images/car-layout.png"
                alt="Car layout"
                className="h-auto w-full rounded-lg object-contain"
              />
            </div>

            <div className="w-full md:w-1/2">
              <img
                src="/images/vehicledimensions.png"
                alt="Vehicle dimensions"
                className="h-auto w-full rounded-lg object-contain"
              />
            </div>
          </div>


          <div className="grid grid-cols-1 rounded-xl mt-10 bg-[#383737aa]  sm:grid-cols-4">
            {[
              { level: "Height", value: height },
              { level: "Length", value: length },
              { level: "Width", value: width },
              { level: "Wheelbase", value: wheelbase },
            ].map((item, index) => (
              <div
                key={index}
                className="group flex flex-col justify-between rounded  px-4 py-6 transition-colors duration-300 sm:px-6 sm:py-7"
              >

                <div className="flex items-center gap-3">
                  <span className=" text-[0.8rem]  text-sm  ">
                    {item.level}
                  </span>
                </div>
                {/* Value */}
                <div className="mt-6">
                  <span className=" font-medium tracking-tight ">
                    {item.value}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4">
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

        <div className="mx-auto max-w-7xl mt-10 text-white/40">
          <div className="mb-2">
            <p className="font-medium capitalize"> Power Unit </p>
          </div>

          <div className="overflow-hidden">
            <div className="grid grid-cols-3 text-gray-100 py-2">
              <div className=""></div>
              <div className="text-sm font-semibold "> Performance Battery Plus </div>
              <div className="text-sm font-semibold "> J9E </div>
            </div>


            <div className="grid grid-cols-3 py-2">
              <div className="pr-4 text-sm sm:text-sm text-gray-100"> Max. torque with Launch Control </div>

              <div>
                <span className="text-sm font-semibold text-gray-500"> {powerUnit.maxTorqueWithLaunchControl.performanceBatteryPlus.value} </span>
                <span className="ml-2 text-sm text-gray-500"> {powerUnit.maxTorqueWithLaunchControl.performanceBatteryPlus.unit} </span>
              </div>

              <div>
                <span className="text-sm font-semibold text-gray-500"> {powerUnit.maxTorqueWithLaunchControl.j9e.value} </span>
                <span className="ml-2 text-sm text-gray-500"> {powerUnit.maxTorqueWithLaunchControl.j9e.unit} </span>
              </div>

            </div>

            <div className="grid grid-cols-3 py-2">
              <div className="pr-4 text-sm text-gray-100 sm:text-sm"> Power up to </div>

              <div className="flex gap-1">
                <span className="text-sm text-gray-500"> {powerUnit.powerUpTo.performanceBatteryPlus.kw} kW / </span>
                <span className="text-sm text-gray-500"> {powerUnit.powerUpTo.performanceBatteryPlus.ps} PS </span>
              </div>
              <div className="flex gap-1 ">
                <span className="text-sm  text-gray-500"> {powerUnit.powerUpTo.j9e.kw} kW /</span>
                <span className="text-sm text-gray-500"> {powerUnit.powerUpTo.j9e.ps} PS </span>
              </div>
            </div>

            <div className="grid grid-cols-3  py-1">
              <div className="pr-4 text-sm text-gray-100 sm:text-sm"> Overboost power with Launch Control </div>
              <div className="flex items-center  text-gray-500 gap-1 ">
                <span className="text-sm font-semibold "> {powerUnit.overboostPowerWithLaunchControl.performanceBatteryPlus.kw}{" "} kW / </span>
                <span className=" text-sm "> {powerUnit.overboostPowerWithLaunchControl.performanceBatteryPlus.ps}{" "} PS</span>
              </div>
              <div className="flex items-center text-gray-500 gap-1">
                <span className="text-sm  "> {powerUnit.overboostPowerWithLaunchControl.j9e.kw} kW / </span>
                <span className="text-sm "> {powerUnit.overboostPowerWithLaunchControl.j9e.ps} PS </span>
              </div>
            </div>

          </div>
        </div>

        <div className="mx-auto max-w-7xl mt-10">
          <div className="mb-2">
            <p className="font-medium capitalize text-white/40"> Performance </p>
          </div>

          <div className=" flex justify-between items-center w-2/4">
            <p className="text-sm text-gray-100"> Top speed </p>
            <p className="mt-2 text-sm font-semibold text-gray-500 "> {performance.topSpeed.value}
              <span className="ml-2 text-sm font-normal text-gray-500"> {performance.topSpeed.unit} </span>
            </p>
          </div>

          <div className="mt-6">
            <div className="mb-2">
              <h3 className="text-sm  text-gray-100"> Acceleration - <span className="text-gray-300"> with Launch Control </span></h3>
            </div>
            <div className="overflow-hidden p-4 ">
              <div className="grid grid-cols-3 py-2">
                <div></div>
                <div className="text-sm font-semibold text-gray-100"> Performance Battery Plus </div>
                <div className="text-sm font-semibold text-gray-100"> J9E </div>
              </div>

              <div className="grid grid-cols-3  py-1">
                <div className="pr-4">
                  <p className="text-sm text-gray-100 sm:text-base"> 0 - 100 km/h </p>
                </div>
                <div className="text-sm font-semibold text-gray-500"> {performance.acceleration.zeroTo100.withLaunchControl.value}
                  <span className="ml-2 text-sm font-normal text-gray-500"> {performance.acceleration.zeroTo100.withLaunchControl.unit} </span>
                </div>
                <div className="text-sm font-semibold text-gray-500"> {performance.acceleration.zeroTo100.withLaunchControl.value}
                  <span className="ml-2 text-sm font-normal text-gray-500"> {performance.acceleration.zeroTo100.withLaunchControl.unit} </span>
                </div>
              </div>

              <div className="grid grid-cols-3  py-1">
                <div className="pr-4">
                  <p className="text-sm text-gray-100 sm:text-base"> 0 - 160 km/h </p>
                </div>
                <div className="text-sm font-semibold text-gray-500"> {performance.acceleration.zeroTo160.performanceBatteryPlus.value}
                  <span className="ml-2 text-sm font-normal text-gray-500"> {performance.acceleration.zeroTo160.performanceBatteryPlus.unit} </span>
                </div>
                <div className="text-sm font-semibold text-gray-500"> {performance.acceleration.zeroTo160.j9e.value}
                  <span className="ml-2 text-sm font-normal text-gray-500"> {performance.acceleration.zeroTo160.j9e.unit} </span>
                </div>
              </div>

              <div className="grid grid-cols-3 py-1">
                <div className="pr-4">
                  <p className="text-sm text-gray-100 sm:text-base"> 0 - 200 km/h </p>
                </div>
                <div className="text-sm font-semibold text-gray-500"> {performance.acceleration.zeroTo200.performanceBatteryPlus.value}
                  <span className="ml-2 text-sm font-normal text-gray-500"> {performance.acceleration.zeroTo200.performanceBatteryPlus.unit} </span> </div>
                <div className="text-sm font-semibold text-gray-500"> {performance.acceleration.zeroTo200.j9e.value}
                  <span className="ml-2 text-sm font-normal text-gray-500"> {performance.acceleration.zeroTo200.j9e.unit} </span>
                </div>
              </div>


              <div className="grid grid-cols-3  py-1">

                <div className="pr-4">
                  <p className="text-sm text-gray-100 sm:text-base"> 80 - 120 km/h </p>
                </div>

                <div className="text-sm font-semibold text-gray-500"> {performance.acceleration.inGear80To120.performanceBatteryPlus.value}
                  <span className="ml-2 text-sm font-normal text-gray-500"> {performance.acceleration.inGear80To120.performanceBatteryPlus.unit}
                  </span>
                </div>

                <div className="text-sm font-semibold text-gray-500"> {performance.acceleration.inGear80To120.j9e.value}
                  <span className="ml-2 text-sm font-normal text-gray-500"> {performance.acceleration.inGear80To120.j9e.unit} </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="mx-auto max-w-7xl mt-10">
          <div className="mb-6">
            <p className="font-medium  text-white/40"> Sound level (type approved based on UN-R 51) </p>
          </div>

          <div className="flex justify-between items-center ">
            <p className="text-sm text-gray-300">Sound level of passing vehicle </p>
            <p className="mt-4 text-sm font-semibold tracking-tight text-gray-500"> {soundLevel.passingVehicle.value}
              <span className="ml-2 text-sm font-normal text-gray-500"> {soundLevel.passingVehicle.unit} </span>
            </p>
          </div>
        </div>


        <div className="mx-auto max-w-7xl mt-10">

          <div className="mb-4">
            <p className="font-medium  text-white/40"> Charging</p>
          </div>

          <div className="mb-8">
            <div className="grid grid-cols-1 gap-4">
              <div className="flex justify-between ">
                <p className="text-sm text-gray-500">  Gross battery energy content (Performance Battery Plus) </p>

                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-gray-500">
                    {charging.battery.performanceBatteryPlus.grossEnergy.value}
                  </span>

                  <span className="text-sm text-gray-500">
                    {charging.battery.performanceBatteryPlus.grossEnergy.unit}
                  </span>
                </div>

              </div>

              <div className="flex justify-between">
                <p className="text-sm text-gray-500"> Gross battery energy content(J9E)</p>

                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-gray-500">
                    {charging.battery.j9e.grossEnergy.value}
                  </span>

                  <span className="text-sm text-gray-500">
                    {charging.battery.j9e.grossEnergy.unit}
                  </span>
                </div>

              </div>
            </div>
          </div>

          {/* AC */}
          <div className="mb-8">
            <div className="mb-4">
              <h3 className="text-sm text-white/40">  AC charging (charging time from 0 to 100 %) </h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px] ">
                <thead className="text-gray-500">
                  <tr className="text-left">
                    <th className="px-2 py-2 text-xs tracking-wider "> Charging power </th>
                    <th className="px-2 py-2 text-xs tracking-wider "> Performance Battery Plus </th>
                    <th className="px-2 py-2 text-xs tracking-wider ">  J9E </th>
                  </tr>
                </thead>

                <tbody>
                  {acOptions.map((option) => (
                    <tr
                      key={option.label}
                      className=""
                    >
                      <td className="px-2 py-4 text-sm font-medium text-gray-500">
                        {option.label}
                      </td>

                      <td className="px-3 py-4">
                        <div className="flex items-baseline gap-2">
                          <span className="text-sm font-semibold text-gray-500">
                            {option.data.performanceBatteryPlus.chargeTime.value.toFixed(
                              option.data.performanceBatteryPlus.chargeTime.value % 1 === 0
                                ? 0
                                : 1
                            )}
                          </span>

                          <span className="text-sm text-gray-500">
                            {option.data.performanceBatteryPlus.chargeTime.unit}
                          </span>
                        </div>
                      </td>

                      <td className="px-3 py-4">
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
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>




          {/* DC */}
          <div className="mb-8">

            <div className="mb-2">
              <p className="text-sm  text-white/40"> DC charging - (maximum charging power) </p>
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
            </div>

            <div className="mb-5">

              <div className="mb-2 px-2">
                <p className="text-sm text-white">  Charging time </p>
              </div>

              <div className="grid grid-cols-1 ">

                <div className="px-2 sm:px-4 flex justify-between">
                  <p className=" text-sm  text-gray-500">
                    400 V infrastructure ( 10 – 80 %)
                  </p>

                  <div className="flex items-baseline gap-2">
                    <span className="text-sm font-semibold text-gray-500">
                      {
                        charging.dc.chargeTime.infrastructure400V.value
                      }
                    </span>

                    <span className="text-sm text-gray-500">
                      {charging.dc.chargeTime.infrastructure400V.unit}
                    </span>
                  </div>
                </div>


                <div className="px-2 py-1 sm:px-4 flex justify-between">
                  <p className=" text-sm font-medium text-gray-500"> Maximum charging power (10 - 80%)</p>

                  <div className="flex items-baseline gap-2">
                    <span className="text-sm font-semibold text-gray-500">{charging.dc.chargeTime.maximumChargingPower.value}</span>
                    <span className="text-sm text-gray-500">{charging.dc.chargeTime.maximumChargingPower.unit}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-2">
              <div className="mb-2">
                <p className="text-sm text-white">  Recharged range in 10 min with (WLTP) maximum DC charging power </p>
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


                <div className="px-2 py-1 sm:px-4 flex justify-between">
                  <p className="mb-2 text-sm uppercase  text-gray-500">
                    J9E
                  </p>

                  <div className="flex items-baseline gap-2">
                    <span className="text-sm font-semibold text-gray-500">
                      {charging.dc.rechargedRangeIn10Min.j9e.min}   –    {charging.dc.rechargedRangeIn10Min.j9e.max}  {charging.dc.rechargedRangeIn10Min.j9e.unit}
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>


        </div>

      </div>

    </section>
  );
};




export default TechnicalData;