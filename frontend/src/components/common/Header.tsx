
import { useState } from "react";
import { Menu, X, ChevronRight, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface CarItem {
  name: string;
  navigateTo?: string;
  modelId?: string;
  variantId?: string;
  carId?: string;
  children?: CarItem[];
}


const carModels: CarItem[] = [
  {
    name: "911",
    children: [
      {
        name: "Carrera",
        children: [
          {
            name: "911 Carrera",
            navigateTo: "/porsche/india/911/carrera/911-carrera",
          },
          {
            name: "911 Carrera 4 GTS",
            navigateTo: "/porsche/india/911/carrera/911-carrera-4-gts",
          },
        ],
      },
      {
        name: "GT",
        children: [
          {
            name: "911 GT3",
            navigateTo: "/porsche/india/911/gt/911-gt3",
          },
        ],
      },
      {
        name: "Turbo",
        children: [
          {
            name: "911 Turbo S",
            navigateTo: "/porsche/india/911/turbo/911-turbo-s",
          },
        ],
      },
    ],
  },

  {
    name: "Taycan",
    children: [
      {
        name: "Electric",
        children: [
          {
            name: "Taycan 4S",
            modelId: "taycan",
            variantId: "electric",
            carId: "taycan-4s",
          },
          {
            name: "Taycan 4S Black Edition",
            modelId: "taycan",
            variantId: "electric",
            carId: "taycan-4s-black-edition",
          },
          {
            name: "Taycan Turbo",
            navigateTo: "/porsche/india/taycan/electric/taycan-turbo",
          },
        ],
      },
    ],
  },

  {
    name: "Panamera",
    children: [
      {
        name: "Gasoline",
        children: [
          {
            name: "Panamera",
            navigateTo: "/porsche/india/panamera",
          },
        ],
      },
    ],
  },

  {
    name: "Macan",
    children: [
      {
        name: "Gasoline",
        children: [
          {
            name: "Macan",
            navigateTo: "/porsche/india/macan/gasoline/macan_gasoline",
          },
        ],
      },
      {
        name: "Electric",
        children: [
          {
            name: "Macan",
            navigateTo: "/porsche/india/macan/electric/macan-electric",
          },
          {
            name: "Macan 4S",
            navigateTo: "/porsche/india/macan/electric/macan-4s",
          },
          {
            name: "Macan Turbo",
            navigateTo: "/porsche/india/macan/electric/macan-turbo-electric",
          },
        ],
      },
    ],
  },

  {
    name: "Cayenne",
    children: [
      {
        name: "Electric",
        children: [
          {
            name: "Cayenne Electric",
            navigateTo:
              "/porsche/india/cayenne/electric/cayenne-electric",
          },
          {
            name: "Cayenne Turbo Electric",
            navigateTo:
              "/porsche/india/cayenne/electric/cayenne-turbo-electric",
          },
        ],
      },
      {
        name: "Gasoline",
        children: [
          {
            name: "Cayenne",
            navigateTo:
              "/porsche/india/cayenne/gasoline/cayenne-gasoline",
          },
          {
            name: "Cayenne Black Edition",
            navigateTo:
              "/porsche/india/cayenne/gasoline/cayenne-black-edition",
          },
          {
            name: "Cayenne GTS",
            navigateTo:
              "/porsche/india/cayenne/gasoline/cayenne-gts",
          },
        ],
      },
      {
        name: "Coupé",
        children: [
          {
            name: "Cayenne Coupé",
            navigateTo:
              "/porsche/india/cayenne/coupé/cayenne-coupe",
          },
          {
            name: "Cayenne Coupé Black Edition",
            navigateTo:
              "/porsche/india/cayenne/coupé/cayenne-coupe-black-edition",
          },
          {
            name: "Cayenne GTS Coupé",
            navigateTo:
              "/porsche/india/cayenne/coupé/cayenne-gts-coupe",
          },
        ],
      },
    ],
  },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedModel, setExpandedModel] = useState<string | null>(null);

  const navigate = useNavigate();

  const toggleModel = (modelName: string) => {
    setExpandedModel(expandedModel === modelName ? null : modelName);
  };

  return (
    <>
      <header className="relative z-50 w-full">
        <div className="relative flex h-20 items-center justify-between px-6 sm:px-10 lg:px-16">

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 backdrop-blur-md transition hover:bg-white/20"
            aria-label="Open menu"
          >
            <Menu className="h-4 w-4 text-white" />
          </button>


          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <img
              src="/images/flags/porscheLogo.png"
              alt="Porsche"
              className="h-10 w-auto object-contain sm:h-12"
            />
          </div>


          <button onClick={() => navigate("/")} type="button" className="text-sm font-medium text-black transition hover:text-black">
            <img
              src="/images/flags/IndianFlag.png"
              alt="India"
              className="h-6 w-6 shrink-0 rounded-full object-cover"
            />
          </button>

        </div>
      </header>


      <aside className={`fixed right-0 top-0 z-70 h-screen w-full bg-black text-white  transition-transform duration-500 ease-in-out sm:w-[80%] lg:w-1/2 ${menuOpen
        ? "translate-x-0"
        : "translate-x-full"
        }`}
      >

        <div className="flex h-12  items-center justify-between  px-6 sm:px-10">

          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="flex h-6 w-6 items-center justify-center rounded-full transition hover:bg-gray-800 p-1"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>

          <button
            type="button"
            onClick={() => navigate("/")}
            className="flex text-sm text-white bg-[#232020aa]  items-center justify-center rounded transition hover:bg-[#181717aa] px-2 py-1"
            aria-label="Close menu"
          >
            Select Region
          </button>
        </div>


        <div className="h-[calc(100vh-5rem)] overflow-y-auto px-6 py-4 sm:px-10">

          <div className="mb-10">
            <h2 className="text-sm font-medium  text-gray-400"> Explore Porsche Models </h2>
          </div>

          <div className="space-y-0">
            {carModels.map((model) => {
              const isOpen = expandedModel === model.name;

              return (
                <div key={model.name}>

                  <button type="button" onClick={() => toggleModel(model.name)} className="flex w-full items-center justify-between py-5 text-left">
                    <span className="text-sm text-gray-500">
                      {model.name}
                    </span>

                    {isOpen ? (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronRight className="h-5 w-5 text-gray-500" />
                    )}
                  </button>


                  <div className={`grid transition-all duration-500 ease-in-out ${isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                    }`}
                  >

                    <div className="overflow-hidden">
                      <div className="pb-6 ">
                        <span className="mb-4 inline-block rounded-full border border-gray-800  px-3 py-1 text-[12px] font-semibold  text-gray-600 ">
                          Variants
                        </span>

                        {model.children?.map((variant) => (
                          <div key={variant.name} className="mb-6 pl-4">
                            <div className="mb-1 flex items-center gap-2">
                              <span className="text-sm  text-gray-400"> {variant.name} </span>
                            </div>

                            <div className="space-y-2 pl-7">
                              {variant.children?.map((car) => (
                                <button key={car.name} onClick={() => {
                                  if (car.navigateTo) {
                                    navigate(car.navigateTo);
                                    setMenuOpen(false);
                                    return;
                                  }

                                  if (car.modelId && car.variantId && car.carId) {
                                    navigate( `/porsche/india/${car.modelId}/${car.variantId}/${car.carId}`);
                                    setMenuOpen(false);
                                  }
                                }} type="button" className="group flex w-full items-center justify-between py-1 text-left"
                                >
                                  <span className="text-sm text-gray-600 "> {car.name} </span>
                                  <ChevronRight className="h-4 w-4 text-gray-300 " />
                                </button>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </aside>
    </>
  );
};

export default Header;