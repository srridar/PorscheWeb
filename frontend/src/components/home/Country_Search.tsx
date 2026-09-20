import  { useState } from "react";
import { Search, ChevronRight, ChevronDown } from "lucide-react";
import markets from "@/data/Region/regions";
import { useNavigate } from "react-router-dom";

const Country_Search = () => {
  const [search, setSearch] = useState("");
  const [openRegion, setOpenRegion] = useState<string | null>(null);


  const navigate = useNavigate();
  const handleRegionToggle = (regionId: string) => {
    setOpenRegion((current) => (current === regionId ? null : regionId));
  };

  const filteredRegions = markets.regions.map((region) => ({
      ...region,
      countries: region.countries.filter((country) =>
        country.name.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter((region) => region.countries.length > 0);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#040404] px-6 py-8">
     
      <img src="/images/background.png" alt="background-image" aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 h-full w-full object-cover opacity-[0.4]"/>

      <div className="pointer-events-none fixed inset-0 z-0 bg-black/50" />
      <main className="relative z-10 mx-auto w-full max-w-6xl">
  
        <div className="mb-12 flex flex-col items-center justify-center">
          <img src="/images/flags/porscheLogo.png" alt="Porsche logo" className="h-28 w-28 object-contain"/>
        </div>


        <div className="mb-12 flex items-center justify-center gap-3">
          <div className="relative w-full md:w-2/5">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Select your market"
              className="w-full rounded bg-white px-4 py-3 pr-10 text-black placeholder:text-gray-500 focus:outline-none"
            />
            <Search className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
          </div>
        </div>


        <section className="text-[#e0e0da]">
          <h2 className="mb-6 text-sm font-semibold uppercase tracking-[0.15em] text-gray-500">
            Available Regions and Countries
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredRegions.map((region) => {
             const isOpen = search.trim() !== "" || openRegion === region.id;

              return (
                <div key={region.id} className="rounded-lg  p-5 shadow-2xl transition-all duration-300">

                  <button
                    type="button"
                    onClick={() => handleRegionToggle(region.id)}
                    className="flex w-full items-center justify-between text-left"
                  >
                    <h3 className="text-sm font-medium text-white"> {region.name} </h3>
                    {isOpen ? (
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    ) : (
                      <ChevronRight className="h-5 w-5 text-gray-400" />
                    )}
                  </button>


                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${ isOpen ? "mt-4 max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                    <div className="flex flex-col gap-2">
                      {region.countries.map((country) => (
                        <div key={country.name} onClick={()=>navigate(`/porsche/${country.name}`)} className="flex cursor-pointer items-center gap-3 rounded-md p-3 transition-colors duration-200 hover:bg-white/5">
                          <img src={country.logoImg} alt={country.name} className="h-5 w-5 shrink-0 rounded-full bg-white object-cover"/>

                          <div className="ml-1">
                            <p className="truncate text-sm font-semibold text-white"> {country.name} </p>
                            <p className="mt-1 text-xs text-gray-500">{country.languages.join(" / ")}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

  
          {filteredRegions.length === 0 && (
            <p className="mt-10 text-center text-gray-400">
              No country or region found.
            </p>
          )}
        </section>
      </main>
    </div>
  );
};

export default Country_Search;