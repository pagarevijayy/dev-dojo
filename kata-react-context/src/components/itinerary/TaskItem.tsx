import { itineraryItem } from "../../utils/itineraryReducer";

interface TaskItemProps extends Partial<ComponentGenericProps> {
    task: itineraryItem;
}

const TaskItem = ({ task }: TaskItemProps) => {
    return <li>{task.text}</li>;
};
export default TaskItem;
