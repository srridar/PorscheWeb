import Header from "@/components/common/Header";

interface Car {
  carId: string;
  modelId: string;
  variantId: string;
  name: string;

  hero: {
    title: string;
    description: string;
  };

  year: number;
  fuelType: string;
  driveType: string;
  transmission: string;

  price: {
    amount: number;
    currency: string;
    formatted: string;
    taxIncluded: boolean;
    tax: string;
  };

  images: {
    hero: string;

    exterior?: {
      front?: string;
      rear?: string;
      side?: string;
    };

    lights?: {
      headlights?: string;
      taillights?: string;
      frontIndicators?: string;
      rearIndicators?: string;
    };

    wheels?: {
      frontWheel?: string;
      rearWheel?: string;
    };

    interior?: {
      interior?: string;
      dashboard?: string;
      frontSeats?: string;
      rearSeats?: string;
      centerConsole?: string;
    };

    gallery?: string[];
  };
}

const EV_HeroSection = ({ car }: { car: Car }) => {
  if (!car) return null;

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black text-white">

      <Header />
  
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${car.images.hero})`,
          backgroundPosition: "right center",
        }}
      />
        
      
      
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/35 to-black/10" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/40 to-transparent" />


      <div className="absolute left-1/2 top-29 z-20 -translate-x-1/2">
        <h1 className="whitespace-nowrap text-center text-5xl font-bold italic tracking-tight text-black sm:text-6xl lg:text-7xl">
          {car.name}
        </h1>
      </div>



      <div className="absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
        <span className="text-sm text-white/60">
          Scroll down
        </span>
        <div className="h-10 w-px bg-gradient-to-b from-white/60 to-transparent" />
      </div>

    </section>
  );
};

export default EV_HeroSection;