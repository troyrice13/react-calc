import React from "react";
import './NumPad.css';
import Button from "./components/Button";

export default function NumPad({ onAC, onNumberClick, onOperation, onEqualClick }) {
    return (
        <div className="numpad">
            <button className="other-operations" onClick={() => onAC()}>AC</button>
            <button className="other-operations">+ / -</button>
            <button className="other-operations">%</button>
            <button className="main-operations" onClick={(e) => onOperation(e.target.textContent)}>/</button>
            <button className="numbers" onClick={(e) => onNumberClick(e.target.textContent)}>7</button>
            <button className="numbers" onClick={(e) => onNumberClick(e.target.textContent)}>8</button>
            <button className="numbers" onClick={(e) => onNumberClick(e.target.textContent)}>9</button>
            <button className="main-operations" onClick={() => onOperation('*')}>x</button>
            <button className="numbers" onClick={(e) => onNumberClick(e.target.textContent)}>4</button>
            <button className="numbers" onClick={(e) => onNumberClick(e.target.textContent)}>5</button>
            <button className="numbers" onClick={(e) => onNumberClick(e.target.textContent)}>6</button>
            <button className="main-operations" onClick={(e) => onOperation(e.target.textContent)}>-</button>
            <button className="numbers" onClick={(e) => onNumberClick(e.target.textContent)}>1</button>
            <button className="numbers" onClick={(e) => onNumberClick(e.target.textContent)}>2</button>
            <button className="numbers" onClick={(e) => onNumberClick(e.target.textContent)}>3</button>
            <button className="main-operations" onClick={(e) => onOperation(e.target.textContent)}>+</button>
            <button className="zero" onClick={() => onOperation('+')}>0</button>
            <button>.</button>
            <button className="main-operations" onClick={() => onEqualClick()}>=</button>
        </div>
    )
}