import React, { useContext, useState } from 'react';
import { Button, Modal } from 'flowbite-react';
import MyContext from '../context/context';


const UpdateAddressModal = ({ show, onClose, personInfo, setPersonInfo }) => {
    const { updatePersonInfo } = useContext(MyContext);
    const [addressFormData, setAddressFormData] = useState(personInfo);

    const handleChange = (e) => {
        setAddressFormData({
            ...addressFormData,
            [e.target.name]: e.target.value,
        });
        console.log(addressFormData)
    };

    const handleSave = () => {
        updatePersonInfo(personInfo.id, addressFormData);
        setPersonInfo(addressFormData);
        console.log(addressFormData);
        onClose();
    };

    return (
        <Modal dismissible show={show} onClose={onClose} className="mt-12 max-w-[1100px] mx-auto p-6">
            <Modal.Header className="space-between p-2">
                <h2 className="text-lg">Edit personal information</h2>
            </Modal.Header>
            <Modal.Body>
                <div className="space-y-1 modal-text">
                    <p className="text-md font-semibold">Street:</p>
                    <input
                        name="street"
                        className="border px-2 py-1 w-[100%]"
                        value={addressFormData.street || ''}
                        onChange={handleChange}
                    />
                    <p className="pt-1 text-md font-semibold">Street number:</p>
                    <input
                        name="street_number"
                        className="border px-2 py-1 w-[100%]"
                        value={addressFormData.street_number || ''}
                        onChange={handleChange}
                    />
                    <p className="pt-1 text-md font-semibold">Postal code:</p>
                    <input
                        name="postal_code"
                        className="border px-2 py-1 w-[100%]"
                        value={addressFormData.postal_code || ''}
                        onChange={handleChange}
                    />
                    <p className="pt-1 text-md font-semibold">City:</p>
                    <input
                        name="city"
                        className="border px-2 py-1 w-[100%]"
                        value={addressFormData.city || ''}
                        onChange={handleChange}
                    />
                    <p className="text-md pt-1 font-semibold">Country:</p>
                    <input
                        name="country"
                        className="border px-2 py-1 w-[100%]"
                        value={addressFormData.country || ''}
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

export default UpdateAddressModal;