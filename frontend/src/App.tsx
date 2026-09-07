
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/home/Home';
import Country_Search from './components/home/Country_Search';
import EVCarHomePage from './components/CarDetails/EV_Car/EVCarHomePage.js'
import CarSelection from './components/CarSelection/CarSelection.js';
import PanameraHomePage from './components/car/panamera/Panamera_home.js';
import TaycanTurboHomePage from '@/components/car/taycan/TaycanTurboHomePage.js'

const appRouter = createBrowserRouter([
  {
    path: "/",
    element:<Country_Search/>

  }, 
  {
     path:"/india",
     element: <Home/>
  },
  {
      path: "/porsche/:modelId/:variantId/:carId",
      element: <EVCarHomePage />
  },
  {
     path:"/car-selection",
     element: <CarSelection />
  },
    {
      path: "/porsche/panamera",
      element: <PanameraHomePage />
  },
  {
     path: "/porsche/taycan/electric/taycan-turbo",
     element: <TaycanTurboHomePage/>
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