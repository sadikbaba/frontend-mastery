import {
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import App from "./App.jsx";
import {
  ApplicationListRoute,
  EditApplicationRoute,
  LoginRoute,
  NewApplicationRoute,
  RegisterRoute,
} from "./RouteComponents.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Navigate to="/applications" replace /> },
      { path: "login", element: <LoginRoute /> },
      { path: "register", element: <RegisterRoute /> },
      { path: "applications", element: <ApplicationListRoute /> },
      { path: "applications/new", element: <NewApplicationRoute /> },
      { path: "applications/:id/edit", element: <EditApplicationRoute /> },
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  },
]);

export default router;
