import { Link, NavLink } from "react-router-dom";

const Header = () => {
    const highlightNavLink = ({ isActive }: { isActive: boolean }) => {
        return isActive ? "text-blue-500" : "";
    };

    return (
        <header className="flex justify-between mb-2">
            <h1 className="font-bold">
                <Link to="/"> React RTK</Link>
            </h1>
            <nav>
                <ul className="flex gap-4">
                    <li>
                        <NavLink to={"/"} className={highlightNavLink}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/redux"} className={highlightNavLink}>
                            Redux
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
