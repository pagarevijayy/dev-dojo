export type ItineraryItem = {
    id: number;
    text: string;
    done: boolean;
};

export type ActionType = {
    type: string;
    payload: ItineraryItem;
};

export const itineraryInitialState: ItineraryItem[] = [
    {
        id: 1,
        text: "Check wallet and id proofs",
        done: false,
    },
];

export const itineraryReducer = (tasks: ItineraryItem[], action: ActionType) => {
    switch (action.type) {
        case "add": {
            return [
                ...tasks,
                {
                    id: action.payload.id,
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