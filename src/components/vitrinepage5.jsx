import React, { useState, useContext } from 'react';
import MyContext from '../context/context';

const VitrinePage5 = () => {
    const {vitrineBuild, setVitrineBuild, file, setFile, handleNext, handlePrev, page, setPage} = useContext(MyContext)

    return (
        <>
            <div className="mx-4">
                <div className="border mt-10 px-5 py-5">
                    <div className="text-center">
                        <h1>{vitrineBuild.title ? vitrineBuild.title : "Your title goes here"}</h1>
                        <h3>{vitrineBuild.subtext ? vitrineBuild.subtext : ""}</h3>
                    </div>
                    <div style={{width: "100px", height: "100px"}} className="border ml-8">
                        <img src={vitrineBuild.logo} alt="Your logo here" />
                    </div>
                </div>
                <div className="mt-4 flex justify-between">
                  <button
                    onClick={handleNext}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                  >
                    Proceed to Checkout
                  </button>
                  <button
                    onClick={handlePrev}
                    className="bg-gray-500 text-white px-4 py-2 rounded"
                  >
                    Go Back
                  </button>
                </div>
            </div>
        </>
    )
};

export default VitrinePage5;