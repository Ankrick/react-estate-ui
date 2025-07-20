import About from "./routes/about/About";
import Home from "./routes/home/Home"
import { createBrowserRouter,  RouterProvider } from 'react-router-dom';
import Layout from "./routes/layout/Layout";
import List from "./routes/list/List";
import SinglePage from "./routes/singlePage/SinglePage";
import Profile from "./routes/profile/Profile";




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
      },
      {
        path: "/list",
        element: <List/>
      },
      {
        path: "/:id",
        element: <SinglePage/>
      },
      {
        path: "/profile",
        element: <Profile/>
      }
    ]
  }
  ]);


  return (
    <RouterProvider router={router}/>
  )
}

export default App