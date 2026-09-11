import styled from 'styled-components';

export const LeftMain = styled.div`
    background: linear-gradient(135deg, #9b51e0, #d04ed6);
    border-radius: 20px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    color: white;
`;

export const TopResultCard = styled.div`
    background: rgba(255, 255, 255, 0.15); 
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 12px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const BottomResultsRow = styled.div`
    display: flex;
    gap: 16px;
`;

export const HalfResultCard = styled(TopResultCard)`
    flex: 1;
`;

export const ResultLabel = styled.p`
    font-size: 14px;
    color: rgba(255, 255, 255, 0.8);
    margin: 0;
`;

export const ResultValueBig = styled.h3`
    font-size: 32px;
    font-weight: bold;
    margin: 0;
`;

export const ResultValue = styled.h4`
    font-size: 20px;
    font-weight: bold;
    margin: 0;
`;