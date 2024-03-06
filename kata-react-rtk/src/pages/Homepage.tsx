import { RootState } from "../state/store";
import { useSelector } from "react-redux";

const Homepage = () => {
    const counterValue = useSelector((state: RootState) => state.counter.value);
    return (
        <div className="space-y-2">
            <h2>Homepage</h2>
            <p>Counter Value: {counterValue}</p>
        </div>
    );
};
export default Homepage;
