
import type { Hero, Price, PowerUnit, SoundLevel } from './../Panamera_Car_model/panameraType';
import type { CarImages } from '@/types'

export interface MacnGasolineCar {
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
    technical_data: TechnicalData;
}



export interface MacnEVCar {
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
}

export interface Measurement {
    value: number;
    unit: string;
}

export interface Performance {
    topSpeed: Measurement;
    acceleration: Acceleration;
}

export interface Acceleration {
    zeroTo100: AccelerationMeasurement | Measurement;
    zeroTo160: AccelerationMeasurement | Measurement;
    zeroTo200?: AccelerationMeasurement | Measurement;
    sportChrono?: SportChrono;
    inGear?: InGear;
}

export interface AccelerationMeasurement extends Measurement {
    test: string;
}

export interface SportChrono {
    zeroTo100: AccelerationMeasurement;
    zeroTo160: AccelerationMeasurement;
}

export interface InGear {
    speedRange: string;
    mphRange: string;
    value: number;
    unit: string;
}

export interface TerrainFeatures {
    clearanceToWaterSensitiveParts: ClearanceToWaterSensitiveParts;
    groundClearance: GroundClearance;
    rampBreakoverAngle: RampBreakoverAngle;
    loadingSillHeight: LoadingSillHeight;
}

export interface ClearanceToWaterSensitiveParts {
    steelSuspension: Measurement;
    airSuspension: {
        normalRideHeight: Measurement;
    };
}

export interface GroundClearance {
    airSuspension: {
        normalRideHeight: Measurement;
    };
}

export interface RampBreakoverAngle {
    steelSuspension: Measurement;
    airSuspension: {
        normalRideHeight: Measurement;
    };
}

export interface LoadingSillHeight {
    steelSuspension: MeasurementWithStandard;
}

export interface MeasurementWithStandard extends Measurement {
    standard: string;
}

export interface Capacities {
    openLuggageCompartmentVolume?: OpenLuggageCompartmentVolume;
    largestLuggageCompartmentVolume?: LargestLuggageCompartmentVolume;
    luggageCompartmentVolumeRearV210_2?: Measurement;
    luggageCompartment?: {
        frontVolume: Measurement;
        openVolume: MeasurementWithDescription;
        largestVolume: MeasurementWithDescription;
    };
}

export interface MeasurementWithDescription extends Measurement {
    description: string;
}

export interface OpenLuggageCompartmentVolume {
    upToUpperEdgeOfRearSeats: Measurement;
    behindFrontSeats: Measurement;
}

export interface LargestLuggageCompartmentVolume {
    behindFrontSeatsUpToRoof: Measurement;
}

export interface EVPowerUnit {
    maxTorqueWithLaunchControl?: Measurement;
    powerUpTo?: EVPower;
    overboostPowerWithLaunchControl?: {
         kW: Measurement | number;
         PS: Measurement | number;
    };
    electricMotorTorque?: Measurement;
    electricMotorPower?: Measurement;
}

export interface EVPower {
    kw: number;
    ps: number;
}

export interface EVPerformance {
    topSpeed: Measurement;
    acceleration: EVAcceleration;
}

export interface EVAcceleration {
    zeroTo100: EVAccelerationMeasurement | Measurement;
    zeroTo160: EVAccelerationMeasurement | Measurement;
    zeroTo200: EVAccelerationMeasurement| Measurement;
    "80To120": EVAccelerationMeasurement | Measurement;
}

export interface EVAccelerationMeasurement extends Measurement {
    test: string;
}

export interface EVCharging {
    battery: EVBattery;
    acCharging: EVACCharging;
    dcCharging: EVDCCharging;
}

export interface EVBattery {
    grossEnergyContent: Measurement;
}

export interface EVACCharging {
    chargingTime: EVACChargingTime;
}

export interface EVACChargingTime {
    "9_6kW": EVChargeTime;
    "11kW": EVChargeTime;
    "19_2kW"?: EVChargeTime;
    "22kW"?: EVChargeTime;
}

export interface EVChargeTime {
    value: number;
    unit: string;
    chargeRange: string;
}

export interface EVDCCharging {
    chargingTime: EVDCChargingTime;
    maximumChargingPower: Measurement;
    rechargedRangeIn10Minutes: EVRechargedRange | EVMaxRange;
}

export interface EVMaxRange {
    value: number,
    unit: string,
    chargingPower: string
}

export interface EVDCChargingTime {
    "150kW"?: EVChargeTime;
    "400VInfrastructure"?: EVRangeMeasurement;
    maximumChargingPower: EVChargeTime;
    rechargedRangeIn10Minutes?: EVMaxRange;
}

export interface EVRechargedRange {
    "150kW"?: EVRangeMeasurement;
    maximumChargingPower?: EVRangeMeasurement;
}

export interface EVRangeMeasurement {
    value: number;
    unit: string;
    standard?: string;
    chargeRange?: string

}

export interface EVCapacities {
    luggageCompartment: EVLuggageCompartment;
}

export interface EVLuggageCompartment {
    front?: Measurement;
    rear?: EVRearLuggageCompartment;
    frontVolume?: Measurement;
    openVolume?: MeasurementWithDescription;
    largestVolume?: MeasurementWithDescription;
}

export interface EVRearLuggageCompartment {
    openVolume: EVCapacityMeasurement;
    largestVolume: EVCapacityMeasurement;
}

export interface EVCapacityMeasurement extends Measurement {
    description: string;
}

export interface EVSoundLevel {
    passingVehicle: Measurement;
    standard: string;
}

export interface EVTerrainFeatures {
    groundClearance: EVGroundClearance;
    waterClearance?: EVWaterClearance;
    slopeAngle?: EVSlopeAngle;
    breakoverAngle?: EVBreakoverAngle;
    departureAngle?: EVDepartureAngle;
}

export interface EVDepartureAngle {
    steelSuspensionPASMDIN: Measurement;
}

export interface EVGroundClearance {
    steelSuspension?: Measurement;
    airSuspensionNormal?: Measurement;
    airSuspensionOffRoad?: Measurement;
    airSuspensionLow?: Measurement;
    airSuspensionExtraOffRoad?: Measurement;
    steelSuspensionPASM?: Measurement;
}

export interface EVWaterClearance {
    steelSuspension?: Measurement;
    airSuspensionNormal?: Measurement;
    airSuspensionOffRoad?: Measurement;
    steelSuspensionDIN?: Measurement;
    steelSuspensionEC?: Measurement;
    steelSuspensionPASMDIN?: Measurement;
    airSuspensionStandard?: Measurement;
    airSuspensionExtraOffRoad?: Measurement;
}

export interface EVSlopeAngle {
    steelSuspension: EVFrontRearAngle;
    airSuspensionNormal: EVFrontRearAngle;
    airSuspensionOffRoad: EVFrontRearAngle;
}

export interface EVFrontRearAngle {
    front: Measurement;
    rear: Measurement;
}

export interface EVBreakoverAngle {
    steelSuspension?: Measurement;
    airSuspensionNormal?: Measurement;
    airSuspensionOffRoad?: Measurement;
    steelSuspensionPASMDIN?: Measurement;
    airSuspensionLow?: Measurement;
    airSuspensionExtraOffRoad?: Measurement;
}

export interface EVTechnicalData {
    height: string;
    length: string;
    wheelbase: string;
    width: string;

    powerUnit: EVPowerUnit;
    performance: EVPerformance;
    charging: EVCharging;
    capacities: EVCapacities;
    soundLevel: EVSoundLevel;
    terrainFeatures: EVTerrainFeatures;
}

export type MacanCar = MacnGasolineCar | MacnEVCar;