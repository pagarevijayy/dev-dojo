import { ItineraryItem } from "../../utils/itineraryReducer";
import TaskItem from "./TaskItem";

interface ListTasksProps extends Partial<ComponentGenericProps> {
    taskList: ItineraryItem[];
}

const ListTasks = ({ taskList }: ListTasksProps) => {
    return (
        <ol>
            {taskList.map((task: ItineraryItem) => {
                return <TaskItem task={task} key={task.id} />;
            })}
        </ol>
    );
};
export default ListTasks;
