import { RootState } from "../state/store";
import { useSelector } from "react-redux";

const Homepage = () => {
    const counterValue = useSelector((state: RootState) => state.counter.value);
    const currentlyWatching = useSelector(
        (state: RootState) => state.watching.show,
    );
    return (
        <div className="space-y-2">
            <h2>Homepage</h2>
            <section className="text-sm text-gray-600">
                <p>Stats:</p>
                <p>Counter: {counterValue}</p>
                <p>Currently Watching: {currentlyWatching}</p>
            </section>
        </div>
    );
};
export default Homepage;
