import { RouterProvider } from "react-router-dom";
import { routes } from "./router/router";
import { Provider } from "react-redux";
import store from "./store";

export const App = () => {
  return (
    <>
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
     <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Student Details</h1>
      <div className='flex gap-5 items-center justify-center flex-wrap'>
     {students.map(student =>(
      <StudentCard key={student.id} student={student}/>
     ))}
     </div>
    </div>
    </>
  )
};
