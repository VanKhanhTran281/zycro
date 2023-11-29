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
import Connect from "./pages/contacts/lists/CreateListItem/Connect/Connect";
import ConnectToZapier from "./pages/contacts/lists/CreateListItem/Connect/Connect_to_z";
import UploadContacts from "./pages/contacts/lists/CreateListItem/Upload/UploadContact";
import CopyContacts from "./pages/contacts/lists/CreateListItem/Copy/CopyContacts";
import CreateSegments from "./pages/contacts/segments/CreateSegment";

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
      {
        path: "/uploadcontact",
        element: <UploadContacts />,
      },
      {
        path: "/copycontacts",
        element: <CopyContacts />,
      },
      {
        path: "/connect",
        element: <Connect />,
      },
      {
        path: "/connecttozapier",
        element: <ConnectToZapier />,
      },
      {
        path: "/createsegments",
        element: <CreateSegments/>,
      },
      
    ],
  },
]);
