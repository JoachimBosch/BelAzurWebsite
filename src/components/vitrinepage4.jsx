import React, { useState, useContext } from "react";
import MyContext from "../context/context";
import { Link } from "react-router-dom";
import { HexColorPicker } from "react-colorful";

const VitrinePage4 = () => {
    const { vitrineBuild } = useContext(MyContext);
    const [color, setColor] = useState("#ffffff");
    const [backGroundColor, setBackGroundColor] = useState("#376084");

    console.log(backGroundColor);

    return (
        <>
            <div className="mx-auto mt-28" style={{ maxWidth: "800px" }}>
                <h2 className="text-xl font-bold mb-4">
                    Let's talk about styling
                </h2>
                <div className="flex">
                    <div style={{ width: "400px" }}>
                        <h2>Choose your primary color:</h2>
                        <HexColorPicker
                            className="m-4"
                            color={color}
                            onChange={setColor}
                            style={{ width: "150px", height: "150px" }}
                        />
                        <h2>Choose your secondary color:</h2>
                        <HexColorPicker
                            className="m-4"
                            color={backGroundColor}
                            onChange={setBackGroundColor}
                            style={{ width: "150px", height: "150px" }}
                        />
                    </div>
                    <div
                        className="p-4"
                        style={{
                            width: "400px",
                            color: `${color}`,
                            backgroundColor: `${backGroundColor}`,
                            borderRadius: "10px",
                        }}
                    >
                        <h1 style={{}}>My title looks like this</h1>
                        <p>
                            <u>This is what a text looks like:</u>
                        </p>
                        <p className="ps-2 pt-2">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Laboriosam ex ipsa quis itaque soluta odio
                            molestias, maiores illum natus nihil nulla, enim
                            delectus vel reiciendis eius! Nam temporibus nobis
                            eum!
                        </p>
                    </div>
                </div>

                <div className="mt-8 flex justify-between">
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
