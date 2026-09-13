import styled from "styled-components";

export const Calculator = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    max-width: 400px;
    margin-left: 50px;
    height: 570px;
    background: #1d293d;
    border-radius: 10px;
    padding: 24px;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-bottom: 20px;
`;

export const HeaderIcon = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 36px;
    width: 36px;
    border-radius: 10px;
    background-color: #4f39f6;
`;

export const HeaderTitle = styled.div`
    display: flex;
    justify-content: center;
    font-size: 16px;
    padding-left: 12px;
    color: #ffff;
`;

export const DisplayBox = styled.div`
    display: flex;
    height: 70px;
    width: 100%;
    background: #020618;
    border-radius: 10px;
    border: 1px solid #314158;
`;

export const DisplayText = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: end;
    padding: 16px;
    font-size: 30px;
    color: #fff;
    width: 100%;
`;

export const TabsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: fit-content;
    background: #151f2e;
    border-radius: 20px;
    padding: 4px;
    
    margin-top: 15px;
    margin-bottom: 15px;
`;

export const TabButtonWrapper = styled.div`
    color: #fff;
    font-size: 14px;
    padding: 4px 8px;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    background-color: ${({ $active }) => $active ? '#344563' : 'transparent'};
`;

export const KeypadGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
    width: 100%;
`;

export const BtnAction = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    font-size: 14px;
    background-color: #f54a00;
    color: #fff;
`;

export const BtnActionC = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    font-size: 14px;
    background-color: #e7000b;
    color: #fff;
`;

export const BtnOperator = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    font-size: 14px;
    background-color: #155dfc;
    color: #fff;
`;

export const BtnNumber = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    font-size: 14px;
    background-color: #364153;
    color: #fff;
    
    grid-column: ${({ $wide }) => $wide ? 'span 2' : 'auto'};
`;

export const BtnEqual = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    font-size: 14px;
    background-color: #00a63e;
    color: #fff;
`;