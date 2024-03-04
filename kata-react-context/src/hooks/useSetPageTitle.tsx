import { useEffect } from "react";
import { usePageContext } from "../contexts/PageContext";

const useSetPageTitle = (title: string) => {
    const page = usePageContext();

    useEffect(() => {
        page.setPageName(title);
    }, [page, title]);
};
export default useSetPageTitle;
