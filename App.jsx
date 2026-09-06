import { useState } from 'react';
import SipCalculator from "./src/сomponents/SipCalculator.jsx";
import SwpCalculator from "./src/сomponents/SwpCalculator.jsx";
import StepUpSipCalculator from "./src/сomponents/StepUpSipCalculator.jsx";
import StepUpSwpCalculator from "./src/сomponents/StepUpSwpCalculator.jsx";
import LumpSumCalculator from "./src/сomponents/LumpSumCalculator.jsx";
import EmiCalculator from "./src/сomponents/EmiCalculator.jsx";
import {GlobalStyles, AppContainer} from './src/styles/GlobalStyles.jsx';
import {SubTitle, Title} from './src/styles/Title.jsx';
import {
    ButtonsCalculators,
    TabButton,
    LeftBlock,
    LeftBlockHalf,
    LeftBlockSecondHalf,
    MainBlock,
    RightBlock
} from './src/styles/MainBlock.jsx';


function App() {
    const [activeTab, setActiveTab] = useState('SIP');
    const [results, setResults] = useState(null);
    const handleTabChange = (tabName) => {
        setActiveTab(tabName);
        setResults(null);
    };

    const formatMoney = (value) => {
        if (!value) return "$0";

        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0,
        }).format(value);
    };


  return (
      <>
        <GlobalStyles />
        <AppContainer>
          <Title>Financial Calculator Suite</Title>
          <SubTitle>Make smarter investment decisions with our comprehensive suite of financial calculators designed for Indian investors</SubTitle>
          <MainBlock>
            <LeftBlock>
                <LeftBlockHalf>
                    <ButtonsCalculators>
                        <TabButton $isActive={activeTab === 'SIP'} onClick={() => handleTabChange('SIP')}>
                            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><title>trending_up_line</title><g id="trending_up_line" fill='none'><path d='M24 0v24H0V0h24ZM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018Zm.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01-.184-.092Z'/><path fill='#000000FF' d='M17 6a1 1 0 1 0 0 2h1.586L14 12.586l-3.793-3.793a1 1 0 0 0-1.414 0l-6.5 6.5a1 1 0 1 0 1.414 1.414L9.5 10.914l3.793 3.793a1 1 0 0 0 1.414 0L20 9.414V11a1 1 0 1 0 2 0V7a1 1 0 0 0-1-1h-4Z'/></g></svg>
                            SIP
                        </TabButton>
                        <TabButton $isActive={activeTab === 'SWP'} onClick={() => handleTabChange('SWP')}>
                            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><title>wallet_line</title><g id="wallet_line" fill='none'><path d='M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z'/><path fill='#000000FF' d='M19 4a2 2 0 0 1 2 2v2.268A2 2 0 0 1 22 10v4a2 2 0 0 1-1 1.732V18a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 2H5v12h14v-2h-4a4 4 0 0 1-.2-7.995L15 8h4zm1 4h-5a2 2 0 1 0 0 4h5zm-4 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2'/></g></svg>
                            SWP
                        </TabButton>
                        <TabButton $isActive={activeTab === 'STEP_UP_SIP'} onClick={() => handleTabChange('STEP_UP_SIP')}>
                            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><title>arrow_up_circle_line</title><g id="arrow_up_circle_line" fill='none'><path d='M24 0v24H0V0h24ZM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.105.074.014.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018Zm.264-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.092.01-.009.004-.011.017-.43-.003-.012-.01-.01-.184-.092Z'/><path fill='#000000FF' d='M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm-.707 3.046a1 1 0 0 1 1.32-.083l.094.083 3.536 3.535a1 1 0 0 1-1.32 1.498l-.094-.083-1.83-1.83v6.077a1 1 0 0 1-1.992.116L11 16.243v-6.076l-1.828 1.829a1 1 0 0 1-1.498-1.32l.084-.095 3.535-3.535Z'/></g></svg>
                            Step Up SIP
                        </TabButton>
                        <TabButton $isActive={activeTab === 'STEP_UP_SWP'} onClick={() => handleTabChange('STEP_UP_SWP')}>
                            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><title>arrow_down_circle_line</title><g id="arrow_down_circle_line" fill='none'><path d='M24 0v24H0V0h24ZM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018Zm.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01-.184-.092Z'/><path fill='#000000FF' d='M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm0 2.757a1 1 0 0 1 .993.884l.007.116v6.076l1.828-1.828a1 1 0 0 1 1.498 1.32l-.084.094-3.535 3.535a1 1 0 0 1-1.32.083l-.094-.083-3.536-3.535a1 1 0 0 1 1.32-1.498l.094.084 1.83 1.828V7.757a1 1 0 0 1 1-1Z'/></g></svg>
                            Step Up SWP
                        </TabButton>
                        <TabButton $isActive={activeTab === 'LUMP_SUM'} onClick={() => handleTabChange('LUMP_SUM')}>
                            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><title>coin_2_line</title><g id="coin_2_line" fill='none'><path d='M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z'/><path fill='#000000FF' d='M12 3c2.314 0 4.456.408 6.058 1.109.799.35 1.509.792 2.032 1.334.485.5.845 1.128.902 1.856L21 7.5v10c0 .814-.381 1.51-.91 2.057-.523.542-1.233.984-2.032 1.334C16.456 21.591 14.314 22 12 22c-2.314 0-4.456-.408-6.058-1.109-.799-.35-1.509-.792-2.032-1.334-.485-.5-.845-1.128-.902-1.856L3 17.5v-10c0-.814.381-1.51.91-2.057.523-.542 1.233-.984 2.032-1.334C7.544 3.409 9.686 3 12 3m7 12.407a8.13 8.13 0 0 1-.942.484C16.456 16.591 14.314 17 12 17c-2.314 0-4.456-.408-6.058-1.109A8.122 8.122 0 0 1 5 15.407V17.5c0 .152.066.376.348.667.286.296.748.608 1.396.892C8.038 19.625 9.895 20 12 20c2.105 0 3.962-.375 5.256-.941.648-.284 1.11-.596 1.396-.892.282-.29.348-.515.348-.667zm0-5a8.13 8.13 0 0 1-.942.484C16.456 11.591 14.314 12 12 12c-2.314 0-4.456-.408-6.058-1.109A8.122 8.122 0 0 1 5 10.407V12.5c0 .152.066.376.348.667.286.296.748.608 1.396.892C8.038 14.625 9.895 15 12 15c2.105 0 3.962-.375 5.256-.941.648-.284 1.11-.596 1.396-.892.282-.29.348-.515.348-.667zM12 5c-2.105 0-3.962.375-5.256.941-.648.284-1.11.596-1.396.892-.282.29-.348.515-.348.667 0 .152.066.376.348.667.286.296.748.608 1.396.892C8.038 9.625 9.895 10 12 10c2.105 0 3.962-.375 5.256-.941.648-.284 1.11-.596 1.396-.892.282-.29.348-.515.348-.667 0-.152-.066-.376-.348-.667-.286-.296-.748-.608-1.396-.892C15.962 5.375 14.105 5 12 5'/></g></svg>
                            Lump Sum
                        </TabButton>
                        <TabButton $isActive={activeTab === 'EMI'} onClick={() => handleTabChange('EMI')}>
                            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><title>counter_2_line</title><g id="counter_2_line" fill='none'><path d='M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z'/><path fill='#000000FF' d='M18 3a2 2 0 0 1 1.995 1.85L20 5v15a2 2 0 0 1-1.85 1.995L18 22H6a2 2 0 0 1-1.995-1.85L4 20V5a2 2 0 0 1 1.85-1.995L6 3zm0 2H6v15h12zM9.5 16a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m-5-4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m1-6a1.5 1.5 0 0 1 1.493 1.356L17 7.5v2a1.5 1.5 0 0 1-1.356 1.493L15.5 11h-7a1.5 1.5 0 0 1-1.493-1.356L7 9.5v-2a1.5 1.5 0 0 1 1.356-1.493L8.5 6zM15 8H9v1h6z'/></g></svg>
                            EMI
                        </TabButton>
                    </ButtonsCalculators>

                    {activeTab === 'SIP' && <SipCalculator onCalculate={setResults} />}
                    {activeTab === 'SWP' && <SwpCalculator onCalculate={setResults} />}
                    {activeTab === 'STEP_UP_SIP' && <StepUpSipCalculator onCalculate={setResults} />}
                    {activeTab === 'STEP_UP_SWP' && <StepUpSwpCalculator onCalculate={setResults} />}
                    {activeTab === 'LUMP_SUM' && <LumpSumCalculator onCalculate={setResults} />}
                    {activeTab === 'EMI' && <EmiCalculator onCalculate={setResults} />}
                </LeftBlockHalf>

                <LeftBlockSecondHalf>
                    {results ? (
                        <div>
                            <h3>Future Value: {formatMoney(results.futVal)}</h3>
                            <p>Invested: {formatMoney(results.invested)}</p>
                        </div>
                    ) : (
                        <p></p>
                    )}
                </LeftBlockSecondHalf>
            </LeftBlock>
              <RightBlock></RightBlock>
          </MainBlock>
        </AppContainer>
      </>
  );
}

export default App;