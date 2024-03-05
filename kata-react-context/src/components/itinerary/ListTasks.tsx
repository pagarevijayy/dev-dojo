import { ItineraryItem } from "../../utils/itineraryReducer";
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
export default ListTasks;
