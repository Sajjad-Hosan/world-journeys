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
import CountryCard from "../components/CountryCard/CountryCard";
import CountryCards from "../pages/CountryCards/CountryCards";
import UserSpotUpdate from "../pages/UserSpotUpdate/UserSpotUpdate";

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
        path: "/:countryName/cards",
        loader: () => fetch("http://localhost:4000/tourists"),
        element: <CountryCards />,
      },
      {
        path: "/addSpot",
        element: <AddSpot />,
      },
      {
        path: "/myList",
        loader: () => fetch("http://localhost:4000/user-spots"),
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
        path: `/update-user-spot/:id`,
        loader: ({ params }) => fetch(`http://localhost:4000/user-spot/${params.id}`),
        element: <UserSpotUpdate />,
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
