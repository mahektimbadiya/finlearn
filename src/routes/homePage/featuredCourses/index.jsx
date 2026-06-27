import React from "react";
import "./featuredCourses.scss"
import PersonalFinanceWealthImage from "../../../assets/images/Personal Finance & Wealth.jpg"
import time from "../../../assets/logo/time.svg"
import star from "../../../assets/logo/Star.svg"
import rightArrow from "../../../assets/logo/right.svg"
import Button from "../../../componentes/button";

export default function FeaturedCourses() {
    return (
        <div className="featuredCourses">
            <div className="container">
                <div>
                    <div className="featuredCourses-sectionHeader">
                        <h2>
                            Featured Courses ( 10 )
                        </h2>
                        <div className="tab-tabDesign">
                            <Button arrow={"none"} buttonText={"Recorded"} />
                            <button>Live</button>
                            <button>Offline</button>
                        </div>
                    </div>
                    <div className="featuredCourses-grid">
                        <div className="coursesCard-gridItems">
                            <div className="coursesCard-cardimage">
                                <img src={PersonalFinanceWealthImage} alt="Personal Finance & Wealth Building Systems"></img>
                            </div>
                            <div className="coursesCard-details">
                                <h3>Personal Finance & Wealth Building Systems</h3>
                                <div className="coursesCard-costInformation">
                                    <h4>
                                        <span>Free</span>
                                    </h4>
                                    <div className="coursesCard-line"></div>
                                    <p>
                                        By Shreyas Thakur
                                    </p>
                                </div>
                                <div className="coursesCard-autherDetails">
                                    <span>
                                        <p>Beginner</p>
                                    </span>
                                    <span>
                                        <img src={time} alt="time" />
                                        50 Hours
                                    </span>
                                    <p>
                                        <img src={star} alt="star" />
                                        0.0
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="coursesCard-gridItems">
                            <div className="coursesCard-cardimage">
                                <img src={PersonalFinanceWealthImage} alt="Personal Finance & Wealth Building Systems"></img>
                            </div>
                            <div className="coursesCard-details">
                                <h3>Personal Finance & Wealth Building Systems</h3>
                                <div className="coursesCard-costInformation">
                                    <h4>
                                        <span>Free</span>
                                    </h4>
                                    <div className="coursesCard-line"></div>
                                    <p>
                                        By Shreyas Thakur
                                    </p>
                                </div>
                                <div className="coursesCard-autherDetails">
                                    <span>
                                        <p>Beginner</p>
                                    </span>
                                    <span>
                                        <img src={time} alt="time" />
                                        50 Hours
                                    </span>
                                    <p>
                                        <img src={star} alt="star" />
                                        0.0
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="coursesCard-gridItems">
                            <div className="coursesCard-cardimage">
                                <img src={PersonalFinanceWealthImage} alt="Personal Finance & Wealth Building Systems"></img>
                            </div>
                            <div className="coursesCard-details">
                                <h3>Personal Finance & Wealth Building Systems</h3>
                                <div className="coursesCard-costInformation">
                                    <h4>
                                        <span>Free</span>
                                    </h4>
                                    <div className="coursesCard-line"></div>
                                    <p>
                                        By Shreyas Thakur
                                    </p>
                                </div>
                                <div className="coursesCard-autherDetails">
                                    <span>
                                        <p>Beginner</p>
                                    </span>
                                    <span>
                                        <img src={time} alt="time" />
                                        50 Hours
                                    </span>
                                    <p>
                                        <img src={star} alt="star" />
                                        0.0
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="coursesCard-gridItems">
                            <div className="coursesCard-cardimage">
                                <img src={PersonalFinanceWealthImage} alt="Personal Finance & Wealth Building Systems"></img>
                            </div>
                            <div className="coursesCard-details">
                                <h3>Personal Finance & Wealth Building Systems</h3>
                                <div className="coursesCard-costInformation">
                                    <h4>
                                        <span>Free</span>
                                    </h4>
                                    <div className="coursesCard-line"></div>
                                    <p>
                                        By Shreyas Thakur
                                    </p>
                                </div>
                                <div className="coursesCard-autherDetails">
                                    <span>
                                        <p>Beginner</p>
                                    </span>
                                    <span>
                                        <img src={time} alt="time" />
                                        50 Hours
                                    </span>
                                    <p>
                                        <img src={star} alt="star" />
                                        0.0
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="coursesCard-gridItems">
                            <div className="coursesCard-cardimage">
                                <img src={PersonalFinanceWealthImage} alt="Personal Finance & Wealth Building Systems"></img>
                            </div>
                            <div className="coursesCard-details">
                                <h3>Personal Finance & Wealth Building Systems</h3>
                                <div className="coursesCard-costInformation">
                                    <h4>
                                        <span>Free</span>
                                    </h4>
                                    <div className="coursesCard-line"></div>
                                    <p>
                                        By Shreyas Thakur
                                    </p>
                                </div>
                                <div className="coursesCard-autherDetails">
                                    <span>
                                        <p>Beginner</p>
                                    </span>
                                    <span>
                                        <img src={time} alt="time" />
                                        50 Hours
                                    </span>
                                    <p>
                                        <img src={star} alt="star" />
                                        0.0
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="coursesCard-gridItems">
                            <div className="coursesCard-cardimage">
                                <img src={PersonalFinanceWealthImage} alt="Personal Finance & Wealth Building Systems"></img>
                            </div>
                            <div className="coursesCard-details">
                                <h3>Personal Finance & Wealth Building Systems</h3>
                                <div className="coursesCard-costInformation">
                                    <h4>
                                        <span>Free</span>
                                    </h4>
                                    <div className="coursesCard-line"></div>
                                    <p>
                                        By Shreyas Thakur
                                    </p>
                                </div>
                                <div className="coursesCard-autherDetails">
                                    <span>
                                        <p>Beginner</p>
                                    </span>
                                    <span>
                                        <img src={time} alt="time" />
                                        50 Hours
                                    </span>
                                    <p>
                                        <img src={star} alt="star" />
                                        0.0
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="coursesCard-gridItems">
                            <div className="coursesCard-cardimage">
                                <img src={PersonalFinanceWealthImage} alt="Personal Finance & Wealth Building Systems"></img>
                            </div>
                            <div className="coursesCard-details">
                                <h3>Personal Finance & Wealth Building Systems</h3>
                                <div className="coursesCard-costInformation">
                                    <h4>
                                        <span>Free</span>
                                    </h4>
                                    <div className="coursesCard-line"></div>
                                    <p>
                                        By Shreyas Thakur
                                    </p>
                                </div>
                                <div className="coursesCard-autherDetails">
                                    <span>
                                        <p>Beginner</p>
                                    </span>
                                    <span>
                                        <img src={time} alt="time" />
                                        50 Hours
                                    </span>
                                    <p>
                                        <img src={star} alt="star" />
                                        0.0
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="coursesCard-gridItems">
                            <div className="coursesCard-cardimage">
                                <img src={PersonalFinanceWealthImage} alt="Personal Finance & Wealth Building Systems"></img>
                            </div>
                            <div className="coursesCard-details">
                                <h3>Personal Finance & Wealth Building Systems</h3>
                                <div className="coursesCard-costInformation">
                                    <h4>
                                        <span>Free</span>
                                    </h4>
                                    <div className="coursesCard-line"></div>
                                    <p>
                                        By Shreyas Thakur
                                    </p>
                                </div>
                                <div className="coursesCard-autherDetails">
                                    <span>
                                        <p>Beginner</p>
                                    </span>
                                    <span>
                                        <img src={time} alt="time" />
                                        50 Hours
                                    </span>
                                    <p>
                                        <img src={star} alt="star" />
                                        0.0
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="coursesCard-gridItems">
                            <div className="coursesCard-cardimage">
                                <img src={PersonalFinanceWealthImage} alt="Personal Finance & Wealth Building Systems"></img>
                            </div>
                            <div className="coursesCard-details">
                                <h3>Personal Finance & Wealth Building Systems</h3>
                                <div className="coursesCard-costInformation">
                                    <h4>
                                        <span>Free</span>
                                    </h4>
                                    <div className="coursesCard-line"></div>
                                    <p>
                                        By Shreyas Thakur
                                    </p>
                                </div>
                                <div className="coursesCard-autherDetails">
                                    <span>
                                        <p>Beginner</p>
                                    </span>
                                    <span>
                                        <img src={time} alt="time" />
                                        50 Hours
                                    </span>
                                    <p>
                                        <img src={star} alt="star" />
                                        0.0
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="coursesCard-gridItems">
                            <div className="coursesCard-cardimage">
                                <img src={PersonalFinanceWealthImage} alt="Personal Finance & Wealth Building Systems"></img>
                            </div>
                            <div className="coursesCard-details">
                                <h3>Personal Finance & Wealth Building Systems</h3>
                                <div className="coursesCard-costInformation">
                                    <h4>
                                        <span>Free</span>
                                    </h4>
                                    <div className="coursesCard-line"></div>
                                    <p>
                                        By Shreyas Thakur
                                    </p>
                                </div>
                                <div className="coursesCard-autherDetails">
                                    <span>
                                        <p>Beginner</p>
                                    </span>
                                    <span>
                                        <img src={time} alt="time" />
                                        50 Hours
                                    </span>
                                    <p>
                                        <img src={star} alt="star" />
                                        0.0
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="featuredCourses-buttonCenter">
                        <Button buttonText={"All Courses"} />
                    </div>
                </div>
            </div>
        </div>
    )
}