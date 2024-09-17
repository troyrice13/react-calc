import React, { useState } from "react";
import './Calculator.css';
import NumPad from "./NumPad";
import Display from "./Display";

export default function Calculator() {
    const [total, setTotal] = useState(0);
    const [currentValue, setCurrentValue] = useState(3);
    const [previousValue, setPreviousValue] = useState(null);
    const [operator, setOperator] = useState(null);

    const onOperation = (operator) => {
        setPreviousValue(currentValue);
        setOperator(operator)
        setCurrentValue('')
    }

    const onNumberClick = (value) => {
        setCurrentValue(value)
    }

    const onEqualClick = () => {
        if (operator && previousValue !== null) {
            let result;
            switch (operator) {
                case '+':
                    result = parseFloat(previousValue) + parseFloat(currentValue);
                    break;
                case '-':
                    result = parseFloat(previousValue) - parseFloat(currentValue);
                    break;
                case '/':
                    result = parseFloat(previousValue) / parseFloat(currentValue);
                    break;
                case '*':
                    result = parseFloat(previousValue) * parseFloat(currentValue);
                    break;
                default:
                    result = currentValue
            }
            setTotal(result)
            setCurrentValue(result);
            setOperator(0)
            setPreviousValue(0)
        }
    }

    const onAC = () => {
        setCurrentValue(0);
        setTotal(0);
        setOperator(null);
        setPreviousValue(null)
    }

    return(
        <div className='calc-container'>
                <Display setTotal={setTotal} setCurrentValue={setCurrentValue}
                currentValue={currentValue}
                total={total}
                previousValue={previousValue}
                setPreviousValue={setPreviousValue}
                operator={operator}
                setOperator={setOperator} />
 
            <NumPad setTotal={setTotal} setCurrentValue={setCurrentValue}
            currentValue={currentValue}
            total={total}
            previousValue={previousValue}
            setPreviousValue={setPreviousValue}
            operator={operator}
            setOperator={setOperator}
            onAC={onAC}
            onNumberClick={onNumberClick}
            onOperation={onOperation}
            onEqualClick={onEqualClick}
            />
        </div>
    )
}