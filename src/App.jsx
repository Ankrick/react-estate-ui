import About from "./routes/about/About";
import Home from "./routes/home/Home"
import { createBrowserRouter,  RouterProvider } from 'react-router-dom';
import Layout from "./routes/layout/Layout";




function App() {

  const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/about",
        element: <About/>
      }
    ]
  }
  ]);


  return (
    <RouterProvider router={router}/>
  )
}

export default App