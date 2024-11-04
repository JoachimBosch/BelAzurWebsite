import React, { useState, useContext } from "react";
import MyContext from "../context/context";
import { Link } from "react-router-dom";

const VitrinePage4 = () => {
    const { vitrineBuild } = useContext(MyContext);
    const [color, setColor] = useState();

    return (
        <>
            <div className="mx-auto mt-28" style={{ maxWidth: "1280px" }}>
                <h2 className="text-xl font-bold mb-4">
                    Let's talk about styling
                </h2>
                <div className="flex-col">
                    <h2>Colors...</h2>
                    <div>
                        <h2>Choose your primary color:</h2>
                    </div>
                </div>
                <div className="mt-4 flex justify-between">
                    <Link to="/services/vitrine/build/5">
                        <button>Next page</button>
                    </Link>
                    <Link to="/services/vitrine/build/3">
                        <button>Previous page</button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default VitrinePage4;
