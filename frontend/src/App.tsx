
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/home/Home';
import Country_Search from './components/home/Country_Search';
import EVCarHomePage from './components/CarDetails/EV_Car/EVCarHomePage.js'


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