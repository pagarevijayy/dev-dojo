import { useState } from "react";
import { itineraryItem } from "../../utils/itineraryReducer";
import { useItineraryContext } from "../../contexts/ItineraryContext";

interface TaskItemProps extends Partial<ComponentGenericProps> {
    task: itineraryItem;
}

const TaskItem = ({ task }: TaskItemProps) => {
    const [isEditing, setIsEditing] = useState(false);
    const context = useItineraryContext();

    let taskContent;
    if (isEditing) {
        taskContent = (
            <>
                <input
                    value={task.text}
                    onChange={(e) => {
                        context.itineraryDispatch({
                            type: "update",
                            payload: {
                                ...task,
                                text: e.target.value,
                            },
                        });
                    }}
                />
                <button
                    className="btn-primary"
                    onClick={() => setIsEditing(false)}
                >
                    Save
                </button>
            </>
        );
    } else {
        taskContent = (
            <>
                {task.id}
                {task.text}
                <button
                    className="btn-primary"
                    onClick={() => setIsEditing(true)}
                >
                    Edit
                </button>
            </>
        );
    }

    return (
        <li>
            <label className="space-x-2">
                <input
                    className="m-2"
                    type="checkbox"
                    checked={task.done}
                    onChange={(e) => {
                        context.itineraryDispatch({
                            type: "update",
                            payload: {
                                ...task,
                                done: e.target.checked,
                            },
                        });
                    }}
                />
                {taskContent}
                <button
                    className="btn-primary"
                    onClick={() => {
                        context.itineraryDispatch({
                            type: "remove",
                            payload: task,
                        });
                    }}
                >
                    Delete
                </button>
            </label>
        </li>
    );
};
export default TaskItem;
