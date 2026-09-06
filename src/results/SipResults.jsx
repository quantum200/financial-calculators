import { LeftMain } from '../styles/какой-то-путь';

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
            <h3>Future Value: {formatMoney(data.futVal)}</h3>
            <p>Invested: {formatMoney(data.invested)}</p>
            <p>Returns: {formatMoney(data.returns)}</p>
            {data.taxAmount && (
                <p>Tax Amount (12.5%): {formatMoney(data.taxAmount)}</p>
            )}
            {data.realVal && (
                <p>Real Value (Inflation Adjusted): {formatMoney(data.realVal)}</p>
            )}
        </LeftMain>
    );
};

export default SipResults;