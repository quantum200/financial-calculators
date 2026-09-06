import { useState } from 'react';
import {
    CalculatorWrapper, CalculatorWrapperInner, TitleText, TitleCalc, InputGroup,
    HeaderRow, Label, StyledRangeInput,
} from '../styles/CalculatorWrapper';

import {IconCalcSwp, ValueDisplaySwp, TitleCalc3, FinalButton} from './../styles/Emi.jsx';

const LumpSumCalculator = () => {
    const [investment, setInvestment] = useState(500);
    const [expected, setExpected] = useState(1)
    const [time, setTime] = useState(1);

    const handleSliderChange = (event) => {
        const newValue = event.target.value;
        setInvestment(Number(newValue));
    };

    const handleChangeExpected = (event) => {
        const newExpected = event.target.value;
        setExpected(Number(newExpected));
    }

    const handleChangeTime = (event) => {
        const newTime = event.target.value;
        setTime(Number(newTime));
    }

    return (
        <CalculatorWrapper>
            <CalculatorWrapperInner>
                <IconCalcSwp>
                    <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                        <title>counter_2_line</title>
                        <g id="counter_2_line" fill='none' fill-rule='evenodd'>
                            <path d='M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z'/>
                            <path fill='#FFFFFFFF' d='M18 3a2 2 0 0 1 1.995 1.85L20 5v15a2 2 0 0 1-1.85 1.995L18 22H6a2 2 0 0 1-1.995-1.85L4 20V5a2 2 0 0 1 1.85-1.995L6 3zm0 2H6v15h12zM9.5 16a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m-5-4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m1-6a1.5 1.5 0 0 1 1.493 1.356L17 7.5v2a1.5 1.5 0 0 1-1.356 1.493L15.5 11h-7a1.5 1.5 0 0 1-1.493-1.356L7 9.5v-2a1.5 1.5 0 0 1 1.356-1.493L8.5 6zM15 8H9v1h6z'/>
                    </g>
                    </svg>
                </IconCalcSwp>
                <TitleText>
                    <TitleCalc3>EMI Calculator</TitleCalc3>
                    <TitleCalc>Calculate Equated Monthly Installment for loans</TitleCalc>
                </TitleText>
            </CalculatorWrapperInner>
            <InputGroup>
                <HeaderRow>
                    <Label>
                        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><title>currency_dollar_2_line</title><g id="currency_dollar_2_line" fill='none'><path d='M0 0h24v24H0z'/><path fill='#E60076FF' d='M13 4a1 1 0 1 0-2 0v1H9.5a4 4 0 1 0 0 8h5a2 2 0 1 1 0 4H7a1 1 0 1 0 0 2h4v1a1 1 0 1 0 2 0v-1h1.5a4 4 0 0 0 0-8h-5a2 2 0 1 1 0-4H17a1 1 0 1 0 0-2h-4z'/></g></svg>
                        Loan Amount
                    </Label>
                    <ValueDisplaySwp>${investment.toLocaleString()}</ValueDisplaySwp>
                </HeaderRow>
                <StyledRangeInput type="range" min="500" max="100000" step="500" value={investment} onChange={handleSliderChange}/>
            </InputGroup>

            <InputGroup>
                <HeaderRow>
                    <Label>
                        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><title>percentage_line</title><title>percentage_line</title><g id="percentage_line" fill='none' fill-rule='nonzero'><path d='M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036q-.016-.004-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092q.019.005.029-.008l.004-.014-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z'/><path fill='#E60076FF' d='M18.293 4.293a1 1 0 1 1 1.414 1.414l-14 14a1 1 0 1 1-1.414-1.414zM18 17a1 1 0 1 0-2 0 1 1 0 0 0 2 0M8 7a1 1 0 1 0-2 0 1 1 0 0 0 2 0m12 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0M10 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0'/></g></svg>
                        Interest Rate (% p.a.)
                    </Label>
                    <ValueDisplaySwp>{expected.toLocaleString()} %</ValueDisplaySwp>
                </HeaderRow>
                <StyledRangeInput type="range" min="1" max="20" step="0.5" value={expected} onChange={handleChangeExpected}/>
            </InputGroup>

            <InputGroup>
                <HeaderRow>
                    <Label>
                        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><title>time_line</title><g id="time_line" fill='none'><path d='M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z'/><path fill='#E60076FF' d='M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16m0 2a1 1 0 0 1 .993.883L13 7v4.586l2.707 2.707a1 1 0 0 1-1.32 1.497l-.094-.083-3-3a1 1 0 0 1-.284-.576L11 12V7a1 1 0 0 1 1-1'/></g></svg>
                        Loan Tenure (Years)
                    </Label>
                    <ValueDisplaySwp>{time.toLocaleString()} years</ValueDisplaySwp>
                </HeaderRow>
                <StyledRangeInput type="range" min="1" max="100" step="1" value={time} onChange={handleChangeTime}/>
            </InputGroup>

            <FinalButton>Calculate EMI</FinalButton>

        </CalculatorWrapper>
    );
};

export default LumpSumCalculator;