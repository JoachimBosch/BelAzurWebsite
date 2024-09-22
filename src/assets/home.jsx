import { Link } from 'react-router-dom';
import bg_video from '../../public/media/video/bg_video.mp4'
import Pricing from './pricing';
import Workflow from './workflow';

const Home = () => {

    return (
        <>
        <div className="container mt-28">
            <div className="grid grid-cols-4 mx-4" style={{height: "auto", backgroundColor: "#E9F2F8"}}>
                <video autoPlay loop muted src={bg_video} className="col-span-3"></video>
                <div className="col-span-1 my-auto">
                    <h1>Bel'Azur coding</h1>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                </div>
                
            </div>
            <div className="mt-8 mx-4 flex flex-col content-center">
                <h1 className="intro">Lorem ipsum dolor sit amet</h1>
                <span>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum corrupti necessitatibus, pariatur molestias in asperiores at dolores, recusandae incidunt illum odio sunt porro voluptatem numquam, repellendus delectus sint maxime rerum!
                </span>
            </div>
            <div>
                <Pricing />
            </div>
            <div className="clientBanner flex justify-center border gap-20" style={{height: "100px"}}>
                <span>Img1</span>
                <span>Img1</span>
                <span>Img1</span>
                <span>Img1</span>
            </div>
                <Workflow />
            <div className="text-center">
                <h1>Interested in having an open conversation?</h1>
                <Link to="/contact">
                    <button>Let's get in touch</button>
                </Link>
            </div>

        </div>
        </>
    )
};

export default Home;