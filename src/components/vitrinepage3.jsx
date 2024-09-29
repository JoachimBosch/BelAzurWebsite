import React, { useState, useContext } from 'react';
import MyContext from '../context/context';

const VitrinePage3 = () => {
    const {vitrineBuild, setVitrineBuild, file, setFile, handleNext, handlePrev, page, setPage} = useContext(MyContext)
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="mt-12 max-w-[800px] mx-auto p-6">
            <h2 className="text-xl font-bold mb-4">Now, how can customers reach you?</h2>
                <div className="flex flex-col">
                  <label for="contact_email">Contact email: </label>
                  <input type="text" name="contact_email" value={vitrineBuild.contact_email} onChange={(e) => setVitrineBuild({
                                  ...vitrineBuild,
                                  contact_email: e.target.value})}/>
                  <label for="contact_phone">Contact phone: </label>
                  <input type="subtext" name="contact_phone" value={vitrineBuild.contact_phone} onChange={(e) => setVitrineBuild({
                                  ...vitrineBuild,
                                  contact_phone: e.target.value})}/>
                  <label for="contact_address">Your address: </label>
                  <input type="subtext" name="contact_address" value={vitrineBuild.contact_address} onChange={(e) => setVitrineBuild({
                                  ...vitrineBuild,
                                  contact_address: e.target.value})}/>
                  <legend>Your opening hours:</legend>
                  <p>example: 09:00 to 18:00</p>
                  <div className="flex flex-col">
                    <div className="flex justify-between">
                      <div>
                        <input type="checkbox" id="scales" name="scales" />
                        <label for="scales" className="ml-2">Monday</label>
                      </div>
                      <input type="text"></input>
                    </div>
                    <div className="flex justify-between">
                      <div>
                        <input type="checkbox" id="scales" name="scales" />
                        <label for="scales" className="ml-2">Tuesday</label>
                      </div>
                      <input type="text"></input>
                    </div>
                    <div className="flex justify-between">
                      <div>
                        <input type="checkbox" id="scales" name="scales" />
                        <label for="scales" className="ml-2">Wednesday</label>
                      </div>
                      <input type="text"></input>
                    </div>
                    <div className="flex justify-between">
                      <div>
                        <input type="checkbox" id="scales" name="scales" />
                        <label for="scales" className="ml-2">Thursday</label>
                      </div>
                      <input type="text"></input>
                    </div>
                    <div className="flex justify-between">
                      <div>
                        <input type="checkbox" id="scales" name="scales" />
                        <label for="scales" className="ml-2">Friday</label>
                      </div>
                      <input type="text"></input>
                    </div>
                    <div className="flex justify-between">
                      <div>
                        <input type="checkbox" id="scales" name="scales" />
                        <label for="scales" className="ml-2">Saturday</label>
                      </div>
                      <input type="text"></input>
                    </div>
                    <div className="flex justify-between">
                      <div>
                        <input type="checkbox" id="scales" name="scales" />
                        <label for="scales" className="ml-2">Sunday</label>
                      </div>
                      <input type="text"></input>
                    </div>
                    <div className="flex justify-between">
                      <div>
                        <input type="checkbox" id="scales" name="scales" />
                        <label for="scales" className="ml-2">Holidays</label>
                      </div>
                      <input type="text"></input>
                    </div>
                  </div>
                  
                </div>
                <div className="mt-4 flex justify-between">
                  <button
                    onClick={handlePrev}
                    className="bg-gray-500 text-white px-4 py-2 rounded"
                  >
                    Go Back
                  </button>
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

export default VitrinePage3;