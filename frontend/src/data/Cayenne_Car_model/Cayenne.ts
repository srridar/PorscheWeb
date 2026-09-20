import type { CayenneEV, CayenneGAS } from "./CayenneTypes";
type CayenneCar = CayenneEV | CayenneGAS;

interface CarVariant {
    variantId: string;
    name:string;
    cars: CayenneCar[];
}


interface CarModel {
    modelId: string;
    name: string;
    variants: CarVariant[];
}

export const Cayenne_Car: CarModel[] = [{
    "modelId": "cayenne",
    "name": "Cayenne",
    "variants": [
        {
            "variantId": "electric",
            "name": "Electric",
            "cars": [
                {
                    "carId": "cayenne-electric",
                    "modelId": "cayenne",
                    "variantId": "electric",
                    "name": "Cayenne Electric",
                    "hero": {
                        "title": "Luxury, electrified.",
                        "description": "The Cayenne Electric combines exhilarating electric performance with spacious comfort, advanced technology, and the versatility of a true Porsche SUV."
                    },
                    "year": 2026,
                    "fuelType": "Electric",
                    "driveType": "All-Wheel Drive",
                    "transmission": "Automatic",
                    "price": {
                        "amount": 17727000,
                        "currency": "INR",
                        "formatted": "₹1,77,27,000.00",
                        "taxIncluded": true,
                        "tax": "VAT"
                    },
                    "images": {
                        "hero": "/images/cars/cayenne/cayenne_electric/hero.png",

                        "exterior": {
                            "front": "/images/cars/cayenne/cayenne_electric/front.png",
                            "rear": "/images/cars/cayenne/cayenne_electric/back.png",
                            "side": "/images/cars/cayenne/cayenne_electric/side.png",
                            "lights": {
                                "headlights": "/images/cars/cayenne/cayenne_electric/headlight.png",
                                "taillights": "/images/cars/cayenne/cayenne_electric/backlight.png",
                                "Indicators": "/images/cars/cayenne/cayenne_electric/front-indicator.png",
                            },

                            "wheels": {
                                "frontWheel": "/images/cars/cayenne/cayenne_electric/rear-seat.png",
                                "rearWheel": "/images/cars/cayenne/cayenne_electric/rear-wheel.png",
                            },
                        },
                        "bootSpace": {
                            "front": "/images/front-space.webp",
                            "rear": "/images/back-space.webp",
                        },

                        "interior": {
                            "interior": "/images/cars/cayenne/cayenne_electric/interior.png",
                            "dashboard": "/images/cars/cayenne/cayenne_electric/dashboard.png",
                            "frontSeats": "/images/cars/cayenne/cayenne_electric/front-seat.png",
                            "rearSeats": "/images/cars/cayenne/cayenne_electric/rear-seat.png",
                            "centerConsole": "/images/cars/cayenne/cayenne_electric/rear-wheel.png",
                        },

                        "gallery": [
                            "/images/cars/cayenne/cayenne_electric/"
                        ]
                    },
                    "featuredVideo": "/videos/cayenneElectric.mp4",
                    "technical_data": {
                        "height": "1674mm",
                        "width": "1980mm",
                        "length": "4985mm",
                        "wheelbase": "3023mm",
                        "powerUnit": {
                            "maxTorqueWithLaunchControl": {
                                "value": 835,
                                "unit": "Nm"
                            },
                            "powerUpTo": {
                                "kw": 300,
                                "ps": 408
                            },
                            "overboostPowerWithLaunchControl": {
                                "PS": 442,
                                "kW": 325
                            }
                        },
                        "performance": {
                            "topSpeed": {
                                "value": 230,
                                "unit": "km/h"
                            },
                            "acceleration": {
                                "80To120": {
                                    "value": 3.0,
                                    "unit": "s",
                                    "test": "80-120 km/h (50-75 mph) with Launch Control"
                                },
                                "zeroTo100": {
                                    "value": 4.8,
                                    "unit": "s",
                                    "test": "0-100 km/h with Launch Control"
                                },
                                "zeroTo160": {
                                    "value": 11.3,
                                    "unit": "s",
                                    "test": "0-160 km/h with Launch Control"
                                },
                                "zeroTo200": {
                                    "value": 18.4,
                                    "unit": "s",
                                    "test": "0-200 km/h with Launch Control"
                                }
                            }
                        },
                        "soundLevel": {
                            "standard": "UN-R 51",
                            "passingVehicle": {
                                "value": 66,
                                "unit": "dB(A)"
                            }
                        },
                        "capacities": {
                            "luggageCompartment": {
                                "front": {
                                    "value": 90,
                                    "unit": "l"
                                },
                                "rear": {
                                    "value": 781,
                                    "unit": "l",
                                    "description": "Up to the upper edge of the rear seats"
                                }
                            }
                        },
                        "charging": {
                            "battery": {
                                "grossEnergyContent": {
                                    "value": 113.0,
                                    "unit": "kWh"
                                }
                            },
                            "acCharging": {
                                "chargingTime": {
                                    "9_6kW": {
                                        "value": 13.0,
                                        "unit": "h",
                                        "chargeRange": "0-100%"
                                    },
                                    "11kW": {
                                        "value": 11.0,
                                        "unit": "h",
                                        "chargeRange": "0-100%"
                                    },
                                    "19_2kW": {
                                        "value": 6.5,
                                        "unit": "h",
                                        "chargeRange": "0-100%"
                                    },
                                    "22kW": {
                                        "value": 5.75,
                                        "unit": "h",
                                        "chargeRange": "0-100%"
                                    }
                                }
                            },

                            "dcCharging": {
                                "chargingTime": {
                                    "400VInfrastructure": {
                                        "value": 26,
                                        "unit": "min",
                                        "chargeRange": "10-80%"
                                    },
                                    "maximumChargingPower": {
                                        "value": 16,
                                        "unit": "min",
                                        "chargeRange": "10-80%"
                                    }
                                },

                                "maximumChargingPower": {
                                    "value": 390,
                                    "unit": "kW"
                                },

                                "rechargedRangeIn10Minutes": {
                                    "maximumChargingPower": {
                                        "value": 325,
                                        "unit": "km",
                                        "standard": "WLTP",
                                    }
                                }
                            }
                        },
                        "terrainFeatures": {
                            "maxClearanceWaterSensitivePartsNormalRideHeight": {
                                "value": 500,
                                "unit": "mm"
                            },
                            "maxGroundClearanceNormalRideHeight": {
                                "value": 190,
                                "unit": "mm"
                            },
                            "maxClearanceWaterSensitivePartsOffRoadRideHeight": {
                                "value": 555,
                                "unit": "mm"
                            },
                            "maxGroundClearanceOffRoadRideHeight": {
                                "value": 245,
                                "unit": "mm"
                            },
                            "maxClearanceWaterSensitivePartsOffRoadLevel": {
                                "value": 520,
                                "unit": "mm"
                            },
                            "maxGroundClearanceOffRoadLevel": {
                                "value": 210,
                                "unit": "mm"
                            },
                            "breakoverAngleLowLevel": {
                                "value": 13.4,
                                "unit": "°"
                            },
                            "overhang": {
                                "front": {
                                    "value": 955,
                                    "unit": "mm"
                                },
                                "rear": {
                                    "value": 1007,
                                    "unit": "mm"
                                }
                            },
                            "maxGroundClearance": {
                                "value": 175,
                                "unit": "mm"
                            },

                        },

                    },
                },
                {
                    "carId": "cayenne-turbo-electric",
                    "modelId": "cayenne",
                    "variantId": "electric",
                    "name": "Cayenne Turbo Electric",
                    "hero": {
                        "title": "Electric power, unleashed.",
                        "description": "The Cayenne Turbo Electric takes electric SUV performance to new heights with breathtaking power, dynamic handling, and unmistakable Porsche character."
                    },
                    "year": 2026,
                    "fuelType": "Electric",
                    "driveType": "All-Wheel Drive",
                    "transmission": "Automatic",
                    "price": {
                        "amount": 22751000,
                        "currency": "INR",
                        "formatted": "₹2,27,51,000.00",
                        "taxIncluded": true,
                        "tax": "VAT"
                    },
                    "images": {
                        "hero": "/images/cars/cayenne/cayenne_turbo_electric/hero.png",

                        "exterior": {
                            "front": "/images/cars/cayenne/cayenne_turbo_electric/front.png",
                            "rear": "/images/cars/cayenne/cayenne_turbo_electric/back.png",
                            "side": "/images/cars/cayenne/cayenne_turbo_electric/side.png",
                            "wheels": {
                                "frontWheel": "/images/cars/cayenne/cayenne_turbo_electric/frontwheel.png",
                                "rearWheel": "/images/cars/cayenne/cayenne_turbo_electric/rearwheel.png",
                            },

                            "lights": {
                                "headlights": "/images/cars/cayenne/cayenne_turbo_electric/headlight.png",
                                "taillights": "/images/cars/cayenne/cayenne_turbo_electric/hero.png",
                                "Indicators": "/images/cars/cayenne/cayenne_turbo_electric/frontindicator.png",

                            },
                        },

                        "bootSpace": {
                            "front": "/images/front-space.webp",
                            "rear": "/images/back-space.webp",
                        },

                        "interior": {
                            "interior": "/images/cars/cayenne/cayenne_turbo_electric/front-int.png",
                            "dashboard": "/images/cars/cayenne/cayenne_turbo_electric/dashboard2.png",
                            "frontSeats": "/images/cars/cayenne/cayenne_turbo_electric/front-seat.png",
                            "rearSeats": "/images/cars/cayenne/cayenne_turbo_electric/rearseat.png",
                            "centerConsole": "/images/cars/cayenne/cayenne_turbo_electric/console.png",
                        },

                        "gallery": []
                    },
                    "featuredVideo": "/videos/cayenneTurboElectric.mp4",
                    "technical_data": {
                        "height": "1674mm",
                        "width": "1980mm",
                        "length": "4985mm",
                        "wheelbase": "3023mm",
                        "powerUnit": {
                            "maxTorqueWithLaunchControl": {
                                "value": 1500,
                                "unit": "Nm"
                            },
                            "powerUpTo": {
                                "kw": 530,
                                "ps": 857
                            },
                            "overboostPowerWithLaunchControl": {
                                "PS": 1156,
                                "kW": 850
                            }
                        },
                        "performance": {
                            "topSpeed": {
                                "value": 260,
                                "unit": "km/h"
                            },
                            "acceleration": {
                                "80To120": {
                                    "value": 1.2,
                                    "unit": "s",
                                    "test": "80-120 km/h (50-75 mph) with Launch Control"
                                },
                                "zeroTo100": {
                                    "value": 2.5,
                                    "unit": "s",
                                    "test": "0-100 km/h with Launch Control"
                                },
                                "zeroTo160": {
                                    "value": 4.9,
                                    "unit": "s",
                                    "test": "0-160 km/h with Launch Control"
                                },
                                "zeroTo200": {
                                    "value": 7.4,
                                    "unit": "s",
                                    "test": "0-200 km/h with Launch Control"
                                }
                            }
                        },
                        "soundLevel": {
                            "standard": "UN-R 51",
                            "passingVehicle": {
                                "value": 68,
                                "unit": "dB(A)"
                            }
                        },
                        "charging": {
                            "battery": {
                                "grossEnergyContent": {
                                    "value": 113.0,
                                    "unit": "kWh"
                                }
                            },
                            "acCharging": {
                                "chargingTime": {
                                    "9_6kW": {
                                        "value": 13.0,
                                        "unit": "h",
                                        "chargeRange": "0-100%"
                                    },
                                    "11kW": {
                                        "value": 11.0,
                                        "unit": "h",
                                        "chargeRange": "0-100%"
                                    },
                                    "19_2kW": {
                                        "value": 6.5,
                                        "unit": "h",
                                        "chargeRange": "0-100%"
                                    },
                                    "22kW": {
                                        "value": 5.75,
                                        "unit": "h",
                                        "chargeRange": "0-100%"
                                    }
                                }
                            },
                            "dcCharging": {
                                "chargingTime": {
                                    "400VInfrastructure": {
                                        "value": 26,
                                        "unit": "min",
                                        "chargeRange": "10-80%"
                                    },
                                    "maximumChargingPower": {
                                        "value": 16,
                                        "unit": "min",
                                        "chargeRange": "10-80%"
                                    }
                                },

                                "maximumChargingPower": {
                                    "value": 390,
                                    "unit": "kW"
                                },

                                "rechargedRangeIn10Minutes": {
                                    "value": 312,
                                    "unit": "km",
                                    "chargingPower": "maximum DC charging power"
                                }
                            }
                        },
                        "terrainFeatures": {
                            "maxClearanceWaterSensitivePartsNormalRideHeight": {
                                "value": 500,
                                "unit": "mm"
                            },
                            "maxGroundClearanceNormalRideHeight": {
                                "value": 190,
                                "unit": "mm"
                            },
                            "maxClearanceWaterSensitivePartsOffRoadRideHeight": {
                                "value": 555,
                                "unit": "mm"
                            },
                            "maxGroundClearanceOffRoadRideHeight": {
                                "value": 245,
                                "unit": "mm"
                            },
                            "maxClearanceWaterSensitivePartsOffRoadLevel": {
                                "value": 520,
                                "unit": "mm"
                            },
                            "maxGroundClearanceOffRoadLevel": {
                                "value": 210,
                                "unit": "mm"
                            },

                            "breakoverAngleLowLevel": {
                                "value": 13.4,
                                "unit": "°"
                            },

                            "overhang": {
                                "front": {
                                    "value": 955,
                                    "unit": "mm"
                                },
                                "rear": {
                                    "value": 1007,
                                    "unit": "mm"
                                }
                            },
                            "maxGroundClearanceLowLevel": {
                                "value": 175,
                                "unit": "mm"
                            },

                        },
                        "capacities": {
                            "luggageCompartment": {
                                "front": {
                                    "value": 90,
                                    "unit": "l"
                                },
                                "rear": {
                                    "value": 747,
                                    "unit": "l",
                                    "description": "Up to the upper edge of the rear seats"
                                }
                            }

                        },

                    }


                },

            ]
        },
        {
            "variantId": "gasoline",
            "name": "Gasoline",
            "cars": [
                {
                    "carId": "cayenne-gasoline",
                    "modelId": "cayenne",
                    "variantId": "gasoline",
                    "name": "Cayenne",
                    "hero": {
                        "title": "Power meets versatility.",
                        "description": "The Cayenne delivers signature Porsche performance with exceptional comfort, confident handling, and the everyday versatility of a luxury SUV."
                    },
                    "year": 2026,
                    "fuelType": "Gasoline",
                    "driveType": "All-Wheel Drive",
                    "transmission": "Automatic",
                    "price": {
                        "amount": 15118000,
                        "currency": "INR",
                        "formatted": "₹1,51,18,000.00",
                        "taxIncluded": true,
                        "tax": "VAT"
                    },
                    "images": {
                        "hero": "/images/cars/cayenne/cayenne/hero1.png",

                        "exterior": {
                            "front": "/images/cars/cayenne/cayenne/front1.png",
                            "rear": "/images/cars/cayenne/cayenne/rearLight.png",
                            "side": "/images/cars/cayenne/cayenne/sideView2.png",
                            "lights": {
                                "headlights": "/images/cars/cayenne/cayenne/headlight1.png",
                                "taillights": "/images/cars/cayenne/cayenne/rearLight.png",
                                "Indicators": "/images/cars/cayenne/cayenne/front-indicator.png",
                            },

                            "wheels": {
                                "frontWheel": "/images/cars/cayenne/cayenne/frontWheel.png",
                                "rearWheel": "/images/cars/cayenne/cayenne/rearWheel1.png",
                            },
                        },
                        "bootSpace": {
                            "front": "/images/front-space.webp",
                            "rear": "/images/back-space.webp",
                        },

                        "interior": {
                            "interior": "/images/cars/cayenne/cayenne/dashboard.png",
                            "dashboard": "/images/cars/cayenne/cayenne/dashboard.png",
                            "frontSeats": "/images/cars/cayenne/cayenne/front-seat.png",
                            "rearSeats": "/images/cars/cayenne/cayenne/back-seat.png",
                            "centerConsole": "/images/cars/cayenne/cayenne/console.png",
                        },

                        "gallery": []
                    },
                    "featuredVideo": "/videos/cayenneSUV.mp4",
                    "technical_data": {
                        "length": "4930mm",
                        "height": "1679mm",
                        "width": "1983mm",
                        "wheelbase": "2895",
                        "powerUnit": {
                            "bore": {
                                "value": 84.5,
                                "unit": "mm"
                            },
                            "numberOfCylinders": 6,
                            "stroke": {
                                "value": 89.0,
                                "unit": "mm"
                            },
                            "displacement": {
                                "value": 2995,
                                "unit": "cm³"
                            },
                            "maxTorque": {
                                "value": 500,
                                "unit": "Nm"
                            },
                            "power": {
                                "kW": {
                                    "value": 260,
                                    "unit": "kW"
                                },
                                "PS": {
                                    "value": 353,
                                    "unit": "PS"
                                }
                            },
                            "maxOutputPerLiter": {
                                "kWPerLiter": {
                                    "value": 87.0,
                                    "unit": "kW/l"
                                },
                                "PSPerLiter": {
                                    "value": 118.0,
                                    "unit": "PS/l"
                                }
                            },
                            "maximumEngineSpeed": {
                                "value": 6500,
                                "unit": "1/min"
                            }
                        },
                        "performance": {
                            "topSpeed": {
                                "value": 248,
                                "unit": "km/h"
                            },
                            "acceleration": {
                                "inGear": {
                                    "value": 4.0,
                                    "speedRange": "80-120 km/h",
                                    "unit": "s",
                                    "test": "80-120 km/h (50-75 mph) with Launch Control"
                                },
                                "zeroTo100": {
                                    "value": 6.0,
                                    "unit": "s",
                                    "test": "0-100 km/h with Launch Control"
                                },
                                "zeroTo160": {
                                    "value": 13.9,
                                    "unit": "s",
                                    "test": "0-160 km/h with Launch Control"
                                },
                                "zeroTo200": {
                                    "value": 24.0,
                                    "unit": "s",
                                    "test": "0-200 km/h with Launch Control"
                                }
                            }
                        },
                        "soundLevel": {
                            "standard": "UN-R 51",
                            "passingVehicle": {
                                "value": 69,
                                "unit": "dB(A)"
                            }
                        },
                        "terrainFeatures": {
                            "maxGroundClearance": {
                                "value": 238,
                                "unit": "mm",
                            },
                            "breakoverAngle": {
                                "value": 21.2,
                                "unit": "°",
                            },
                            "departureAngle": {
                                "value": 24.3,
                                "unit": "°",
                            },
                            "overhang": {
                                "front": {
                                    "value": 1013,
                                    "unit": "mm"
                                },
                                "rear": {
                                    "value": 1022,
                                    "unit": "mm"
                                }
                            }
                        },
                        "capacities": {
                            "luggageCompartment": {  
                                "openVolume": {
                                    "value": 772,
                                    "unit": "l",
                                    "description": "Up to the upper edge of the rear seats"
                                },
                                "largestVolume": {
                                    "value": 1708,
                                    "unit": "l",
                                    "description": "Behind front seats, up to roof"
                                },
                                "rearVolumeV210_2": {
                                    "value": 698,
                                    "unit": "l"
                                }
                            }
                        },
                    },
                },
                {
                    "carId": "cayenne-black-edition",
                    "modelId": "cayenne",
                    "variantId": "gasoline",
                    "name": "Cayenne Black Edition",
                    "hero": {
                        "title": "Dark. Distinctive. Cayenne.",
                        "description": "The Cayenne Black Edition combines a distinctive dark design with Porsche performance, premium comfort, and the versatility of a luxury SUV."
                    },
                    "year": 2027,
                    "fuelType": "Gasoline",
                    "driveType": "All-Wheel Drive",
                    "transmission": "Automatic",
                    "price": {
                        "amount": 18303000,
                        "currency": "INR",
                        "formatted": "₹1,83,03,000.00",
                        "taxIncluded": true,
                        "tax": "VAT"
                    },
                    "images": {
                        "hero": "/images/cars/cayenne/cayenne_black_edition/hero1.png",

                        "exterior": {
                            "front": "/images/cars/cayenne/cayenne_black_edition/front.png",
                            "rear": "/images/cars/cayenne/cayenne_black_edition/back.png",
                            "side": "/images/cars/cayenne/cayenne_black_edition/side.png",
                            "lights": {
                                "headlights": "/images/cars/cayenne/cayenne_black_edition/headlight1.png",
                                "taillights": "/images/cars/cayenne/cayenne_black_edition/tailLight.jpg",
                                "Indicators": "/images/cars/cayenne/cayenne_black_edition/front_indicators.png",
                            },

                            "wheels": {
                                "frontWheel": "/images/cars/cayenne/cayenne_black_edition/front-wheel.png",
                                "rearWheel": "/images/cars/cayenne/cayenne_black_edition/rear-wheel.png",
                            },
                        },
                        "bootSpace": {
                            "front": "/images/front-space.webp",
                            "rear": "/images/back-space.webp",
                        },

                        "interior": {
                            "interior": "/images/cars/cayenne/cayenne_black_edition/interior.png",
                            "dashboard": "/images/cars/cayenne/cayenne_black_edition/dashboard.png",
                            "frontSeats": "/images/cars/cayenne/cayenne_black_edition/front-seat.png",
                            "rearSeats": "/images/cars/cayenne/cayenne_black_edition/rear-seat.png",
                            "centerConsole": "/images/cars/cayenne/cayenne_black_edition/console.png",
                        },

                        "gallery": []
                    },
                    "featuredVideo": "/videos/cayenneSUVBlackEdition.mp4",
                    "technical_data": {
                        "length": "4930mm",
                        "height": "1679mm",
                        "width": "1983mm",
                        "wheelbase": "2895mm",
                        "powerUnit": {
                            "bore": {
                                "value": 84.5,
                                "unit": "mm"
                            },
                            "numberOfCylinders": 6,
                            "stroke": {
                                "value": 89.0,
                                "unit": "mm"
                            },
                            "displacement": {
                                "value": 2995,
                                "unit": "cm³"
                            },
                            "maxTorque": {
                                "value": 500,
                                "unit": "Nm"
                            },
                            "power": {
                                "kW": {
                                    "value": 260,
                                    "unit": "kW"
                                },
                                "PS": {
                                    "value": 353,
                                    "unit": "PS"
                                }
                            },
                            "maxOutputPerLiter": {
                                "kWPerLiter": {
                                    "value": 87.0,
                                    "unit": "kW/l"
                                },
                                "PSPerLiter": {
                                    "value": 118.0,
                                    "unit": "PS/l"
                                }
                            },
                            "maximumEngineSpeed": {
                                "value": 6500,
                                "unit": "1/min"
                            }
                        },
                        "performance": {
                            "topSpeed": {
                                "value": 248,
                                "unit": "km/h"
                            },
                            "acceleration": {
                                "zeroTo100": {
                                    "value": 6.0,
                                    "unit": "s",
                                    "test": "0-100 km/h with Launch Control"
                                },
                                "zeroTo160": {
                                    "value": 13.9,
                                    "unit": "s",
                                    "test": "0-160 km/h with Launch Control"
                                },
                                "zeroTo200": {
                                    "value": 24.0,
                                    "unit": "s",
                                    "test": "0-200 km/h with Launch Control"
                                },

                                "inGear": {
                                    "value": 4.0,
                                    "speedRange": "80-120 km/h",
                                    "unit": "s",
                                    "test": "80-120 km/h (50-75 mph) with Launch Control"
                                }
                            },
                            "sportChronoPackage": {
                                "zeroTo100": {
                                    "value": 5.7,
                                    "unit": "s"
                                },
                                "zeroTo160": {
                                    "value": 13.6,
                                    "unit": "s"
                                },
                                "zeroTo200": {
                                    "value": 23.7,
                                    "unit": "s"
                                }
                            }
                        },
                        "soundLevel": {
                            "standard": "UN-R 51",
                            "passingVehicle": {
                                "value": 69,
                                "unit": "dB(A)"
                            }
                        },
                        "terrainFeatures": {
                            "maxGroundClearance": {
                                "value": 238,
                                "unit": "mm",
                                "level": "extra off-road"
                            },
                            "breakoverAngle": {
                                "value": 21.2,
                                "unit": "°",
                                "level": "extra off-road"
                            },
                            "departureAngle": {
                                "value": 24.3,
                                "unit": "°",
                                "level": "extra off-road"
                            },
                            "overhang": {
                                "front": {
                                    "value": 1013,
                                    "unit": "mm"
                                },
                                "rear": {
                                    "value": 1022,
                                    "unit": "mm"
                                }
                            }
                        },

                        "capacities": {
                            "luggageCompartment": {
                                "openVolume": {
                                    "value": 772,
                                    "unit": "l",
                                    "description": "Up to the upper edge of the rear seats"
                                },
                                "largestVolume": {
                                    "value": 1708,
                                    "unit": "l",
                                    "description": "Behind front seats, up to roof"
                                },
                                "rearVolumeV210_2": {
                                    "value": 698,
                                    "unit": "l"
                                }
                            }
                        },
                    },
                },
                {
                    "carId": "cayenne-gts",
                    "modelId": "cayenne",
                    "variantId": "gasoline",
                    "name": "Cayenne GTS",
                    "hero": {
                        "title": "Performance with attitude.",
                        "description": "The Cayenne GTS brings a sharper sporting character to the Cayenne, combining exhilarating performance, agile handling, and unmistakable GTS style."
                    },
                    "year": 2027,
                    "fuelType": "Gasoline",
                    "driveType": "All-Wheel Drive",
                    "transmission": "Automatic",
                    "price": {
                        "amount": 21126000,
                        "currency": "INR",
                        "formatted": "₹2,11,26,000.00",
                        "taxIncluded": true,
                        "tax": "VAT"
                    },
                    "images": {
                        "hero": "/images/cars/cayenne/cayenne_gts/hero.png",

                        "exterior": {
                            "front": "/images/cars/cayenne/cayenne_gts/dynamic_View2.png",
                            "rear": "/images/cars/cayenne/cayenne_gts/back-view.png",
                            "side": "/images/cars/cayenne/cayenne_gts/side.png",
                            "lights": {
                                "headlights": "/images/cars/cayenne/cayenne_gts/headlight.png",
                                "taillights": "/images/cars/cayenne/cayenne_gts/tail-light.png",
                                "Indicators": "/images/cars/cayenne/cayenne_gts/front_indicator.png",
                            },

                            "wheels": {
                                "frontWheel": "/images/cars/cayenne/cayenne_gts/frontWheel.png",
                                "rearWheel": "/images/cars/cayenne/cayenne_gts/rearWheel.png",
                            },
                        },
                        "bootSpace": {
                            "front": "/images/front-space.webp",
                            "rear": "/images/back-space.webp",
                        },



                        "interior": {
                            "interior": "/images/cars/cayenne/cayenne_gts/interior.png",
                            "dashboard": "/images/cars/cayenne/cayenne_gts/dashboard.png",
                            "frontSeats": "/images/cars/cayenne/cayenne_gts/frontSeat1.png",
                            "rearSeats": "/images/cars/cayenne/cayenne_gts/rear-seat.png",
                            "centerConsole": "/images/cars/cayenne/cayenne_gts/centerConsole.png",
                        },

                        "gallery": []
                    },
                    "featuredVideo": "/videos/cayenneSUV.mp4",
                    "technical_data": {
                        "length": "4930mm",
                        "height": "1674mm",
                        "width": "1983mm",
                        "wheelbase": "2895mm",
                        "powerUnit": {
                            "bore": {
                                "value": 86.0,
                                "unit": "mm"
                            },
                            "numberOfCylinders": 8,
                            "stroke": {
                                "value": 86.0,
                                "unit": "mm"
                            },
                            "displacement": {
                                "value": 3996,
                                "unit": "cm³"
                            },
                            "maxTorque": {
                                "value": 660,
                                "unit": "Nm"
                            },
                            "power": {
                                "kW": {
                                    "value": 368,
                                    "unit": "kW"
                                },
                                "PS": {
                                    "value": 500,
                                    "unit": "PS"
                                }
                            },
                            "maxOutputPerLiter": {
                                "kWPerLiter": {
                                    "value": 92.0,
                                    "unit": "kW/l"
                                },
                                "PSPerLiter": {
                                    "value": 125.0,
                                    "unit": "PS/l"
                                }
                            },
                            "maximumEngineSpeed": {
                                "value": 6800,
                                "unit": "1/min"
                            }
                        },
                        "performance": {
                            "topSpeed": {
                                "value": 275,
                                "unit": "km/h"
                            },
                            "acceleration": {
                                "zeroTo100": {
                                    "value": 4.7,
                                    "unit": "s",
                                    "test": "0-100 km/h with Launch Control"
                                },
                                "zeroTo160": {
                                    "value": 10.6,
                                    "unit": "s",
                                    "test": "0-160 km/h with Launch Control"
                                },
                                "zeroTo200": {
                                    "value": 17.0,
                                    "unit": "s",
                                    "test": "0-200 km/h with Launch Control"
                                },
                                "inGear": {
                                    "value": 3.1,
                                    "speedRange": "80-120 km/h",
                                    "unit": "s",
                                    "test": "80-120 km/h (50-75 mph) with Launch Control"
                                },

                            },
                            "sportChronoPackage": {
                                "zeroTo100": {
                                    "value": 4.4,
                                    "unit": "s",
                                    "test": "0-100 km/h with Launch Control"
                                },
                                "zeroTo160": {
                                    "value": 10.3,
                                    "unit": "s",
                                    "test": "0-160 km/h with Launch Control"
                                },
                                "zeroTo200": {
                                    "value": 16.7,
                                    "unit": "s",
                                    "test": "0-200 km/h with Launch Control"
                                },
                                "inGear": {
                                    "test": "80-120 km/h (50-75 mph) with Launch Control",
                                    "value": 2.9,
                                    "unit": "s"
                                }
                            }
                        },
                        "soundLevel": {
                            "standard": "UN-R 51",
                            "passingVehicle": {
                                "value": 70,
                                "unit": "dB(A)"
                            }
                        },
                        "terrainFeatures": {
                            "maxGroundClearance": {
                                "value": 234,
                                "unit": "mm",
                            },
                            "departureAngle": {
                                "value": 24.3,
                                "unit": "°",
                            },
                            "breakoverAngle": {
                                "value": 20.7,
                                "unit": "°",
                            },
                            "overhang": {
                                "front": {
                                    "value": 1013,
                                    "unit": "mm"
                                },
                                "rear": {
                                    "value": 1022,
                                    "unit": "mm"
                                }
                            }
                        },
                        "capacities": {
                            "luggageCompartment": {
                                "openVolume": {
                                    "value": 772,
                                    "unit": "l",
                                    "description": "Up to the upper edge of the rear seats"
                                },
                                "largestVolume": {
                                    "value": 1708,
                                    "unit": "l",
                                    "description": "Behind front seats, up to roof"
                                },
                                "rearVolumeV210_2": {
                                    "value": 656,
                                    "unit": "l"
                                }
                            }
                        },

                    },
                }
            ]
        },
        // {
        //     "variantId": "coupé",
        //     "name": "Coupé",
        //     "cars": [
        //         {
        //             "carId": "cayenne-coupe",
        //             "modelId": "cayenne",
        //             "variantId": "coupé",
        //             "name": "Cayenne Coupé",
        //             "hero": {
        //                 "title": "SUV versatility. Coupe attitude.",
        //                 "description": "The Cayenne Coupé combines the versatility of an SUV with a striking coupe silhouette, dynamic performance, and unmistakable Porsche character."
        //             },
        //             "year": 2027,
        //             "fuelType": "Gasoline",
        //             "driveType": "All-Wheel Drive",
        //             "transmission": "Automatic",
        //             "price": {
        //                 "amount": 15737000,
        //                 "currency": "INR",
        //                 "formatted": "₹1,57,37,000.00",
        //                 "taxIncluded": true,
        //                 "tax": "VAT"
        //             },
        //             "images": {
        //                 "hero": "/images/cars/cayenne/Coupé/Cayenne Coupé/hero-coupe.webp",

        //                 "exterior": {
        //                     "front": "/images/cars/cayenne/Coupé/Cayenne Coupé/exterior/front.png",
        //                     "rear": "/images/cars/cayenne/Coupé/Cayenne Coupé/exterior/back.png",
        //                     "side": "/images/cars/cayenne/Coupé/Cayenne Coupé/exterior/side.png",

        //                     "lights": {
        //                         "headlights": "/images/cars/cayenne/Coupé/Cayenne Coupé/lights/headlights.png",
        //                         "taillights": "/images/cars/cayenne/Coupé/Cayenne Coupé/lights/back-light.png",
        //                         "Indicators": "/images/cars/cayenne/Coupé/Cayenne Coupé/lights/front_indicator.png",
        //                     },

        //                     "wheels": {
        //                         "frontWheel": "/images/cars/cayenne/Coupé/Cayenne Coupé/wheels/front-wheel.png",
        //                         "rearWheel": "/images/cars/cayenne/Coupé/Cayenne Coupé/wheels/rear-wheel.png",
        //                     },
        //                 },
        //                 "bootSpace": {
        //                     "front": "/images/front-space.webp",
        //                     "rear": "/images/back-space.webp",
        //                 },

        //                 "interior": {
        //                     "interior": "/images/cars/cayenne/Coupé/Cayenne Coupé/interior/interior.png",
        //                     "dashboard": "/images/cars/cayenne/Coupé/Cayenne Coupé/interior/dashboard.png",
        //                     "frontSeats": "/images/cars/cayenne/Coupé/Cayenne Coupé/interior/front-seat.png",
        //                     "rearSeats": "/images/cars/cayenne/Coupé/Cayenne Coupé/interior/back-seat.png",
        //                     "centerConsole": "/images/cars/cayenne/Coupé/Cayenne Coupé/interior/console.png",
        //                 },

        //                 "gallery": []
        //             },
        //             "featuredVideo": "/videos/cayenneCoupe.mp4",
        //             "technical_data": {
        //                 "powerUnit": {
        //                     "bore": {
        //                         "value": 84.5,
        //                         "unit": "mm"
        //                     },
        //                     "numberOfCylinders": 6,
        //                     "stroke": {
        //                         "value": 89.0,
        //                         "unit": "mm"
        //                     },
        //                     "displacement": {
        //                         "value": 2995,
        //                         "unit": "cm³"
        //                     },
        //                     "maxTorque": {
        //                         "value": 500,
        //                         "unit": "Nm"
        //                     },
        //                     "power": {
        //                         "kW": {
        //                             "value": 260,
        //                             "unit": "kW"
        //                         },
        //                         "PS": {
        //                             "value": 353,
        //                             "unit": "PS"
        //                         }
        //                     },
        //                     "maxOutputPerLiter": {
        //                         "kWPerLiter": {
        //                             "value": 87.0,
        //                             "unit": "kW/l"
        //                         },
        //                         "PSPerLiter": {
        //                             "value": 118.0,
        //                             "unit": "PS/l"
        //                         }
        //                     },
        //                     "maximumEngineSpeed": {
        //                         "value": 6500,
        //                         "unit": "1/min"
        //                     }
        //                 },
        //                 "performance": {
        //                     "topSpeed": {
        //                         "value": 248,
        //                         "unit": "km/h"
        //                     },
        //                     "acceleration": {
        //                         "inGear": {
        //                             "speedRange": "80-120 km/h",
        //                             "mphRange": "50-75 mph",
        //                             "value": 3.9,
        //                             "unit": "s"
        //                         }
        //                     },
        //                     "sportChronoPackage": {
        //                         "zeroTo100": {
        //                             "value": 5.7,
        //                             "unit": "s"
        //                         },
        //                         "zeroTo160": {
        //                             "value": 13.6,
        //                             "unit": "s"
        //                         },
        //                         "zeroTo200": {
        //                             "value": 23.7,
        //                             "unit": "s"
        //                         },
        //                         "inGear": {
        //                             "speedRange": "80-120 km/h",
        //                             "mphRange": "50-75 mph",
        //                             "value": 3.9,
        //                             "unit": "s"
        //                         }
        //                     }
        //                 },
        //                 "soundLevel": {
        //                     "standard": "UN-R 51",
        //                     "passingVehicle": {
        //                         "value": 69,
        //                         "unit": "dB(A)"
        //                     }
        //                 },
        //                 "terrainFeatures": {
        //                     "groundClearance": {
        //                         "airSuspensionNormal": {
        //                             "value": 192,
        //                             "unit": "mm"
        //                         },
        //                         "airSuspensionLow": {
        //                             "value": 182,
        //                             "unit": "mm"
        //                         },
        //                         "airSuspensionOffRoad": {
        //                             "value": 207,
        //                             "unit": "mm"
        //                         },
        //                         "airSuspensionExtraOffRoad": {
        //                             "value": 237,
        //                             "unit": "mm"
        //                         }
        //                     },

        //                     "departureAngle": {
        //                         "steelSuspensionPASM": {
        //                             "value": 22.5,
        //                             "unit": "°"
        //                         },
        //                         "airSuspensionStandard": {
        //                             "value": 20.9,
        //                             "unit": "°"
        //                         },
        //                         "airSuspensionExtraOffRoad": {
        //                             "value": 24.3,
        //                             "unit": "°"
        //                         }
        //                     },
        //                     "overhang": {
        //                         "front": {
        //                             "value": 1013,
        //                             "unit": "mm"
        //                         },
        //                         "rear": {
        //                             "value": 1022,
        //                             "unit": "mm"
        //                         }
        //                     }
        //                 },
        //                 "capacities": {
        //                     "luggageCompartment": {
        //                         "openVolume": {
        //                             "value": 592,
        //                             "unit": "l",
        //                             "description": "Up to the upper edge of the rear seats"
        //                         },
        //                         "largestVolume": {
        //                             "value": 1502,
        //                             "unit": "l",
        //                             "description": "Behind front seats, up to roof"
        //                         },
        //                         "rearVolumeV210_2": {
        //                             "value": 554,
        //                             "unit": "l"
        //                         }
        //                     }
        //                 },

        //             },
        //         },
        //         {
        //             "carId": "cayenne-coupe-black-edition",
        //             "modelId": "cayenne",
        //             "variantId": "coupé",
        //             "name": "Cayenne Coupé Black Edition",
        //             "hero": {
        //                 "title": "Dark by design.",
        //                 "description": "The Cayenne Coupé Black Edition pairs its distinctive coupe profile with exclusive dark accents, refined comfort, and signature Porsche performance."
        //             },
        //             "year": 2027,
        //             "fuelType": "Gasoline",
        //             "driveType": "All-Wheel Drive",
        //             "transmission": "Automatic",
        //             "price": {
        //                 "amount": 18995000,
        //                 "currency": "INR",
        //                 "formatted": "₹1,89,95,000.00",
        //                 "taxIncluded": true,
        //                 "tax": "VAT"
        //             },
        //             "featuredVideo": "/videos/cayenneCoupe.mp4",
        //             "images": {
        //                 "hero": "/images/cars/cayenne/Coupé/Cayenne Coupé Black Edition/hero.png",

        //                 "exterior": {
        //                     "front": "/images/cars/cayenne/Coupé/Cayenne Coupé Black Edition/exterior/front.png",
        //                     "rear": "/images/cars/cayenne/Coupé/Cayenne Coupé Black Edition/exterior/back.png",
        //                     "side": "/images/cars/cayenne/Coupé/Cayenne Coupé Black Edition/exterior/side-view.png",

        //                     "lights": {
        //                         "headlights": "/images/cars/cayenne/Coupé/Cayenne Coupé Black Edition/lights/headlight.png",
        //                         "taillights": "/images/cars/cayenne/Coupé/Cayenne Coupé Black Edition/lights/back-light.png",
        //                         "Indicators": "/images/cars/cayenne/Coupé/Cayenne Coupé Black Edition/lights/front-indicator.png",
        //                     },

        //                     "wheels": {
        //                         "frontWheel": "/images/cars/cayenne/Coupé/Cayenne Coupé Black Edition/wheels/front_wheel.png",
        //                         "rearWheel": "/images/cars/cayenne/Coupé/Cayenne Coupé Black Edition/wheels/rear_wheel.png",
        //                     },
        //                 },
        //                 "bootSpace": {
        //                     "front": "/images/front-space.webp",
        //                     "rear": "/images/back-space.webp",
        //                 },


        //                 "interior": {
        //                     "interior": "/images/cars/cayenne/Coupé/Cayenne Coupé Black Edition/interior/interior.png",
        //                     "dashboard": "/images/cars/cayenne/Coupé/Cayenne Coupé Black Edition/interior/dashboard.png",
        //                     "frontSeats": "/images/cars/cayenne/Coupé/Cayenne Coupé Black Edition/interior/front_seat.png",
        //                     "rearSeats": "/images/cars/cayenne/Coupé/Cayenne Coupé Black Edition/interior/back_seat.png",
        //                     "centerConsole": "/images/cars/cayenne/Coupé/Cayenne Coupé Black Edition/interior/console.png",
        //                 },

        //                 "gallery": []
        //             },
        //             "technical_data": {
        //                 "powerUnit": {
        //                     "bore": {
        //                         "value": 84.5,
        //                         "unit": "mm"
        //                     },
        //                     "numberOfCylinders": 6,
        //                     "stroke": {
        //                         "value": 89.0,
        //                         "unit": "mm"
        //                     },
        //                     "displacement": {
        //                         "value": 2995,
        //                         "unit": "cm³"
        //                     },
        //                     "maxTorque": {
        //                         "value": 500,
        //                         "unit": "Nm"
        //                     },
        //                     "power": {
        //                         "kW": {
        //                             "value": 260,
        //                             "unit": "kW"
        //                         },
        //                         "PS": {
        //                             "value": 353,
        //                             "unit": "PS"
        //                         }
        //                     },
        //                     "maxOutputPerLiter": {
        //                         "kWPerLiter": {
        //                             "value": 87.0,
        //                             "unit": "kW/l"
        //                         },
        //                         "PSPerLiter": {
        //                             "value": 118.0,
        //                             "unit": "PS/l"
        //                         }
        //                     },
        //                     "maximumEngineSpeed": {
        //                         "value": 6500,
        //                         "unit": "1/min"
        //                     }
        //                 },
        //                 "performance": {
        //                     "topSpeed": {
        //                         "value": 248,
        //                         "unit": "km/h"
        //                     },
        //                     "acceleration": {
        //                         "inGear": {
        //                             "speedRange": "80-120 km/h",
        //                             "mphRange": "50-75 mph",
        //                             "value": 3.9,
        //                             "unit": "s"
        //                         }
        //                     },
        //                     "sportChronoPackage": {
        //                         "zeroTo100": {
        //                             "value": 5.7,
        //                             "unit": "s"
        //                         },
        //                         "zeroTo160": {
        //                             "value": 13.6,
        //                             "unit": "s"
        //                         },
        //                         "zeroTo200": {
        //                             "value": 23.7,
        //                             "unit": "s"
        //                         },
        //                         "inGear": {
        //                             "speedRange": "80-120 km/h",
        //                             "mphRange": "50-75 mph",
        //                             "value": 3.9,
        //                             "unit": "s"
        //                         }
        //                     }
        //                 },
        //                 "soundLevel": {
        //                     "standard": "UN-R 51",
        //                     "passingVehicle": {
        //                         "value": 69,
        //                         "unit": "dB(A)"
        //                     }
        //                 },
        //                 "terrainFeatures": {
        //                     "groundClearance": {
        //                         "steelSuspensionPASM": {
        //                             "value": 214,
        //                             "unit": "mm"
        //                         },
        //                         "airSuspensionNormal": {
        //                             "value": 192,
        //                             "unit": "mm"
        //                         },
        //                         "airSuspensionLow": {
        //                             "value": 182,
        //                             "unit": "mm"
        //                         },
        //                         "airSuspensionOffRoad": {
        //                             "value": 207,
        //                             "unit": "mm"
        //                         },
        //                         "airSuspensionExtraOffRoad": {
        //                             "value": 237,
        //                             "unit": "mm"
        //                         }
        //                     },

        //                     "departureAngle": {
        //                         "steelSuspensionPASM": {
        //                             "value": 22.5,
        //                             "unit": "°"
        //                         },
        //                         "airSuspensionStandard": {
        //                             "value": 20.9,
        //                             "unit": "°"
        //                         },
        //                         "airSuspensionExtraOffRoad": {
        //                             "value": 24.3,
        //                             "unit": "°"
        //                         }
        //                     },
        //                     "overhang": {
        //                         "front": {
        //                             "value": 1013,
        //                             "unit": "mm"
        //                         },
        //                         "rear": {
        //                             "value": 1022,
        //                             "unit": "mm"
        //                         }
        //                     }
        //                 },
        //                 "capacities": {
        //                     "luggageCompartment": {
        //                         "openVolume": {
        //                             "value": 592,
        //                             "unit": "l",
        //                             "description": "Up to the upper edge of the rear seats"
        //                         },
        //                         "largestVolume": {
        //                             "value": 1502,
        //                             "unit": "l",
        //                             "description": "Behind front seats, up to roof"
        //                         },
        //                         "rearVolumeV210_2": {
        //                             "value": 554,
        //                             "unit": "l"
        //                         }
        //                     }
        //                 },
        //                 "body": {
        //                     "dimensions": {
        //                         "length": {
        //                             "value": 4930,
        //                             "unit": "mm"
        //                         },
        //                         "width": {
        //                             "value": 1983,
        //                             "unit": "mm"
        //                         },
        //                         "wheelbase": {
        //                             "value": 2895,
        //                             "unit": "mm"
        //                         },

        //                     },
        //                     "height": {
        //                         "airSuspensionStandard": {
        //                             "value": 1659,
        //                             "unit": "mm"
        //                         },
        //                         "airSuspensionLow": {
        //                             "value": 1649,
        //                             "unit": "mm"
        //                         },
        //                         "airSuspensionExtraLow": {
        //                             "value": 1634,
        //                             "unit": "mm"
        //                         },
        //                         "airSuspensionOffRoad": {
        //                             "value": 1674,
        //                             "unit": "mm"
        //                         },
        //                         "airSuspensionExtraOffRoad": {
        //                             "value": 1704,
        //                             "unit": "mm"
        //                         }
        //                     }
        //                 }
        //             },
        //         },
        //         {
        //             "carId": "cayenne-gts-coupe",
        //             "modelId": "cayenne",
        //             "variantId": "coupé",
        //             "name": "Cayenne GTS Coupé",
        //             "hero": {
        //                 "title": "Sporting attitude, unleashed.",
        //                 "description": "The Cayenne GTS Coupé brings sharper performance and unmistakable GTS character to a striking coupe silhouette, creating an SUV built for driving enthusiasts."
        //             },
        //             "year": 2027,
        //             "fuelType": "Gasoline",
        //             "driveType": "All-Wheel Drive",
        //             "transmission": "Automatic",
        //             "price": {
        //                 "amount": 21261000,
        //                 "currency": "INR",
        //                 "formatted": "₹2,12,61,000.00",
        //                 "taxIncluded": true,
        //                 "tax": "VAT"
        //             },
        //             "featuredVideo": "/videos/cayenneCoupe.mp4",
        //             "images": {
        //                 "hero": "/images/cars/cayenne/Coupé/Cayenne GTS Coupe/hero.png",

        //                 "exterior": {
        //                     "front": "/images/cars/cayenne/Coupé/Cayenne GTS Coupe/exterior/front.png",
        //                     "rear": "/images/cars/cayenne/Coupé/Cayenne GTS Coupe/exterior/rear.png",
        //                     "side": "/images/cars/cayenne/Coupé/Cayenne GTS Coupe/exterior/side_view.png",
        //                     "lights": {
        //                         "headlights": "/images/cars/cayenne/Coupé/Cayenne GTS Coupe/lights/Front_headLights.png",
        //                         "taillights": "/images/cars/cayenne/Coupé/Cayenne GTS Coupe/lights/tail-light.png",  // 
        //                         "Indicators": "/images/cars/cayenne/Coupé/Cayenne GTS Coupe/lights/front_indicator.png",
        //                     },

        //                     "wheels": {
        //                         "frontWheel": "/images/cars/cayenne/Coupé/Cayenne GTS Coupe/wheels/front_wheel.png",
        //                         "rearWheel": "/images/cars/cayenne/Coupé/Cayenne GTS Coupe/wheels/rearWheel.png",
        //                     },
        //                 },
        //                 "bootSpace": {
        //                     "front": "/images/front-space.webp",
        //                     "rear": "/images/back-space.webp",
        //                 },

        //                 "interior": {
        //                     "interior": "/images/cars/cayenne/Coupé/Cayenne GTS Coupe/interior/interior.png",
        //                     "dashboard": "/images/cars/cayenne/Coupé/Cayenne GTS Coupe/interior/dashboard.png",
        //                     "frontSeats": "/images/cars/cayenne/Coupé/Cayenne GTS Coupe/interior/front_seat1.png",
        //                     "rearSeats": "/images/cars/cayenne/Coupé/Cayenne GTS Coupe/interior/back_seat.png",
        //                     "centerConsole": "/images/cars/cayenne/Coupé/Cayenne GTS Coupe/interior/console1.png"
        //                 },

        //                 "gallery": []
        //             },
        //             "technical_data": {
        //                 "powerUnit": {
        //                     "bore": {
        //                         "value": 86.0,
        //                         "unit": "mm"
        //                     },
        //                     "numberOfCylinders": 8,
        //                     "stroke": {
        //                         "value": 86.0,
        //                         "unit": "mm"
        //                     },
        //                     "displacement": {
        //                         "value": 3996,
        //                         "unit": "cm³"
        //                     },
        //                     "maxTorque": {
        //                         "value": 660,
        //                         "unit": "Nm"
        //                     },
        //                     "power": {
        //                         "kW": {
        //                             "value": 368,
        //                             "unit": "kW"
        //                         },
        //                         "PS": {
        //                             "value": 500,
        //                             "unit": "PS"
        //                         }
        //                     },
        //                     "maxOutputPerLiter": {
        //                         "kWPerLiter": {
        //                             "value": 92.0,
        //                             "unit": "kW/l"
        //                         },
        //                         "PSPerLiter": {
        //                             "value": 125.0,
        //                             "unit": "PS/l"
        //                         }
        //                     },
        //                     "maximumEngineSpeed": {
        //                         "value": 6800,
        //                         "unit": "1/min"
        //                     }
        //                 },
        //                 "performance": {
        //                     "topSpeed": {
        //                         "value": 275,
        //                         "unit": "km/h"
        //                     },
        //                     "sportChronoPackage": {
        //                         "zeroTo100": {
        //                             "value": 4.4,
        //                             "unit": "s"
        //                         },
        //                         "zeroTo160": {
        //                             "value": 10.3,
        //                             "unit": "s"
        //                         },
        //                         "zeroTo200": {
        //                             "value": 16.7,
        //                             "unit": "s"
        //                         },
        //                         "inGear": {
        //                             "speedRange": "80-120 km/h",
        //                             "mphRange": "50-75 mph",
        //                             "value": 2.9,
        //                             "unit": "s"
        //                         }
        //                     }
        //                 },
        //                 "soundLevel": {
        //                     "standard": "UN-R 51",
        //                     "passingVehicle": {
        //                         "value": 70,
        //                         "unit": "dB(A)"
        //                     }
        //                 },
        //                 "terrainFeatures": {
        //                     "groundClearance": {
        //                         "airSuspensionNormal": {
        //                             "value": 189,
        //                             "unit": "mm"
        //                         },
        //                         "airSuspensionLow": {
        //                             "value": 181,
        //                             "unit": "mm"
        //                         },
        //                         "airSuspensionOffRoad": {
        //                             "value": 204,
        //                             "unit": "mm"
        //                         },
        //                         "airSuspensionExtraOffRoad": {
        //                             "value": 234,
        //                             "unit": "mm"
        //                         }
        //                     },
        //                     "waterClearance": {
        //                         "airSuspensionStandard": {
        //                             "value": 471,
        //                             "unit": "mm"
        //                         },
        //                         "airSuspensionOffRoad": {
        //                             "value": 496,
        //                             "unit": "mm"
        //                         },
        //                         "airSuspensionExtraOffRoad": {
        //                             "value": 525,
        //                             "unit": "mm"
        //                         }
        //                     },
        //                     "approachAngle": {
        //                         "airSuspensionStandard": {
        //                             "value": 23.3,
        //                             "unit": "°"
        //                         },
        //                         "airSuspensionExtraOffRoad": {
        //                             "value": 26.6,
        //                             "unit": "°"
        //                         }
        //                     },
        //                     "breakoverAngle": {
        //                         "airSuspensionLow": {
        //                             "value": 16.0,
        //                             "unit": "°"
        //                         },
        //                         "airSuspensionStandard": {
        //                             "value": 16.7,
        //                             "unit": "°"
        //                         },
        //                         "airSuspensionOffRoad": {
        //                             "value": 18.0,
        //                             "unit": "°"
        //                         },
        //                         "airSuspensionExtraOffRoad": {
        //                             "value": 20.7,
        //                             "unit": "°"
        //                         }
        //                     },
        //                     "departureAngle": {
        //                         "airSuspensionStandard": {
        //                             "value": 20.7,
        //                             "unit": "°"
        //                         },
        //                         "airSuspensionExtraOffRoad": {
        //                             "value": 24.1,
        //                             "unit": "°"
        //                         }
        //                     },
        //                     "overhang": {
        //                         "front": {
        //                             "value": 1013,
        //                             "unit": "mm"
        //                         },
        //                         "rear": {
        //                             "value": 1022,
        //                             "unit": "mm"
        //                         }
        //                     }
        //                 },
        //                 "capacities": {
        //                     "luggageCompartment": {
        //                         "openVolume": {
        //                             "value": 592,
        //                             "unit": "l",
        //                             "description": "Up to the upper edge of the rear seats"
        //                         },
        //                         "largestVolume": {
        //                             "value": 1502,
        //                             "unit": "l",
        //                             "description": "Behind front seats, up to roof"
        //                         },
        //                         "rearVolumeV210_2": {
        //                             "value": 554,
        //                             "unit": "l"
        //                         }
        //                     }
        //                 },
        //             },
        //         }
        //     ]
        // },

    ]

}]