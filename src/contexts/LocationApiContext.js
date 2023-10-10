import { createContext, useState } from "react";

export const LocationApiContext = createContext(null)

export default function LocationApiProvider({children}){
    const [apiUrl, setApiUrl] = useState("https://boards-api.greenhouse.io/v1/boards/mx51dev/offices");

    return (
        <LocationApiContext.Provider value={
            {
                api: apiUrl, 
                setApi: setApiUrl
            }
        }>
            {children}
        </LocationApiContext.Provider>
    );
}