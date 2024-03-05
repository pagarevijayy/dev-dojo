import { itineraryItem } from "../../utils/itineraryReducer";
import TaskItem from "./TaskItem";

interface ListTasksProps extends Partial<ComponentGenericProps> {
    taskList: itineraryItem[];
}

const ListTasks = ({ taskList }: ListTasksProps) => {
    return (
        <ol>
            {taskList.map((task: itineraryItem) => {
                return <TaskItem task={task} key={task.id} />;
            })}
        </ol>
    );
};
export default ListTasks;
