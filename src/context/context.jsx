import axios from "axios";
import { createContext, useState } from "react";


const MyContext = createContext();

export const MyProvider = ({ children }) => {
    const [page, setPage] = useState("allServices");

    /* Add all variables to appContext to sync them in the entire application */
    let appContext = {
        page,
        setPage,
    };

    return (
        <MyContext.Provider value={appContext}>{children}</MyContext.Provider>
    );
};

export default MyContext;
