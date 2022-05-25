import React, { useState } from 'react';
import Header from './Header/Header';
import KeyPad from './KeyPad/KeyPad';
import { useStyles } from './Header/HeaderStyle'
import "./KeyPad/KeyPad.css"


const usedKeyCodes = [
    48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 96, 97, 98, 99, 100, 101, 102, 103,
    104, 105, 8, 13, 190, 187, 189, 191, 56, 111, 106, 107, 109,
];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const operators = ["-", "+", "*", "/"];



function Cal_App() {

    const [expression, setExression] = useState<any>("");
    const [result, setResult] = useState<any>("");
    const [history, setHistory] = useState<any>([]);

    const handleKeyPress = (keyCode: any, key: any) => {
        if (!keyCode) return;
        if (!usedKeyCodes.includes(keyCode)) return;


        //// numbers key 0-9
        if (numbers.includes(key)) {
            if (key === "0") {
                if (expression.length === 0) return;
            }
            calculateResult(expression + key);
            setExression(expression + key); //prev add & set

            //// operators
        } else if (operators.includes(key)) {
            if (!expression) return;

            const lastChar = expression.slice(-1);
            if (operators.includes(lastChar)) return;
            if (lastChar === ".") return;

            setExression(expression + key);
        }

        // keyy
        else if (key === ".") {
            if (!expression) return;

            const lastChar = expression.slice(-1);  // + .
            if (!numbers.includes(lastChar)) return;

            setExression(expression + key);
        }
        else if (keyCode === 8) {
            if (!expression) return;//backspace
            calculateResult(expression.slice(0, -1));
            setExression(expression.slice(0, -1));

        } else if (keyCode === 13) {  //result
            if (!expression) return;
            calculateResult(expression);

            // history
            let tempHistory = [...history];
            if (tempHistory.length > 20) tempHistory = tempHistory.splice(0, 1);
            tempHistory.push(expression);
            setHistory(tempHistory);
        }
    };

    const calculateResult = (exp: any) => {
        if (!exp) {
            setResult("");
            return;
        }
        const lastChar = exp.slice(-1);
        if (!numbers.includes(lastChar)) exp = exp.slice(0, -1);  //if lastchar not no. 

        const answer = eval(exp).toFixed(2) + "";
        setResult(answer);
    };

    const classes = useStyles();

    return (
        <>
            <div className={classes.appCalculator}>
                <Header expression={expression} result={result} history={history} />
                <KeyPad handleKeyPress={handleKeyPress} />
            </div>
        </>
    );
}

export default Cal_App;
