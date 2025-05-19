import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
  { path: "/", element: <div>home</div> },
  {
    path: "/naveen-preview",
    element: <div className="text-primary">naveen</div>,
  },
  { path: "/vignesh-preview", element: <div>vignesh</div> },
  { path: "/farhana-preview", element: <div>farhana</div> },
  { path: "/pavithra-preview", element: <div>pavithra</div> },
]);
