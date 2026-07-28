import { useState } from 'react';
import { CalculatorWrapper, CalculatorWrapperInner, IconCalc, TitleText, TitleCalc, TitleCalc1, InputGroup,
    HeaderRow, Label, ValueDisplay, StyledRangeInput, CheckboxContainer, HiddenCheckbox, CustomCheckbox, FinalButton } from '../styles/CalculatorWrapper';

const SipCalculator = () => {
    const [investment, setInvestment] = useState(500);
    const [expected, setExpected] = useState(1);
    const [time, setTime] = useState(1);
    const [inflation, setInflation] = useState(0);

    const handleSliderChange = (event) => {
        const newValue = event.target.value;
        setInvestment(Number(newValue));
    };

    const handleChange = (event) => {
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
                    <IconCalc>
                        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                            <title>trending_up_fill</title>
                            <g id="trending_up_fill" fill='none' fill-rule='nonzero'>
                                <path
                                    d='M24 0v24H0V0h24ZM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018Zm.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01-.184-.092Z'/>
                                <path fill='#FFFFFFFF'
                                      d='M17 5.5a1.5 1.5 0 0 0 0 3h.379L14 11.879l-3.44-3.44a1.5 1.5 0 0 0-2.12 0l-6.5 6.5a1.5 1.5 0 0 0 2.12 2.122l5.44-5.44 3.44 3.44a1.5 1.5 0 0 0 2.12 0l4.44-4.44V11a1.5 1.5 0 0 0 3 0V7A1.5 1.5 0 0 0 21 5.5h-4Z'/>
                            </g>
                        </svg>
                    </IconCalc>
                    <TitleText>
                        <TitleCalc1>SIP Calculator</TitleCalc1>
                        <TitleCalc>Calculate returns on Systematic Investment Plan</TitleCalc>
                    </TitleText>
                </CalculatorWrapperInner>
                <InputGroup>
                    <HeaderRow>
                        <Label>
                            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><title>currency_dollar_2_line</title><g id="currency_dollar_2_line" fill='none'><path d='M0 0h24v24H0z'/><path fill='#956AFFFF' d='M13 4a1 1 0 1 0-2 0v1H9.5a4 4 0 1 0 0 8h5a2 2 0 1 1 0 4H7a1 1 0 1 0 0 2h4v1a1 1 0 1 0 2 0v-1h1.5a4 4 0 0 0 0-8h-5a2 2 0 1 1 0-4H17a1 1 0 1 0 0-2h-4z'/></g></svg>
                            Monthly Investment
                        </Label>
                        <ValueDisplay>${investment.toLocaleString()}</ValueDisplay>
                    </HeaderRow>
                    <StyledRangeInput type="range" min="500" max="100000" step="500" value={investment} onChange={handleSliderChange}/>
                </InputGroup>

                <InputGroup>
                    <HeaderRow>
                        <Label>
                            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><title>percentage_line</title><title>percentage_line</title><g id="percentage_line" fill='none' fill-rule='nonzero'><path d='M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036q-.016-.004-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092q.019.005.029-.008l.004-.014-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z'/><path fill='#956AFFFF' d='M18.293 4.293a1 1 0 1 1 1.414 1.414l-14 14a1 1 0 1 1-1.414-1.414zM18 17a1 1 0 1 0-2 0 1 1 0 0 0 2 0M8 7a1 1 0 1 0-2 0 1 1 0 0 0 2 0m12 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0M10 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0'/></g></svg>
                            Expected Return (% p.a.)
                        </Label>
                        <ValueDisplay>{expected.toLocaleString()}%</ValueDisplay>
                    </HeaderRow>
                    <StyledRangeInput type="range" min="1" max="30" step="0.5" value={expected} onChange={handleChange}/>
                </InputGroup>

                <InputGroup>
                    <HeaderRow>
                        <Label>
                            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><title>time_line</title><g id="time_line" fill='none'><path d='M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z'/><path fill='#956AFFFF' d='M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16m0 2a1 1 0 0 1 .993.883L13 7v4.586l2.707 2.707a1 1 0 0 1-1.32 1.497l-.094-.083-3-3a1 1 0 0 1-.284-.576L11 12V7a1 1 0 0 1 1-1'/></g></svg>
                            Time Period (Years)
                        </Label>
                        <ValueDisplay>{time.toLocaleString()} years</ValueDisplay>
                    </HeaderRow>
                    <StyledRangeInput type="range" min="1" max="100" step="1" value={time} onChange={handleChangeTime}/>
                </InputGroup>

                <InputGroup>
                    <HeaderRow>
                        <Label>
                            Inflation Rate (% p.a.)
                        </Label>
                        <ValueDisplay>{inflation.toLocaleString()}%</ValueDisplay>
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

export default SipCalculator;