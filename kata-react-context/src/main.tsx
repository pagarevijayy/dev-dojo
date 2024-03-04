import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./index.css";
import App from "./App.tsx";
import About from "./pages/About";
import Homepage from "./pages/Homepage";
import PageContextProvider from "./contexts/PageContext.tsx";
import QueryDemo from "./pages/QueryDemo.tsx";

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
        ],
    },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <PageContextProvider>
                <RouterProvider router={router} />
            </PageContextProvider>
        </QueryClientProvider>
    </React.StrictMode>,
);
