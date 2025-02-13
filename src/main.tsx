import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router";
import Pomodoro from "./pages/pomodoro";

const router = createBrowserRouter([
  {
    path: "/pomodoro",
    element: <Pomodoro />,
  },
  {
    path: "/",
    element: <Navigate to="/pomodoro" replace />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
