import useSetPageTitle from "../hooks/useSetPageTitle";
import { useItineraryContext } from "../contexts/ItineraryContext";
import ListTasks from "../components/itinerary/ListTasks";
import AddTasks from "../components/itinerary/AddTasks";
import ErrorBoundary from "../components/ErrorBoundary";

const ReducerDemo = () => {
    useSetPageTitle("Reducer");
    const context = useItineraryContext();
    return (
        <div className="space-y-2">
            <h2 className="text-lg mb-4">Itinerary Planner</h2>
            <AddTasks />
            <ListTasks
                showItemSettingsActions={true}
                taskList={context.itineraryTasks}
            />
        </div>
    );
};

const ReducerDemoErrorBoundary = () => {
    return (
        <ErrorBoundary>
            <ReducerDemo />
        </ErrorBoundary>
    );
};

export default ReducerDemoErrorBoundary;
