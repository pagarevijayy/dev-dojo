import { useState, useEffect } from "react";
import { usePageContext } from "../contexts/PageContext";
import ListTasks from "../components/itinerary/ListTasks";
import { useItineraryContext } from "../contexts/ItineraryContext";
import Modal from "../components/layouts/Modal";

const Portal = () => {
    // This logic of updating context is abstracted in useSetPageTitle. Following code is for sample purpose.
    const page = usePageContext();
    const [showModal, setShowModal] = useState<boolean>(false);

    useEffect(() => {
        page.setPageName("Portal");
    }, [page]);

    const context = useItineraryContext();
    return (
        <div className="my-6 space-y-4">
            {showModal && <Modal setShowModal={setShowModal} />}
            <button
                className="btn-primary my-4"
                onClick={() => {
                    setShowModal(true);
                }}
            >
                Show Modal
            </button>

            <p className="">
                Portal - Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Velit iure aspernatur laudantium? Maiores, labore
                accusantium. Officiis molestias repudiandae ipsa modi illo,
                recusandae voluptatem blanditiis eligendi, praesentium porro
                soluta ducimus vel.
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

export default Portal;
