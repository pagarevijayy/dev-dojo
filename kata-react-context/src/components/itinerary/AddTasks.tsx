import { useState } from "react";
import { useItineraryContext } from "../../contexts/ItineraryContext";

const AddTasks = () => {
    const [text, setText] = useState<string>("");
    const context = useItineraryContext();

    return (
        <label className="space-x-2">
            <input
                className="px-1 border rounded"
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
                            id: 0,
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
