import { useContext, useState } from "react";
import MyContext from "../context/context";
import UpdatePersonModal from "../components/updatePersonModal";
import UpdateAddressModal from "../components/updateAddressModal";
import DeleteProfile from "../components/deleteModal";


const Profile = () => {
    const { personInfo, setPersonInfo, deleteProfile } = useContext(MyContext);
    const [openPersonalModal, setOpenPersonalModal] = useState(false);
    const [openAddressModal, setOpenAddressModal] = useState(false);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);

    return (
        <>
            <div className="mt-12 max-w-[1100px] mx-auto py-20">
                <h1 className="text-center">Profile</h1>
                <div className="flex flex-col mx-10 md:mx-16 py-6">
                    <div className="px-4">
                        <h1  className="text-center">Contact information</h1>
                        <div className="">
                            <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">
                                First Name:
                            </label>
                            <div className="mt-2">
                                <input
                                id="firstName"
                                name="firstName"
                                type="text"
                                value={personInfo.first_name ? personInfo.first_name : ""}
                                disabled
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                            <label htmlFor="lastName" className="mt-2 block text-sm font-medium leading-6 text-gray-900">
                                Last Name:
                            </label>
                            <div className="mt-2">
                                <input
                                id="lastName"
                                name="lastName"
                                type="text"
                                value={personInfo.last_name ? personInfo.last_name : ""}
                                disabled
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                            <label htmlFor="companyName" className="mt-2 block text-sm font-medium leading-6 text-gray-900">
                                Company Name:
                            </label>
                            <div className="mt-2">
                                <input
                                id="companyName"
                                name="companyName"
                                type="text"
                                value={personInfo.company_name ? personInfo.company_name : ""}
                                disabled
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                            <label htmlFor="vat" className="mt-2 block text-sm font-medium leading-6 text-gray-900">
                                VAT Number:
                            </label>
                            <div className="mt-2">
                                <input
                                id="vat"
                                name="vat"
                                type="text"
                                value={personInfo.vat_id ? personInfo.vat_id : ""}
                                disabled
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                            <label htmlFor="phone" className="mt-2 block text-sm font-medium leading-6 text-gray-900">
                                Phone Number:
                            </label>
                            <div className="mt-2">
                                <input
                                id="phone"
                                name="phone"
                                type="text"
                                value={personInfo.phone ? personInfo.phone : ""}
                                disabled
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                            <label htmlFor="email" className="mt-2 block text-sm font-medium leading-6 text-gray-900">
                                Email address:
                            </label>
                            <div className="mt-2">
                                <input
                                id="email"
                                name="email"
                                type="email"
                                value={personInfo.email ? personInfo.email : ""}
                                disabled
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                            <div className="mt-4 flex justify-center">
                                <div>
                                    <button onClick={() => setOpenPersonalModal(true)}>Update contact info</button>
                                </div>
                                <div>
                                    <button>Update email address</button>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 px-4">
                        <h1 className="text-center">Address information</h1>
                        <div className="grid-cols-4">
                            <label htmlFor="street" className="block text-sm font-medium leading-6 text-gray-900">
                                Street and Number
                            </label>
                            <div className="mt-2">
                                <input
                                id="street"
                                name="street"
                                type="text"
                                value={personInfo.street || personInfo.street_number ? personInfo.street + " " + personInfo.street_number : ""}
                                disabled
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                            <label htmlFor="postal_code" className="mt-2 block text-sm font-medium leading-6 text-gray-900">
                                Postal Code:
                            </label>
                            <div className="mt-2">
                                <input
                                id="postal_code"
                                name="postal_code"
                                type="text"
                                value={personInfo.postal_code ? personInfo.postal_code : ""}
                                disabled
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                            <label htmlFor="city" className="mt-2 block text-sm font-medium leading-6 text-gray-900">
                                City:
                            </label>
                            <div className="mt-2">
                                <input
                                id="city"
                                name="city"
                                type="text"
                                value={personInfo.postal_code ? personInfo.postal_code : ""}
                                disabled
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                            <label htmlFor="country" className="mt-2 block text-sm font-medium leading-6 text-gray-900">
                                Country:
                            </label>
                            <div className="mt-2">
                                <input
                                id="country"
                                name="country"
                                type="text"
                                value={personInfo.country ? personInfo.country : ""}
                                disabled
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="mt-4 text-center">
                            <button onClick={() => setOpenAddressModal(true)}>Update address info</button>
                        </div>
                    </div>
                </div>
                <div className="mx-10 md:mx-16 py-6  text-center">
                    <h1>Quotes and invoices</h1>
                    <div>
                        <table>
                            <tr>
                                <th>Date</th>
                                <th>Description</th>
                                <th>Status</th>
                                <th>Download</th>
                            </tr>
                            <tr>
                                <td>08/09/2024</td>
                                <td>Quote for website with 7 pages and login functionality</td>
                                <td>Sent</td>
                                <td>BUTTON</td>
                            </tr>
                            <tr>
                                <td>11/09/2024</td>
                                <td>Invoice for website with 7 pages and login functionality</td>
                                <td>Awaiting payment</td>
                                <td>BUTTON</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className="mx-10 md:mx-16 py-6 text-center">
                    <h1>Danger zone:</h1>
                    <button onClick={() => setOpenDeleteModal(true)}>
                        Delete profile
                    </button>
                </div>
            </div>

            <UpdatePersonModal
                show={openPersonalModal}
                onClose={() => setOpenPersonalModal(false)}
                personInfo={personInfo}
                setPersonInfo={setPersonInfo}
            />

            <UpdateAddressModal
                show={openAddressModal}
                onClose={() => setOpenAddressModal(false)}
                personInfo={personInfo}
                setPersonInfo={setPersonInfo}
            />
            
            <DeleteProfile
                show={openDeleteModal}
                onClose={() => setOpenDeleteModal(false)}
                personInfo={personInfo}
            />
        </>

    )
}

export default Profile;