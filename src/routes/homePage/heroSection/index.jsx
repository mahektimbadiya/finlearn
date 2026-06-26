import React from "react";
import "./heroSection.scss";
import ReactSlick from "react-slick";
const Slider = ReactSlick.default ?? ReactSlick;
import FromActiveExperts from "../../../assets/images/FromActiveExperts.jpg";
import ShapeYourFuture from "../../../assets/images/ShapeYourFuture.jpg";
import LearnWithoutExcuses from "../../../assets/images/LearnWithoutExcuses.jpg";
import rightArrow from "../../../assets/logo/right.svg";

export default function HeroSection() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        // cssEase: "linear"
        cssEase: "easy-in-out"
    };

    return (
        <div className="swiper">
            <Slider {...settings}>
                <div className="heroBanner-slider">
                    <div className="heroBanner">
                        <div className="heroBanner-image">
                            <img src={ShapeYourFuture} alt="Shape Your Future" />
                        </div>
                        <div className="herobanner-contentAlignment">
                            <div className="herobanner-wfull">
                                <div className="container">
                                    <div className="herobanner-textstyle">
                                        <h6>Build Real Skills.</h6>
                                        <h1>Shape Your Future.</h1>
                                        <p>
                                            Get complete learning tracks in Crypto, Forex, AI, Marketing & more — Beginner to Advanced, all in one place.
                                        </p>
                                        <div className="herobanner-buttonAlignment">
                                            <button>
                                                <span>Explore New Courses</span>
                                                <img src={rightArrow} alt="rightArrow" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="heroBanner-slider">
                    <div className="heroBanner">
                        <div className="heroBanner-image">
                            <img src={FromActiveExperts} alt="From Active Experts" />
                        </div>
                        <div className="herobanner-contentAlignment">
                            <div className="herobanner-wfull">
                                <div className="container">
                                    <div className="herobanner-textstyle">
                                        <h6>Learn Live.</h6>
                                        <h1>From Active Experts.</h1>
                                        <p>
                                            Join real-time market sessions, expert masterclasses, and intensive bootcamps led by practitioners who actively trade and build.
                                        </p>
                                        <div className="herobanner-buttonAlignment">
                                            <button>
                                                <span>Book Live Sessions</span>
                                                <img src={rightArrow} alt="rightArrow" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="heroBanner-slider">
                    <div className="heroBanner">
                        <div className="heroBanner-image">
                            <img src={LearnWithoutExcuses} alt="Learn Without Excuses" />
                        </div>
                        <div className="herobanner-contentAlignment">
                            <div className="herobanner-wfull">
                                <div className="container">
                                    <div className="herobanner-textstyle">
                                        <h6>Learn. Practice. Achieve.</h6>
                                        <h1>Learn Without Excuses.</h1>
                                        <p>
                                            50+ practical programs in AI, Finance, Marketing & Business — recorded, live, or offline.
                                        </p>
                                        <div className="herobanner-buttonAlignment">
                                            <button>
                                                <span>Explore All Courses</span>
                                                <img src={rightArrow} alt="rightArrow" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
}