import {BtnEqual, BtnNumber, BtnOperator, BtnScientifc, KeypadGrid} from "../../styles/MainCalculator.jsx";

const ScientificCalculator = ({displayValue, setDisplayValue, handleOperatorClick, handleCalculate}) => {
    const handleNumberClick = (num) => {
        if (displayValue === '0') {
            setDisplayValue(num);
        } else {
            setDisplayValue(displayValue + num);
        }
    };

    return (
        <KeypadGrid>
            <BtnScientifc>sin</BtnScientifc>
            <BtnScientifc>cos</BtnScientifc>
            <BtnScientifc>tan</BtnScientifc>
            <BtnScientifc>x^y</BtnScientifc>

            <BtnScientifc>log</BtnScientifc>
            <BtnScientifc>ln</BtnScientifc>
            <BtnScientifc>√</BtnScientifc>
            <BtnScientifc>²</BtnScientifc>

            <BtnScientifc>³</BtnScientifc>
            <BtnScientifc>1/x</BtnScientifc>
            <BtnScientifc>n!</BtnScientifc>
            <BtnScientifc>π</BtnScientifc>

            <BtnScientifc>е</BtnScientifc>
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