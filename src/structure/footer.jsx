import { Link } from "react-router-dom";

const Footer = () => {

    return (
        <>
            <div className="mb-0 mt-20 border grid grid-cols-5 gap-4 footer">
                <div className="col-span-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, non saepe! Dolorem nam doloremque totam</div>
                <div className="col-span-3 reference">
                    Bel'Azur Coding © 2024
                    <br />
                    <Link to="/policy" className="footerLink">
                        Privacy Policy - Cookie Policy - Terms & Conditions
                    </Link>
                </div>
                <div className="col-span-1">
                    Facebook
                </div>
            </div>
        </>
    )

}

export default Footer;