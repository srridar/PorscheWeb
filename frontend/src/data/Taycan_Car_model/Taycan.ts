export const Taycan = [
    {
        "modelId": "taycan",
        "name": "Taycan",
        "variants": [
            {
                "variantId": "electric",
                "name": "Taycan",
                "cars": [
                    {
                        "carId": "taycan-4s",
                        "modelId": "taycan",
                        "variantId": "electric",
                        "name": "Taycan 4S",
                        "hero": {
                            "title": "Electric. Electrifying.",
                            "description": "Pure Porsche performance meets electric innovation in the Taycan 4S, delivering instant power, dynamic handling, and an unmistakable sports-car character."
                        },
                        "year": 2027,
                        "fuelType": "Electric",
                        "driveType": "All-Wheel Drive",
                        "transmission": "Automatic",
                        "price": {
                            "amount": 20070000,
                            "currency": "INR",
                            "formatted": "₹2,00,70,000.00",
                            "taxIncluded": true,
                            "tax": "VAT",
                            "footnote": "European specifications shown below. Market specific values to be confirmed upon homologation."
                        },
                        "featuredVideo": "/videos/taycan4s.mp4",
                        "images": {
                            "hero": "/images/cars/taycan/taycan4s/porsche-taycan-4s.avif",

                            "exterior": {
                                "front": "/images/cars/taycan/taycan4s/Front.png",
                                "rear": "/images/cars/taycan/taycan4s/4s_back.png",
                                "side": "/images/cars/taycan/taycan4s/SideView@.png",
                                "lights": {
                                    "headlights": "/images/cars/taycan/taycan4s/Headlight.webp",
                                    "taillights": "/images/cars/taycan/taycan4s/BackLight.png",
                                    "Indicators": "/images/cars/taycan/taycan4s/FrontIndicator.png",
                                },

                                "wheels": {
                                    "frontWheel": "/images/cars/taycan/taycan4s/FrontWheel.png",
                                    "rearWheel": "/images/cars/taycan/taycan4s/RearWheel.png",
                                },
                            },

                            "bootSpace": {
                                "front": "/images/front-space.webp",
                                "rear": "/images/back-space.webp",
                            },

                            "interior": {
                                "interior": "/images/cars/taycan/taycan4s/Interior.png",
                                "dashboard": "/images/cars/taycan/taycan4s/DashBoard.png",
                                "frontSeats": "/images/cars/taycan/taycan4s/FrontSeat_1.png",
                                "rearSeats": "/images/cars/taycan/taycan4s/RearSeat.png",
                                "centerConsole": "/images/cars/taycan/taycan4s/CenterConsole.png",
                            },

                            "gallery": [
                                "/images/cars/taycan/taycan4s/porsche-taycan-4s.avif"
                            ]
                        },
                        "technical_data": {
                            "height": "1379mm",
                            "length": "4963mm",
                            "wheelbase": "2900mm",
                            "width": "1966mm",
                            "powerUnit": {
                                "maxTorqueWithLaunchControl": {
                                    "performanceBatteryPlus": {
                                        "value": 710,
                                        "unit": "Nm"
                                    },
                                    "j9e": {
                                        "value": 695,
                                        "unit": "Nm"
                                    }
                                },
                                "powerUpTo": {
                                    "performanceBatteryPlus": {
                                        "kw": 380,
                                        "ps": 517
                                    },
                                    "j9e": {
                                        "kw": 340,
                                        "ps": 462
                                    }
                                },
                                "overboostPowerWithLaunchControl": {
                                    "performanceBatteryPlus": {
                                        "kw": 440,
                                        "ps": 598
                                    },
                                    "j9e": {
                                        "kw": 400,
                                        "ps": 544
                                    }
                                }
                            },

                            "performance": {
                                "topSpeed": {
                                    "value": 250,
                                    "unit": "km/h"
                                },
                                "acceleration": {
                                    "zeroTo100": {
                                        "withLaunchControl": {
                                            "value": 3.7,
                                            "unit": "s",
                                            "test": "0 - 100 km/h with Launch Control"
                                        }
                                    },
                                    "zeroTo160": {
                                        "performanceBatteryPlus": {
                                            "value": 7.8,
                                            "unit": "s",
                                            "test": "0 - 160 km/h with Launch Control (Performance Battery Plus)"
                                        },
                                        "j9e": {
                                            "value": 8.1,
                                            "unit": "s",
                                            "test": "0 - 160 km/h with Launch Control (J9E)"
                                        }
                                    },
                                    "zeroTo200": {
                                        "performanceBatteryPlus": {
                                            "value": 12.0,
                                            "unit": "s",
                                            "test": "0 - 200 km/h with Launch Control (Performance Battery Plus)"
                                        },
                                        "j9e": {
                                            "value": 12.5,
                                            "unit": "s",
                                            "test": "0 - 200 km/h with Launch Control (J9E)"
                                        }
                                    },
                                    "inGear80To120": {
                                        "performanceBatteryPlus": {
                                            "value": 2.1,
                                            "unit": "s",
                                            "test": "80-120km/h (50-75 mph) with Launch Control (Performance Battery Plus)"
                                        },
                                        "j9e": {
                                            "value": 2.2,
                                            "unit": "s",
                                            "test": "80-120km/h (50-75 mph) with Launch Control (J9E)"
                                        }
                                    }
                                }
                            },

                            "soundLevel": {
                                "standard": "UN-R 51",
                                "typeApproved": true,
                                "passingVehicle": {
                                    "value": 68,
                                    "unit": "dB(A)"
                                }
                            },

                            "terrainFeatures": {
                                "groundClearance": {
                                    "airSuspension": {
                                        "normalRideHeight": {
                                            "value": 127,
                                            "unit": "mm"
                                        },
                                        "offRoadLevel": {
                                            "value": 147,
                                            "unit": "mm"
                                        },
                                        "lowLevel": {
                                            "value": 117,
                                            "unit": "mm"
                                        }
                                    }
                                },
                                "approachAngle": {
                                    "airSuspension": {
                                        "standardLevel": {
                                            "value": 11.1,
                                            "unit": "degrees"
                                        }
                                    }
                                },
                                "breakoverAngle": {
                                    "airSuspension": {
                                        "standardLevel": {
                                            "value": 10.6,
                                            "unit": "degrees"
                                        },
                                        "lowLevel": {
                                            "value": 9.8,
                                            "unit": "degrees"
                                        },
                                        "offRoadLevel": {
                                            "value": 12.2,
                                            "unit": "degrees"
                                        }
                                    }
                                },
                                "departureAngle": {
                                    "airSuspension": {
                                        "standardLevel": {
                                            "value": 14.2,
                                            "unit": "degrees"
                                        }
                                    }
                                },
                                "overhang": {
                                    "front": {
                                        "value": 997,
                                        "unit": "mm"
                                    },
                                    "rear": {
                                        "value": 1066,
                                        "unit": "mm"
                                    }
                                }
                            },

                            "capacities": {
                                "luggageCompartment": {
                                    "front": {
                                        "value": 81,
                                        "unit": "liters"
                                    },
                                    "rear": {
                                        "value": 407,
                                        "unit": "liters",
                                        "variant": "V210-2"
                                    }
                                }
                            },

                            "charging": {
                                "battery": {
                                    "performanceBatteryPlus": {
                                        "grossEnergy": {
                                            "value": 105.0,
                                            "unit": "kWh"
                                        }
                                    },
                                    "j9e": {
                                        "grossEnergy": {
                                            "value": 89.0,
                                            "unit": "kWh"
                                        }
                                    }
                                },

                                "dc": {
                                    "maximumPower": {
                                        "performanceBatteryPlus": {
                                            "value": 320,
                                            "unit": "kW"
                                        },
                                        "j9e": {
                                            "value": 270,
                                            "unit": "kW"
                                        }
                                    },

                                    "chargeTime": {
                                        "infrastructure400V": {
                                            "from": 10,
                                            "to": 80,
                                            "value": 33,
                                            "unit": "minutes"
                                        },
                                        "maximumChargingPower": {
                                            "from": 10,
                                            "to": 80,
                                            "value": 18,
                                            "unit": "minutes"
                                        }
                                    },

                                    "rechargedRangeIn10Min": {
                                        "performanceBatteryPlus": {
                                            "min": 263,
                                            "max": 300,
                                            "unit": "km",
                                            "standard": "WLTP"
                                        },
                                        "j9e": {
                                            "min": 226,
                                            "max": 258,
                                            "unit": "km",
                                            "standard": "WLTP"
                                        }
                                    }
                                },

                                "ac": {
                                    "9_6kW": {
                                        "performanceBatteryPlus": {
                                            "power": {
                                                "value": 9.6,
                                                "unit": "kW"
                                            },
                                            "chargeTime": {
                                                "from": 0,
                                                "to": 100,
                                                "value": 13.0,
                                                "unit": "hours"
                                            }
                                        },
                                        "j9e": {
                                            "power": {
                                                "value": 9.6,
                                                "unit": "kW"
                                            },
                                            "chargeTime": {
                                                "from": 0,
                                                "to": 100,
                                                "value": 11.5,
                                                "unit": "hours"
                                            }
                                        }
                                    },

                                    "11kW": {
                                        "performanceBatteryPlus": {
                                            "power": {
                                                "value": 11,
                                                "unit": "kW"
                                            },
                                            "chargeTime": {
                                                "from": 0,
                                                "to": 100,
                                                "value": 11.0,
                                                "unit": "hours"
                                            }
                                        },
                                        "j9e": {
                                            "power": {
                                                "value": 11,
                                                "unit": "kW"
                                            },
                                            "chargeTime": {
                                                "from": 0,
                                                "to": 100,
                                                "value": 9.0,
                                                "unit": "hours"
                                            }
                                        }
                                    },

                                    "22kW": {
                                        "performanceBatteryPlus": {
                                            "power": {
                                                "value": 22,
                                                "unit": "kW"
                                            },
                                            "chargeTime": {
                                                "from": 0,
                                                "to": 100,
                                                "value": 6.0,
                                                "unit": "hours"
                                            }
                                        },
                                        "j9e": {
                                            "power": {
                                                "value": 22,
                                                "unit": "kW"
                                            },
                                            "chargeTime": {
                                                "from": 0,
                                                "to": 100,
                                                "value": 5.0,
                                                "unit": "hours"
                                            }
                                        }
                                    }
                                }
                            },

                        },

                    },
                    {
                        "carId": "taycan-4s-black-edition",
                        "modelId": "taycan",
                        "variantId": "electric",
                        "name": "Taycan 4S Black Edition",
                        "hero": {
                            "title": "Electric. Distinctive. Unmistakable.",
                            "description": "The Taycan 4S Black Edition brings together exhilarating electric performance, distinctive dark accents, and the unmistakable character of a Porsche."
                        },
                        "year": 2027,
                        "fuelType": "Electric",
                        "driveType": "All-Wheel Drive",
                        "transmission": "Automatic",
                        "price": {
                            "amount": 20945000,
                            "currency": "INR",
                            "formatted": "₹2,09,45,000.00",
                            "taxIncluded": true,
                            "tax": "VAT"
                        },
                        "featuredVideo": "/videos/taycan4sBlackEdition.mp4",
                        "images": {
                            "hero": "/images/cars/taycan/taycan4sblack/porsche-taycan-4s.avif",
                            "exterior": {
                                "front": "/images/cars/taycan/taycan4sblack/front.png",
                                "rear": "/images/cars/taycan/taycan4sblack/porsche-taycan-1.webp",
                                "side": "/images/cars/taycan/taycan4sblack/4sBlack_4.png",
                                "lights": {
                                    "headlights": "/images/cars/taycan/taycan4sblack/Headlights.png",
                                    "taillights": "/images/cars/taycan/taycan4sblack/Taillights.png",
                                    "Indicators": "/images/cars/taycan/taycan4sblack/Indicator.png",
                                },

                                "wheels": {
                                    "frontWheel": "/images/cars/taycan/taycan4sblack/FrontWheel.png",
                                    "rearWheel": "/images/cars/taycan/taycan4sblack/RearWheel.png",
                                },
                            },
                            "bootSpace": {
                                "front": "/images/front-space.webp",
                                "rear": "/images/back-space.webp",
                            },

                            "interior": {
                                "interior": "/images/cars/taycan/taycan4sblack/4sBlack_2.png",
                                "dashboard": "/images/cars/taycan/taycan4sblack/4sBlack_7.png",
                                "frontSeats": "/images/cars/taycan/taycan4sblack/4sBlack_11.png",
                                "rearSeats": "/images/cars/taycan/taycan4sblack/4sBlack_1.png",
                                "centerConsole": "/images/cars/taycan/taycan4sblack/center_console.png",
                            },

                            "gallery": []
                        },

                        "technical_data": {
                            "height": "1379mm",
                            "length": "4963mm",
                            "wheelbase": "2900mm",
                            "width": "1966mm",

                            "powerUnit": {
                                "maxTorqueWithLaunchControl": {
                                    "performanceBatteryPlus": {
                                        "value": 710,
                                        "unit": "Nm"
                                    }
                                },
                                "powerUpTo": {
                                    "performanceBatteryPlus": {
                                        "kw": 380,
                                        "ps": 517
                                    },
                                },
                                "overboostPowerWithLaunchControl": {
                                    "performanceBatteryPlus": {
                                        "kw": 440,
                                        "ps": 598
                                    },
                                }
                            },
                            "performance": {
                                "topSpeed": {
                                    "value": 250,
                                    "unit": "km/h"
                                },

                                "acceleration": {

                                    "zeroTo100": {
                                        "withLaunchControl": {
                                            "value": 3.7,
                                            "unit": "seconds",
                                            "test": "0 - 100 km/h with Launch Control"
                                        }
                                    },
                                    "zeroTo160": {
                                        "performanceBatteryPlus": {
                                            "value": 7.8,
                                            "unit": "seconds",
                                            "test": "0 - 160 km/h with Launch Control"
                                        },

                                    },
                                    "zeroTo200": {
                                        "performanceBatteryPlus": {
                                            "value": 12.0,
                                            "unit": "seconds",
                                            "test": "0 - 200 km/h with Launch Control"
                                        },

                                    },
                                    "inGear80To120": {
                                        "performanceBatteryPlus": {
                                            "value": 2.1,
                                            "unit": "seconds",
                                            "test": "80 - 120 km/h (50 - 75 mph) with Launch Control"
                                        },

                                    }
                                }
                            },



                            "soundLevel": {
                                "standard": "UN-R 51",
                                "typeApproved": true,
                                "passingVehicle": {
                                    "value": 68,
                                    "unit": "dB(A)"
                                }
                            },

                            "terrainFeatures": {
                                "maxGroundClearance": {
                                    "standardLevel": {
                                        "value": 127,
                                        "unit": "mm"
                                    },
                                    "offRoadLevel": {
                                        "value": 147,
                                        "unit": "mm"
                                    },
                                    "lowLevel": {
                                        "value": 117,
                                        "unit": "mm"
                                    }
                                },

                                "approachAngle": {
                                    "standardLevel": {
                                        "value": 11.1,
                                        "unit": "°"
                                    }
                                },

                                "breakoverAngle": {
                                    "standardLevel": {
                                        "value": 10.6,
                                        "unit": "°"
                                    },
                                    "lowLevel": {
                                        "value": 9.8,
                                        "unit": "°"
                                    },
                                    "offRoadLevel": {
                                        "value": 12.2,
                                        "unit": "°"
                                    }
                                },

                                "departureAngle": {
                                    "standardLevel": {
                                        "value": 14.2,
                                        "unit": "°"
                                    }
                                },

                                "overhangFront": {
                                    "value": 997,
                                    "unit": "mm"
                                },

                                "overhangRear": {
                                    "value": 1066,
                                    "unit": "mm"
                                }
                            },

                            "capacities": {
                                "luggageCompartment": {
                                    "front": {
                                        "value": 81,
                                        "unit": "liters"
                                    },
                                    "rear": {
                                        "value": 407,
                                        "unit": "liters",
                                        "variant": "V210-2"
                                    }
                                }
                            },

                            "charging": {
                                "battery": {
                                    "performanceBatteryPlus": {
                                        "grossEnergy": {
                                            "value": 105.0,
                                            "unit": "kWh"
                                        }
                                    }
                                },

                                "dc": {
                                    "maximumPower": {
                                        "performanceBatteryPlus": {
                                            "value": 320,
                                            "unit": "kW"
                                        }
                                    },

                                    "chargeTime": {
                                        "infrastructure400V": {
                                            "from": 10,
                                            "to": 80,
                                            "value": 33,
                                            "unit": "minutes"
                                        },
                                        "maximumChargingPower": {
                                            "from": 10,
                                            "to": 80,
                                            "value": 18,
                                            "unit": "minutes"
                                        }
                                    },

                                    "rechargedRangeIn10Min": {
                                        "performanceBatteryPlus": {
                                            "min": 263,
                                            "max": 300,
                                            "unit": "km",
                                            "standard": "WLTP"
                                        }
                                    }
                                },

                                "ac": {
                                    "9_6kW": {
                                        "performanceBatteryPlus": {
                                            "power": {
                                                "value": 9.6,
                                                "unit": "kW"
                                            },
                                            "chargeTime": {
                                                "from": 0,
                                                "to": 100,
                                                "value": 13.0,
                                                "unit": "hours"
                                            }
                                        }
                                    },

                                    "11kW": {
                                        "performanceBatteryPlus": {
                                            "power": {
                                                "value": 11,
                                                "unit": "kW"
                                            },
                                            "chargeTime": {
                                                "from": 0,
                                                "to": 100,
                                                "value": 11.0,
                                                "unit": "hours"
                                            }
                                        }
                                    },

                                    "22kW": {
                                        "performanceBatteryPlus": {
                                            "power": {
                                                "value": 22,
                                                "unit": "kW"
                                            },
                                            "chargeTime": {
                                                "from": 0,
                                                "to": 100,
                                                "value": 6.0,
                                                "unit": "hours"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    {
                        "carId": "taycan-turbo",
                        "modelId": "taycan",
                        "variantId": "electric",
                        "name": "Taycan Turbo",
                        "hero": {
                            "title": "Electric power, unleashed.",
                            "description": "The Taycan Turbo delivers breathtaking electric performance with instant acceleration, precise handling, and the unmistakable character of a Porsche."
                        },
                        "year": 2027,
                        "fuelType": "Electric",
                        "driveType": "All-Wheel Drive",
                        "transmission": "Automatic",
                        "price": {
                            "amount": 27427000,
                            "currency": "INR",
                            "formatted": "₹2,74,27,000.00",
                            "taxIncluded": true,
                            "tax": "VAT",
                            "footnote": "European specifications shown below. Market specific values to be confirmed upon homologation."
                        },
                        "featuredVideo": "/videos/taycanTurbo.mp4",
                        "images": {
                            "hero": "/images/cars/taycan/taycanTurbo/taycan_turbo_1.webp",
                            "exterior": {
                                "front": "/images/cars/taycan/taycanTurbo/porsche-taycan-turbo3.png",
                                "rear": "/images/cars/taycan/taycanTurbo/porsche-taycan-turbo18.png",
                                "side": "/images/cars/taycan/taycanTurbo/porsche-taycan-turbo9.png",
                            },

                            "bootSpace": {
                                "front": "/images/front-space.webp",
                                "rear": "/images/back-space.webp",
                            },

                            "lights": {
                                "headlights": "/images/cars/taycan/taycanTurbo/porsche-taycan-turbo1.png",
                                "taillights": "/images/cars/taycan/taycanTurbo/porsche-taycan-turbo19.png",
                                "Indicators": "/images/cars/taycan/taycanTurbo/porsche-taycan-turbo9.png",
                            },

                            "wheels": {
                                "frontWheel": "/images/cars/taycan/taycanTurbo/porsche-taycan-turbo21.png",
                                "rearWheel": "/images/cars/taycan/taycanTurbo/porsche_taycan_turbo20.png",
                            },

                            "interior": {
                                "interior": "/images/cars/taycan/taycanTurbo/porsche-taycan-turbo19.png",
                                "dashboard": "/images/cars/taycan/taycanTurbo/porsche-taycan-turbo18.png",
                                "frontSeats": "/images/cars/taycan/taycanTurbo/porsche-taycan-turbo19.png",
                                "rearSeats": "/images/cars/taycan/taycanTurbo/porsche-taycan-turbo15.png",
                                "centerConsole": "/images/cars/taycan/taycanTurbo/porsche-taycan-turbo18.png",
                            },

                            "gallery": [
                                "/images/cars/taycan/taycanTurbo/porsche-tayacan-turbo9.png",
                                "/images/cars/taycan/taycanTurbo/porsche-tayacan-turbo9.png",
                                "/images/cars/taycan/taycanTurbo/porsche-tayacan-turbo9.png"
                            ]
                        },
                        "technical_data": {
                            "height": "1381mm",
                            "length": "4962mm",
                            "wheelbase": "2900mm",
                            "width": "1966mm",
                            "powerUnit": {
                                "maxTorqueWithLaunchControl": {
                                    "value": 890,
                                    "unit": "Nm"
                                },
                                "powerUnit": {
                                    "kw": 520,
                                    "ps": 707
                                },
                                "overboostPowerWithLaunchControl": {
                                    "kw": 650,
                                    "ps": 884
                                }
                            },
                            "performance": {
                                "topSpeed": {
                                    "value": 260,
                                    "unit": "km/h"
                                },
                                "acceleration": {
                                    "0To100": {
                                        "value": 2.7,
                                        "unit": "s",
                                        "test": "0 - 100 km/h with Launch Control"
                                    },
                                    "0To160": {
                                        "value": 5.5,
                                        "unit": "s",
                                        "test": "0 - 160 km/h with Launch Control"
                                    },
                                    "0To200": {
                                        "value": 8.2,
                                        "unit": "s",
                                        "test": "0 - 200 km/h with Launch Control"
                                    },
                                    "80To120": {
                                        "value": 1.5,
                                        "unit": "s",
                                        "test": "80 - 120 km/h (50 - 75 mph) with Launch Control"
                                    }
                                }
                            },
                            "soundLevel": {
                                "standard": "UN-R 51",
                                "typeApproved": true,
                                "passingVehicle": {
                                    "value": 70,
                                    "unit": "dB(A)"
                                }
                            },
                            "capacities": {
                                "luggageCompartment": {
                                    "front": {
                                        "value": 81,
                                        "unit": "liters"
                                    },
                                    "rear": {
                                        "value": 366,
                                        "unit": "liters",
                                        "variant": "V210-2"
                                    }
                                }
                            },
                            "charging": {
                                "battery": {
                                    "grossEnergyContent": {
                                        "value": 105.0,
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
                                        "22kW": {
                                            "value": 6.0,
                                            "unit": "h",
                                            "chargeRange": "0-100%"
                                        }
                                    }
                                },
                                "dcCharging": {
                                    "chargingTime": {
                                        "400VInfrastructure": {
                                            "value": 33,
                                            "unit": "min",
                                            "chargeRange": "10-80%"
                                        },
                                        "maximumChargingPower": {
                                            "value": 18,
                                            "unit": "min",
                                            "chargeRange": "10-80%"
                                        }
                                    },
                                    "maximumChargingPower": {
                                        "value": 320,
                                        "unit": "kW"
                                    },
                                    "rechargedRangeIn10Minutes": {
                                        "maximumChargingPower": {
                                            "value": "266-296",
                                            "unit": "km",
                                            "standard": "WLTP"
                                        }
                                    }
                                }
                            },
                            "terrainFeatures": {
                                "groundClearance": {
                                    "airSuspensionNormal": {
                                        "value": 128,
                                        "unit": "mm"
                                    },
                                    "airSuspensionOffRoad": {
                                        "value": 148,
                                        "unit": "mm"
                                    },
                                    "airSuspensionLow": {
                                        "value": 118,
                                        "unit": "mm"
                                    }
                                },
                                "approachAngle": {
                                    "airSuspensionStandard": {
                                        "value": 11.2,
                                        "unit": "°"
                                    }
                                },
                                "breakoverAngle": {
                                    "airSuspensionStandard": {
                                        "value": 10.7,
                                        "unit": "°"
                                    },
                                    "airSuspensionLow": {
                                        "value": 9.9,
                                        "unit": "°"
                                    },
                                    "airSuspensionOffRoad": {
                                        "value": 12.3,
                                        "unit": "°"
                                    }
                                },
                                "departureAngle": {
                                    "airSuspensionStandard": {
                                        "value": 14.4,
                                        "unit": "°"
                                    }
                                },
                                "overhang": {
                                    "front": {
                                        "value": 996,
                                        "unit": "mm"
                                    },
                                    "rear": {
                                        "value": 1066,
                                        "unit": "mm"
                                    }
                                }
                            },

                        },
                    }
                ]
            }
        ]
    },
]