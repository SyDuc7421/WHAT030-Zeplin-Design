import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";

import UnauthorizeLayout from "./layouts/UnauthorizeLayout";

import { MainPage } from "./pages/MainPage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";

const router = createBrowserRouter([
  {
    path: "*",
    element: <UnauthorizeLayout />,
    children: [
      {
        path: "main",
        element: <MainPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "*",
        element: <Navigate to="main" />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <ScrollRestoration
        getKey={(location) => {
          // default behavior
          return location.key;
        }}
      />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
