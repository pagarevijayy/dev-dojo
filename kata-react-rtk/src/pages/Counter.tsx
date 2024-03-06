import type { RootState } from "../state/store";
import { useSelector, useDispatch } from "react-redux";
import {
    decrement,
    increment,
    incrementByAmount,
} from "../state/counter/counterSlice";
import { currentShow } from "../state/watching/watchingSlice";

export default function Counter() {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div className="space-y-4 my-4">
            <div className="space-y-4 border rounded p-4">
                <p>Counter Value: {count}</p>
                <div>
                    <button
                        className="btn-primary"
                        aria-label="Increment value"
                        onClick={() => dispatch(increment())}
                    >
                        Increment
                    </button>
                    <button
                        className="btn-primary"
                        aria-label="Decrement value"
                        onClick={() => dispatch(decrement())}
                    >
                        Decrement
                    </button>
                    <button
                        className="btn-primary"
                        aria-label="Increment by amount 5"
                        onClick={() => dispatch(incrementByAmount(5))}
                    >
                        Increment by Amount 5
                    </button>
                </div>
            </div>
            <div className="space-y-4 border rounded p-4">
                <p>Update Current Show to Ninja Turtles</p>
                <button
                    className="btn-primary"
                    aria-label="Watch new show: ninja turtles"
                    onClick={() => dispatch(currentShow("Ninja Turtles"))}
                >
                    Watch Ninja Turtles!
                </button>
            </div>
        </div>
    );
}
