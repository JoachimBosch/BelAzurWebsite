

const Profile = () => {


    return (
        <>
            <div className="mt-28 mx-28">
                <div className="grid grid-cols-2">
                    <div className="cols-1 px-4">
                        <h1 className="text-center">Contact information</h1>
                        <div className="">
                            <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">
                                First Name:
                            </label>
                            <div className="mt-2">
                                <input
                                id="firstName"
                                name="firstName"
                                type="text"
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
                                disabled
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="mt-4 text-center">
                            <button>Update contact info</button>
                        </div>
                    </div>
                    <div className="cols-1 px-4">
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
                                disabled
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="mt-4 text-center">
                            <button>Update address info</button>
                        </div>
                    </div>
                </div>
                <div className="mt-6 text-center">
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
                <div className="mt-6 text-center">
                    <h1>Danger zone:</h1>
                    <button>
                        Delete profile
                    </button>
                </div>
            </div>
        </>

    )
}

export default Profile;