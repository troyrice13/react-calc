import React from "react";
import './NumPad.css';
import Button from "./components/Button";

export default function NumPad() {
    return (
        <div className="numpad">
            <button className="other-operations">AC</button>
            <button className="other-operations">+ / -</button>
            <button className="other-operations">%</button>
            <button className="main-operations">/</button>
            <button className="numbers">7</button>
            <button className="numbers">8</button>
            <button className="numbers">9</button>
            <button className="main-operations">x</button>
            <button className="numbers">4</button>
            <button className="numbers">5</button>
            <button className="numbers">6</button>
            <button className="main-operations">-</button>
            <button className="numbers">1</button>
            <button className="numbers">2</button>
            <button className="numbers">3</button>
            <button className="main-operations">+</button>
            <button className="zero">0</button>
            <button>.</button>
            <button className="main-operations">=</button>
        </div>
    )
}