import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="reference text-center">
                    <p>Bel'Azur Coding © 2025</p>
                    <div>
                        <Link
                            className="hover:underline"
                            to="/mentions-legales"
                            onClick={() => {
                                document.body.scrollTop = 0;
                            }}
                        >
                            Termes et Conditions
                        </Link>
                        &nbsp;-&nbsp;
                        <Link
                            className="hover:underline"
                            to="/privacypolicy"
                            onClick={() => {
                                document.body.scrollTop = 0;
                            }}
                        >
                            Politique de Confidentialité
                        </Link>
                        &nbsp;-&nbsp;
                        <Link
                            className="hover:underline"
                            to="/cookiepolicy"
                            onClick={() => {
                                document.body.scrollTop = 0;
                            }}
                        >
                            Politique de Cookies
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
