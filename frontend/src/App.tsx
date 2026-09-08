
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/home/Home';
import Country_Search from './components/home/Country_Search';
import EVCarHomePage from './components/CarDetails/EV_Car/EVCarHomePage.js'
import CarSelection from './components/CarSelection/CarSelection.js';
import PanameraHomePage from './components/car/panamera/Panamera_home.js';
import TaycanTurboHomePage from '@/components/car/taycan/TaycanTurboHomePage.js'
import MacanGasHomePage from './components/car/macan/gasoline/MacanGasHomePage.js';
import MacanHomePage from './components/car/macan/electric/MacanHomePage.js';
import Macan4sHomePage from './components/car/macan/electric/Macan4sHomePage.js';
import MacanTurboHomePage from './components/car/macan/electric/MacanTurboHomePage.js';
import Carrera_911_TechnicalData from './components/car/911/carrera/911_CarreraTechnicalData.js';
import Carrera_911_HomePage from './components/car/911/carrera/911_CarreraHomePage.js';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Country_Search />

  },
  {
    path: "/india",
    element: <Home />
  },
  {
    path: "/porsche/:modelId/:variantId/:carId",
    element: <EVCarHomePage />
  },
  {
    path: "/car-selection",
    element: <CarSelection />
  },
  {
    path: "/porsche/panamera",
    element: <PanameraHomePage />
  },
  {
    path: "/porsche/taycan/electric/taycan-turbo",
    element: <TaycanTurboHomePage />
  },
  {
    path: "/porsche/taycan/electric/taycan-turbo",
    element: <TaycanTurboHomePage />
  },
  {
    path: "/porsche/macan/gasoline/macan_gasoline",
    element: <MacanGasHomePage />
  },
  {
    path: "/porsche/macan/electric/macan-electric",
    element: <MacanHomePage />
  },
   {
    path: "/porsche/macan/electric/macan-4s",
    element: <Macan4sHomePage />
  },
    {
    path: "/porsche/macan/electric/macan-turbo-electric",
    element: <MacanTurboHomePage />
  },

  {
     path: "/porsche/911/carrera/911-carrera",
    element: <Carrera_911_HomePage />
  }





  // {
  //   path: "/coutries",
  //   children: [
  //     { path: "", element: }
  //   ]

  // }
])


function App() {
  return (
    <RouterProvider router={appRouter} />
  );
}

export default App;