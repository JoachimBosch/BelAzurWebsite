import React, { useState, useContext } from "react";
import MyContext from "../context/context";
import { Link } from "react-router-dom";

const VitrinePage5 = () => {
    const { vitrineBuild } = useContext(MyContext);

    return (
        <>
            <div className="mx-auto mt-28" style={{ maxWidth: "1280px" }}>
                <div className="border mt-10 px-5 py-5">
                    <div className="text-center">
                        <h1>
                            {vitrineBuild.title
                                ? vitrineBuild.title
                                : "Your title goes here"}
                        </h1>
                        <h3>
                            {vitrineBuild.subtext ? vitrineBuild.subtext : ""}
                        </h3>
                    </div>
                    <div
                        style={{ width: "100px", height: "100px" }}
                        className="border ml-8"
                    >
                        <img src={vitrineBuild.logo} alt="Your logo here" />
                    </div>
                </div>
                <div className="mt-4 flex justify-between">
                    <Link to="/services/vitrine/checkout">
                        <button>Proceed to Checkout</button>
                    </Link>
                    <Link to="/services/vitrine/build/4">
                        <button>Previous page</button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default VitrinePage5;
