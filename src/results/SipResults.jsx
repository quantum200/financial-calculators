import { LeftMain, TopResultCard, ResultLabel, ResultValueBig, BottomResultsRow, HalfResultCard, ResultValue} from '../results/stylesFinally/SipResultsStyle.jsx';

const SipResults = ({ data }) => {
    const formatMoney = (value) => {
        if (!value) return "$0";

        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0,
        }).format(value);
    };

    return (
        <LeftMain>
            <TopResultCard>
                <ResultLabel>Future Value</ResultLabel>
                <ResultValueBig>{formatMoney(data.futVal)}</ResultValueBig>
            </TopResultCard>

            <BottomResultsRow>
                <HalfResultCard>
                    <ResultLabel>Invested</ResultLabel>
                    <ResultValue>{formatMoney(data.invested)}</ResultValue>
                </HalfResultCard>

                <HalfResultCard>
                    <ResultLabel>Returns</ResultLabel>
                    <ResultValue>{formatMoney(data.returns)}</ResultValue>
                </HalfResultCard>
            </BottomResultsRow>

            {data.taxAmount && (
                <TopResultCard>
                    <ResultLabel>Tax Amount (12.5%)</ResultLabel>
                    <ResultValue>{formatMoney(data.taxAmount)}</ResultValue>
                </TopResultCard>
            )}

            {data.realVal && (
                <TopResultCard>
                    <ResultLabel>Real Value (Inflation Adjusted)</ResultLabel>
                    <ResultValue>{formatMoney(data.realVal)}</ResultValue>
                </TopResultCard>
            )}
        </LeftMain>
    );
};

export default SipResults;