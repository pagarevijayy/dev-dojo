import "./App.css";
import Header from "./components/header";
import { Outlet } from "react-router-dom";

function App() {
    return (
        <div className="p-4">
            <Header />
            <main className="container text-gray-800">
                <Outlet />
            </main>
        </div>
    );
}

export default App;
