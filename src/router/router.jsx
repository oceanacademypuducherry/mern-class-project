import { createBrowserRouter } from "react-router-dom";
import Login from "../components/login/Login";
import SharedPage from "../feature/shared/pages/SharedPage";
import { sharedPageRoutes } from "../feature/shared/utils/sharedPageRoutes";
import ForgetPassword from "../feature/shared/components/Forgetpage";

export const routes = createBrowserRouter([
  { path: "/", element: <div>home</div> },
  {
    path: "/naveen-preview",
    element: <div className="text-primary">naveen</div>,
  },
  { path: "/vignesh-preview", element: <div><Login /></div> },
  { path: "/farhana-preview", element: <div>farhana</div> },
  { path: "/vignesh-preview", element: <div className="bg-primary">vignesh</div> },
  { path: "/farhana-preview", element: <ForgetPassword/> },
  { path: "/pavithra-preview", element: <div>pavithra</div> },
]);
  