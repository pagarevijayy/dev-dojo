import { useEffect } from "react";
import { usePageContext } from "../contexts/PageContext";

const Homepage = () => {
    const page = usePageContext();

    useEffect(() => {
        page.setPageName("Homepage");
    }, [page]);

    return (
        <div className="my-6">
            <p className="">
                Homepage Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Sequi voluptatem id minus quasi blanditiis hic voluptas
                nesciunt ratione mollitia assumenda odio ullam impedit ipsam
                laboriosam dicta aliquid, perspiciatis quaerat iure.
            </p>
        </div>
    );
};

export default Homepage;
