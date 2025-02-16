import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="reference text-center">
                    <p>Bel'Azur Coding © 2025 -</p>&nbsp;
                    <Link className="hover:underline" to="/mentions-legales">Mentions légales</Link>
                    &nbsp;&&nbsp;
                    <Link className="hover:underline" to="/cgu">
                    CGU
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Footer;
