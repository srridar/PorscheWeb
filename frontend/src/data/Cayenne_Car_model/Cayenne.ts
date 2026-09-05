export const Cayenne_Car = [{
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
                            "front": "/images/cars/cayenne/cayenne_electric/",
                            "rear": "/images/cars/cayenne/cayenne_electric/",
                            "side": "/images/cars/cayenne/cayenne_electric/",
                        },
                        "bootSpace": {
                            "front": "/images/front-space.webp",
                            "rear": "/images/back-space.webp",
                        },

                        "lights": {
                            "headlights": "/images/cars/cayenne/cayenne_electric/",
                            "taillights": "/images/cars/cayenne/cayenne_electric/",
                            "Indicators": "/images/cars/cayenne/cayenne_electric/",
                        },

                        "wheels": {
                            "frontWheel": "/images/cars/cayenne/cayenne_electric/",
                            "rearWheel": "/images/cars/cayenne/cayenne_electric/",
                        },

                        "interior": {
                            "interior": "/images/cars/cayenne/cayenne_electric/",
                            "dashboard": "/images/cars/cayenne/cayenne_electric/",
                            "frontSeats": "/images/cars/cayenne/cayenne_electric/",
                            "rearSeats": "/images/cars/cayenne/cayenne_electric/",
                            "centerConsole": "/images/cars/cayenne/cayenne_electric/",
                        },

                        "gallery": [
                            "/images/cars/cayenne/cayenne_electric/"
                        ]
                    },
                    "performance": {
                        "acceleration": {
                            "value": 4.8,
                            "unit": "seconds",
                            "test": "0 - 100 km/h with Launch Control"
                        },
                        "power": {
                            "kw": 325,
                            "ps": 442
                        },
                        "topSpeed": {
                            "value": 230,
                            "unit": "km/h"
                        }
                    },
                    "battery": {
                        "type": "High-voltage lithium-ion battery",
                        "voltage": {
                            "value": 800,
                            "unit": "V"
                        }
                    },

                    "charging": {
                        "dc": {
                            "connector": "CCS",
                            "maximumPower": {
                                "value": 390,
                                "unit": "kW"
                            },
                            "chargeTime": {
                                "fromPercent": 10,
                                "toPercent": 80,
                                "value": 16,
                                "unit": "minutes"
                            },
                            "chargingConditions": {
                                "voltage": ">850 V",
                                "chargingStation": ">390 kW",
                                "current": ">520 A",
                                "batteryTemperature": "15 °C",
                                "initialStateOfCharge": "9%"
                            }
                        },

                        "ac": {
                            "onboardCharger": {
                                "power": 11,
                                "unit": "kW"
                            },
                            "maximumOptionalPower": {
                                "power": 22,
                                "unit": "kW"
                            }
                        }
                    },

                    "range": {
                        "min": 576,
                        "max": 643,
                        "unit": "km",
                        "standard": "WLTP",
                        "type": "combined model range"
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
                        },

                        "lights": {
                            "headlights": "/images/cars/cayenne/cayenne_turbo_electric/headlight.png",
                            "taillights": "/images/cars/cayenne/cayenne_turbo_electric/hero.png",
                            "Indicators": "/images/cars/cayenne/cayenne_turbo_electric/frontindicator.png",

                        },

                        "bootSpace": {
                            "front": "/images/front-space.webp",
                            "rear": "/images/back-space.webp",
                        },

                        "wheels": {
                            "frontWheel": "/images/cars/cayenne/cayenne_turbo_electric/frontwheel.png",
                            "rearWheel": "/images/cars/cayenne/cayenne_turbo_electric/rearwheel.png",
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
                    "performance": {
                        "acceleration": {
                            "value": 2.5,
                            "unit": "seconds",
                            "test": "0 - 100 km/h with Launch Control"
                        },
                        "power": {
                            "kw": 850,
                            "ps": 1156
                        },
                        "topSpeed": {
                            "value": 260,
                            "unit": "km/h"
                        }
                    },
                    "battery": {
                        "type": "High-voltage lithium-ion battery",
                        "voltage": {
                            "value": 800,
                            "unit": "V"
                        }
                    },

                    "charging": {
                        "dc": {
                            "connector": "CCS",
                            "maximumPower": {
                                "value": 390,
                                "unit": "kW"
                            },
                            "chargeTime": {
                                "fromPercent": 10,
                                "toPercent": 80,
                                "value": 16,
                                "unit": "minutes"
                            },
                            "chargingConditions": {
                                "voltage": ">850 V",
                                "chargingStation": ">390 kW",
                                "current": ">520 A",
                                "batteryTemperature": "15 °C",
                                "initialStateOfCharge": "9%"
                            }
                        },

                        "ac": {
                            "onboardCharger": {
                                "power": 11,
                                "unit": "kW"
                            },
                            "maximumOptionalPower": {
                                "power": 22,
                                "unit": "kW"
                            }
                        }
                    },

                    "range": {
                        "min": 564,
                        "max": 624,
                        "unit": "km",
                        "standard": "WLTP",
                        "type": "combined model range"
                    },
                }
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
                    "year": 2027,
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
                        },
                        "bootSpace": {
                            "front": "/images/front-space.webp",
                            "rear": "/images/back-space.webp",
                        },

                        "lights": {
                            "headlights": "/images/cars/cayenne/cayenne/lights/headlight1.png",
                            "taillights": "/images/cars/cayenne/cayenne/lights/rearLight.png",
                            "Indicators": "/images/cars/cayenne/cayenne/lights/front-indicator.png",
                        },

                        "wheels": {
                            "frontWheel": "/images/cars/cayenne/cayenne/wheels/frontWheel.png",
                            "rearWheel": "/images/cars/cayenne/cayenne/wheels/rearWheel1.png",
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
                    "performance": {
                        "acceleration": {
                            "value": 6.0,
                            "unit": "seconds",
                            "test": "0 - 100 km/h"
                        },
                        "power": {
                            "kw": 260,
                            "ps": 353
                        },
                        "topSpeed": {
                            "value": 248,
                            "unit": "km/h"
                        }
                    }
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
                        "hero": "/images/cars/cayenne/cayenne_black_edition/hero.png",

                        "exterior": {
                            "front": "/images/cars/cayenne/cayenne_black_edition/front.png",
                            "rear": "/images/cars/cayenne/cayenne_black_edition/rear.png",
                            "side": "/images/cars/cayenne/cayenne_black_edition/side.png",
                        },
                        "bootSpace": {
                            "front": "/images/front-space.webp",
                            "rear": "/images/back-space.webp",
                        },

                        "lights": {
                            "headlights": "/images/cars/cayenne/cayenne_black_edition/headlights.png",
                            "taillights": "/images/cars/cayenne/cayenne_black_edition/taillights.png",
                            "Indicators": "/images/cars/cayenne/cayenne_black_edition/front_indicators.png",
                        },

                        "wheels": {
                            "frontWheel": "/images/cars/cayenne/cayenne_black_edition/front_wheel.png",
                            "rearWheel": "/images/cars/cayenne/cayenne_black_edition/rear_wheel.png",
                        },

                        "interior": {
                            "interior": "/images/cars/cayenne/cayenne_black_edition/interior.png",
                            "dashboard": "/images/cars/cayenne/cayenne_black_edition/dashboard.png",
                            "frontSeats": "/images/cars/cayenne/cayenne_black_edition/front_seats.png",
                            "rearSeats": "/images/cars/cayenne/cayenne_black_edition/rear_seats.png",
                            "centerConsole": "/images/cars/cayenne/cayenne_black_edition/console.png",
                        },

                        "gallery": []
                    },
                    "performance": {
                        "acceleration": {
                            "value": 6.0,
                            "unit": "seconds",
                            "test": "0 - 100 km/h"
                        },
                        "power": {
                            "kw": 260,
                            "ps": 353
                        },
                        "topSpeed": {
                            "value": 248,
                            "unit": "km/h"
                        }
                    }
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
                        },
                        "bootSpace": {
                            "front": "/images/front-space.webp",
                            "rear": "/images/back-space.webp",
                        },

                        "lights": {
                            "headlights": "/images/cars/cayenne/cayenne_gts/headlight.png",
                            "taillights": "/images/cars/cayenne/cayenne_gts/tail-light.png",
                            "Indicators": "/images/cars/cayenne/cayenne_gts/front_indicator.png",
                        },

                        "wheels": {
                            "frontWheel": "/images/cars/cayenne/cayenne_gts/frontWheel.png",
                            "rearWheel": "/images/cars/cayenne/cayenne_gts/rearWheel.png",
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
                    "performance": {
                        "acceleration": {
                            "value": 4.7,
                            "unit": "seconds",
                            "test": "0 - 100 km/h"
                        },
                        "power": {
                            "kw": 368,
                            "ps": 500
                        },
                        "topSpeed": {
                            "value": 275,
                            "unit": "km/h"
                        }
                    }
                }
            ]
        },
        {
            "variantId": "coupé",
            "name": "Coupé",
            "cars": [
                {
                    "carId": "cayenne-coupe",
                    "modelId": "cayenne",
                    "variantId": "coupé",
                    "name": "Cayenne Coupé",
                    "hero": {
                        "title": "SUV versatility. Coupe attitude.",
                        "description": "The Cayenne Coupé combines the versatility of an SUV with a striking coupe silhouette, dynamic performance, and unmistakable Porsche character."
                    },
                    "year": 2027,
                    "fuelType": "Gasoline",
                    "driveType": "All-Wheel Drive",
                    "transmission": "Automatic",
                    "price": {
                        "amount": 15737000,
                        "currency": "INR",
                        "formatted": "₹1,57,37,000.00",
                        "taxIncluded": true,
                        "tax": "VAT"
                    },
                    "images": {
                        "hero": "/images/cars/cayenne/Coupé/Cayenne Coupé/hero-coupe.webp",

                        "exterior": {
                            "front": "/images/cars/cayenne/Coupé/Cayenne Coupé/exterior/front.png",
                            "rear": "/images/cars/cayenne/Coupé/Cayenne Coupé/exterior/back.png",
                            "side": "/images/cars/cayenne/Coupé/Cayenne Coupé/exterior/side.png",
                        },
                        "bootSpace": {
                            "front": "/images/front-space.webp",
                            "rear": "/images/back-space.webp",
                        },

                        "lights": {
                            "headlights": "/images/cars/cayenne/Coupé/Cayenne Coupé/lights/headlights.png",
                            "taillights": "/images/cars/cayenne/Coupé/Cayenne Coupé/lights/back-light.png",
                            "Indicators": "/images/cars/cayenne/Coupé/Cayenne Coupé/lights/front_indicator.png",
                        },

                        "wheels": {
                            "frontWheel": "/images/cars/cayenne/Coupé/Cayenne Coupé/wheels/front-wheel.png",
                            "rearWheel": "/images/cars/cayenne/Coupé/Cayenne Coupé/wheels/rear-wheel.png",
                        },

                        "interior": {
                            "interior": "/images/cars/cayenne/Coupé/Cayenne Coupé/interior/interior.png",
                            "dashboard": "/images/cars/cayenne/Coupé/Cayenne Coupé/interior/dashboard.png",
                            "frontSeats": "/images/cars/cayenne/Coupé/Cayenne Coupé/interior/front-seat.png",
                            "rearSeats": "/images/cars/cayenne/Coupé/Cayenne Coupé/interior/back-seat.png",
                            "centerConsole": "/images/cars/cayenne/Coupé/Cayenne Coupé/interior/console.png",
                        },

                        "gallery": []
                    },
                    "performance": {
                        "acceleration": {
                            "value": 5.7,
                            "unit": "seconds",
                            "test": "0 - 100 km/h with Sport Chrono Package"
                        },
                        "power": {
                            "kw": 260,
                            "ps": 353
                        },
                        "topSpeed": {
                            "value": 248,
                            "unit": "km/h"
                        }
                    }
                },
                {
                    "carId": "cayenne-coupe-black-edition",
                    "modelId": "cayenne",
                    "variantId": "coupé",
                    "name": "Cayenne Coupé Black Edition",
                    "hero": {
                        "title": "Dark by design.",
                        "description": "The Cayenne Coupé Black Edition pairs its distinctive coupe profile with exclusive dark accents, refined comfort, and signature Porsche performance."
                    },
                    "year": 2027,
                    "fuelType": "Gasoline",
                    "driveType": "All-Wheel Drive",
                    "transmission": "Automatic",
                    "price": {
                        "amount": 18995000,
                        "currency": "INR",
                        "formatted": "₹1,89,95,000.00",
                        "taxIncluded": true,
                        "tax": "VAT"
                    },
                    "images": {
                        "hero": "/images/cars/cayenne/Coupé/Cayenne Coupé Black Edition/hero.png",

                        "exterior": {
                            "front": "/images/cars/cayenne/Coupé/Cayenne Coupé Black Edition/exterior/front.png",
                            "rear": "/images/cars/cayenne/Coupé/Cayenne Coupé Black Edition/exterior/back.png",
                            "side": "/images/cars/cayenne/Coupé/Cayenne Coupé Black Edition/exterior/side-view.png",
                        },
                        "bootSpace": {
                            "front": "/images/front-space.webp",
                            "rear": "/images/back-space.webp",
                        },
                        "lights": {
                            "headlights": "/images/cars/cayenne/Coupé/Cayenne Coupé Black Edition/lights/headlight.png",
                            "taillights": "/images/cars/cayenne/Coupé/Cayenne Coupé Black Edition/lights/back-light.png",
                            "Indicators": "/images/cars/cayenne/Coupé/Cayenne Coupé Black Edition/lights/front-indicator.png",
                        },

                        "wheels": {
                            "frontWheel": "/images/cars/cayenne/Coupé/Cayenne Coupé Black Edition/wheels/front_wheel.png",
                            "rearWheel": "/images/cars/cayenne/Coupé/Cayenne Coupé Black Edition/wheels/rear_wheel.png",
                        },

                        "interior": {
                            "interior": "/images/cars/cayenne/Coupé/Cayenne Coupé Black Edition/interior/interior.png",
                            "dashboard": "/images/cars/cayenne/Coupé/Cayenne Coupé Black Edition/interior/dashboard.png",
                            "frontSeats": "/images/cars/cayenne/Coupé/Cayenne Coupé Black Edition/interior/front_seat.png",
                            "rearSeats": "/images/cars/cayenne/Coupé/Cayenne Coupé Black Edition/interior/back_seat.png",
                            "centerConsole": "/images/cars/cayenne/Coupé/Cayenne Coupé Black Edition/interior/console.png",
                        },

                        "gallery": []
                    },
                    "performance": {
                        "acceleration": {
                            "value": 5.7,
                            "unit": "seconds",
                            "test": "0 - 100 km/h with Sport Chrono Package"
                        },
                        "power": {
                            "kw": 260,
                            "ps": 353
                        },
                        "topSpeed": {
                            "value": 248,
                            "unit": "km/h"
                        }
                    }
                },
                {
                    "carId": "cayenne-gts-coupe",
                    "modelId": "cayenne",
                    "variantId": "coupé",
                    "name": "Cayenne GTS Coupé",
                    "hero": {
                        "title": "Sporting attitude, unleashed.",
                        "description": "The Cayenne GTS Coupé brings sharper performance and unmistakable GTS character to a striking coupe silhouette, creating an SUV built for driving enthusiasts."
                    },
                    "year": 2027,
                    "fuelType": "Gasoline",
                    "driveType": "All-Wheel Drive",
                    "transmission": "Automatic",
                    "price": {
                        "amount": 21261000,
                        "currency": "INR",
                        "formatted": "₹2,12,61,000.00",
                        "taxIncluded": true,
                        "tax": "VAT"
                    },
                    "images": {
                        "hero": "/images/cars/cayenne/Coupé/Cayenne GTS Coupe/hero.png",

                        "exterior": {
                            "front": "/images/cars/cayenne/Coupé/Cayenne GTS Coupe/exterior/front.png",
                            "rear": "/images/cars/cayenne/Coupé/Cayenne GTS Coupe/exterior/rear.png",
                            "side": "/images/cars/cayenne/Coupé/Cayenne GTS Coupe/exterior/side_view.png",
                        },
                        "bootSpace": {
                            "front": "/images/front-space.webp",
                            "rear": "/images/back-space.webp",
                        },

                        "lights": {
                            "headlights": "/images/cars/cayenne/Coupé/Cayenne GTS Coupe/lights/Front_headLights.png",
                            "taillights": "/images/cars/cayenne/Coupé/Cayenne GTS Coupe/lights/tail-light.png",  // 
                            "Indicators": "/images/cars/cayenne/Coupé/Cayenne GTS Coupe/lights/front_indicator.png",
                        },

                        "wheels": {
                            "frontWheel": "/images/cars/cayenne/Coupé/Cayenne GTS Coupe/wheels/front_wheel.png",
                            "rearWheel": "/images/cars/cayenne/Coupé/Cayenne GTS Coupe/wheels/rearWheel.png",
                        },

                        "interior": {
                            "interior": "/images/cars/cayenne/Coupé/Cayenne GTS Coupe/interior/interior.png",
                            "dashboard": "/images/cars/cayenne/Coupé/Cayenne GTS Coupe/interior/dashboard.png",
                            "frontSeats": "/images/cars/cayenne/Coupé/Cayenne GTS Coupe/interior/front_seat1.png",
                            "rearSeats": "/images/cars/cayenne/Coupé/Cayenne GTS Coupe/interior/back_seat.png",
                            "centerConsole": "/images/cars/cayenne/Coupé/Cayenne GTS Coupe/interior/console1.png"
                        },

                        "gallery": []
                    },
                    "performance": {
                        "acceleration": {
                            "value": 4.4,
                            "unit": "seconds",
                            "test": "0 - 100 km/h with Sport Chrono Package"
                        },
                        "power": {
                            "kw": 368,
                            "ps": 500
                        },
                        "topSpeed": {
                            "value": 275,
                            "unit": "km/h"
                        }
                    }
                }
            ]
        },
    ]
}]