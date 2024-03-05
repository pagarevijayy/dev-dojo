/* eslint-disable react-refresh/only-export-components */
import React, { Reducer, createContext, useContext, useReducer } from "react";
import {
    actionType,
    itineraryInitialState,
    itineraryItem,
    itineraryReducer,
} from "../utils/itineraryReducer";

type itineraryContextType = {
    itineraryTasks: itineraryItem[];
    itineraryDispatch: React.Dispatch<actionType>;
};

const ItineraryContext = createContext<itineraryContextType | undefined>(
    undefined,
);

const ItineraryContextProvider = ({ children }: componentGenericProps) => {
    const [itineraryTasks, itineraryDispatch] = useReducer<
        Reducer<itineraryItem[], actionType>
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
