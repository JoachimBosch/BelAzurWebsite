import javascript from "../../public/media/img/javascript.png"
import html5 from "../../public/media/img/html5.png";
import reactLogo from "../../public/media/img/react-logo.png";
import css3 from "../../public/media/img/css3.png";
import tailwind from "../../public/media/img/tailwind.png";
import bootstrap from "../../public/media/img/bootstrap.png";
import shopify from "../../public/media/img/shopify.png";

const Technologies = () => {


    return (
        <div className="border px-8 py-10 flex justify-center">
            <div className="pe-4">
                <img
                    src={html5}
                    alt="HTML5 logo"
                    style={{ height: "150px", width: "150px" }}
                    title="HTML5"
                />
            </div>
            <div className="pe-4">
                <img
                    src={css3}
                    alt="CSS3 logo"
                    style={{ height: "150px", width: "150px" }}
                    title="CSS3"
                />
            </div>
            <div className="pe-4">
                <img
                    src={tailwind}
                    alt="Tailwind logo"
                    style={{ height: "150px", width: "150px" }}
                    title="Tailwind"
                />
            </div>
            <div className="pe-4">
                <img
                    src={bootstrap}
                    alt="Bootstrap logo"
                    style={{ height: "150px", width: "150px" }}
                    title="Bootstrap"
                />
            </div>
            <div className="pe-4">
                <img
                    src={javascript}
                    alt="JavaScript logo"
                    style={{ height: "150px", width: "150px" }}
                    title="JavaScript"
                />
            </div>
            <div className="pe-4">
                <img
                    src={reactLogo}
                    alt="React and React Native logo"
                    style={{ height: "150px", width: "150px" }}
                    title="React and React Native"
                />
            </div>
            <div className="pe-4">
                <img
                    src={shopify}
                    alt="Shopify logo"
                    style={{ height: "150px", width: "150px" }}
                    title="Shopify"
                />
            </div>
        </div>
    );
}

export default Technologies