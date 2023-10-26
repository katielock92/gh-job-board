import { createContext, useState } from "react";

export const MainApiContext = createContext(null);

export default function MainApiProvider({ children }) {
  // This URL to be replaced with /mx51/ when doing live deployment
  const [apiUrl, setApiUrl] = useState(
    "https://boards-api.greenhouse.io/v1/boards/mx51dev/departments"
  );

  return (
    <MainApiContext.Provider
      value={{
        api: apiUrl,
        setApi: setApiUrl,
      }}
    >
      {children}
    </MainApiContext.Provider>
  );
}
