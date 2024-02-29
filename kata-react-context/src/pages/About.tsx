import { useEffect } from "react";
import { usePageContext } from "../contexts/PageContext";

const About = () => {
    const page = usePageContext();

    useEffect(() => {
        page.setPageName("About");
    }, [page]);

    return (
        <div className="my-6">
            <p className="text-xs font-medium">
                About - Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Velit iure aspernatur laudantium? Maiores, labore accusantium.
                Officiis molestias repudiandae ipsa modi illo, recusandae
                voluptatem blanditiis eligendi, praesentium porro soluta ducimus
                vel.
            </p>
        </div>
    );
};

export default About;
