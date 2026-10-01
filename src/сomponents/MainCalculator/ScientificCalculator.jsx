import {BtnEqual, BtnNumber, BtnOperator, BtnScientifc, KeypadGrid} from "../../styles/MainCalculator.jsx";

const ScientificCalculator = ({displayValue, setDisplayValue, handleOperatorClick, handleCalculate, eqial, setEqial}) => {
    const handleNumberClick = (num) => {
        if (displayValue === '0') {
            setDisplayValue(num);
        } else {
            setDisplayValue(displayValue + num);
        }
    };

    const handleMathLogic = (funcName) => {
        const inputString = funcName + '(';
        if (eqial) {
            setDisplayValue(inputString);
            setEqial(false);
        } else if (displayValue === '0') {
            setDisplayValue(inputString);
        } else {
            setDisplayValue(displayValue + inputString);
        }
    };

    const handleSuffixClick = (symbol) => {
        setDisplayValue(displayValue + symbol);
        setEqial(false);
    };

    const handleConstantClick = (constant) => {
        if (eqial === true) {
            setDisplayValue(constant);
            setEqial(false);
        } else {
            if (displayValue === '0') {
                setDisplayValue(constant);
            } else {
                setDisplayValue(displayValue + constant);
            }
        }
    };

    return (
        <KeypadGrid>
            <BtnScientifc onClick={() => handleMathLogic('sin')}>sin</BtnScientifc>
            <BtnScientifc onClick={() => handleMathLogic('cos')}>cos</BtnScientifc>
            <BtnScientifc onClick={() => handleMathLogic('tan')}>tan</BtnScientifc>
            <BtnScientifc>x^y</BtnScientifc>

            <BtnScientifc onClick={() => handleMathLogic('log')}>log</BtnScientifc>
            <BtnScientifc onClick={() => handleMathLogic('ln')}>ln</BtnScientifc>
            <BtnScientifc onClick={() => handleMathLogic('√')}>√</BtnScientifc>
            <BtnScientifc onClick={() => handleSuffixClick('²')}>²</BtnScientifc>

            <BtnScientifc onClick={() => handleSuffixClick('³')}>³</BtnScientifc>
            <BtnScientifc>1/x</BtnScientifc>
            <BtnScientifc onClick={() => handleSuffixClick('!')}>n!</BtnScientifc>
            <BtnScientifc onClick={() => handleConstantClick('π')}>π</BtnScientifc>

            <BtnScientifc onClick={() => handleConstantClick('е')}>е</BtnScientifc>
            <BtnScientifc>(</BtnScientifc>
            <BtnScientifc>)</BtnScientifc>
            <BtnEqual onClick={handleCalculate}>=</BtnEqual>

            <BtnNumber onClick={() => handleNumberClick('7')}>7</BtnNumber>
            <BtnNumber onClick={() => handleNumberClick('8')}>8</BtnNumber>
            <BtnNumber onClick={() => handleNumberClick('9')}>9</BtnNumber>
            <BtnOperator onClick={() => handleOperatorClick('÷')}>÷</BtnOperator>

            <BtnNumber onClick={() => handleNumberClick('4')}>4</BtnNumber>
            <BtnNumber onClick={() => handleNumberClick('5')}>5</BtnNumber>
            <BtnNumber onClick={() => handleNumberClick('6')}>6</BtnNumber>
            <BtnOperator onClick={() => handleOperatorClick('×')}>×</BtnOperator>

            <BtnNumber onClick={() => handleNumberClick('1')}>1</BtnNumber>
            <BtnNumber onClick={() => handleNumberClick('2')}>2</BtnNumber>
            <BtnNumber onClick={() => handleNumberClick('3')}>3</BtnNumber>
            <BtnOperator onClick={() => handleOperatorClick('-')}>-</BtnOperator>

            <BtnNumber $wide onClick={() => handleNumberClick('0')}>0</BtnNumber>
            <BtnNumber>.</BtnNumber>
            <BtnOperator onClick={() => handleOperatorClick('+')}>+</BtnOperator>
        </KeypadGrid>
    )
}

export default ScientificCalculator;