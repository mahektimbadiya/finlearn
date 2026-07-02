import React from "react";
import "./blogsAndInsights.scss";
import FinancialMarketsImage from "../../../assets/images/blob-1775540727423SP_B_1.png";
import ReactSlick from "react-slick";
import Button from "../../../componentes/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
const Slider = ReactSlick.default ?? ReactSlick;

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className="Left" onClick={onClick}>
      <ChevronLeft color="white"/>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return <div className="Right" onClick={onClick} >
    <ChevronRight color="white"/>
  </div>
}

export default function BlogsAndInsights() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "100px",
    slidesToShow: 3,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
                    <img
                      src={FinancialMarketsImage}
                      alt="Why Algo Trading is the Future of Financial Markets."
                    />
                  </div>
                  <div className="blogCard-details">
                    <h3>
                      Beginner’s Guide to Building Your First Trading Bot..
                    </h3>
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
                    <img
                      src={FinancialMarketsImage}
                      alt="Why Algo Trading is the Future of Financial Markets."
                    />
                  </div>
                  <div className="blogCard-details">
                    <h3>
                      Beginner’s Guide to Building Your First Trading Bot..
                    </h3>
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
                    <img
                      src={FinancialMarketsImage}
                      alt="Why Algo Trading is the Future of Financial Markets."
                    />
                  </div>
                  <div className="blogCard-details">
                    <h3>
                      Beginner’s Guide to Building Your First Trading Bot..
                    </h3>
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
                    <img
                      src={FinancialMarketsImage}
                      alt="Why Algo Trading is the Future of Financial Markets."
                    />
                  </div>
                  <div className="blogCard-details">
                    <h3>
                      Beginner’s Guide to Building Your First Trading Bot..
                    </h3>
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
                    <img
                      src={FinancialMarketsImage}
                      alt="Why Algo Trading is the Future of Financial Markets."
                    />
                  </div>
                  <div className="blogCard-details">
                    <h3>
                      Beginner’s Guide to Building Your First Trading Bot..
                    </h3>
                    <div className="blogCard-informationAlignment">
                      <span>By sahil</span>
                      <div className="blogCard-line"></div>
                      <span>7 April 2026</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="swiper-slide">
                <div className="blogCard">
                  <div className="blogCard-image">
                    <img
                      src={FinancialMarketsImage}
                      alt="Why Algo Trading is the Future of Financial Markets."
                    />
                  </div>
                  <div className="blogCard-details">
                    <h3>
                      Beginner’s Guide to Building Your First Trading Bot..
                    </h3>
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
                    <img
                      src={FinancialMarketsImage}
                      alt="Why Algo Trading is the Future of Financial Markets."
                    />
                  </div>
                  <div className="blogCard-details">
                    <h3>
                      Beginner’s Guide to Building Your First Trading Bot..
                    </h3>
                    <div className="blogCard-informationAlignment">
                      <span>By sahil</span>
                      <div className="blogCard-line"></div>
                      <span>7 April 2026</span>
                    </div>
                  </div>
                </div>
              </div> */}
            </Slider>
          </div>
        </div>
        <div className="blogsAndInsights-buttonCenter">
          <Button buttonText={"All Blogs"} />
        </div>
      </div>
    </div>
  );
}
