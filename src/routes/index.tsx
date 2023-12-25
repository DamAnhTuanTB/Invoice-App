import { createBrowserRouter } from "react-router-dom";

import NotFound from "../pages/NotFound";

import MainLayout from "../layouts/MainLayout";
import DetailInvoice from "../pages/DetailInvoice";
import ListInvoice from "../pages/ListInvoice";
import { ROUTES } from "./routes";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: ROUTES.LIST_INVOICE,
        element: <ListInvoice />,
      },
      {
        path: ROUTES.DETAIL_INVOICE,
        element: <DetailInvoice />,
      },
    ],
  },
  { path: ROUTES.ERROR, element: <NotFound /> },
]);
