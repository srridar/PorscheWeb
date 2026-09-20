import type { CarImages} from '@/types'

export interface CarVariant {
  modelId: string;
  name: string;
  variants: Variant[];
}

export interface Variant {
  variantId: string;
  name: string;
  cars: PanameraCar[];
}

export interface PanameraCar {
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
  maxTorque: Measurement;
  power: Power;
  maxOutputPerLiter: MaxOutputPerLiter;
  maximumEngineSpeed: Measurement;
}

export interface Measurement {
  value: number;
  unit: string;
}

export interface Power {
  kW: Measurement;
  PS: Measurement;
}

export interface MaxOutputPerLiter {
  kWPerLiter: Measurement;
  PSPerLiter: Measurement;
}

export interface Performance {
  topSpeed: Measurement;
  acceleration: Acceleration;
  sportChronoPackage?: SportChronoPackage;
}

export interface Acceleration {
  zeroTo100: PerformanceMeasurement;
  zeroTo160: PerformanceMeasurement;
  zeroTo200: PerformanceMeasurement;
  inGear: InGearPerformance;
}

export interface SportChronoPackage {
  zeroTo100: PerformanceMeasurement;
  zeroTo160: PerformanceMeasurement;
  zeroTo200: PerformanceMeasurement;
  inGear?: PerformanceMeasurement
}

export interface PerformanceMeasurement {
  value: number;
  unit: string;
  test?:string
}

export interface InGearPerformance {
  speedRange?: string;
  mphRange?: string;
  value?: number;
  unit?: string;
  test?:string
}

export interface SoundLevel {
  standard: string;
  stationaryVehicleRpm?: Measurement;
  stationaryVehicle?: Measurement;
  passingVehicle: Measurement;
}

export interface TerrainFeatures {
 

   overhang: {
    front: Measurement;
    rear: Measurement;
  };

  groundClearance: {
    airSuspensionNormal: Measurement;
    airSuspensionLow: Measurement;
  };

  breakoverAngle: {
    airSuspensionStandard: Measurement;
    airSuspensionLow: Measurement;
  };

 
}

export interface Capacities {
  luggageCompartment: {
    openVolume: CapacityMeasurement;
    largestVolume: CapacityMeasurement;
    rearVolumeV210_2?: Measurement;
  };
}

export interface CapacityMeasurement {
  value: number;
  unit: string;
  description: string;
}