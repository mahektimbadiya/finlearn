import React from "react";
import "./header.scss"
import FinLearnLogo from "../../assets/logo/FinLearn.svg"
import rightArrow from "../../assets/logo/right.svg"

export default function Header() {
    return (
        <header>
            <div className="container">
                <div className="headerAlignment">
                    <div className="header-leftSide">
                        <div className="header-logo">
                            <img src={FinLearnLogo} alt="FinLearnLogo"></img>
                        </div>
                    </div>
                    <div className="header-rightAlignment">
                        <div className="header-button">
                            <button>
                                <span>Login</span>
                                <img src={rightArrow} alt="rightArrow"></img>
                            </button>
                        </div>
                        <div className="header-button header-button-black">
                            <button>
                                <span>Signup</span>
                                <img src={rightArrow} alt="rightArrow"></img>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}