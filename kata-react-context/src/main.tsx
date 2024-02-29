import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import About from "./pages/About";
import Homepage from "./pages/Homepage";
import PageContextProvider from "./contexts/PageContext.tsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <PageContextProvider>
            <RouterProvider router={router} />
        </PageContextProvider>
    </React.StrictMode>,
);
