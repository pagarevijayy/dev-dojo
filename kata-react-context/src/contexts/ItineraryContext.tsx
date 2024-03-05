/* eslint-disable react-refresh/only-export-components */
import React, { Reducer, createContext, useContext, useReducer } from "react";
import {
    ActionType,
    itineraryInitialState,
    ItineraryItem,
    itineraryReducer,
} from "../utils/itineraryReducer";

type itineraryContextType = {
    itineraryTasks: ItineraryItem[];
    itineraryDispatch: React.Dispatch<ActionType>;
};

const ItineraryContext = createContext<itineraryContextType | undefined>(
    undefined,
);

const ItineraryContextProvider = ({ children }: ComponentGenericProps) => {
    const [itineraryTasks, itineraryDispatch] = useReducer<
        Reducer<ItineraryItem[], ActionType>
    >(itineraryReducer, itineraryInitialState);

    return (
        <ItineraryContext.Provider
            value={{ itineraryTasks, itineraryDispatch }}
        >
            {children}
        </ItineraryContext.Provider>
    );
};

export const useItineraryContext = () => {
    const context = useContext(ItineraryContext);

    if (!context) {
        throw new Error(
            "useItineraryContext needs to be used inside ItineraryContextProvider",
        );
    }

    return context;
};

export default ItineraryContextProvider;
