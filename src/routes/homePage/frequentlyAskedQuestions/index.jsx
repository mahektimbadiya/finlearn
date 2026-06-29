import React from "react";
import "./frequentlyAskedQuestions.scss"
import { ChevronDown } from "lucide-react";

export default function FrequentlyAskedQuestions() {
    return (
        <div className="faqSection">
            <div className="container">
                <div className="faqSection-title">
                    <h2>Frequently Asked Questions</h2>
                </div>
                <div className="faqSection-grid">
                    <div className="faqSection-griditems">
                        <div className="faqSection-box">
                            <div className="faqSection-faqHeaderAlignment">
                                <h3>How long does it take to complete a website or app project?</h3>
                                <div className="faqSection-icon">
                                    <ChevronDown />
                                </div>
                            </div>
                        </div>
                        <div className="faqSection-box">
                            <div className="faqSection-faqHeaderAlignment">
                                <h3>How long does it take to complete a website or app project?</h3>
                                <div className="faqSection-icon">
                                    <ChevronDown />
                                </div>
                            </div>
                        </div>
                        <div className="faqSection-box">
                            <div className="faqSection-faqHeaderAlignment">
                                <h3>How long does it take to complete a website or app project?</h3>
                                <div className="faqSection-icon">
                                    <ChevronDown />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="faqSection-griditems">
                        <div className="faqSection-box">
                            <div className="faqSection-faqHeaderAlignment">
                                <h3>How long does it take to complete a website or app project?</h3>
                                <div className="faqSection-icon">
                                    <ChevronDown />
                                </div>
                            </div>
                        </div>
                        <div className="faqSection-box">
                            <div className="faqSection-faqHeaderAlignment">
                                <h3>How long does it take to complete a website or app project?</h3>
                                <div className="faqSection-icon">
                                    <ChevronDown />
                                </div>
                            </div>
                        </div>
                        <div className="faqSection-box">
                            <div className="faqSection-faqHeaderAlignment">
                                <h3>How long does it take to complete a website or app project?</h3>
                                <div className="faqSection-icon">
                                    <ChevronDown />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}