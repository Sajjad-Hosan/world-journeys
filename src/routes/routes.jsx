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
import CountryCards from "../pages/CountryCards/CountryCards";
import UserSpotUpdate from "../pages/UserSpotUpdate/UserSpotUpdate";
import UserSpotView from "../pages/UserSpotView/UserSpotView";
import PrivateRoute from "../services/Private/PrivateRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch("https://world-journeys-server.vercel.app/tourists"),
      },
      {
        path: "/allSpots",
        loader: () =>
          fetch("https://world-journeys-server.vercel.app/user-spots"),
        element: (
          <PrivateRoute>
            <AllSpots />
          </PrivateRoute>
        ),
      },
      {
        path: "/:countryName/cards",
        loader: () =>
          fetch("https://world-journeys-server.vercel.app/tourists"),
        element: <CountryCards />,
      },
      {
        path: "/addSpot",
        element: (
          <PrivateRoute>
            <AddSpot />
          </PrivateRoute>
        ),
      },
      {
        path: "/myList",
        loader: () =>
          fetch("https://world-journeys-server.vercel.app/user-spots"),
        element: (
          <PrivateRoute>
            <MyLists />
          </PrivateRoute>
        ),
      },
      {
        path: `/tourist/:id`,
        loader: ({ params }) =>
          fetch(
            `https://world-journeys-server.vercel.app/tourist/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <ViewPage />
          </PrivateRoute>
        ),
      },
      {
        path: `/update/:id`,
        loader: ({ params }) =>
          fetch(
            `https://world-journeys-server.vercel.app/tourist/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <UpdatePage />
          </PrivateRoute>
        ),
      },
      {
        path: `/update-user-spot/:id`,
        loader: ({ params }) =>
          fetch(
            `https://world-journeys-server.vercel.app/user-spot/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <UserSpotUpdate />
          </PrivateRoute>
        ),
      },
      {
        path: `/user-spot/:id`,
        loader: ({ params }) =>
          fetch(
            `https://world-journeys-server.vercel.app/user-spot/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <UserSpotView />
          </PrivateRoute>
        ),
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
