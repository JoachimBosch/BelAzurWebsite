import React, { useContext, useState } from 'react';
import { Button, Modal } from 'flowbite-react';
import MyContext from '../context/context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

const DeleteProfile = ({ show, onClose, personInfo }) => {
    const { deleteProfile, setPass } = useContext(MyContext);
    const [page, setPage] = useState(1);
    

    const handleNext = () => setPage((prevPage) => prevPage + 1);

    const handleChange = (e) => {
        setPass(e.target.value);
    };

    const handleSave = () => {
        deleteProfile(personInfo.id)
        onClose();
    };

    const handleClose = () => {
        setPage(1);
        onClose();
    }

    return (
        <>
            <Modal show={show} onClose={handleClose} className="mt-12 max-w-[500px] mx-auto p-6">
                <Modal.Header className="space-between p-2">

                </Modal.Header>
                { page === 1 && (
                    <div>
                        <Modal.Body>
                            <div className="space-y-1 modal-text text-center">
                                <div><FontAwesomeIcon icon={faCircleExclamation} size="2xl" style={{color: "#adb5c2",}} /></div>
                                <div>
                                    <p>Are you sure you want to delete your profile?</p>
                                    <p>This action is <strong>irreversible</strong>.</p>
                                </div>
                                <div></div>
                            </div>
                        </Modal.Body>
                        <Modal.Footer className="justify-center">
                            <Button size="sm" className="px-12 py-2 text-black border rounded-none" onClick={handleNext}>
                                Yes
                            </Button>
                            <Button size="sm" className="px-12 py-2 text-black border rounded-none" onClick={handleClose}>
                                Cancel
                            </Button>
                        </Modal.Footer>
                    </div>                  
                )}
                { page === 2 && (
                    <div>
                        <Modal.Body>
                            <div className="space-y-1 modal-text text-center">
                                <div><FontAwesomeIcon icon={faCircleExclamation} size="2xl" style={{color: "#adb5c2",}} /></div>
                                <div>
                                    <p>Type in your password to confirm</p>
                                </div>
                                <div className="pt-2">
                                    <input type="password" name="password" onChange={handleChange} style={{width: "250px"}}></input>
                                </div>
                            </div>
                        </Modal.Body>
                        <Modal.Footer className="justify-center">
                            <Button size="sm" className="px-12 py-2 text-black border rounded-none" onClick={handleSave}>
                                Yes
                            </Button>
                            <Button size="sm" className="px-12 py-2 text-black border rounded-none" onClick={handleClose}>
                                Cancel
                            </Button>
                        </Modal.Footer>
                    </div>                  
                )}
            </Modal>
        </>
    )
}

export default DeleteProfile;