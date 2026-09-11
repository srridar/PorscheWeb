import React from 'react'
import { ChevronRight, ChevronDown } from 'lucide-react';

interface TechnicalDataProps {
    technicalData: any;
    activeId: string | null;
    setActiveId: React.Dispatch<React.SetStateAction<string | null>>;
}

const SoundShared: React.FC<TechnicalDataProps> = ({ technicalData, activeId, setActiveId, }) => {
    const { soundLevel } = technicalData;
    return (
        <div id="sound" className="mt-6 ">
            <div className="flex cursor-pointer  pb-4 items-center justify-between" onClick={() => setActiveId(activeId === "sound" ? null : "sound")}>
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
    )
}

export default SoundShared