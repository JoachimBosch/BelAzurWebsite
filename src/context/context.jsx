import { createContext } from "react";

const MyContext = createContext();

export const MyProvider = ({ children }) => {




    let appContext = {}
    return (
        <MyContext.Provider value={appContext}>
          {children}
        </MyContext.Provider>
      );
};

export default MyContext;