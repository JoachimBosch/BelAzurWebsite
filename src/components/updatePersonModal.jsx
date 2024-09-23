import React, { useContext, useState } from 'react';
import { Button, Modal } from 'flowbite-react';
import MyContext from '../context/context';


const UpdatePersonModal = ({ show, onClose, personInfo, setPersonInfo }) => {
    const { updatePersonInfo } = useContext(MyContext);
    const [formData, setFormData] = useState(personInfo);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        console.log(formData)
    };

    const handleSave = () => {
        updatePersonInfo(personInfo.id, formData);
        setPersonInfo(formData);
        console.log(formData);
        onClose();
    };

    return (
        <Modal dismissible show={show} onClose={onClose} className="mt-12 max-w-[1100px] mx-auto p-6">
            <Modal.Header className="space-between p-2">
                <h2 className="text-lg">Edit personal information</h2>
            </Modal.Header>
            <Modal.Body>
                <div className="space-y-1 modal-text">
                    <p className="text-md font-semibold">First name:</p>
                    <input
                        name="first_name"
                        className="border px-2 py-1 w-[100%]"
                        value={formData.first_name || ''}
                        onChange={handleChange}
                    />
                    <p className="pt-1 text-md font-semibold">Last name:</p>
                    <input
                        name="last_name"
                        className="border px-2 py-1 w-[100%]"
                        value={formData.last_name || ''}
                        onChange={handleChange}
                    />
                    <p className="pt-1 text-md font-semibold">Company name:</p>
                    <input
                        name="company_name"
                        className="border px-2 py-1 w-[100%]"
                        value={formData.company_name || ''}
                        onChange={handleChange}
                    />
                    <p className="pt-1 text-md font-semibold">VAT number:</p>
                    <input
                        name="vat_id"
                        className="border px-2 py-1 w-[100%]"
                        value={formData.vat_id || ''}
                        onChange={handleChange}
                    />
                    <p className="text-md pt-1 font-semibold">Phone number:</p>
                    <input
                        name="phone"
                        className="border px-2 py-1 w-[100%]"
                        value={formData.phone || ''}
                        onChange={handleChange}
                    />
                </div>
            </Modal.Body>
            <Modal.Footer className="justify-center">
                <Button size="sm" className="px-12 py-2 text-black border rounded-none" onClick={handleSave}>
                    Confirm
                </Button>
                <Button size="sm" className="px-12 py-2 text-black border rounded-none" onClick={onClose}>
                    Cancel
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default UpdatePersonModal;