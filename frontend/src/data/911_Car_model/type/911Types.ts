import type { CarImages } from "@/types";

export interface CarData {
    carId: string;
    modelId: string;
    variantId: string;
    name: string;
    hero: Hero;
    year: number;
    price: Price;
    fuelType: string;
    driveType: string;
    transmission: string;
    images: CarImages;
    featuredVideo: string;
    technical_data: TechnicalData;
}

export interface Hero {
    title: string;
    description: string;
}

export interface Price {
    amount: number;
    currency: string;
    formatted: string;
    taxIncluded: boolean;
    tax: string;
}

export interface TechnicalData {
    height: string;
    length: string;
    wheelbase: string;
    width: string;
    powerUnit: PowerUnit;
    performance: Performance;
    soundLevel: SoundLevel;
    terrainFeatures: TerrainFeatures;
    capacities: Capacities;
}

export interface PowerUnit {
    bore: Measurement;
    numberOfCylinders: number;
    stroke: Measurement;
    displacement: Measurement;

    maxTorque?: Measurement;
    power?: Power;
    maxOutputPerLiter?: MaxOutputPerLiter;
    maximumEngineSpeed?: Measurement;
    maxEngineSpeed?: Measurement;

    torqueCombined?: {
        nm: number;
    };

    powerElectricMotor?: {
        kw: number;
    };

    powerCombined?: {
        kw: number;
        ps: number;
    };
}

export interface Measurement {
    value: number;
    unit: string;
}

export interface Power {
    kw: Measurement;
    ps: Measurement;
}

export interface MaxOutputPerLiter {
    kwPerLiter: Measurement;
    psPerLiter: Measurement;
}

export interface Performance {
    topSpeed: Measurement;
    acceleration: Acceleration;
}

export interface Acceleration {
    zeroTo100: AccelerationTime;
    zeroTo160: AccelerationTime;
    zeroTo200: AccelerationTime;
    inGear80To120: AccelerationTime;
}

export interface AccelerationTime {
    standard: TestMeasurement;
    sportChrono?: TestMeasurement;
}

export interface TestMeasurement extends Measurement {
    test: string;
}

export interface SoundLevel {
    standard: string;
    passingVehicle: Measurement;
}

export interface TerrainFeatures {
    approachAngle: {
        pasm: Measurement;
    };

    maxGroundClearance: {
        pasm: Measurement;
    };

    departureAngle: {
        pasm: Measurement;
    };

    overhang: {
        front: MeasurementString;
        rear: MeasurementString;
    };
}

export interface MeasurementString {
    value: string;
    unit: string;
}

export interface Capacities {
    luggageCompartment : {
        front: Measurement,
        rear: Measurement
    }
}

export interface MeasurementWithTransmission extends Measurement {
    transmission: string;
}