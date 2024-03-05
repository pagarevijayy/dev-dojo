/* eslint-disable react-refresh/only-export-components */
import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./index.css";
import App from "./App.tsx";
import Homepage from "./pages/Homepage";
import QueryDemo from "./pages/QueryDemo.tsx";
import ReducerDemo from "./pages/ReducerDemo.tsx";
import CustomProvider from "./contexts/Provider.tsx";

const Portal = lazy(() => import("./pages/Portal.tsx"));

// Note: Suspense is wrapped around <Outlet/> so that it serves as a loading indicator for all lazy routes together.
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        // errorElement: <ErrorBoundaryPage />,
        children: [
            {
                index: true,
                element: <Homepage />,
            },
            {
                path: "portal",
                element: <Portal />,
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

export const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <CustomProvider>
                <RouterProvider router={router} />
            </CustomProvider>
        </QueryClientProvider>
    </React.StrictMode>,
);
