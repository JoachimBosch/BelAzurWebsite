import React, { useState, useContext } from 'react';
import MyContext from '../context/context';

const VitrinePage1 = () => {
    const {vitrineBuild, setVitrineBuild, file, setFile, handleNext, handlePrev, page, setPage} = useContext(MyContext)
    const [isOpen, setIsOpen] = useState(false);
    const [domain, setDomain] = useState("newDomain")


    return (
        <>
            <div className="mt-12 max-w-[800px] mx-auto p-6">
                <h2 className="text-xl font-bold mb-4">Let's start with the basics...</h2>
                <div className="flex flex-col">

                    <div className="flex flex-col">
                    <fieldset>
                        <h2>Your domain name</h2>
                        <div>
                            <input type="radio" id="newDomain" name="domain" value="newDomain" onChange={() => {setDomain("newDomain")}} className="mr-4"/>
                            <label for="newDomain">I want a new domain name</label>
                        </div>
                        <div className="justify-between">
                            <input type="radio" id="existingDomain" name="domain" value="existingDomain" onChange={() => {setDomain("existingDomain")}} className="mr-4"/>
                            <label for="existingDomain">I already have a domain name</label>
                        </div>
                        <div className="mt-6">
                            <h2>{domain === "newDomain" ? "What domain names do you prefer?" : "Enter your existing domain name"}</h2>
                            {domain === "newDomain" ? 
                            <div className="flex flex-col">
                                <input type="text" id="domainInfo" placeholder="e.g: www.mycompanyname.fr"/>
                                <input type="text" id="domainInfo" placeholder="e.g: www.my-company-name.fr"/>
                                <input type="text" id="domainInfo" placeholder="e.g: www.mycompany-name.fr"/>
                            </div>
                            :
                            <div className="flex flex-col">
                                <input type="text" id="domainInfo" placeholder="e.g: www.mycompanyname.fr"/>
                            </div>}
                        </div>
                        {domain === "existingDomain" ?
                        <div className="mt-6 flex flex-col">
                            <h2>What is your current hosting provider?</h2>
                            <input type="text" id="domainInfo"/>
                            <h2>Are you currently under contract?</h2>
                            <div>
                                <input type="radio" id="underContract" name="domain" value="underContract" className="mr-4"/>
                                <label for="underContract">Yes</label>
                            </div>
                            <div>
                                <input type="radio" id="underContract" name="domain" value="underContract" className="mr-4"/>
                                <label for="underContract">No</label>
                            </div>
                        </div>
                        : ""}
                        <div>

                        </div>
                    </fieldset>   
                    </div>
                </div>
                <div className="mt-4">
                  <button
                    onClick={handleNext}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                  >
                    Next
                  </button>
                </div>
            </div>
        </>
    )
};

export default VitrinePage1;