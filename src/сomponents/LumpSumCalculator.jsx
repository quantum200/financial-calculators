import { useState } from 'react';
import {
    CalculatorWrapper, CalculatorWrapperInner, TitleText, TitleCalc, InputGroup,
    HeaderRow, Label, StyledRangeInput, CheckboxContainer, HiddenCheckbox, CustomCheckbox
} from '../styles/CalculatorWrapper';

import {IconCalcSwp, ValueDisplaySwp, TitleCalc3, FinalButton} from './../styles/LumpSum.jsx';

const LumpSumCalculator = () => {
    const [investment, setInvestment] = useState(500);
    const [expected, setExpected] = useState(1)
    const [time, setTime] = useState(1);
    const [inflation, setInflation] = useState(0);

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

    const handleChangeInflation = (event) => {
        const newInflation = event.target.value;
        setInflation(Number(newInflation));
    }

    return (
        <CalculatorWrapper>
            <CalculatorWrapperInner>
                <IconCalcSwp>
                    <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                        <title>coin_2_line</title>
                        <g id="coin_2_line" fill='none'>
                            <path d='M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z'/>
                            <path fill='#FFFFFFFF' d='M12 3c2.314 0 4.456.408 6.058 1.109.799.35 1.509.792 2.032 1.334.485.5.845 1.128.902 1.856L21 7.5v10c0 .814-.381 1.51-.91 2.057-.523.542-1.233.984-2.032 1.334C16.456 21.591 14.314 22 12 22c-2.314 0-4.456-.408-6.058-1.109-.799-.35-1.509-.792-2.032-1.334-.485-.5-.845-1.128-.902-1.856L3 17.5v-10c0-.814.381-1.51.91-2.057.523-.542 1.233-.984 2.032-1.334C7.544 3.409 9.686 3 12 3m7 12.407a8.13 8.13 0 0 1-.942.484C16.456 16.591 14.314 17 12 17c-2.314 0-4.456-.408-6.058-1.109A8.122 8.122 0 0 1 5 15.407V17.5c0 .152.066.376.348.667.286.296.748.608 1.396.892C8.038 19.625 9.895 20 12 20c2.105 0 3.962-.375 5.256-.941.648-.284 1.11-.596 1.396-.892.282-.29.348-.515.348-.667zm0-5a8.13 8.13 0 0 1-.942.484C16.456 11.591 14.314 12 12 12c-2.314 0-4.456-.408-6.058-1.109A8.122 8.122 0 0 1 5 10.407V12.5c0 .152.066.376.348.667.286.296.748.608 1.396.892C8.038 14.625 9.895 15 12 15c2.105 0 3.962-.375 5.256-.941.648-.284 1.11-.596 1.396-.892.282-.29.348-.515.348-.667zM12 5c-2.105 0-3.962.375-5.256.941-.648.284-1.11.596-1.396.892-.282.29-.348.515-.348.667 0 .152.066.376.348.667.286.296.748.608 1.396.892C8.038 9.625 9.895 10 12 10c2.105 0 3.962-.375 5.256-.941.648-.284 1.11-.596 1.396-.892.282-.29.348-.515.348-.667 0-.152-.066-.376-.348-.667-.286-.296-.748-.608-1.396-.892C15.962 5.375 14.105 5 12 5'/>
                    </g>
                    </svg>
                </IconCalcSwp>
                <TitleText>
                    <TitleCalc3>Lump Sum Calculator</TitleCalc3>
                    <TitleCalc>Calculate returns on one-time investment with compound interest</TitleCalc>
                </TitleText>
            </CalculatorWrapperInner>
            <InputGroup>
                <HeaderRow>
                    <Label>
                        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><title>currency_dollar_2_line</title><g id="currency_dollar_2_line" fill='none'><path d='M0 0h24v24H0z'/><path fill='#0092B8FF' d='M13 4a1 1 0 1 0-2 0v1H9.5a4 4 0 1 0 0 8h5a2 2 0 1 1 0 4H7a1 1 0 1 0 0 2h4v1a1 1 0 1 0 2 0v-1h1.5a4 4 0 0 0 0-8h-5a2 2 0 1 1 0-4H17a1 1 0 1 0 0-2h-4z'/></g></svg>
                        Initial Investment
                    </Label>
                    <ValueDisplaySwp>${investment.toLocaleString()}</ValueDisplaySwp>
                </HeaderRow>
                <StyledRangeInput type="range" min="500" max="100000" step="500" value={investment} onChange={handleSliderChange}/>
            </InputGroup>

            <InputGroup>
                <HeaderRow>
                    <Label>
                        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><title>percentage_line</title><title>percentage_line</title><g id="percentage_line" fill='none' fill-rule='nonzero'><path d='M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036q-.016-.004-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092q.019.005.029-.008l.004-.014-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z'/><path fill='#0092B8FF' d='M18.293 4.293a1 1 0 1 1 1.414 1.414l-14 14a1 1 0 1 1-1.414-1.414zM18 17a1 1 0 1 0-2 0 1 1 0 0 0 2 0M8 7a1 1 0 1 0-2 0 1 1 0 0 0 2 0m12 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0M10 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0'/></g></svg>
                        Expected Return (% p.a.)
                    </Label>
                    <ValueDisplaySwp>{expected.toLocaleString()} %</ValueDisplaySwp>
                </HeaderRow>
                <StyledRangeInput type="range" min="1" max="30" step="0.5" value={expected} onChange={handleChangeExpected}/>
            </InputGroup>

            <InputGroup>
                <HeaderRow>
                    <Label>
                        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><title>time_line</title><g id="time_line" fill='none'><path d='M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z'/><path fill='#0092B8FF' d='M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16m0 2a1 1 0 0 1 .993.883L13 7v4.586l2.707 2.707a1 1 0 0 1-1.32 1.497l-.094-.083-3-3a1 1 0 0 1-.284-.576L11 12V7a1 1 0 0 1 1-1'/></g></svg>
                        Time Period (Years)
                    </Label>
                    <ValueDisplaySwp>{time.toLocaleString()} years</ValueDisplaySwp>
                </HeaderRow>
                <StyledRangeInput type="range" min="1" max="100" step="1" value={time} onChange={handleChangeTime}/>
            </InputGroup>

            <InputGroup>
                <HeaderRow>
                    <Label>
                        Inflation Rate (% p.a.)
                    </Label>
                    <ValueDisplaySwp>{inflation.toLocaleString()}%</ValueDisplaySwp>
                </HeaderRow>
                <StyledRangeInput type="range" min="1" max="15" step="0.5" value={inflation} onChange={handleChangeInflation}/>
            </InputGroup>

            <CheckboxContainer>
                <HiddenCheckbox type="checkbox" />
                <CustomCheckbox />
                <span>Apply inflation adjustment to see real purchasing power</span>
            </CheckboxContainer>

            <CheckboxContainer>
                <HiddenCheckbox type="checkbox" />
                <CustomCheckbox />
                <span>Apply capital gains tax (12.5%)</span>
            </CheckboxContainer>

            <FinalButton>Calculate Returns</FinalButton>

        </CalculatorWrapper>
    );
};

export default LumpSumCalculator;