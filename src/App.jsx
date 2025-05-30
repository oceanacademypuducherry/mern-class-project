import { RouterProvider } from "react-router-dom";
import { routes } from "./router/router";
import { Provider } from "react-redux";
import store from "./store";

export const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  )
};
