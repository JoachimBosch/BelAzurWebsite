import React, { useState, useContext } from 'react';
import MyContext from '../context/context';

const VitrineModal = () => {
  const {vitrineBuild, setVitrineBuild, file, setFile} = useContext(MyContext)
  const [isOpen, setIsOpen] = useState(false);
  const [page, setPage] = useState(1);
  

    function saveImage(e) {
        setFile(URL.createObjectURL(e.target.files[0]));
    } 

  const handleNext = () => setPage((prevPage) => prevPage + 1);
  const handlePrev = () => setPage((prevPage) => prevPage - 1);

  const closeModal = () => {
    setIsOpen(false);
    setPage(1); 
  };

  console.log(vitrineBuild)

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Start building now
      </button>

      {/* Modal Container */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black bg-opacity-50"></div>
          <div className="relative bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            >
              &times;
            </button>

            {/* Page 1 */}
            {page === 1 && (
              <div>
                <h2 className="text-xl font-bold mb-4">Let's start with the basics...</h2>
                <div className="flex flex-col">
                  <label for="logo">Upload your logo: </label>
                  <input type="file" accept="image/png, image/jpeg" name="logo" onChange={(e) => {saveImage;
                      setVitrineBuild({
                          ...vitrineBuild,
                          logo: file})}
                  }/> 
                  <label for="title">Title: </label>
                  <input type="text" name="title" value={vitrineBuild.title} onChange={(e) => setVitrineBuild({
                                  ...vitrineBuild,
                                  title: e.target.value})}/>
                  <label for="subtext">Subtitle </label>
                  <input type="subtext" name="subtext" value={vitrineBuild.subtitle} onChange={(e) => setVitrineBuild({
                                  ...vitrineBuild,
                                  subtitle: e.target.value})}/>
                  <label for="logo">Upload an image: </label>
                  <input type="file" accept="image/png, image/jpeg" name="logo" onChange={(e) => {saveImage;
                      setVitrineBuild({
                          ...vitrineBuild,
                          img1_url: file})}
                  }/>
                  <label for="header">Image text</label>
                  <textarea type="text" name="header" value={vitrineBuild.img1_text} onChange={(e) => 
                      setVitrineBuild({
                          ...vitrineBuild,
                          img1_text: e.target.value})}/>
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
            )}

            {/* Page 2 */}
            {page === 2 && (
              <div>
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
                    Previous
                  </button>
                  <button
                    onClick={handleNext}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {/* Page 3 */}
            {page === 3 && (
              <div>
                <h2 className="text-xl font-bold mb-4">Cool. Now some styling!</h2>
                <div className="flex flex-col">
                <label for="colors">Choose a color palette:</label>
                  <select name="colors" id="colors">
                    <option value="black">Black and white</option>
                    <option value="blue">Blue</option>
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="yellow">Yellow</option>
                  </select>
                
                </div>
                <div className="mt-4 flex justify-between">
                  <button
                    onClick={handlePrev}
                    className="bg-gray-500 text-white px-4 py-2 rounded"
                  >
                    Previous
                  </button>
                  <button
                    onClick={closeModal}
                    className="bg-green-500 text-white px-4 py-2 rounded"
                  >
                    Finish
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default VitrineModal;
