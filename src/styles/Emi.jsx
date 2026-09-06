import styled from "styled-components";

export const IconCalcSwp = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 48px;
    width: 48px;
    background: #e60076;
    border-radius: 10px;
    margin-right: 20px;
`;

export const ValueDisplaySwp = styled.div`
    color: #e60076;
    padding: 5px 10px;
    font-size: 16px;
`;

export const TitleCalc3 = styled.text`
    color: #e60076;
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
    background: #e60076;
    box-shadow: 0 20px 20px -8px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        background: #e60076;
    }

    &:active {
        background: #e60076;
        transform: scale(0.98);
    }
`;