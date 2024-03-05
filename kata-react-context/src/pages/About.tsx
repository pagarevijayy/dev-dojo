import { useEffect } from "react";
import { usePageContext } from "../contexts/PageContext";
import ListTasks from "../components/itinerary/ListTasks";
import { useItineraryContext } from "../contexts/ItineraryContext";

const About = () => {
    // This logic of updating context is abstracted in useSetPageTitle. Following code is for sample purpose.
    const page = usePageContext();

    useEffect(() => {
        page.setPageName("About");
    }, [page]);

    const context = useItineraryContext();
    return (
        <div className="my-6 space-y-4">
            <p className="">
                About - Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Velit iure aspernatur laudantium? Maiores, labore accusantium.
                Officiis molestias repudiandae ipsa modi illo, recusandae
                voluptatem blanditiis eligendi, praesentium porro soluta ducimus
                vel.
            </p>

            <section>
                <h2 className="font-bold">Next trip itinerary:</h2>
                <ListTasks
                    showItemSettingsActions={false}
                    taskList={context.itineraryTasks}
                />
            </section>
        </div>
    );
};

export default About;
