import axios from "axios";
import { createContext, useState } from "react";

const MyContext = createContext();


export const MyProvider = ({ children }) => {

    const _APILINK_ = "https://39ngdl4z-3000.uks1.devtunnels.ms"

    const [language, setLanguage] = useState('English');
    const [loggingIn, setLoggingIn] = useState({email: "", password: ""});
    const [token, setToken_] = useState(localStorage.getItem("token"));
    const [personInfo, setPersonInfo] = useState(() => {
      const savedPersonInfo = localStorage.getItem('personInfo');
      return savedPersonInfo ? JSON.parse(savedPersonInfo) : {
        id: "",
        email: "",
        first_name: "",
        last_name: "",
        phone: "",
        company_name: "",
        vat_id: "",
        street: "",
        street_number: "",
        postal_code: "",
        city: "",
        country: "",
      };
    });
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
    const [vitrineBuild, setVitrineBuild] = useState({})
    const [file, setFile] = useState();
    const [pass, setPass] = useState();


    const saveToken = (userToken) => {
      setToken_(userToken);
    }

    const clearAll = async () => {
      localStorage.deleteItem('personInfo');
    }

    const login = async () => {
      try {
        const response = await axios.post(`${_APILINK_}/login`, {
          email: loggingIn.email,
          password: loggingIn.password
        })
        saveToken(response.data.access_token);
        localStorage.setItem('personInfo', JSON.stringify(response.data.user));
        window.location.href = "/profile";
      } catch (error) {
        console.error('Login error:', error);
      }
    }

    const logout = async () => {
      try {
        await axios.post(`${_APILINK_}/logout`, {}, { 
          headers: {
            'Content-Type': 'application/json',
          }
        });
        clearAll();
        window.location.href = "/";
      } catch (error) {
        console.error('Logout error:', error);
      }
    }
    

    const updatePersonInfo = async (userId, data) => {
      try {
        await axios.put(`${_APILINK_}/user/${userId}`, data);
        const updatedPersonInfo = { ...personInfo, ...data };
        setPersonInfo(updatedPersonInfo);
        localStorage.setItem('personInfo', JSON.stringify(updatedPersonInfo));
        console.log('Personal information updated successfully');
      } catch (error) {
        console.error('Error updating data:', error);
      }
    };

    const deleteProfile = async (userId) => {
      try {
        await axios.delete(`${_APILINK_}/user/${userId}`, {
          headers: {
            'Content-Type': 'application/json',
          },
          data: {
            password: pass
          }
        });
        console.log('Profile deleted successfully');
        clearAll();
      } catch (error) {
        console.error('Error while deleting profile:', error);
      }
    }


    /* Add all variables to appContext to sync them in the entire application */
    let appContext = {language, setLanguage, loggingIn, setLoggingIn, subscribe, setSubscribe, form, setForm, vitrineBuild, setVitrineBuild, file, setFile, login, personInfo, setPersonInfo, token, setToken_, updatePersonInfo, deleteProfile, pass, setPass}

    return (
        <MyContext.Provider value={appContext}>
          {children}
        </MyContext.Provider>
      );
};

export default MyContext;