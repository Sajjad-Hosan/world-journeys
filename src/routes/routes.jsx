import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddSpot from "../pages/AddSpot/AddSpot";
import ViewPage from "../pages/ViewPage/ViewPage";
import UpdatePage from "../pages/UpdatePage/UpdatePage";
import MyLists from "../pages/MyLists/MyLists";
import AllSpots from "../pages/AllSpots/AllSpots";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:4000/tourists"),
      },
      {
        path: "/allSpots",
        // loader: () => fetch("http://localhost:4000/tourists"),
        element: <AllSpots />,
      },
      {
        path: "/addSpot",
        element: <AddSpot />,
      },
      {
        path: "/myList",
        element: <MyLists />,
      },
      {
        path: `/tourist/:id`,
        loader: ({ params }) =>
          fetch(`http://localhost:4000/tourist/${params.id}`),
        element: <ViewPage />,
      },
      {
        path: `/update/:id`,
        loader: ({ params }) =>
          fetch(`http://localhost:4000/tourist/${params.id}`),
        element: <UpdatePage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
export default routes;
