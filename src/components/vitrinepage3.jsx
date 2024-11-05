import React, { useState, useContext } from "react";
import MyContext from "../context/context";
import { Link } from "react-router-dom";

const VitrinePage3 = () => {
    const {
        vitrineBuild,
        setVitrineBuild,
    } = useContext(MyContext);

    return (
        <>
            <div className="mx-auto mt-28" style={{ maxWidth: "800px" }}>
                <h2 className="text-xl font-bold mb-4">
                    Now, how can customers reach you?
                </h2>
                <div className="flex flex-col">
                    <label for="contact_email">Contact email: </label>
                    <input
                        type="text"
                        name="contact_email"
                        onChange={(e) =>
                            setVitrineBuild({
                                ...vitrineBuild,
                                contact_email: e.target.value,
                            })
                        }
                    />
                    <label for="contact_phone">Contact phone: </label>
                    <input
                        type="text"
                        name="contact_phone"
                        onChange={(e) =>
                            setVitrineBuild({
                                ...vitrineBuild,
                                contact_phone: e.target.value,
                            })
                        }
                    />
                    <label for="contact_address">Your address: </label>
                    <input
                        type="text"
                        name="contact_address"
                        onChange={(e) =>
                            setVitrineBuild({
                                ...vitrineBuild,
                                contact_address: e.target.value,
                            })
                        }
                    />
                    <legend>Your opening hours:</legend>
                    <p>example: 09:00 to 18:00</p>
                    <div className="flex flex-col">
                        <div className="flex justify-between">
                            <div>
                                <input
                                    type="checkbox"
                                    id="scales"
                                    name="scales"
                                />
                                <label for="scales" className="ml-2">
                                    Monday
                                </label>
                            </div>
                            <input type="text"></input>
                        </div>
                        <div className="flex justify-between">
                            <div>
                                <input
                                    type="checkbox"
                                    id="scales"
                                    name="scales"
                                />
                                <label for="scales" className="ml-2">
                                    Tuesday
                                </label>
                            </div>
                            <input type="text"></input>
                        </div>
                        <div className="flex justify-between">
                            <div>
                                <input
                                    type="checkbox"
                                    id="scales"
                                    name="scales"
                                />
                                <label for="scales" className="ml-2">
                                    Wednesday
                                </label>
                            </div>
                            <input type="text"></input>
                        </div>
                        <div className="flex justify-between">
                            <div>
                                <input
                                    type="checkbox"
                                    id="scales"
                                    name="scales"
                                />
                                <label for="scales" className="ml-2">
                                    Thursday
                                </label>
                            </div>
                            <input type="text"></input>
                        </div>
                        <div className="flex justify-between">
                            <div>
                                <input
                                    type="checkbox"
                                    id="scales"
                                    name="scales"
                                />
                                <label for="scales" className="ml-2">
                                    Friday
                                </label>
                            </div>
                            <input type="text"></input>
                        </div>
                        <div className="flex justify-between">
                            <div>
                                <input
                                    type="checkbox"
                                    id="scales"
                                    name="scales"
                                />
                                <label for="scales" className="ml-2">
                                    Saturday
                                </label>
                            </div>
                            <input type="text"></input>
                        </div>
                        <div className="flex justify-between">
                            <div>
                                <input
                                    type="checkbox"
                                    id="scales"
                                    name="scales"
                                />
                                <label for="scales" className="ml-2">
                                    Sunday
                                </label>
                            </div>
                            <input type="text"></input>
                        </div>
                        <div className="flex justify-between">
                            <div>
                                <input
                                    type="checkbox"
                                    id="scales"
                                    name="scales"
                                />
                                <label for="scales" className="ml-2">
                                    Holidays
                                </label>
                            </div>
                            <input type="text"></input>
                        </div>
                    </div>
                </div>
                <div className="mt-4 flex justify-between">
                    <Link to="/services/vitrine/build/4">
                        <button>Next page</button>
                    </Link>
                    <Link to="/services/vitrine/build/2">
                        <button>Previous page</button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default VitrinePage3;
