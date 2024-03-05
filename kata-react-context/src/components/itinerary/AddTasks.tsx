import { useState } from "react";
import { useItineraryContext } from "../../contexts/ItineraryContext";

let nextId = 2;

const AddTasks = () => {
    const [text, setText] = useState<string>("");
    const context = useItineraryContext();

    return (
        <label className="space-x-2">
            <input
                className="primary-input"
                placeholder="Add task"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button
                className="btn-primary"
                onClick={() => {
                    setText("");
                    context.itineraryDispatch({
                        type: "add",
                        payload: {
                            text: text,
                            id: nextId++,
                            done: false,
                        },
                    });
                }}
            >
                Add
            </button>
        </label>
    );
};
export default AddTasks;
