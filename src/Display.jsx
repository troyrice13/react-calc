import React from "react";
import './Display.css'

export default function Display({ currentValue, total }) {
    return (
        <div className="main-container">
        <div className="display-container">
            <h2 className="display-value">{total}</h2>
        </div>
        </div>
    )
}