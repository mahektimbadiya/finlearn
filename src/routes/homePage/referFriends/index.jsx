import React from "react";
import "./referFriends.scss"
import ReferImage from "../../../assets/images/refer.png"
import Button from "../../../componentes/button";

export default function ReferFriends() {
    return (
        <div className="referFriendsAlignment">
            <div className="container">
                <div className="referFriends-grid">
                    <div className="referFriends-griditems">
                        <img src={ReferImage} alt="ReferImage"></img>
                    </div>
                    <div className="referFriends-griditems">
                        <div className="referFriends-title">
                            <h2>Refer Friends. Earn Rewards. Grow Together.</h2>
                            <p>
                                Help others start their learning journey and earn exclusive rewards every time they enroll.
                            </p>
                        </div>
                        <div className="referFriends-allContentAlignment">
                            <div className="referFriends-content">
                                <h3>
                                    1
                                    <span>/</span>
                                </h3>
                                <p>Share your unique FinLearn referral link</p>
                            </div>
                            <div className="referFriends-content">
                                <h3>
                                    2
                                    <span>/</span>
                                </h3>
                                <p>Your friend enrolls in any course</p>
                            </div>
                            <div className="referFriends-content">
                                <h3>
                                    3
                                    <span>/</span>
                                </h3>
                                <p>You both receive rewards</p>
                            </div>
                        </div>
                        <div>
                            <Button buttonText={"Get Referral Link"}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}