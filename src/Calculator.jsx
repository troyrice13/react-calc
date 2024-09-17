import React, { useState } from "react";
import './Calculator.css';
import NumPad from "./NumPad";
import Display from "./Display";

export default function Calculator() {
    const [total, setTotal] = useState(0);
    const [currentValue, setCurrentValue] = useState(0);

    return(
        <div className='calc-container'>
            <div className="display-container">
                <Display currentValue={currentValue} total={total} />
            </div>
 
            <NumPad />
        </div>
    )
}