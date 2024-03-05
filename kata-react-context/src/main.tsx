import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./index.css";
import App from "./App.tsx";
import About from "./pages/About";
import Homepage from "./pages/Homepage";
import QueryDemo from "./pages/QueryDemo.tsx";
import ReducerDemo from "./pages/ReducerDemo.tsx";
import CustomProvider from "./contexts/Provider.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Homepage />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "react-query",
                element: <QueryDemo />,
            },
            {
                path: "reducer",
                element: <ReducerDemo />,
            },
        ],
    },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <CustomProvider>
                <RouterProvider router={router} />
            </CustomProvider>
        </QueryClientProvider>
    </React.StrictMode>,
);
