export interface CarDetailsProps {
  carId: string;
  modelId: string;
  variantId: string;
  name: string;
  year: number;

  price: {
    amount?: number;
    currency: string;
    formatted: string;
    taxIncluded: boolean;
    tax: string;
  };

  fuelType: string;
  driveType: string;
  transmission: string;

  image: string;
  featuredImage?: string;
  cardeatilsRoute?: string;

  topSpeed: {
    value: number;
    unit: string;
  };

  power?: {
    kW: {
      value: number;
      unit: string;
    };
    PS: {
      value: number;
      unit: string;
    };
  };

  maxTorque?: {
    value: number;
    unit: string;
  };

  powerElectricMotor?: {
    kW: number;
  };

  powerCombined?: {
    kW: number;
    ps: number;
  };

  maxTorqueWithLaunchControl?: {
    value: number;
    unit: string;
  };

  powerUpTo?: {
    kw: number;
    ps: number;
  };

  overboostPowerWithLaunchControl?: {
    kw: number;
    ps: number;
  };
}

export interface PowerValue {
  kw: number;
  ps: number;
}

export interface Value {
  value: number;
  unit: string;
}


export interface CarImages {
    hero: string;

    exterior: {
        front: string;
        rear: string;
        side: string;

        wheels: {
            frontWheel: string;
            rearWheel: string;
        };

        lights: {
            headlights: string;
            taillights: string;
            Indicators: string;
        };
    };

    bootSpace: {
        front: string;
        rear: string;
    };

    interior: {
        interior: string;
        dashboard: string;
        frontSeats: string;
        rearSeats: string;
        centerConsole: string;
    };

    gallery: string[];
}






