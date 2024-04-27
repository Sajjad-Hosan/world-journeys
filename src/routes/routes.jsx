import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddSpot from "../pages/AddSpot/AddSpot";
import ViewPage from "../pages/ViewPage/ViewPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch('http://localhost:4000/tourists'),
      },
      {
        path: "/allSpots",
        element: <div></div>,
      },
      {
        path: "/addSpot",
        element: <AddSpot/>,
      },
      {
        path: "/myList",
        element: <div></div>,
      },
      {
        path: `/tourist/:id`,
        loader: ({params}) => fetch(`http://localhost:4000/tourist/${params.id}`),
        element: <ViewPage/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/register",
        element: <Register/>,
      },
    ],
  },
]);
export default routes;
