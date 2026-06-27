import React from "react";
import "./joinTheFinLearn.scss"
import { CircleCheck } from "lucide-react";
import Button from "../../../componentes/button";
import CommunityImage from "../../../assets/images/community.png"

export default function JoinTheFinLearn() {
    return (
        <div className="joinTheFinLearn">
            <div className="container">
                <div className="joinTheFinLearn-grid">
                    <div className="joinTheFinLearn-griditems">
                        <h2>Join the FinLearn community</h2>
                        <p>
                            Connect with ambitious learners, traders, and entrepreneurs who are building real skills together.
                        </p>
                        <div className="joinTheFinLearn-allIcontextAlignment">
                            <div className="joinTheFinLearn-iconText">
                                <CircleCheck />
                                <span>Live Discussion Rooms</span>
                            </div>
                            <div className="joinTheFinLearn-iconText">
                                <CircleCheck />
                                <span>Weekly Market Conversations</span>
                            </div>
                            <div className="joinTheFinLearn-iconText">
                                <CircleCheck />
                                <span>Peer Learning & Accountability</span>
                            </div>
                            <div className="joinTheFinLearn-iconText">
                                <CircleCheck />
                                <span>Expert Insights & Q&A</span>
                            </div>
                        </div>
                        <div>
                            <Button buttonText={"Join Our Community"}/>
                        </div>
                    </div>
                    <div className="joinTheFinLearn-griditems">
                        <div className="joinTheFinLearn-image">
                            <img src={CommunityImage} alt="CommunityImage" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}