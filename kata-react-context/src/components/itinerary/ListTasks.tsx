import { ItineraryItem } from "../../utils/itineraryReducer";
import withBorder from "../withBorder";
import TaskItem from "./TaskItem";

interface ListTasksProps extends Partial<ComponentGenericProps> {
    taskList: ItineraryItem[];
    showItemSettingsActions: boolean;
}

const ListTasks = ({ taskList, showItemSettingsActions }: ListTasksProps) => {
    return (
        <ol>
            {taskList.map((task: ItineraryItem) => {
                return (
                    <TaskItem
                        showItemSettingsActions={showItemSettingsActions}
                        task={task}
                        key={task.id}
                    />
                );
            })}
        </ol>
    );
};

export const ListTasksWithBorder = withBorder(ListTasks);

export default ListTasks;
