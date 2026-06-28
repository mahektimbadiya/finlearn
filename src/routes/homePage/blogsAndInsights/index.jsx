import React from "react";
import "./blogsAndInsights.scss"
import FinancialMarketsImage from "../../../assets/images/blob-1775540727423SP_B_1.png"
import ReactSlick from "react-slick";
import Button from "../../../componentes/button";
const Slider = ReactSlick.default ?? ReactSlick;

export default function BlogsAndInsights() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3.5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    return (
        <div className="blogsAndInsights">
            <div className="container">
                <div className="blogsAndInsights-title">
                    <h2>Blogs and Insights</h2>
                </div>
                <div className="blogsAndInsights-relativeSection">
                    <div className="swiper">
                        <Slider {...settings}>
                            <div className="swiper-slide">
                                <div className="blogCard">
                                    <div className="blogCard-image">
                                        <img src={FinancialMarketsImage} alt="Why Algo Trading is the Future of Financial Markets." />
                                    </div>
                                    <div className="blogCard-details">
                                        <h3>Beginner’s Guide to Building Your First Trading Bot..</h3>
                                        <div className="blogCard-informationAlignment">
                                            <span>By sahil</span>
                                            <div className="blogCard-line"></div>
                                            <span>7 April 2026</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="blogCard">
                                    <div className="blogCard-image">
                                        <img src={FinancialMarketsImage} alt="Why Algo Trading is the Future of Financial Markets." />
                                    </div>
                                    <div className="blogCard-details">
                                        <h3>Beginner’s Guide to Building Your First Trading Bot..</h3>
                                        <div className="blogCard-informationAlignment">
                                            <span>By sahil</span>
                                            <div className="blogCard-line"></div>
                                            <span>7 April 2026</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="blogCard">
                                    <div className="blogCard-image">
                                        <img src={FinancialMarketsImage} alt="Why Algo Trading is the Future of Financial Markets." />
                                    </div>
                                    <div className="blogCard-details">
                                        <h3>Beginner’s Guide to Building Your First Trading Bot..</h3>
                                        <div className="blogCard-informationAlignment">
                                            <span>By sahil</span>
                                            <div className="blogCard-line"></div>
                                            <span>7 April 2026</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="blogCard">
                                    <div className="blogCard-image">
                                        <img src={FinancialMarketsImage} alt="Why Algo Trading is the Future of Financial Markets." />
                                    </div>
                                    <div className="blogCard-details">
                                        <h3>Beginner’s Guide to Building Your First Trading Bot..</h3>
                                        <div className="blogCard-informationAlignment">
                                            <span>By sahil</span>
                                            <div className="blogCard-line"></div>
                                            <span>7 April 2026</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="blogCard">
                                    <div className="blogCard-image">
                                        <img src={FinancialMarketsImage} alt="Why Algo Trading is the Future of Financial Markets." />
                                    </div>
                                    <div className="blogCard-details">
                                        <h3>Beginner’s Guide to Building Your First Trading Bot..</h3>
                                        <div className="blogCard-informationAlignment">
                                            <span>By sahil</span>
                                            <div className="blogCard-line"></div>
                                            <span>7 April 2026</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="blogCard">
                                    <div className="blogCard-image">
                                        <img src={FinancialMarketsImage} alt="Why Algo Trading is the Future of Financial Markets." />
                                    </div>
                                    <div className="blogCard-details">
                                        <h3>Beginner’s Guide to Building Your First Trading Bot..</h3>
                                        <div className="blogCard-informationAlignment">
                                            <span>By sahil</span>
                                            <div className="blogCard-line"></div>
                                            <span>7 April 2026</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="blogCard">
                                    <div className="blogCard-image">
                                        <img src={FinancialMarketsImage} alt="Why Algo Trading is the Future of Financial Markets." />
                                    </div>
                                    <div className="blogCard-details">
                                        <h3>Beginner’s Guide to Building Your First Trading Bot..</h3>
                                        <div className="blogCard-informationAlignment">
                                            <span>By sahil</span>
                                            <div className="blogCard-line"></div>
                                            <span>7 April 2026</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
                <div className="blogsAndInsights-buttonCenter">
                    <Button buttonText={"All Blogs"} />
                </div>
            </div>
        </div>
    )
}