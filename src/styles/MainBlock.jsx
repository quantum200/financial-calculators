import styled from 'styled-components';

export const MainBlock = styled.div`
  max-width: 100%;
    max-height: 800px;
  margin: 0 auto;
  padding: 40px 0;
    
    display: flex;
    flex-direction: row;
`;

export const LeftBlock = styled.div`
    display: flex;
    flex-direction: row;
    width: 1050px;
    height: auto;
    background: aliceblue;
    border-radius: 10px;
`;

export const LeftBlockHalf = styled.div`
    width: 50%;
    padding: 22px;
`

export const LeftBlockSecondHalf = styled.div`
    width: 50%;
`

export const ButtonsCalculators = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    background: #EEAECA;
    background: radial-gradient(circle, rgba(238, 174, 202, 1) 0%, rgba(148, 187, 233, 1) 100%);
    border-radius: 10px;
    margin-bottom: 20px;
`

export const TabButton = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80px;
    flex: 1;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.2s ease-in-out;
    
    background: ${props => props.$isActive ? '#ffffff' : 'transparent'};
    color: ${props => props.$isActive ? '#8b5cf6' : '#333333'};
    box-shadow: ${props => props.$isActive ? '0 4px 6px rgba(0,0,0,0.1)' : 'none'};

    &:hover {
        background: ${props => props.$isActive ? '#ffffff' : 'rgba(255,255,255,0.2)'};
    }
`;

export const RightBlock = styled.div`
    flex: 1;
    max-width: 500px;
    margin-left: 50px;
    height: auto;
    background: #1d293d;
    border-radius: 10px;
`;