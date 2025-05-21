import { createBrowserRouter } from "react-router-dom";
import SharedPage from "../feature/shared/pages/SharedPage";
import { sharedPageRoutes } from "../feature/shared/utils/sharedPageRoutes";
import Login from "../feature/auth/pages/Login/Login";
import ForgetPassword from "../feature/auth/pages/forgetPassword/Forgetpage";

export const routes = createBrowserRouter([
  { path: "/", element: <div>home</div> },
  {
    path: "/naveen-preview",
    element: <SharedPage />,
    children: [...sharedPageRoutes]
  },
  { path: "/vignesh-preview", element: <Login /> },
  { path: "/farhana-preview", element: <ForgetPassword /> },
  { path: "/pavithra-preview", element: <div>pavithra</div> },
]);
