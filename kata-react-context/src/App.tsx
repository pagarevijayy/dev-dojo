import { Suspense } from "react";
import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {
    return (
        <div className="p-4">
            <Header />
            <main className="container text-gray-800">
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet />
                </Suspense>
            </main>
        </div>
    );
}

export default App;
