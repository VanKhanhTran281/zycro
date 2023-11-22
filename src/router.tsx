import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayOut";
import Campaign from "./pages/campaign";
import Contacts from "./pages/contacts";
import Dashboard from "./pages/dashboard";
import Forms from "./pages/forms";
import LandingPage from "./pages/LandingPage";
import Segment from "./pages/contacts/segment";
import CreateLists from "./pages/contacts/lists/createList";
import ExampleList from "./pages/contacts/lists/CreateListItem/Use_example/ExampleList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
      {
        path: "/forms",
        element: <Forms />,
      },
      {
        path: "/landingpage",
        element: <LandingPage />,
      },
      {
        path: "/campaign",
        element: <Campaign />,
      },
      {
        path: "/segment",
        element: <Segment />,
      },
      {
        path: "/createlists",
        element: <CreateLists />,
      },
      {
        path: "/examplelist",
        element: <ExampleList />,
      },
    ],
  },
]);
