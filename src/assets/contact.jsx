

const Contact = () => {


    return (
        <>
            <div className="my-28 mx-60 border">
                <div className="form-header text-center">
                    <h1>Contact us</h1>
                </div>
                <div className="px-4 py-4">
                    <form>
                        <label for="firstName">First Name</label> &nbsp;
                        <input type="text" id="fname" name="fname" />
                            <br />
                        <label for="lastName">Last name:</label> &nbsp;
                        <input type="text" id="lname" name="lname" />
                            <br />
                        <label for="phone">Phone number:</label> &nbsp;
                        <input type="text" id="phone" name="phone" />
                            <br />
                        <label for="email">Email address:</label> &nbsp;
                        <input type="email" id="email" name="email" />
                            <br />
                        <label for="company">Company:</label> &nbsp;
                        <input type="text" id="company" name="company" />
                            <br />
                        <label for="interest">I'm interested in:</label> &nbsp;
                            <select>
                                <option>Vitrine</option>
                                <option>Website</option>
                                <option>E-commerce</option>
                                <option>Other</option>
                            </select>
                            <br />
                        <label for="freeText">Company:</label> &nbsp;
                        <textarea type="text" id="freeText" name="freeText" />
                            <br />
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        
        </>

    )
}

export default Contact;