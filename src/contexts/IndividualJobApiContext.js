import { createContext, useState } from "react";

export const IndividualJobApiContext = createContext(null)

export default function ApiProvider({children}){
    const [apiUrl, setApiUrl] = useState("https://boards-api.greenhouse.io/v1/boards/mx51dev/jobs/" + jobId);

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