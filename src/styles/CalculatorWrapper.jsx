import styled from "styled-components";

export const CalculatorWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
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

export const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 15px;
`;

export const HeaderRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Label = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: bold;
`;

export const ValueDisplay = styled.div`
  color: #8b5cf6;
  padding: 5px 10px;
    font-size: 16px;
`;

export const StyledRangeInput  = styled.input`
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    outline: none;
    height: 16px;
    background: #000000;
    border-radius: 8px;

    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: #ffffff;
        border: 1px solid #000000;
        cursor: pointer;
`;

export const CheckboxContainer = styled.label`
    display: flex;
    align-items: center;
    gap: 12px;
    cursor: pointer;
    font-size: 14px;
    color: #333;
    user-select: none;
    padding: 10px 12px;
    border-radius: 8px;
    transition: background-color 0.2s ease;

    &:hover {
        background-color: #ccccd1;
    }
`;

export const HiddenCheckbox = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

export const CustomCheckbox = styled.div`
  width: 20px;
  height: 20px;
  background-color: #f0f0f5;
  border: 2px solid #d1d5db;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
    
  &::after {
    content: '';
    display: none;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    margin-bottom: 2px;
  }
    
  ${HiddenCheckbox}:checked + & {
    background-color: #000000;
    border-color: #000000;
  }
    
  ${HiddenCheckbox}:checked + &::after {
    display: block;
  }
`;

export const FinalButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50px;
    padding: 15px;
    border-radius: 5px;
    border: none;
    font-weight: bold;
    font-size: 16px;
    color: #ffffff;
    background: #9810fa;
`;