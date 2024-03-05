export type itineraryItem = {
    id: number;
    text: string;
    done: boolean;
};

export type actionType = {
    type: string;
    payload: itineraryItem;
};

let nextId = 2;

export const itineraryInitialState: itineraryItem[] = [
    {
        id: 1,
        text: "Check wallet and id proofs",
        done: false,
    },
];

export const itineraryReducer = (tasks: itineraryItem[], action: actionType) => {
    switch (action.type) {
        case "add": {
            return [
                ...tasks,
                {
                    id: nextId++,
                    text: action.payload.text,
                    done: false,
                },
            ];
        }

        case "remove": {
            return tasks.filter(t => t.id !== action.payload.id);
        }

        case "update": {
            return tasks.map(t => {
                if (t.id === action.payload.id) {
                    return action.payload;
                } else {
                    return t;
                }
            });
        }

        default:
            throw new Error("Unknown action: " + action.type);
    }
};