import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { Button, Modal } from "flowbite-react";
import cookies from "../../public/media/img/cookies.png"; // Ensure the path is correct

const CookieModal = () => {
    const [cookies, setCookie] = useCookies(["cookieConsent"]);
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (!cookies.cookieConsent) {
            setShow(true);
        }
    }, [cookies]);

    const handleAccept = () => {
        setCookie("cookieConsent", true, { path: "/", maxAge: 31536000 }); // Expires in 1 year
        setShow(false);
    };

    return (
        <Modal
            className="fixed top-0 left-0 right-0 z-50 p-4 overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
            dismissible
            show={show}
            onClose={() => setShow(false)}
        >
            <Modal.Header>
                <div className="cookieHeader">
                    <img src={cookies} style={{ height: "50px" }} alt="Cookies" />
                </div>
            </Modal.Header>
            <Modal.Body>
                <div className="flex text-center">
                    <p>We use cookies to enhance your experience. By accepting, you agree to our cookie policy.</p>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button color="gray" onClick={handleAccept}>
                    Accept
                </Button>
                <Button color="gray" onClick={() => setShow(false)}>
                    Decline
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CookieModal;