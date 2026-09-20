import type { CarData } from "./type/911Types";

interface CarVariant {
    variantId: string;
    name: string;
    cars: CarData[];
}

interface CarModel {
    modelId: string;
    name: string;
    variants: CarVariant[];
}

export const car_911: CarModel[] = [
    {
        "modelId": "911",
        "name": "911",
        "variants": [
            {
                "variantId": "carrera",
                "name": "Carrera",
                "cars": [
                    {
                        "carId": "911-carrera",
                        "modelId": "911",
                        "variantId": "carrera",
                        "name": "911 Carrera",
                        "hero": {
                            "title": "The legend, perfected.",
                            "description": "Iconic design, exhilarating performance, and everyday usability come together in the timeless 911 Carrera."
                        },
                        "year": 2026,
                        "price": {
                            "amount": 21129000,
                            "currency": "INR",
                            "formatted": "₹2,11,29,000.00",
                            "taxIncluded": true,
                            "tax": "VAT"
                        },
                        "fuelType": "Gasoline",
                        "driveType": "Rear-Wheel Drive",
                        "transmission": "Automatic",
                        "images": {
                            "hero": "/images/cars/911/911carrera/911-carrera-3.avif",

                            "exterior": {
                                "front": "/images/cars/911/911carrera/911-carrera-5.avif",
                                "rear": "/images/cars/911/911carrera/911-carrera-9.png",
                                "side": "/images/cars/911/911carrera/911-side-view.png",
                                "lights": {
                                    "headlights": "/images/cars/911/911carrera/911-carrera-10.png",
                                    "taillights": "/images/cars/911/911carrera/tail-light.png",
                                    "Indicators": "/images/cars/911/911carrera/911-carrera-front-indi.png",
                                },

                                "wheels": {
                                    "frontWheel": "/images/cars/911/911carrera/911-carrera-front-wheel.png",
                                    "rearWheel": "/images/cars/911/911carrera/911-carrera-rear-wheel.png",
                                },
                            },
                            "bootSpace": {
                                "front": "/images/front-space.webp",
                                "rear": "/images/back-space.webp",
                            },

                            "interior": {
                                "interior": "/images/cars/911/911carrera/911-carrera-15.png",
                                "dashboard": "/images/cars/911/911carrera/911-carrera-16.png",
                                "frontSeats": "/images/cars/911/911carrera/911-carrera-front-seat.png",
                                "rearSeats": "/images/cars/911/911carrera/911-carrera-rear-seat.png",
                                "centerConsole": "/images/cars/911/911carrera/911-carrera-18.png",
                            },
                            "gallery": [
                                "/images/cars/911/911carrera/911-carrera-1.avif",
                                "/images/cars/911/911carrera/911-carrera-2.avif",
                                "/images/cars/911/911carrera/911-carrera-7.avif",
                                "/images/cars/911/911carrera/911-carrera-back.png",
                                "/images/cars/911/911carrera/911-carrera.avif",
                                "/images/cars/911/911carrera/911-carrera-rear-indi.png",
                                "/images/cars/911/911carrera/911-carrera-4.avif",
                                "/images/cars/911/911carrera/911-carrera-8.avif",
                            ]
                        },
                        "featuredVideo": "/videos/911.mp4",
                        "technical_data": {
                            "height": "1302mm",
                            "length": "4542mm",
                            "wheelbase": "2450mm",
                            "width": "1852mm",
                            "powerUnit": {
                                "bore": {
                                    "value": 91.0,
                                    "unit": "mm"
                                },
                                "numberOfCylinders": 6,
                                "stroke": {
                                    "value": 76.4,
                                    "unit": "mm"
                                },
                                "displacement": {
                                    "value": 2981,
                                    "unit": "cm³"
                                },
                                "maxTorque": {
                                    "value": 450,
                                    "unit": "Nm"
                                },
                                "power": {
                                    "kw": {
                                        "value": 290,
                                        "unit": "kw"
                                    },
                                    "ps": {
                                        "value": 394,
                                        "unit": "PS"
                                    }

                                },
                                "maxOutputPerLiter": {
                                    "kwPerLiter": {
                                        "value": 96.00,
                                        "unit": "kW/l"
                                    },
                                    "psPerLiter": {
                                        "value": 131.00,
                                        "unit": "PS/l"
                                    }
                                },
                                "maximumEngineSpeed": {
                                    "value": 7500,
                                    "unit": "1/min"
                                }
                            },
                            "performance": {
                                "topSpeed": {
                                    "value": 294,
                                    "unit": "km/h"
                                },
                                "acceleration": {
                                    "zeroTo100": {
                                        "standard": {
                                            "value": 4.1,
                                            "unit": "s",
                                            "test": "0 - 100 km/h"
                                        },
                                        "sportChrono": {
                                            "value": 3.9,
                                            "unit": "s",
                                            "test": "0 - 100 km/h with Sport Chrono Package"
                                        }
                                    },

                                    "zeroTo160": {
                                        "standard": {
                                            "value": 9.2,
                                            "unit": "s",
                                            "test": "0 - 160 km/h"
                                        },
                                        "sportChrono": {
                                            "value": 8.9,
                                            "unit": "s",
                                            "test": "0 - 160 km/h with Sport Chrono Package"
                                        }
                                    },

                                    "zeroTo200": {
                                        "standard": {
                                            "value": 14.4,
                                            "unit": "s",
                                            "test": "0 - 200 km/h"
                                        },
                                        "sportChrono": {
                                            "value": 14.1,
                                            "unit": "s",
                                            "test": "0 - 200 km/h with Sport Chrono Package"
                                        }
                                    },

                                    "inGear80To120": {
                                        "standard": {
                                            "value": 2.5,
                                            "unit": "s",
                                            "test": "80-120km/h (50-75 mph)"
                                        },
                                        "sportChrono": {
                                            "value": 2.5,
                                            "unit": "s",
                                            "test": "80-120km/h (50-75 mph) with Sport Chrono Package"
                                        }
                                    }
                                }
                            },
                            
                            "soundLevel": {
                                "standard": "UN-R 51",
                                "passingVehicle": {
                                    "value": 71,
                                    "unit": "dB(A)"
                                }
                            },
                            "terrainFeatures": {
                                "approachAngle": {
                                    "pasm": {
                                        "value": 9.9,
                                        "unit": "°"
                                    }
                                },
                                "maxGroundClearance": {
                                    "pasm": {
                                        "value": 122,
                                        "unit": "mm"
                                    }
                                },
                                "departureAngle": {
                                    "pasm": {
                                        "value": 14.3,
                                        "unit": "°"
                                    }
                                },
                                "overhang": {
                                    "front": {
                                        "value": "1,016",
                                        "unit": "mm"
                                    },
                                    "rear": {
                                        "value": "1,076",
                                        "unit": "mm"
                                    },
                                }
                            },
                            "capacities": {
                                "luggageCompartment": {
                                    "front": {
                                        "value": 135,
                                        "unit": "l"
                                    },
                                    "rear": {
                                        "value": 373,
                                        "unit": "l"
                                    }
                                }
                            }
                        }
                    },

                ]
            },
            // {
            //     "variantId": "gt",
            //     "name": "GT",
            //     "cars": [
            //         {
            //             "carId": "911-gt3",
            //             "modelId": "911",
            //             "variantId": "gt",
            //             "name": "911 GT3",
            //             "hero": {
            //                 "title": "Born for the track.",
            //                 "description": "A pure expression of motorsport engineering, the 911 GT3 delivers razor-sharp handling, thrilling performance, and an unmistakable connection between driver and road."
            //             },
            //             "year": 2027,
            //             "price": {
            //                 "amount": 33260000,
            //                 "currency": "INR",
            //                 "formatted": "₹3,32,60,000.00",
            //                 "taxIncluded": true,
            //                 "tax": "VAT"
            //             },
            //             "fuelType": "Gasoline",
            //             "driveType": "Rear-Wheel Drive",
            //             "transmission": "Automatic",
            //             "images": {
            //                 "hero": "/images/cars/911/911GT3/911_GT_17_main.png",

            //                 "exterior": {
            //                     "front": "/images/cars/911/911GT3/Front.png",
            //                     "rear": "/images/cars/911/911GT3/911_GT_13.png",
            //                     "side": "/images/cars/911/911GT3/911_GT_11.png",
            //                     "lights": {
            //                         "headlights": "/images/cars/911/911GT3/911_GT_6.png",
            //                         "taillights": "/images/cars/911/911GT3/911_GT_13.png",
            //                         "Indicators": "/images/cars/911/911GT3/FrontIndicator.png",
            //                     },

            //                     "wheels": {
            //                         "frontWheel": "/images/cars/911/911GT3/911_GT_5.png",
            //                         "rearWheel": "/images/cars/911/911GT3/911_GT_14.png",
            //                     },
            //                 },

            //                 "bootSpace": {
            //                     "front": "/images/front-space.webp",
            //                     "rear": "/images/back-space.webp",
            //                 },

            //                 "interior": {
            //                     "interior": "//images/cars/911/911GT3/911_GT_8.png",
            //                     "dashboard": "/images/cars/911/911GT3/911_GT_9.png",
            //                     "frontSeats": "/images/cars/911/911GT3/911_GT_8.png",
            //                     "rearSeats": "/images/cars/911/911GT3/911_GT_21.png",
            //                     "centerConsole": "/images/cars/911/911GT3/911_GT_8.jpg",
            //                 },
            //                 "gallery": [
            //                     "/images/cars/911/911GT3/911_GT_1.png",
            //                     "/images/cars/911/911GT3/911_GT_2.png",
            //                     "/images/cars/911/911GT3/911_GT_20.png",
            //                     "/images/cars/911/911GT3/911_GT_19png",
            //                     "/images/cars/911/911GT3/911_GT_18.png",
            //                     "/images/cars/911/911GT3/911_GT_7.png",
            //                     "/images/cars/911/911GT3/911_GT_17.png",
            //                     "/images/cars/911/911GT3/911_GT_16.png",
            //                     "/images/cars/911/911GT3/911_GT_15.png",
            //                 ]
            //             },
            //             "featuredVideo": "/videos/911.mp4",
            //             "technical_data": {
            //                 "height": "1,279 mm",
            //                 "length": "4,570 mm",
            //                 "wheelbase": "2,457 mm",
            //                 "width": "1,852 mm",
            //                 "powerUnit": {
            //                     "bore": {
            //                         "value": 102.0,
            //                         "unit": "mm"
            //                     },
            //                     "numberOfCylinders": 6,
            //                     "stroke": {
            //                         "value": 81.5,
            //                         "unit": "mm"
            //                     },
            //                     "displacement": {
            //                         "value": 3996,
            //                         "unit": "cm³"
            //                     },
            //                     "maxTorque": {
            //                         "value": 450,
            //                         "unit": "Nm"
            //                     },
            //                     "power": {
            //                         "kw": {
            //                             "value": 375,
            //                             "unit": "kw"
            //                         },
            //                         "ps": {
            //                             "value": 510,
            //                             "unit": "PS"
            //                         }
            //                     },

            //                     "maxOutputPerLiter": {
            //                         "kwPerLiter": {
            //                             "value": 93.00,
            //                             "unit": "kW/l"
            //                         },
            //                         "psPerLiter": {
            //                             "value": 127.00,
            //                             "unit": "PS/l"
            //                         }
            //                     },
            //                     "maxEngineSpeed": {
            //                         "value": 9000,
            //                         "unit": "1/min"
            //                     }
            //                 },
            //                 "performance": {
            //                     "topSpeed": {
            //                         "value": 311,
            //                         "unit": "km/h"
            //                     },
            //                     "acceleration": {
            //                         "zeroTo100": {
            //                             "standard": {
            //                                 "value": 3.4,
            //                                 "unit": "s",
            //                                 "test": "0 - 100 km/h"
            //                             },
            //                         },
            //                         "zeroTo160": {
            //                             "standard": {
            //                                 "value": 7.0,
            //                                 "unit": "s",
            //                                 "test": "0 - 160 km/h"
            //                             },
            //                         },
            //                         "zeroTo200": {
            //                             "standard": {
            //                                 "value": 10.8,
            //                                 "unit": "s",
            //                                 "test": "0 - 200 km/h"
            //                             },
            //                         },
            //                         "inGear80To120": {
            //                             "standard": {
            //                                 "value": 1.9,
            //                                 "unit": "s",
            //                                 "test": "80-120km/h (50-75 mph)"
            //                             },
            //                         }
            //                     }
            //                 },
            //                 "soundLevel": {
            //                     "standard": "UN-R 51",
            //                     "passingVehicle": {
            //                         "value": 71,
            //                         "unit": "dB(A)"
            //                     }
            //                 },
            //                 "terrainFeatures": {
            //                     "approachAngle": {
            //                         "pasm": {
            //                             "value": 6.3,
            //                             "unit": "°"
            //                         }
            //                     },

            //                     "maxGroundClearance": {
            //                         "pasm": {
            //                             "value": 76,
            //                             "unit": "mm"
            //                         }
            //                     },
            //                     "overhang": {
            //                         "front": {
            //                             "value": "1,037",
            //                             "unit": "mm"
            //                         },
            //                         "rear": {
            //                             "value": "1,076",
            //                             "unit": "mm"
            //                         },
            //                     },

            //                     "departureAngle": {
            //                         "pasm": {
            //                             "value": 9.4,
            //                             "unit": "°"
            //                         }
            //                     },

            //                 },
            //                 "capacities": {
            //                     "luggageCompartment": {
            //                         "front": {
            //                             "value": 135,
            //                             "unit": "l"
            //                         },
            //                         "rear": {
            //                             "value": 373,
            //                             "unit": "l"
            //                         }
            //                     }
            //                 }
            //             },

            //         },
            //     ]
            // },
            // {
            //     "variantId": "turbo",
            //     "name": "Turbo",
            //     "cars": [
            //         {
            //             "carId": "911-turbo-s",
            //             "modelId": "911",
            //             "variantId": "turbo",
            //             "name": "911 Turbo S",
            //             "hero": {
            //                 "title": "Power without compromise.",
            //                 "description": "Extraordinary performance meets everyday refinement in the 911 Turbo S, combining breathtaking acceleration, iconic design, and confidence-inspiring all-wheel drive."
            //             },
            //             "year": 2027,
            //             "price": {
            //                 "amount": 38249000,
            //                 "currency": "INR",
            //                 "formatted": "₹3,82,49,000.00",
            //                 "taxIncluded": true,
            //                 "tax": "VAT"
            //             },

            //             "fuelType": "Gasoline",
            //             "driveType": "All-Wheel Drive",
            //             "transmission": "Automatic",
            //             "featuredVideo": "/videos/911.mp4",
            //             "images": {
            //                 "hero": "/images/cars/911/911TurboS/911_Turbo_S_10.png",

            //                 "exterior": {
            //                     "front": "/images/cars/911/911TurboS/911_Turbo_S_4.png",
            //                     "rear": "/images/cars/911/911TurboS/911_Turbo_S_5.png",
            //                     "side": "/images/cars/911/911TurboS/911_Turbo_S_2.png",
            //                     "lights": {
            //                         "headlights": "/images/cars/911/911TurboS/911_Turbo_S_15.png",
            //                         "taillights": "/images/cars/911/911TurboS/911_Turbo_S_13.png",
            //                         "Indicators": "/images/cars/911/911TurboS/911_Turbo_S_12.png",
            //                     },

            //                     "wheels": {
            //                         "frontWheel": "/images/cars/911/911TurboS/911_Turbo_S_1.png",
            //                         "rearWheel": "/images/cars/911/911TurboS/911_Turbo_S_11.png",
            //                     },
            //                 },
            //                 "bootSpace": {
            //                     "front": "/images/front-space.webp",
            //                     "rear": "/images/back-space.webp",
            //                 },



            //                 "interior": {
            //                     "interior": "/images/cars/911/911TurboS/911_Turbo_S_7.png",
            //                     "dashboard": "/images/cars/911/911TurboS/911_Turbo_S_19.png",
            //                     "frontSeats": "/images/cars/911/911TurboS/911_Turbo_S_20.png",
            //                     "rearSeats": "/images/cars/911/911TurboS/911_Turbo_S_10.png",
            //                     "centerConsole": "/images/cars/911/911TurboS/911_Turbo_S_18.png",
            //                 },
            //                 "gallery": [
            //                     "/images/cars/911/911TurboS/911_Turbo_S_1.png",
            //                     "/images/cars/911/911TurboS/911_Turbo_S_3.png",
            //                     "/images/cars/911/911TurboS/911_Turbo_S_6.png",
            //                     "/images/cars/911/911TurboS/911_Turbo_S_7.png",
            //                     "/images/cars/911/911TurboS/911_Turbo_S_8.png",
            //                     "/images/cars/911/911TurboS/911_Turbo_S_9.png",
            //                     "/images/cars/911/911TurboS/911_Turbo_S_12.png"
            //                 ]
            //             },
            //             "technical_data": {
            //                 "height": "1,305 mm",
            //                 "length": "4,551 mm",
            //                 "wheelbase": "2,450 mm",
            //                 "width": "1,900 mm",
            //                 "powerUnit": {
            //                     "bore": {
            //                         "value": 97.0,
            //                         "unit": "mm"
            //                     },
            //                     "numberOfCylinders": 6,
            //                     "stroke": {
            //                         "value": 81.0,
            //                         "unit": "mm"
            //                     },
            //                     "displacement": {
            //                         "value": 3591,
            //                         "unit": "cm³"
            //                     },
            //                     "maxTorque": {
            //                         "value": 760,
            //                         "unit": "Nm"
            //                     },

            //                     "power": {
            //                         "kw": {
            //                             "value": 471,
            //                             "unit": "kw"
            //                         },
            //                         "ps": {
            //                             "value": 640,
            //                             "unit": "PS"
            //                         }
            //                     },
            //                     "powerElectricMotor": {
            //                         "kw": 52
            //                     },

            //                     "powerCombined": {
            //                         "kw": 523,
            //                         "ps": 711
            //                     },
            //                     "maxOutputPerLiter": {
            //                         "kwPerLiter": 131.00,
            //                         "psPerLiter": 178.00
            //                     },
            //                     "torqueCombined": {
            //                         "nm": 800
            //                     },
            //                     "maxEngineSpeed": {
            //                         "value": 7500,
            //                         "unit": "1/min"
            //                     }
            //                 },
            //                 "performance": {
            //                     "topSpeed": {
            //                         "value": 322,
            //                         "unit": "km/h"
            //                     },
            //                     "acceleration": {
            //                         "zeroTo100": {
            //                             "standard": {
            //                                 "value": 2.5,
            //                                 "unit": "s",
            //                                 "test": "0 - 100 km/h"
            //                             },
            //                         },
            //                         "zeroTo160": {
            //                             "standard": {
            //                                 "value": 5.5,
            //                                 "unit": "s",
            //                                 "test": "0 - 160 km/h"
            //                             },
            //                         },
            //                         "zeroTo200": {
            //                             "standard": {
            //                                 "value": 8.4,
            //                                 "unit": "s",
            //                                 "test": "0 - 200 km/h"
            //                             },
            //                         },
            //                         "inGear80To120": {
            //                             "standard": {
            //                                 "value": 1.5,
            //                                 "unit": "s",
            //                                 "test": "80-120km/h (50-75 mph)"
            //                             },
            //                         }
            //                     }
            //                 },
            //                 "soundLevel": {
            //                     "standard": "UN-R 51",
            //                     "stationaryVehicleRpm": {
            //                         "value": 3325,
            //                         "unit": "1/min"
            //                     },
            //                     "stationaryVehicle": {
            //                         "value": 92,
            //                         "unit": "dB(A)"
            //                     },
            //                     "passingVehicle": {
            //                         "value": 70,
            //                         "unit": "dB(A)"
            //                     }
            //                 },
            //                 "terrainFeatures": {
            //                     "approachAngle": {
            //                         "pasm": {
            //                             "value": 8.2,
            //                             "unit": "°"
            //                         },
            //                         "pasmSportSuspension": {
            //                             "value": 7.6,
            //                             "unit": "°"
            //                         }
            //                     },
            //                     "maxGroundClearance": {
            //                         "pasm": {
            //                             "value": 103,
            //                             "unit": "mm"
            //                         }
            //                     },
            //                     "departureAngle": {
            //                         "pasm": {
            //                             "value": 13.9,
            //                             "unit": "°"
            //                         },
            //                         "pasmSportSuspension": {
            //                             "value": 13.3,
            //                             "unit": "°"
            //                         }
            //                     },
            //                 },
            //                 "capacities": {
            //                     "luggageCompartmentVolumeFront": {
            //                         "value": 135,
            //                         "unit": "l"
            //                     },
            //                     "openLuggageCompartmentVolumeBehindFrontSeats": {

            //                         "withoutRearSeats": {
            //                             "transmission": "8-speed Porsche Doppelkupplung (PDK)",
            //                             "value": 373,
            //                             "unit": "l"
            //                         }
            //                     }
            //                 },
            //             },
            //         }
            //     ]
            // }
        ]
    },
]