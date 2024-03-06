import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import ReduxDemo from "./pages/ReduxDemo";

const Layout = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
        </>
    );
};

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Homepage />,
            },
            {
                path: "redux",
                element: <ReduxDemo />,
            },
        ],
    },
]);

function App() {
    return (
        <div className="p-3 text-gray-800">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
