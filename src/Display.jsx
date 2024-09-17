import React from "react";
import './Display.css'

export default function Display({ currentValue, total }) {
    return (
        <div className="main-container">
        <div className="display-container">
            <h1 className="display-value">{currentValue}</h1>
        </div>
        </div>
    )
}