

import type { CarImages } from '@/types'

export interface CarData {
  modelId: string;
  name: string;
  variants: Variant[];
}

export interface Variant {
  variantId: string;
  name: string;
  cars: Car[];
}

export interface TaycanTurboData {
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
  technical_data: TurboTechnicalData;

}

export interface Car {
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

  powerUnit: EVPowerUnit;
  performance: EVPerformance;
  soundLevel: EVSoundLevel;
  terrainFeatures: EVTerrainFeatures;
  capacities: EVCapacities;
  charging: Charging;
}

export interface EVPowerUnit {
  maxTorqueWithLaunchControl?: BatteryVariant<Measurement> | Measurement;
  powerUpTo?: BatteryVariant<PowerValue> | PowerValue;
  overboostPowerWithLaunchControl?: BatteryVariant<PowerValue> | PowerValue;
}

export interface BatteryVariant<T> {
  performanceBatteryPlus: T;
  j9e?: T;
}

export interface Measurement {
  value: number;
  unit: string;
}

export interface PowerValue {
  kw: number;
  ps: number;
}

export interface EVPerformance {
  topSpeed: Measurement;
  acceleration: EVAcceleration;
}

export interface EVAcceleration {
  zeroTo100: { withLaunchControl: EVTestMeasurement; } | EVTestMeasurement;
  zeroTo160: BatteryVariant<EVTestMeasurement> | EVTestMeasurement;
  zeroTo200: BatteryVariant<EVTestMeasurement> | EVTestMeasurement;
  inGear80To120: BatteryVariant<EVTestMeasurement> | EVTestMeasurement;
}

export interface EVTestMeasurement extends Measurement {
  test: string;
}

export interface EVSoundLevel {
  standard: string;
  typeApproved: boolean;
  passingVehicle: Measurement;
}

export interface EVTerrainFeatures1 {

  maxGroundClearance?: {
    standardLevel: Measurement;
    offRoadLevel: Measurement;
    lowLevel: Measurement;
  }

  groundClearance?: {
    airSuspension: {
      normalRideHeight: Measurement;
      offRoadLevel: Measurement;
      lowLevel: Measurement;
    };
  };

  approachAngle?: {
    airSuspension?: {
      standardLevel: Measurement;
    };
    standardLevel?: Measurement;
  };

  breakoverAngle?: {
    airSuspension?: {
      standardLevel: Measurement;
      lowLevel: Measurement;
      offRoadLevel: Measurement;
    };

    standardLevel?: Measurement;
    lowLevel?: Measurement;
    offRoadLevel?: Measurement;
  };

  departureAngle: {
    airSuspension?: {
      standardLevel: Measurement;
    };

    standardLevel?: Measurement
  };

  overhang: {
    front: Measurement;
    rear: Measurement;
  };
}

export interface EVTerrainFeatures2 {
  groundClearance: {
    airSuspensionNormal: Measurement;
    airSuspensionOffRoad: Measurement;
    airSuspensionLow: Measurement;
  };

  approachAngle: {
    airSuspensionStandard: Measurement;
  };

  breakoverAngle: {
    airSuspensionStandard: Measurement;
    airSuspensionLow: Measurement;
    airSuspensionOffRoad: Measurement;
  };

  departureAngle: {
    airSuspensionStandard: Measurement;
  };

  overhang: {
    front: Measurement;
    rear: Measurement;
  };
}

export type EVTerrainFeatures = EVTerrainFeatures1 | EVTerrainFeatures2;


export interface EVCapacities {
  luggageCompartment: {
    front: Measurement;
    rear: EVCargoMeasurement;
  };
}

export interface EVCargoMeasurement extends Measurement {
  variant: string;
}

export interface Charging1 {
  battery: EVBattery;

  dc: {
    maximumPower: BatteryVariant<Measurement>;
    chargeTime: EVDCChargeTime;
    rechargedRangeIn10Min: BatteryVariant<EVRange>;
  };

  ac: {
    "9_6kW": EVACCharging;
    "11kW": EVACCharging;
    "22kW": EVACCharging;
  };
}

export interface Charging2 {
  battery: {
    grossEnergyContent: Measurement;
  };

  ac: {
    chargingTime: {
      "9_6kW": ChargingTime;
      "11kW": ChargingTime;
      "22kW": ChargingTime;
    };
  };

  dc: {
    chargingTime: {
      "400VInfrastructure": ChargingTime;
      maximumChargingPower: ChargingTime;
    };

    maximumChargingPower: Measurement;

    rechargedRangeIn10Minutes: {
      maximumChargingPower: RechargedRange;
    };
  };
}

export type Charging = Charging1 | Charging2;

export interface ChargingTime extends Measurement {
  chargeRange: string;
}

export interface RechargedRange {
  value: string;
  unit: string;
  standard: string;
}

export interface EVBattery {
  performanceBatteryPlus: {
    grossEnergy: Measurement;
  };

  j9e?: {
    grossEnergy: Measurement;
  };
}

export interface EVDCChargeTime {
  infrastructure400V: EVChargeTime;
  maximumChargingPower: EVChargeTime;
}



export interface EVChargeTime {
  from: number;
  to: number;
  value: number;
  unit: string;
}
export interface EVRange {
  min: number;
  max: number;
  unit: string;
  standard: string;
}
export interface EVACCharging {
  performanceBatteryPlus: EVACChargingVariant;
  j9e?: EVACChargingVariant;
}
export interface EVACChargingVariant {
  power: Measurement;
  chargeTime: EVFullChargeTime;
}
export interface EVFullChargeTime {
  from: number;
  to: number;
  value: number;
  unit: string;
}

export interface TurboTechnicalData {
  height: string;
  length: string;
  wheelbase: string;
  width: string; powerUnit: PowerUnit;
  performance: Performance;
  soundLevel: EVSoundLevel;
  capacities: EVCapacities;
  charging: Charging;
  terrainFeatures: TerrainFeatures;
}

export interface PowerUnit {
  maxTorqueWithLaunchControl?: Measurement;
  powerUnit?: Power;
  overboostPowerWithLaunchControl?: Power;
}

export interface Power {
  kw: number;
  ps: number;
}

export interface Performance {
  topSpeed: Measurement;
  acceleration: Acceleration;
}

export interface Acceleration {
  "0To100": AccelerationMeasurement;
  "0To160": AccelerationMeasurement;
  "0To200": AccelerationMeasurement;
  "80To120": AccelerationMeasurement;
}

export interface AccelerationMeasurement extends Measurement {
  test: string;
}

export interface Battery {
  grossEnergyContent: Measurement;
}

export interface ACCharging {
  chargingTime: ACChargingTime;
}

export interface ACChargingTime {
  "9_6kW"?: FullChargeTime;
  "11kW"?: FullChargeTime;
  "22kW"?: FullChargeTime;
}

export interface FullChargeTime {
  value: number;
  unit: string;
  chargeRange?: string;
}

export interface DCCharging {
  chargingTime: DCChargingTime;
  maximumChargingPower: Measurement;
  rechargedRangeIn10Minutes: RechargedRange;
}

export interface DCChargingTime {
  "400VInfrastructure": ChargeTime;
  maximumChargingPower: ChargeTime;
}

export interface ChargeTime {
  value: number;
  unit: string;
  chargeRange: string;
}


export interface RangeMeasurement {
  value: string;
  unit: string;
  standard: string;
}

export interface TerrainFeatures {
  groundClearance: GroundClearance;
  approachAngle: ApproachAngle;
  breakoverAngle: BreakoverAngle;
  departureAngle: DepartureAngle;
  overhang: Overhang;
}

export interface GroundClearance {
  airSuspensionNormal: Measurement;
  airSuspensionOffRoad: Measurement;
  airSuspensionLow: Measurement;

}

export interface ApproachAngle {
  airSuspensionStandard: Measurement;
}

export interface BreakoverAngle {
  airSuspensionStandard: Measurement;
  airSuspensionLow: Measurement;
  airSuspensionOffRoad: Measurement;
}

export interface DepartureAngle {
  airSuspensionStandard: Measurement;
}

export interface Overhang {
  front: Measurement;
  rear: Measurement;
}

export type TaycanCar = Car | TaycanTurboData;