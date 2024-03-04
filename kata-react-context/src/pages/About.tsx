import { useEffect } from "react";
import { usePageContext } from "../contexts/PageContext";

const About = () => {
    // This logic of updating context is abstracted in useSetPageTitle. Following code is for sample purpose.
    const page = usePageContext();

    useEffect(() => {
        page.setPageName("About");
    }, [page]);

    return (
        <div className="my-6">
            <p className="">
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
