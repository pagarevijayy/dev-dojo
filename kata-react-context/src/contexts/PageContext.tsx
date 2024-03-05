/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

type PageContextType = {
    pageName: string;
    setPageName: React.Dispatch<React.SetStateAction<string>>;
};

const PageContext = createContext<PageContextType | undefined>(undefined);

export default function PageContextProvider({
    children,
}: componentGenericProps) {
    const [pageName, setPageName] = useState("");

    return (
        <PageContext.Provider value={{ pageName, setPageName }}>
            {children}
        </PageContext.Provider>
    );
}

export const usePageContext = () => {
    const context = useContext(PageContext);

    if (!context) {
        throw new Error("usePageContext inside PageContextProvider");
    }
    return context;
};
