import { useState } from "react";
import { ItineraryItem } from "../../utils/itineraryReducer";
import { useItineraryContext } from "../../contexts/ItineraryContext";

interface TaskItemProps extends Partial<ComponentGenericProps> {
    task: ItineraryItem;
    showItemSettingsActions: boolean;
}

const TaskItem = ({ task, showItemSettingsActions = false }: TaskItemProps) => {
    const [isEditing, setIsEditing] = useState(false);
    const context = useItineraryContext();

    let taskContent;
    if (isEditing) {
        taskContent = (
            <>
                <input
                    className="primary-input"
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
                <span>
                    {task.text}
                    <span className="text-gray-600 text-xs mx-1 align-super">
                        ({task.id})
                    </span>
                </span>
                {showItemSettingsActions && (
                    <button
                        className="btn-primary"
                        onClick={() => setIsEditing(true)}
                    >
                        Edit
                    </button>
                )}
            </>
        );
    }

    return (
        <li>
            <label className="space-x-2">
                <input
                    className="m-1"
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

                {showItemSettingsActions && (
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
                )}
            </label>
        </li>
    );
};
export default TaskItem;
