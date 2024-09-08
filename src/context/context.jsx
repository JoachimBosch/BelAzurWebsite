import { createContext, useState } from "react";

const MyContext = createContext();

export const MyProvider = ({ children }) => {

    const [language, setLanguage] = useState('English');



    let appContext = {language, setLanguage}
    return (
        <MyContext.Provider value={appContext}>
          {children}
        </MyContext.Provider>
      );
};

export default MyContext;