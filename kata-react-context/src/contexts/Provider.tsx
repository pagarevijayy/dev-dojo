import PageContextProvider from "./PageContext.tsx";
import ItineraryContextProvider from "./ItineraryContext.tsx";

const CustomProvider = ({ children }: ComponentGenericProps) => {
    return (
        <PageContextProvider>
            <ItineraryContextProvider>{children}</ItineraryContextProvider>
        </PageContextProvider>
    );
};
export default CustomProvider;
