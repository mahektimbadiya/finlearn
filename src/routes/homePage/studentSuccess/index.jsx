import React from "react";
import "./studentSuccess.scss"
import QuoteImage from "../../../assets/logo/quote.svg"
import NadiaFernandesImage from "../../../assets/images/student6.jpg"
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

import ReactSlick from "react-slick";
const Slider = ReactSlick.default ?? ReactSlick;

export default function StudentSuccess() {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    return (
        <div className="studentSuccess">
            <div className="container">
                <div className="studentSuccess-title">
                    <h2>Student Success Stories</h2>
                </div>
            </div>
            <div className="studentSuccess-leftAlignment">
                <div className="studentSuccess-flexBox">
                    <div className="studentSuccess-items">
                        <div className="studentSuccess-image">
                            <img src={QuoteImage} alt="QuoteImage" />
                        </div>
                        <div className="studentSuccess-arrows">
                            <div className="studentSuccess-arrowBtn">
                                <ArrowLeft />
                            </div>
                            <div className="studentSuccess-line"></div>
                            <div className="studentSuccess-arrowBtn">
                                <ArrowRight />
                            </div>
                        </div>
                    </div>
                    <div className="studentSuccess-items">
                        <div className="swiper">
                            <Slider {...settings}>
                                <div className="swiper-slide">
                                    <div className="studentSuccess-relativeBox">
                                        <div className="studentSuccess-information">
                                            <p>
                                                The offline workshop wasn't just theory — it was real conversations and real feedback. I walked out with an actual growth strategy and a network I still use today.
                                            </p>
                                            <div className="studentSuccess-iconAlignment">
                                                <Star />
                                                <Star />
                                                <Star />
                                                <Star />
                                                <Star />
                                            </div>
                                            <div className="studentSuccess-vecAlignment"></div>
                                        </div>
                                        <div className="studentSuccess-profileAlignment">
                                            <img src={NadiaFernandesImage} alt="Nadia Fernandes, 33" />
                                            <div>
                                                <h4>Nadia Fernandes, 33</h4>
                                                <p>Hyderabad</p>
                                                <span className="studentSuccess-category">Business Development</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="studentSuccess-relativeBox">
                                        <div className="studentSuccess-information">
                                            <p>
                                                The offline workshop wasn't just theory — it was real conversations and real feedback. I walked out with an actual growth strategy and a network I still use today.
                                            </p>
                                            <div className="studentSuccess-iconAlignment">
                                                <Star />
                                                <Star />
                                                <Star />
                                                <Star />
                                                <Star />
                                            </div>
                                            <div className="studentSuccess-vecAlignment"></div>
                                        </div>
                                        <div className="studentSuccess-profileAlignment">
                                            <img src={NadiaFernandesImage} alt="Nadia Fernandes, 33" />
                                            <div>
                                                <h4>Nadia Fernandes, 33</h4>
                                                <p>Hyderabad</p>
                                                <span className="studentSuccess-category">Business Development</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="studentSuccess-relativeBox">
                                        <div className="studentSuccess-information">
                                            <p>
                                                The offline workshop wasn't just theory — it was real conversations and real feedback. I walked out with an actual growth strategy and a network I still use today.
                                            </p>
                                            <div className="studentSuccess-iconAlignment">
                                                <Star />
                                                <Star />
                                                <Star />
                                                <Star />
                                                <Star />
                                            </div>
                                            <div className="studentSuccess-vecAlignment"></div>
                                        </div>
                                        <div className="studentSuccess-profileAlignment">
                                            <img src={NadiaFernandesImage} alt="Nadia Fernandes, 33" />
                                            <div>
                                                <h4>Nadia Fernandes, 33</h4>
                                                <p>Hyderabad</p>
                                                <span className="studentSuccess-category">Business Development</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="studentSuccess-relativeBox">
                                        <div className="studentSuccess-information">
                                            <p>
                                                The offline workshop wasn't just theory — it was real conversations and real feedback. I walked out with an actual growth strategy and a network I still use today.
                                            </p>
                                            <div className="studentSuccess-iconAlignment">
                                                <Star />
                                                <Star />
                                                <Star />
                                                <Star />
                                                <Star />
                                            </div>
                                            <div className="studentSuccess-vecAlignment"></div>
                                        </div>
                                        <div className="studentSuccess-profileAlignment">
                                            <img src={NadiaFernandesImage} alt="Nadia Fernandes, 33" />
                                            <div>
                                                <h4>Nadia Fernandes, 33</h4>
                                                <p>Hyderabad</p>
                                                <span className="studentSuccess-category">Business Development</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="studentSuccess-relativeBox">
                                        <div className="studentSuccess-information">
                                            <p>
                                                The offline workshop wasn't just theory — it was real conversations and real feedback. I walked out with an actual growth strategy and a network I still use today.
                                            </p>
                                            <div className="studentSuccess-iconAlignment">
                                                <Star />
                                                <Star />
                                                <Star />
                                                <Star />
                                                <Star />
                                            </div>
                                            <div className="studentSuccess-vecAlignment"></div>
                                        </div>
                                        <div className="studentSuccess-profileAlignment">
                                            <img src={NadiaFernandesImage} alt="Nadia Fernandes, 33" />
                                            <div>
                                                <h4>Nadia Fernandes, 33</h4>
                                                <p>Hyderabad</p>
                                                <span className="studentSuccess-category">Business Development</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="studentSuccess-relativeBox">
                                        <div className="studentSuccess-information">
                                            <p>
                                                The offline workshop wasn't just theory — it was real conversations and real feedback. I walked out with an actual growth strategy and a network I still use today.
                                            </p>
                                            <div className="studentSuccess-iconAlignment">
                                                <Star />
                                                <Star />
                                                <Star />
                                                <Star />
                                                <Star />
                                            </div>
                                            <div className="studentSuccess-vecAlignment"></div>
                                        </div>
                                        <div className="studentSuccess-profileAlignment">
                                            <img src={NadiaFernandesImage} alt="Nadia Fernandes, 33" />
                                            <div>
                                                <h4>Nadia Fernandes, 33</h4>
                                                <p>Hyderabad</p>
                                                <span className="studentSuccess-category">Business Development</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="studentSuccess-relativeBox">
                                        <div className="studentSuccess-information">
                                            <p>
                                                The offline workshop wasn't just theory — it was real conversations and real feedback. I walked out with an actual growth strategy and a network I still use today.
                                            </p>
                                            <div className="studentSuccess-iconAlignment">
                                                <Star />
                                                <Star />
                                                <Star />
                                                <Star />
                                                <Star />
                                            </div>
                                            <div className="studentSuccess-vecAlignment"></div>
                                        </div>
                                        <div className="studentSuccess-profileAlignment">
                                            <img src={NadiaFernandesImage} alt="Nadia Fernandes, 33" />
                                            <div>
                                                <h4>Nadia Fernandes, 33</h4>
                                                <p>Hyderabad</p>
                                                <span className="studentSuccess-category">Business Development</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="studentSuccess-relativeBox">
                                        <div className="studentSuccess-information">
                                            <p>
                                                The offline workshop wasn't just theory — it was real conversations and real feedback. I walked out with an actual growth strategy and a network I still use today.
                                            </p>
                                            <div className="studentSuccess-iconAlignment">
                                                <Star />
                                                <Star />
                                                <Star />
                                                <Star />
                                                <Star />
                                            </div>
                                            <div className="studentSuccess-vecAlignment"></div>
                                        </div>
                                        <div className="studentSuccess-profileAlignment">
                                            <img src={NadiaFernandesImage} alt="Nadia Fernandes, 33" />
                                            <div>
                                                <h4>Nadia Fernandes, 33</h4>
                                                <p>Hyderabad</p>
                                                <span className="studentSuccess-category">Business Development</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="studentSuccess-relativeBox">
                                        <div className="studentSuccess-information">
                                            <p>
                                                The offline workshop wasn't just theory — it was real conversations and real feedback. I walked out with an actual growth strategy and a network I still use today.
                                            </p>
                                            <div className="studentSuccess-iconAlignment">
                                                <Star />
                                                <Star />
                                                <Star />
                                                <Star />
                                                <Star />
                                            </div>
                                            <div className="studentSuccess-vecAlignment"></div>
                                        </div>
                                        <div className="studentSuccess-profileAlignment">
                                            <img src={NadiaFernandesImage} alt="Nadia Fernandes, 33" />
                                            <div>
                                                <h4>Nadia Fernandes, 33</h4>
                                                <p>Hyderabad</p>
                                                <span className="studentSuccess-category">Business Development</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="studentSuccess-relativeBox">
                                        <div className="studentSuccess-information">
                                            <p>
                                                The offline workshop wasn't just theory — it was real conversations and real feedback. I walked out with an actual growth strategy and a network I still use today.
                                            </p>
                                            <div className="studentSuccess-iconAlignment">
                                                <Star />
                                                <Star />
                                                <Star />
                                                <Star />
                                                <Star />
                                            </div>
                                            <div className="studentSuccess-vecAlignment"></div>
                                        </div>
                                        <div className="studentSuccess-profileAlignment">
                                            <img src={NadiaFernandesImage} alt="Nadia Fernandes, 33" />
                                            <div>
                                                <h4>Nadia Fernandes, 33</h4>
                                                <p>Hyderabad</p>
                                                <span className="studentSuccess-category">Business Development</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}