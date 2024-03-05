import { usePageContext } from "../contexts/PageContext";
import { NavLink } from "react-router-dom";

const Header = () => {
    const page = usePageContext();

    const highlightNavLink = ({ isActive }: { isActive: boolean }) => {
        return isActive ? "text-blue-500" : "";
    };

    return (
        <header className="flex justify-between mb-2">
            <h1 className="font-bold">{page.pageName}</h1>
            <nav>
                <ul className="flex gap-4">
                    <li>
                        <NavLink to={"/"} className={highlightNavLink}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/portal"} className={highlightNavLink}>
                            Portal
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={"/react-query"}
                            className={highlightNavLink}
                        >
                            Query
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/reducer"} className={highlightNavLink}>
                            Reducer
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
