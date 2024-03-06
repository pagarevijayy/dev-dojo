import type { RootState } from "../state/store";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../state/counter/counterSlice";

export default function Counter() {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div className="space-y-4">
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
            </div>
        </div>
    );
}
