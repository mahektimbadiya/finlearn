import React from "react";
import "./coursesSection.scss"
import RecordedImage from "../../../assets/images/recordedC.png"
import LiveTvImage from "../../../assets/images/live-tvC.png"
import OfflineImage from "../../../assets/images/offlineC.png"

export default function CoursesSection() {
    return (
        <div className="coursesSection">
            <div className="conatiner">
                <div className="coursesSection-grid">
                    <div className="coursesSection-gridItems">
                        <div className="coursesSection-content">
                            <h3>Recorded Courses</h3>
                            <p>
                                Learn anytime. Structured modules with lifetime access. At your convenience.
                            </p>
                        </div>
                        <div className="coursesSection-image">
                            <img src={RecordedImage} alt="RecordedImage"></img>
                        </div>
                    </div>
                    <div className="coursesSection-gridItems">
                        <div className="coursesSection-image">
                            <img src={LiveTvImage} alt="LiveTvImage"></img>
                        </div>
                        <div className="coursesSection-content">
                            <h3>Live Courses</h3>
                            <p>
                                Interactive sessions. Real-time market breakdowns.
                            </p>
                        </div>
                    </div>
                    <div className="coursesSection-gridItems">
                        <div className="coursesSection-content">
                            <h3>Offline Courses</h3>
                            <p>
                                Classroom experience. Practical workshops & mentorship.
                            </p>
                        </div>
                        <div className="coursesSection-image">
                            <img src={OfflineImage} alt="OfflineImage"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}