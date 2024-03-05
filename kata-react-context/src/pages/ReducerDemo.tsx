import useSetPageTitle from "../hooks/useSetPageTitle";
import { useItineraryContext } from "../contexts/ItineraryContext";
import ListTasks from "../components/itinerary/listTasks";
import AddTasks from "../components/itinerary/addTasks";

const ReducerDemo = () => {
    useSetPageTitle("Reducer");
    const context = useItineraryContext();
    return (
        <div className="space-y-2">
            <h2>Next Trip Itinerary</h2>
            <AddTasks />
            <p>Tasks:</p>
            <ListTasks taskList={context.itineraryTasks} />
        </div>
    );
};
export default ReducerDemo;
