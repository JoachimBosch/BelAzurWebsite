import { createContext, useState } from "react";

const MyContext = createContext();

export const MyProvider = ({ children }) => {

    const [language, setLanguage] = useState('English');
    const [loggingIn, setLoggingIn] = useState({email: "", password: ""});
    const [subscribe, setSubscribe] = useState({email: "", password1: "", password2: ""});
    const [form, setForm] = useState({
      fname: "",
      lname: "",
      phone: "",
      email: "",
      company: "",
      interest: "",
      freeText: ""
    })
    const [vitrineBuild, setVitrineBuild] = useState({
      header: "",
      subtext: "",
      logo: "",
      text1: "",
      text2: "",
    })




    /* Add all variables to appContext to sync them in the entire application */
    let appContext = {language, setLanguage, loggingIn, setLoggingIn, subscribe, setSubscribe, form, setForm, vitrineBuild, setVitrineBuild}

    return (
        <MyContext.Provider value={appContext}>
          {children}
        </MyContext.Provider>
      );
};

export default MyContext;