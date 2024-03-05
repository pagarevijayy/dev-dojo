import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";

type ModalProps = {
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const Modal = ({ setShowModal }: ModalProps) => {
    const navigate = useNavigate();
    return createPortal(
        <>
            <div
                onClick={() => setShowModal(false)}
                className="modal-backdrop absolute inset-0 bg-gray-900/70"
            ></div>
            <div className="modal-body max-w-md relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 origin p-4 bg-gray-200 rounded-lg z-10">
                <section className="my-4">
                    <p>Hii from Portal!</p>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Dignissimos totam inventore quo. Delectus numquam
                        illo unde sint
                    </p>
                </section>
                <div className="text-right space-x-2">
                    <button
                        className="btn-primary"
                        onClick={() => navigate("/")}
                    >
                        Navigate to Home
                    </button>
                    <button
                        className="btn-primary"
                        onClick={() => setShowModal(false)}
                    >
                        Close
                    </button>
                </div>
            </div>
        </>,
        document.body,
    );
};
export default Modal;
