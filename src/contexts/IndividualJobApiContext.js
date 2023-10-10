import { createContext, useState } from "react";

export const IndividualJobApiContext = createContext(null)

export default function JobApiProvider({children}){
    // need to fix the url concatenation because ID is needed to link to individual jobs
    const [apiUrl, setApiUrl] = useState("https://boards-api.greenhouse.io/v1/boards/mx51dev/jobs/");

    return (
        <IndividualJobApiContext.Provider value={
            {
                api: apiUrl, 
                setApi: setApiUrl
            }
        }>
            {children}
        </IndividualJobApiContext.Provider>
    );
}