import React from "react";
import "./featuredEducators.scss"
import AishwaryaAutiImage from "../../../assets/images/Aishwarya Auti.png"

export default function FeaturedEducators() {
    return (
        <div className="featuredEducators">
            <div className="container">
                <div>
                    <div className="featuredEducators-title">
                        <h2>Featured Educators</h2>
                    </div>
                    <div className="featuredEducators-grid">
                        <div className="featuredEducators-items">
                            <div className="featuredEducators-image">
                                <img src={AishwaryaAutiImage} alt="Aishwarya Auti"></img>
                            </div>
                            <div className="featuredEducators-details">
                                <h3>Aishwarya Auti</h3>
                                <p>
                                    Breaking down Ayurveda into practical, easy-to-follow lifestyle systems that help you achieve balance, vitality, and long-term wellness. From daily routines and diet to herbal remedies and mind-body harmony — this content focuses on sustainable healing, not quick fixes.
                                </p>
                            </div>
                        </div>
                        <div className="featuredEducators-items">
                            <div className="featuredEducators-image">
                                <img src={AishwaryaAutiImage} alt="Aishwarya Auti"></img>
                            </div>
                            <div className="featuredEducators-details">
                                <h3>Aishwarya Auti</h3>
                                <p>
                                    Breaking down Ayurveda into practical, easy-to-follow lifestyle systems that help you achieve balance, vitality, and long-term wellness. From daily routines and diet to herbal remedies and mind-body harmony — this content focuses on sustainable healing, not quick fixes.
                                </p>
                            </div>
                        </div>
                        <div className="featuredEducators-items">
                            <div className="featuredEducators-image">
                                <img src={AishwaryaAutiImage} alt="Aishwarya Auti"></img>
                            </div>
                            <div className="featuredEducators-details">
                                <h3>Aishwarya Auti</h3>
                                <p>
                                    Breaking down Ayurveda into practical, easy-to-follow lifestyle systems that help you achieve balance, vitality, and long-term wellness. From daily routines and diet to herbal remedies and mind-body harmony — this content focuses on sustainable healing, not quick fixes.
                                </p>
                            </div>
                        </div>
                        <div className="featuredEducators-items">
                            <div className="featuredEducators-image">
                                <img src={AishwaryaAutiImage} alt="Aishwarya Auti"></img>
                            </div>
                            <div className="featuredEducators-details">
                                <h3>Aishwarya Auti</h3>
                                <p>
                                    Breaking down Ayurveda into practical, easy-to-follow lifestyle systems that help you achieve balance, vitality, and long-term wellness. From daily routines and diet to herbal remedies and mind-body harmony — this content focuses on sustainable healing, not quick fixes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}