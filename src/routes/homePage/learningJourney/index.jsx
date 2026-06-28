import React from "react";
import "./learningJourney.scss"
import Button from "../../../componentes/button";
import AppStoreIcon from "../../../assets/logo/app-store.svg"
import GooglePlayIcon from "../../../assets/logo/google-play.svg"
import LearningImage from "../../../assets/images/learning.png"

export default function LearningJourney() {
    return (
        <div className="learningJourney">
            <div className="container">
                <div className="learningJourney-box">
                    <div className="learningJourney-title">
                        <h2>Start your learning Journey</h2>
                        <p>Choose your mode. Pick your skill. Begin today.</p>
                    </div>
                    <div className="learningJourney-buttonAlignment">
                        <div style={{ opacity: 1, transform: 'none' }}>
                            <Button buttonText={"Login"} />
                        </div>
                        <div className="learningJourney-twobutton">
                            <img src={AppStoreIcon} alt="AppStoreIcon"/>
                            <img src={GooglePlayIcon} alt="GooglePlayIcon"/>
                        </div>
                    </div>
                    <div className="learningJourney-imagealignment">
                        <img src={LearningImage} alt="LearningImage"/>
                    </div>
                </div>
            </div>
        </div>
    )
}