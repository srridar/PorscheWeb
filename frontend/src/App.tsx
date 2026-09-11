
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NotFound from './components/common/NotFound.js';
import Country_Search from './components/home/Country_Search';
import EVCarHomePage from './components/CarDetails/EV_Car/EVCarHomePage.js'
import CarSelection from './components/CarSelection/CarSelection.js';
import PanameraHomePage from './components/car/panamera/Panamera_home.js';
import TaycanTurboHomePage from '@/components/car/taycan/TaycanTurboHomePage.js'
import MacanGasHomePage from './components/car/macan/gasoline/MacanGasHomePage.js';
import MacanHomePage from './components/car/macan/electric/MacanHomePage.js';
import Macan4sHomePage from './components/car/macan/electric/Macan4sHomePage.js';
import MacanTurboHomePage from './components/car/macan/electric/MacanTurboHomePage.js';
import Carrera_911_HomePage from './components/car/911/carrera/911_CarreraHomePage.js';
import NotCreatedHomePage from './components/common/NotCreatedHome.js';
import CayenneElectricHomePage from './components/car/cayenne/electric/cayenneElectricHomePage.js';
import CayenneTurboElectricHomePage from './components/car/cayenne/electric/cayenneTurboElectricHomePage.js';
import CayenneGasolineHomePage from './components/car/cayenne/gasoline/CayenneGasolineHome.js';
import CayenneGasolineBlackHomePage from './components/car/cayenne/gasoline/CayenneGasolineBlackHome.js';
import CayenneGTSHomePage from './components/car/cayenne/gasoline/CayenneGTSHome.js';
import NotCreatedCountryPage from '@/components/common/NotCreatedCountry.js'

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Country_Search />
  },
  {
    path: "/porsche/india/cayenne/electric/cayenne-electric",
    element: <CayenneElectricHomePage />
  },


  {
    path: "/porsche/india",
    element: <CarSelection />
  },
  {
    path: "/porsche/india/panamera",
    element: <PanameraHomePage />
  },
  {
    path: "/porsche/india/taycan/electric/taycan-turbo",
    element: <TaycanTurboHomePage />
  },
  {
    path: "/porsche/india/taycan/electric/taycan-turbo",
    element: <TaycanTurboHomePage />
  },
  {
    path: "/porsche/india/macan/gasoline/macan_gasoline",
    element: <MacanGasHomePage />
  },
  {
    path: "/porsche/india/macan/electric/macan-electric",
    element: <MacanHomePage />
  },
  {
    path: "/porsche/india/macan/electric/macan-4s",
    element: <Macan4sHomePage />
  },
  {
    path: "/porsche/india/macan/electric/macan-turbo-electric",
    element: <MacanTurboHomePage />
  },
  {
    path: "/porsche/india/911/carrera/911-carrera",
    element: <Carrera_911_HomePage />
  },
  {
    path: "/porsche/india/911/carrera/911-carrera-4-gts",
    element: <NotCreatedHomePage />
  },
  {
    path: "/porsche/india/911/gt/911-gt3",
    element: <NotCreatedHomePage />
  },
  {
    path: "/porsche/india/911/turbo/911-turbo-s",
    element: <NotCreatedHomePage />
  },
  {
    path:"/porsche/:country-name",
    element: <NotCreatedCountryPage />

  },


  {
    path: "/porsche/india/cayenne/electric/cayenne-electric",
    element: <CayenneElectricHomePage />
  },
  {
    path: "/porsche/india/cayenne/electric/cayenne-turbo-electric",
    element: <CayenneTurboElectricHomePage />
  },
  {
    path: "/porsche/india/cayenne/gasoline/cayenne-gasoline",
    element: <CayenneGasolineHomePage />
  },
  {
    path: "/porsche/india/cayenne/gasoline/cayenne-black-edition",
    element: <CayenneGasolineBlackHomePage />
  },
  {
    path: "/porsche/india/cayenne/gasoline/cayenne-gts",
    element: <CayenneGTSHomePage />
  },
  {
    path: "/porsche/india/cayenne/coupé/cayenne-coupe",
    element: <NotCreatedHomePage />
  },
  {
    path: "/porsche/india/cayenne/coupé/cayenne-coupe-black-edition",
    element: <NotCreatedHomePage />
  },
  {
    path: "/porsche/india/cayenne/coupé/cayenne-gts-coupe",
    element: <NotCreatedHomePage />
  },
  {
    path: "/porsche/india/:modelId/:variantId/:carId",
    element: <EVCarHomePage />
  },
  {
    path: "*",
    element: <NotFound />
  }

])


function App() {
  return (
    <RouterProvider router={appRouter} />
  );
}

export default App;