import { useState } from "react";
import { itineraryItem } from "../../utils/itineraryReducer";

interface TaskItemProps extends Partial<ComponentGenericProps> {
    task: itineraryItem;
}

const TaskItem = ({ task }: TaskItemProps) => {
    const [isEditing, setIsEditing] = useState(false);

    let taskContent;
    if (isEditing) {
        taskContent = (
            <>
                <input
                    value={task.text}
                    onChange={() => {
                        //   dispatch({
                        //       type: "changed",
                        //       task: {
                        //           ...task,
                        //           text: e.target.value,
                        //       },
                        //   });
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
                    onChange={() => {
                        // dispatch({
                        //     type: "changed",
                        //     task: {
                        //         ...task,
                        //         done: e.target.checked,
                        //     },
                        // });
                    }}
                />
                {taskContent}
                <button
                    className="btn-primary"
                    onClick={() => {
                        // dispatch({
                        //     type: "deleted",
                        //     id: task.id,
                        // });
                    }}
                >
                    Delete
                </button>
            </label>
        </li>
    );
};
export default TaskItem;
