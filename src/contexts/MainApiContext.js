import { createContext, useState } from "react";

export const MainApiContext = createContext(null)

export default function MainApiProvider({children}){
    const [apiUrl, setApiUrl] = useState("https://boards-api.greenhouse.io/v1/boards/mx51dev/offices");

    return (
        <MainApiContext.Provider value={
            {
                api: apiUrl, 
                setApi: setApiUrl
            }
        }>
            {children}
        </MainApiContext.Provider>
    );
}