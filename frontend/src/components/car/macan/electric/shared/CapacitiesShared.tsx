
import React from 'react'
import { ChevronRight, ChevronDown } from 'lucide-react';

interface TechnicalDataProps {
    technicalData: any;
    activeId: string | null;
    setActiveId: React.Dispatch<React.SetStateAction<string | null>>;
}

const CapacitiesShared: React.FC<TechnicalDataProps> = ({ technicalData, activeId, setActiveId, }) => {
    const { capacities } = technicalData;
    return (
        <div>
            <div id="capacities" className="mt-6 ">
              
                <div
                    className="flex w-full  pb-6 cursor-pointer items-center justify-between text-left focus:outline-none"
                    onClick={() => setActiveId(activeId === "capacities" ? null : "capacities")}
                >
                    <span className="text-base font-medium text-white/40 hover:text-white/60 transition-colors">
                        Capacities
                    </span>
                    {activeId === "capacities" ? (
                        <ChevronDown className="h-5 w-5 text-gray-400" />
                    ) : (
                        <ChevronRight className="h-5 w-5 text-gray-400" />
                    )}
                </div>

          
                {activeId === "capacities" && (
                    <div className="mt-4 space-y-3 text-sm">
                       
                        <div className="flex justify-between items-center">
                            <span className="text-gray-300">Luggage compartment volume (front)</span>
                            <div className="flex gap-1 items-center font-medium">
                                <p>{capacities?.luggageCompartment?.front?.value ?? "—"}</p>
                                <span>{capacities?.luggageCompartment?.front?.unit}</span>
                            </div>
                        </div>

          
                        <div className="flex justify-between items-start">
                            <div className="flex flex-col">
                                <span className="text-gray-300">Luggage compartment volume (rear)</span>
                                {capacities?.luggageCompartment?.rear?.openVolume?.description && (
                                    <span className="text-xs text-gray-500">
                                        {capacities.luggageCompartment.rear.openVolume.description}
                                    </span>
                                )}
                            </div>
                            <div className="flex gap-1 items-center font-medium">
                                <p>{capacities?.luggageCompartment?.rear?.openVolume?.value ?? "—"}</p>
                                <span>{capacities?.luggageCompartment?.rear?.openVolume?.unit}</span>
                            </div>
                        </div>

                        <div className="flex justify-between items-start">
                            <div className="flex flex-col">
                                <span className="text-gray-300">Largest luggage compartment volume (rear)</span>
                                {capacities?.luggageCompartment?.rear?.largestVolume?.description && (
                                    <span className="text-xs text-gray-500">
                                        {capacities.luggageCompartment.rear.largestVolume.description}
                                    </span>
                                )}
                            </div>
                            <div className="flex gap-1 items-center font-medium">
                                <p>{capacities?.luggageCompartment?.rear?.largestVolume?.value ?? "—"}</p>
                                <span>{capacities?.luggageCompartment?.rear?.largestVolume?.unit}</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>

        </div>
    )
}

export default CapacitiesShared