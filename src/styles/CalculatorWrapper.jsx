import styled from "styled-components";

export const CalculatorWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const CalculatorWrapperInner = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 10px;
`;

export const IconCalc = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 48px;
    width: 48px;
    background: #9810fa;
    border-radius: 10px;
    margin-right: 20px;
`;

export const TitleText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    font-size: 16px;
`;

export const TitleCalc = styled.text`
    color: #717182;
`;

export const TitleCalc1 = styled.text`
    color: #4d179a
`;