import { useContext, useState } from "react";
import MyContext from "../context/context";


const VitrineBuild = () => {

    const {vitrineBuild, setVitrineBuild} = useContext(MyContext)
    const [file, setFile] = useState();

    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    
    console.log(vitrineBuild)

    return (
        <>
        <div className="mt-28 text-center">
            <h1>Vitrine Site Builder:</h1>
        </div>
        <div className="grid grid-cols-4 mx-4">
            <div className="col-span-1 border flex flex-col" style={{height: "600px"}}>
                <label for="header">Header text: </label>
                <input type="text" name="header" onChange={(e) => setVitrineBuild({
                                ...vitrineBuild,
                                header: e.target.value})}/>
                <label for="subtext">Subtext </label>
                <input type="subtext" name="subtext" onChange={(e) => setVitrineBuild({
                                ...vitrineBuild,
                                subtext: e.target.value})}/>
                <label for="logo">Your logo: </label>
                <input type="file" accept="image/png, image/jpeg" name="logo" onChange={(e) => {handleChange;
                    setVitrineBuild({
                        ...vitrineBuild,
                        logo: file})}
                }/>
                <label for="header">TEXT </label>
                <input type="text" name="header"/>
                <label for="header">TEXT </label>
                <input type="text" name="header"/>
            </div>
            <div className="col-span-3 px-5 py-5">
                <div className="text-center">
                    <h1>{vitrineBuild.header ? vitrineBuild.header : "Header text"}</h1>
                    <h3>{vitrineBuild.subtext ? vitrineBuild.subtext : "Subtext"}</h3>
                </div>
                <div style={{width: "100px", height: "100px"}} className="border ml-8">
                    <img src={file ? file : ""} alt="Your logo here" />
                </div>
            </div>
        </div>
        </>

    )
}

export default VitrineBuild;