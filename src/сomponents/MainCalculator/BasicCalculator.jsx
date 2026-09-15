import {
    BtnAction,
    BtnActionC,
    BtnEqual,
    BtnNumber,
    BtnOperator,
    KeypadGrid,
} from "../../styles/MainCalculator.jsx";

const BasicCalculator = ({ displayValue, setDisplayValue }) => {

    const handleNumberClick = (num) => {
        if (displayValue === '0') {
            setDisplayValue(num);
        } else {
            setDisplayValue(displayValue + num);
        }
    };

    const handleBackspace = () => {
        if (displayValue.length > 1) {
            setDisplayValue(displayValue.slice(0, -1));
        } else {
            setDisplayValue('0');
        }
    };

    return (
        <KeypadGrid>
            <BtnActionC>C</BtnActionC>
            <BtnAction>CE</BtnAction>
            <BtnAction onClick={handleBackspace}>⌫</BtnAction>
            <BtnOperator>÷</BtnOperator>

            <BtnNumber onClick={() => handleNumberClick('7')}>7</BtnNumber>
            <BtnNumber onClick={() => handleNumberClick('8')}>8</BtnNumber>
            <BtnNumber onClick={() => handleNumberClick('9')}>9</BtnNumber>
            <BtnOperator>×</BtnOperator>

            <BtnNumber onClick={() => handleNumberClick('4')}>4</BtnNumber>
            <BtnNumber onClick={() => handleNumberClick('5')}>5</BtnNumber>
            <BtnNumber onClick={() => handleNumberClick('6')}>6</BtnNumber>
            <BtnOperator>-</BtnOperator>

            <BtnNumber onClick={() => handleNumberClick('1')}>1</BtnNumber>
            <BtnNumber onClick={() => handleNumberClick('2')}>2</BtnNumber>
            <BtnNumber onClick={() => handleNumberClick('3')}>3</BtnNumber>
            <BtnOperator>+</BtnOperator>

            <BtnNumber $wide onClick={() => handleNumberClick('0')}>0</BtnNumber>
            <BtnNumber>.</BtnNumber>
            <BtnEqual>=</BtnEqual>
        </KeypadGrid>
    )
}

export default BasicCalculator;