import { usePageContext } from "../contexts/PageContext";
import { NavLink } from "react-router-dom";

const Header = () => {
    const page = usePageContext();

    const highlightNavLink = ({ isActive }: { isActive: boolean }) => {
        return isActive ? "text-blue-500" : "";
    };

    return (
        <header className="flex justify-between">
            <h1>{page.pageName}</h1>
            <nav>
                <ul className="flex gap-2">
                    <li>
                        <NavLink to={"/"} className={highlightNavLink}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/about"} className={highlightNavLink}>
                            About
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
