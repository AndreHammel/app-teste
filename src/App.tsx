import { router } from "./routes";
import { RouterProvider } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "./index.css";

export function App() {
  return (
    <>
      <HelmetProvider>
        <Helmet titleTemplate="%s | pizza.shop" />
        <RouterProvider router={router} />
      </HelmetProvider>
    </>
  );
}
