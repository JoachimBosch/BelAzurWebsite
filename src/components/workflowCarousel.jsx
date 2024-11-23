import { Carousel } from "flowbite-react";
import howwework1 from "../../public/media/img/carousel/howwework1.png";
import howwework2 from "../../public/media/img/carousel/howwework2.png";
import howwework3 from "../../public/media/img/carousel/howwework3.png";
import howwework4 from "../../public/media/img/carousel/howwework4.png";
import howwework5 from "../../public/media/img/carousel/howwework5.png";
import howwework6 from "../../public/media/img/carousel/howwework6.png";
import howwework7 from "../../public/media/img/carousel/howwework7.png";

const WorkflowCarousel = () => {
    return (
        <>
            <div className="text-center text-4xl mt-8">
                <h1>How we work: </h1>
            </div>
            <div
                className="carousel mt-12 p-4 h-48 sm:h-64 xl:h-80 2xl:h-96 mx-auto"
                style={{ height: "500px", width: "600px" }}
            >
                <Carousel slide={false}>
                    <img src={howwework1} alt="..." />
                    <img src={howwework2} alt="..." />
                    <img src={howwework3} alt="..." />
                    <img src={howwework4} alt="..." />
                    <img src={howwework5} alt="..." />
                    <img src={howwework6} alt="..." />
                    <img src={howwework7} alt="..." />
                </Carousel>
            </div>
        </>
    );
};

export default WorkflowCarousel;
