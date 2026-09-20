
import type {  Capacities, PowerUnit, Performance, SoundLevel, Hero, Price, } from './../Panamera_Car_model/panameraType';
import type { EVPowerUnit, Measurement, EVCharging, EVCapacityMeasurement, EVPerformance, EVSoundLevel } from '../Macan_Car_model/macanType';
import type { CarImages} from '@/types'

export interface CayenneEV {
    carId: string;
    modelId: string;
    variantId: string;
    name: string;
    hero: Hero;
    year: number;
    fuelType: string;
    driveType: string;
    transmission: string;
    price: Price;
    images: CarImages;
    featuredVideo: string;
    technical_data: EVTechnicalData;
}

export interface EVTechnicalData {
    height: string;
    length: string;
    wheelbase: string;
    width: string;

    powerUnit: EVPowerUnit;
    performance: EVPerformance;
    soundLevel: EVSoundLevel;
    terrainFeatures: EVTerrainFeatures;
    capacities: EVCapacities;
    charging: EVCharging;

}

export interface EVCapacities {
    luggageCompartment: {
        front: Measurement;
        rear: EVCapacityMeasurement;
    }
}

export interface EVTerrainFeatures {
    maxClearanceWaterSensitivePartsNormalRideHeight?: Measurement;
    maxGroundClearanceNormalRideHeight?: Measurement;
    maxClearanceWaterSensitivePartsOffRoadRideHeight?: Measurement;
    maxGroundClearanceOffRoadRideHeight?: Measurement;
    maxClearanceWaterSensitivePartsOffRoadLevel?: Measurement;
    maxGroundClearanceOffRoadLevel?: Measurement;
    breakoverAngleLowLevel?: Measurement;
    overhang: {
        front: Measurement;
        rear: Measurement;
    }
    maxGroundClearanceLowLevel?: Measurement
    maxGroundClearance?: Measurement;
    departureAngle?: Measurement;
    breakoverAngle?: Measurement;

}


export interface CayenneGAS {
    carId: string;
    modelId: string;
    variantId: string;
    name: string;
    hero: Hero;
    year: number;
    fuelType: string;
    driveType: string;
    transmission: string;
    price: Price;
    images: CarImages;
    featuredVideo: string;
    technical_data: GASTechnicalData;

}


export interface GASTechnicalData {
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

export interface LevelMeasurement {
    value: number;
    unit: string;
    level: string;
}


export interface TerrainFeatures {
    maxGroundClearance: LevelMeasurement | Measurement;
    breakoverAngle: LevelMeasurement | Measurement;
    departureAngle: LevelMeasurement | Measurement;
    overhang: {
        front: Measurement;
        rear: Measurement;
    }
}