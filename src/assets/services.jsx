import { Link } from 'react-router-dom';

const Services = () => {


    return (
        <>
            <div className="mx-auto mt-28" style={{ maxWidth: "1280px" }}>
                <div className="flex flex-row justify-center mx-8">
                    <Link to="/services/vitrine">
                        <div className="serviceItem">
                            <div>Vitrine</div>
                        </div>
                    </Link>
                    <Link to="/services/website">
                        <div className="serviceItem">Website</div>
                    </Link>
                    <Link to="/services/e-commerce">
                        <div className="serviceItem">E-commerce</div>
                    </Link>
                    <Link to="/services/apps">
                        <div className="serviceItem">App Development</div>
                    </Link>
                </div>
                <div className="mt-10 text-center">
                    <h1>Technologies we use:</h1>
                    <div>
                        Banner with technology logos (React.js, HTML5, CSS,
                        Shopify, etc.)
                    </div>
                </div>
                <div className="mt-10 text-center">
                    <h1>How we work</h1>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                    obcaecati quo quis. Quam, iusto soluta eveniet delectus a
                    dicta assumenda expedita. Amet reprehenderit necessitatibus
                    consequatur laboriosam sit, eligendi pariatur eaque. Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Eos illum
                    reiciendis, itaque minima neque aliquam! Harum, ut
                    exercitationem culpa nemo deserunt, eos nihil vel totam
                    omnis porro laudantium modi magnam? Lorem ipsum dolor sit
                    amet consectetur, adipisicing elit. Consequuntur incidunt,
                    ad totam exercitationem vitae rem pariatur itaque
                    cupiditate, non quo quia dolorum odit reprehenderit
                    obcaecati et dolores iusto eius odio.
                </div>
            </div>
        </>
    );
}

export default Services;