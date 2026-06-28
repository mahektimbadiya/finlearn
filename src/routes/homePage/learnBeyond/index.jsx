import React from "react";
import "./learnBeyond.scss"
import MaskImage from "../../../assets/images/mask.png"
import YoutubeImage from "../../../assets/images/blob-1774421458776image 12 (9).png"
import YoutubeIcon from "../../../assets/logo/youtube.svg"
import IntroducingFinLearnImage from "../../../assets/images/blob-1774421271834image 12 (7).png"

export default function LearnBeyond() {
    return (
        <div className="learnBeyond">
            <div className="container">
                <div>
                    <div className="learnBeyond-title">
                        <h2>Learn Beyond the Platform</h2>
                        <p>
                            Watch our latest market breakdowns, business insights, and expert sessions on YouTube.
                        </p>
                    </div>
                    <div className="learnBeyond-grid">
                        <div className="learnBeyond-items">
                            <div className="learnBeyond-cardbox">
                                <div className="learnBeyond-maskImage">
                                    <img src={MaskImage} alt="MaskImage" />
                                </div>
                                <div className="learnBeyond-image">
                                    <img className="YoutubeImage" src={YoutubeImage} alt="YoutubeImage" />
                                    <div className="learnBeyond-iconAlignment">
                                        <img className="YoutubeIcon" src={YoutubeIcon} alt="YoutubeIcon" />
                                    </div>
                                </div>
                                <div className="learnBeyond-details">
                                    <h3>
                                        FinLearn Academy: Upskill with Finance, Web3, and Tech Courses | Insightful Blogs & Creator Support
                                    </h3>
                                    <div className="learnBeyond-textalignment">
                                        <span>By Vito Carleon</span>
                                        <div className="learnBeyond-line"></div>
                                        <span>09 Oct 2024</span>
                                    </div>
                                    <div className="learnBeyond-textstyle">
                                        <p>
                                            Welcome to FinLearn—your premier destination for upskilling and advancing your professional journey .In this video, we delve into how FinLearn is designed to empower learners through meticulously curated courses, insightful blogs, and a robust community of like-minded individuals. Our platform offers unparalleled access to industry knowledge, whether your focus is in finance, technology, Web3, or creative writing.  At FinLearn, we not only provide technical skills but also foster a deeper understanding of emerging trends. With courses designed by experts and insightful blogs to keep you updated, you will be equipped to excel in your chosen field. Whether you’re aiming to sharpen your expertise or share your knowledge with the world, our supportive environment will ensure your continued growth and success.  SOCIAL MEDIA HANDLES:  🔗 Website: finlearn.info  📸 Instagram: @finlearn_academy 💼 LinkedIn: Finlearn Academy🐦 Twitter: Finlearn_Academy 🛡️ Discord: https://discord.com/invite/B9WXR24d🔗 Linktree: https://linktr.ee/finlearn.academy
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="learnBeyond-items">
                            <div className="learnBeyond-colgrid">
                                <div>
                                    <div className="platformCard-platformCard">
                                        <div className="platformCard-image">
                                            <img src={IntroducingFinLearnImage} alt="Introducing FinLearn: Your Path to Mastering Markets and Upskilling"/>
                                        </div>
                                        <div className="platformCard-details">
                                            <h3>Introducing FinLearn: Your Path to Mastering Markets and Upskilling</h3>
                                            <div className="platformCard-information">
                                                <span>By Mark Cuban</span>
                                                <div className="platformCard-line"></div>
                                                <span>23 August 2024</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}