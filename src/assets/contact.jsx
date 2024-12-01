import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";

const Contact = () => {
  const initialValues = {
    fname: "",
    lname: "",
    phone: "",
    email: "",
    company: "",
    interest: "",
    freeText: "",
  };

  const validationSchema = Yup.object({
    fname: Yup.string().required("First Name is required"),
    lname: Yup.string().required("Last Name is required"),
    phone: Yup.string()
      .required("Phone number is required")
      .matches(/^[0-9]+$/, "Phone number must be numeric"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    company: Yup.string(),
    interest: Yup.string(),
    freeText: Yup.string(),
  });

  const handleSubmit = (values, { resetForm }) => {
    const serviceID = "PK_BelAzurCoding";
    const templateID = "template_jzgb55s";
    const userID = "zcRAvqelahig8lMvs";

    emailjs
      .send(serviceID, templateID, values, userID)
      .then(() => {
        alert("Email sent successfully!");
        resetForm();
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Failed to send email. Please try again.");
      });
  };

  return (
    <div className="intro pt-28 flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm text-center">
        <h1>Contact us</h1>
      </div>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm text-belazurblue">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="flex flex-col">
            <label htmlFor="fname" className="pb-2">First Name: *</label>
            <Field
              type="text"
              id="fname"
              name="fname"
              className="border-none rounded-md shadow-md"
            />
            <ErrorMessage
              name="fname"
              component="div"
              className="text-red-800 bold text-sm"
            />

            <label htmlFor="lname" className="pt-4 pb-2">Last Name: *</label>
            <Field
              type="text"
              id="lname"
              name="lname"
              className="border-none rounded-md shadow-md"
            />
            <ErrorMessage
              name="lname"
              component="div"
              className="text-red-800 bold text-sm"
            />

            <label htmlFor="phone" className="pt-4 pb-2">Phone Number: *</label>
            <Field
              type="text"
              id="phone"
              name="phone"
              className="border-none rounded-md shadow-md"
            />
            <ErrorMessage
              name="phone"
              component="div"
              className="text-red-800 bold text-sm"
            />

            <label htmlFor="email" className="pt-4 pb-2">Email Address: *</label>
            <Field
              type="email"
              id="email"
              name="email"
              className="border-none rounded-md shadow-md"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-800 bold text-sm"
            />

            <label htmlFor="company" className="pt-4 pb-2">Company:</label>
            <Field
              type="text"
              id="company"
              name="company"
              className="border-none rounded-md shadow-md"
            />

            <label htmlFor="interest" className="pt-4 pb-2">I'm interested in:</label>
            <Field
              as="select"
              name="interest"
              className="mb-2 border-none rounded-md shadow-md text-belazurblue"
            >
              <option value="">Select an option</option>
              <option value="One-Page Website">One-Page Website</option>
              <option value="Multi-Page Website">Multi-Page Website</option>
              <option value="E-commerce Website">E-commerce Website</option>
              <option value="Other">Other</option>
            </Field>

            <label htmlFor="freeText" className="pt-4 pb-2">Additional information:</label>
            <Field
              as="textarea"
              id="freeText"
              name="freeText"
              className="mb-4 border-none rounded-md shadow-md"
            />

            <button
              type="submit"
              className="bg-white hover:bg-white text-belazurblue font-semibold hover:text-belazurblue py-2 px-4 border-none border-blue-500 hover:border-transparent rounded button-home"
            >
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Contact;