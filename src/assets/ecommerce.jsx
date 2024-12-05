import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import ServiceButton from "../components/serviceButton";
import GetInTouch from "../components/getintouch";
import MailUs from "../components/mailUs";

const Ecommerce = () => {
    return (
        <>
<div className="mx-auto px-4 pt-28">

<div className="flex flex-col items-center text-center">
    <h1 className="mb-4">Drive Sales and Reach New Customers with a Seamless Onl ine Shopping Experience</h1>

    <p>
    E-commerce websites are designed to help you start selling online easily and effectively.
        <br />
        Whether you're a local artisan launching your first online shop, or a retail business ready to go global,
        <br />we build a secure, beautiful online store that makes shopping easy for your customers and managing orders a breeze for you. <br />
        Your options are limitless.
    </p>
</div>
<div
    className="my-10 mx-10 flex justify-center"
    style={{ height: "auto" }}
>
    <div
        className="border me-8 p-8 flex flex-col place-content-evenly"
        style={{
            width: "400px",
            backgroundColor: "white",
        }}
    >
        <p className="text-justify text-belazurblue">
        It's your complete online store where you can sell your own products or services. We can set it up using Shopify for a simple, ready-made solution or custom-build it for more control and flexibility. From displaying your products in an attractive layout to offering multiple payment options, we make sure your store is easy to use and optimized for sales.
        </p>
    </div>
    <div
        className="border"
        style={{ height: "400px", width: "400px" }}
    ></div>
</div>
<div className="text-center">
        <MailUs />
</div>
<div className="grid grid-cols-2 gap-4 mx-auto" style={{ maxWidth: "1240px"}}>
    <div className="border my-12 p-4" >
        <h2>Perfect for</h2>
        <div className="mx-auto ">
            <FontAwesomeIcon icon={faCheck} /> Businesses
            launching their first online store
            <br />
            <FontAwesomeIcon icon={faCheck} /> Retailers looking to
            expand their reach and sell more products 
            <br />
            <FontAwesomeIcon icon={faCheck} /> Businesses that need
            a tailored e-commerce experience 
            <br />
            <FontAwesomeIcon icon={faCheck} /> Shops wanting to
            offer easy, secure payment options <br />
        </div>
    </div>
    <div className="border my-12 p-4" >
        <h2>Benefits</h2>
        <div className="mx-auto ">
            <FontAwesomeIcon icon={faCheck} /> Sell to customers locally, nationally, or globally 
            <br />
            <FontAwesomeIcon icon={faCheck} /> Generate revenue even when your physical store is closed
            <br />
            <FontAwesomeIcon icon={faCheck} /> Safe and diverse payment options build customer trust 
            <br />
            <FontAwesomeIcon icon={faCheck} /> Tailored designs to match your brand and attract buyers
            <br />
            
        </div>
    </div>
</div>
<div className="mt-10 text-center">
    
</div>
<GetInTouch />
<ServiceButton />
</div>
        </>
    );
};

export default Ecommerce;
