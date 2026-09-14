import MathCalculator from "./MathCalculator.jsx";
import {
    BasicCalculatorStyle,
    BtnAction,
    BtnActionC, BtnEqual,
    BtnNumber,
    BtnOperator,
    KeypadGrid
} from "../../styles/MainCalculator.jsx";

const ScientificCalculator = () => {


    return (
        <BasicCalculatorStyle>

            <KeypadGrid>
                <MathCalculator></MathCalculator>

                <BtnActionC>C</BtnActionC>
                <BtnAction>CE</BtnAction>
                <BtnAction >⌫</BtnAction>
                <BtnOperator>÷</BtnOperator>

                <BtnNumber >7</BtnNumber>
                <BtnNumber >8</BtnNumber>
                <BtnNumber >9</BtnNumber>
                <BtnOperator>×</BtnOperator>

                <BtnNumber >4</BtnNumber>
                <BtnNumber >5</BtnNumber>
                <BtnNumber >6</BtnNumber>
                <BtnOperator>-</BtnOperator>

                <BtnNumber >1</BtnNumber>
                <BtnNumber >2</BtnNumber>
                <BtnNumber >3</BtnNumber>
                <BtnOperator>+</BtnOperator>

                <BtnNumber $wide>0</BtnNumber>
                <BtnNumber>.</BtnNumber>
                <BtnEqual>=</BtnEqual>
            </KeypadGrid>
        </BasicCalculatorStyle>
    )
}

export default ScientificCalculator;