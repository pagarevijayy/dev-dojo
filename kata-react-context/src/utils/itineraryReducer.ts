export type itineraryItem = {
    id: number;
    text: string | undefined;
    done: boolean;
};

export type actionType = {
    type: string;
    payload: Partial<itineraryItem>;
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

        default:
            throw new Error("Unknown action: " + action.type);
    }
};