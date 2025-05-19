import { RouterProvider } from "react-router-dom";
import { routes } from "./router/router";

export const App = () => {
  return <RouterProvider router={routes} />;
};
