import React, { useState, useContext } from 'react';
import MyContext from '../context/context';

const VitrinePage4 = () => {
    const {vitrineBuild, setVitrineBuild, file, setFile, handleNext, handlePrev, page, setPage} = useContext(MyContext)
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="mt-12 max-w-[800px] mx-auto p-6">
            <h2 className="text-xl font-bold mb-4">Let's talk about styling</h2>
                <div className="flex-col">
                    <h2>Colors...</h2>
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

export default VitrinePage4;