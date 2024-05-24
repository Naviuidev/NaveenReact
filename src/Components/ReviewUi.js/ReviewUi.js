import React, { useState } from 'react';
import './ReviewUi.css'; // Your CSS file for styling the slider

const ReviewUi = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = 3;

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === totalSlides - 1 ? 0 : prevSlide + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? totalSlides - 1 : prevSlide - 1));
    };
    const handleLinkClick = (event) => {
        event.stopPropagation();
    };

    const handleCardClick = () => {
        window.location.href = "https://www.gartner.com/reviews/market/master-data-management-solutions/vendor/pilog-group?utm_source=pilog-group&utm_medium=referral&utm_campaign=widget&utm_content=MTM5NmYwMDctYTYzMS00MjgyLTk5ZTAtNDhjNzYyMGUyOWVl";
    };

    return (
        <div>
            <section className=" ">
                <div className="container-fluid">
                    <div className="row align-items-center p-0">
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <div className='my-3 px-4 py-3 solCard1 rounded-4 mb-5 '>
                                <div id="myNodeContainer" style={{ width: '100%' }}>
                                    <div
                                        id="gartner-pi-widget"
                                        data-size="small"
                                        data-theme="dark"
                                        onClick={handleCardClick}
                                        className="gartner-pi-link"
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <div id="gartner-pi-datacontainer">
                                            <div className="gartner-pi-card">
                                                <div className="gartner-pi-logo d-flex justify-content-between">
                                                <div className="gartner-pi-overall-rating">
                                                            <h5 className='text-dark'><span className="">4.7</span>
                                                                <span className='px-3'>
                                                                    <i class="fa text-warning fa-star" aria-hidden="true"></i>
                                                                    <i class="fa text-warning fa-star" aria-hidden="true"></i>
                                                                    <i class="fa text-warning fa-star" aria-hidden="true"></i>
                                                                    <i class="fa text-warning fa-star" aria-hidden="true"></i>
                                                                    <i class="fa text-warning fa-star-half-o" aria-hidden="true"></i>

                                                                </span>
                                                            </h5>
                                                        </div>
                                                        <div>
                                                        <img src='https://reviews.static.gartner.com/public/Widget/img/logo-bubble-purple-bg-2x-min.png' className='img-fluid bg-dark p-1' />

                                                        </div>
                                                </div>
                                                <div className="gartner-pi-header">
                                                    <h5 className='text-dark py-3'>
                                                        PiLog Group<br /><span className='fs-6 text-dark'>
                                                            Master Data Management Solutions
                                                        </span>
                                                    </h5>

                                                </div>
                                                <div className="gartner-pi-stats">
                                                    <div className="gartner-pi-alignLeft">
                                                       
                                                        <div className='d-flex justify-content-between align-items-center'>
                                                            <div>
                                                                <h5>410 Ratings<br/><span className="fs-6">As of 24 May 2024</span></h5>
                                                            </div>
                                                            <div>
                                                            <a className='btn btn-dark px-3 py-0 rounded-pill' href="https://www.gartner.com/reviews/market/master-data-management-solutions/vendor/pilog?utm_source=pilog&utm_medium=referral&utm_campaign=widget&utm_content=MTM5NmYwMDctYTYzMS00MjgyLTk5ZTAtNDhjNzYyMGUyOWVl" onClick={handleLinkClick} target="_blank" rel="nofollow">Submit a review</a>
                                                            </div>
                                                        </div>
                                                      
                                                    </div>
                                                    <div className="gartner-pi-as-of-date" title="As of 24 May 2024"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                   
                                </div>
                            </div>
                            <div className="my-2">
                                <div className="slider">
                                    <button className="prev" onClick={prevSlide}>&#10094;</button>
                                    <button className="next" onClick={nextSlide}>&#10095;</button>
                                    <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                                        <div className="slide">Slide 1</div>
                                        <div className="slide">Slide 2</div>
                                        <div className="slide">Slide 3</div>
                                    </div>
                                </div>
                            </div>

                           
                        </div>
                        {/* end of the first col */}
                        <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 p-0'>
                           <div className='reviewBg'>

                           </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default ReviewUi;