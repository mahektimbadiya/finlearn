import React from "react";
import "./button.scss"
import rightArrow from "../../assets/logo/right.svg"

export default function Button(props) {
    return (
        <div className="button">
            <button style={{ background: props.bgColor }}>
                <span>{props.buttonText}</span>
                <img style={{display: props.arrow}} src={rightArrow} alt="rightArrow"></img>
            </button>
        </div>
    )
}