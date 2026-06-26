import React from "react";
import "./exploreCategories.scss"
import HealthWellnessImage from "../../../assets/images/Health & Wellness.avif"

export default function ExploreCategories() {
    return (
        <div className="exploreCategories">
            <div className="container">
                <div className="exploreCategories-title">
                    <h2>
                        Explore Categories
                    </h2>
                </div>
                <div className="swiperTab">
                    <div className="swiperTab-tabInner">
                        <div className="swiperTab-tabdesign">
                            <div className="swiperTab-round">
                                <img src={HealthWellnessImage} alt="Health & Wellness"></img>
                            </div>
                            <span>Health & Wellness</span>
                        </div>
                        <div className="swiperTab-tabdesign">
                            <div className="swiperTab-round">
                                <img src={HealthWellnessImage} alt="Health & Wellness"></img>
                            </div>
                            <span>Health & Wellness</span>
                        </div>
                        <div className="swiperTab-tabdesign">
                            <div className="swiperTab-round">
                                <img src={HealthWellnessImage} alt="Health & Wellness"></img>
                            </div>
                            <span>Health & Wellness</span>
                        </div>
                        <div className="swiperTab-tabdesign">
                            <div className="swiperTab-round">
                                <img src={HealthWellnessImage} alt="Health & Wellness"></img>
                            </div>
                            <span>Health & Wellness</span>
                        </div>
                        <div className="swiperTab-tabdesign">
                            <div className="swiperTab-round">
                                <img src={HealthWellnessImage} alt="Health & Wellness"></img>
                            </div>
                            <span>Health & Wellness</span>
                        </div>
                        <div className="swiperTab-tabdesign">
                            <div className="swiperTab-round">
                                <img src={HealthWellnessImage} alt="Health & Wellness"></img>
                            </div>
                            <span>Health & Wellness</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}