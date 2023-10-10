import { createContext, useState } from "react";

export const DepartmentsApiContext = createContext(null)

export default function DepartmentApiProvider({children}){
    const [apiUrl, setApiUrl] = useState("https://boards-api.greenhouse.io/v1/boards/mx51dev/departments");

    return (
        <DepartmentsApiContext.Provider value={
            {
                api: apiUrl, 
                setApi: setApiUrl
            }
        }>
            {children}
        </DepartmentsApiContext.Provider>
    );
}