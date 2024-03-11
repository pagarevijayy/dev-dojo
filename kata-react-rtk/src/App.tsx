import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import ReduxDemo from "./pages/ReduxDemo";
import RTKQueryDemo from "./pages/RTKQueryDemo";
import GraphQLDemo from "./pages/GraphQL";

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
            {
                path: "rtk-query",
                element: <RTKQueryDemo />,
            },
            {
                path: "graphql",
                element: <GraphQLDemo />,
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
