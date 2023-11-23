import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./Routes/Route.jsx";
import AuthProviders from "./Providers/AuthProviders.jsx";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProviders>
        <RouterProvider router={routes} />
      </AuthProviders>
    </QueryClientProvider>
  </React.StrictMode>
);
