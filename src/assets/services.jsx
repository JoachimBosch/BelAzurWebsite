import { Link } from "react-router-dom";

const Services = () => {
    return (
        <>
            <div className="mx-auto mt-28" style={{ maxWidth: "1280px" }}>
                <div className="mb-8 text-center">
                    <h1>The services we offer:</h1>
                </div>
                <div className="mb-8 text-center">
                    <p>
                        At Bel'Azur Coding, we are passionate about delivering
                        exceptional web and app development solutions that help
                        your business stand out in the digital landscape. We
                        take a personalized approach to every project, ensuring
                        that the final product aligns perfectly with your goals
                        and vision. From single-page websites to complex
                        e-commerce platforms and cutting-edge mobile apps, we
                        are equipped to bring your ideas to life.
                    </p>
                </div>

                <div className="mx-8 flex flex-col ">
                    <div className="flex pb-8">
                        <Link to="/services/vitrine">
                            <div className="serviceItem">
                                <div>One-Page Website</div>
                            </div>
                        </Link>
                        <div className="flex flex-col place-content-evenly">
                            <h2>
                                <strong>One-Page Website</strong>
                            </h2>
                            <p>
                                Perfect for small businesses, freelancers, or
                                events, our one-page websites make a big impact
                                with minimal fuss. Everything your customers
                                need to know is presented on one
                                easy-to-navigate page. It's quick to set up,
                                loads fast, and works smoothly on both computers
                                and phones. Get your business noticed with a
                                beautiful, straightforward site that tells your
                                story in seconds.
                            </p>
                        </div>
                    </div>
                    <div className="flex pb-8">
                        <div className="flex flex-col place-content-evenly">
                            <h2>
                                <strong>Multi-Page Website</strong>
                            </h2>
                            <p>
                                If your business has lots to share, our
                                multi-page websites provide the space you need
                                to cover it all. From your services and team to
                                testimonials and case studies, we organize your
                                content so visitors can easily find what they're
                                looking for. Our designs are clean,
                                mobile-friendly, and ready to expand as your
                                business grows. Make a lasting impression with a
                                site that's built for the long run.
                            </p>
                        </div>
                        <Link to="/services/website">
                            <div className="serviceItem">Website</div>
                        </Link>
                    </div>
                    <div className="flex pb-8">
                        <Link to="/services/e-commerce">
                            <div className="serviceItem">E-commerce</div>
                        </Link>
                        <div className="flex flex-col place-content-evenly">
                            <h2>
                                <strong>E-commerce Website</strong>
                            </h2>
                            <p>
                                Ready to take your store online? We create
                                secure and stylish e-commerce websites, either
                                with Shopify for a simple setup or custom-built
                                for more flexibility. From showcasing your
                                products to a smooth checkout process, we make
                                online shopping easy for your customers. Plus,
                                you can manage your stock and orders
                                effortlessly. Start selling smarter and growing
                                your business faster.
                            </p>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="flex flex-col place-content-evenly">
                            <h2>
                                <strong>App development</strong>
                            </h2>
                            <p>
                                Whether you’re looking to build a booking app
                                for your services or create something entirely
                                new, we’ve got you covered. Using the latest
                                technology, we develop mobile apps for both iOS
                                and Android, designed to be fast, secure, and
                                easy to use. Our apps are custom-made for your
                                business, giving your customers a reliable and
                                enjoyable experience. Make your mark in the
                                mobile world.
                            </p>
                        </div>
                        <Link to="/services/apps">
                            <div className="serviceItem">App development</div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Services;
