import React from 'react'
import { ChevronRight, ChevronDown } from 'lucide-react';

interface TechnicalDataProps {
    technicalData: any;
    activeId: string | null;
    setActiveId: React.Dispatch<React.SetStateAction<string | null>>;
}

const PerformanceShared: React.FC<TechnicalDataProps> = ({ technicalData, activeId, setActiveId, }) => {
    const { performance } = technicalData;
    return (

        <div id="performance" className="mt-6">

            <div className="flex cursor-pointer items-center  pb-2 justify-between"
                onClick={() => setActiveId(activeId === "performance" ? null : "performance")}
            >
                <p className="text-base font-medium text-white/40 hover:text-white/60 transition-colors">
                    Performance
                </p>
                {activeId === "performance" ? (
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                ) : (
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                )}
            </div>

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
                        <h3 className="text-sm font-medium text-gray-300 mb-3"> Acceleration </h3>
                        <div className="p-4 space-y-3">

                            <div className={`grid grid-cols-2 items-center py-1.5 text-sm`}>
                                <div className="text-gray-300 font-medium">0 - 100 km/h</div>
                                <div className="flex items-baseline gap-1">
                                    <span className="font-semibold text-white">
                                        {performance?.acceleration?.zeroTo100?.value ?? "—"}
                                    </span>
                                    <span className="text-xs text-gray-400">
                                        {performance?.acceleration?.zeroTo100?.unit}
                                    </span>
                                </div>

                            </div>

                            <div className="grid  grid-cols-2 items-center py-1.5 text-sm">
                                <div className="text-gray-300 font-medium">0 - 160 km/h</div>
                                <div className="flex items-baseline gap-1">
                                    <span className="font-semibold text-white">
                                        {performance?.acceleration?.zeroTo160?.value ?? "—"}
                                    </span>
                                    <span className="text-xs text-gray-400">
                                        {performance?.acceleration?.zeroTo160?.unit}
                                    </span>
                                </div>

                            </div>


                            <div className="grid  grid-cols-2 items-center py-1.5 text-sm">
                                <div className="text-gray-300 font-medium">0 - 200 km/h</div>
                                <div className="flex items-baseline gap-1">
                                    <span className="font-semibold text-white">
                                        {performance?.acceleration?.zeroTo200?.value ?? "—"}
                                    </span>
                                    <span className="text-xs text-gray-400">
                                        {performance?.acceleration?.zeroTo200?.unit}
                                    </span>
                                </div>

                            </div>


                            <div className="grid grid-cols-2 items-center py-1.5 text-sm">
                                <div className="font-medium text-gray-300">
                                    80 - 120 km/h
                                </div>

                                <div className="flex items-baseline gap-1">
                                    <span className="font-semibold text-white">
                                        {performance?.acceleration?.["80To120"]?.value ?? "—"}
                                    </span>

                                    <span className="text-xs text-gray-400">
                                        {performance?.acceleration?.["80To120"]?.unit ?? ""}
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default PerformanceShared