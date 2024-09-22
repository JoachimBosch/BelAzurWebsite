import { useContext, useState } from "react";
import MyContext from "../context/context";
import VitrineModal from "./vitrinemodal";


const VitrineBuild = () => {

    const {vitrineBuild, setVitrineBuild} = useContext(MyContext)
    
    
    console.log(vitrineBuild)

    return (
        <>
        <div className="mt-28 text-center">
            <VitrineModal />
        </div>

        <div className="mx-4">

            <div className="border mt-10 px-5 py-5">
                <div className="text-center">
                    <h1>{vitrineBuild.header ? vitrineBuild.header : "Header text"}</h1>
                    <h3>{vitrineBuild.subtext ? vitrineBuild.subtext : "Subtext"}</h3>
                </div>
                <div style={{width: "100px", height: "100px"}} className="border ml-8">
                    <img src={vitrineBuild.logo} alt="Your logo here" />
                </div>
            </div>
        </div>
        </>

    )
}

export default VitrineBuild;