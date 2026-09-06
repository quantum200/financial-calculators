export const SipLogic = (monthlyInvestment, expectedReturn, timePeriod, inflationRate, isInflationApplied, isTaxApplied) => {
    const n = timePeriod * 12;
    const r = (expectedReturn / 12) / 100;
    const totInv = monthlyInvestment * n;
    const futVal = expectedReturn === 0 ? totInv : monthlyInvestment * ((((1 + r) ** n) - 1) / r) * (1 + r);
    const returns = futVal - totInv;

    const realVal = (futVal / (1 + (inflationRate / 100)) ** timePeriod);
    const taxAmount = returns / 8;

    const chart1 = (totInv / futVal) * 100;
    const chart2 = (returns / futVal) * 100;

    return {
        invested: totInv,
        expected: expectedReturn,
        timePeriod: timePeriod,
        inflationRate: inflationRate,
        realVal: isInflationApplied ? realVal : null,
        taxAmount: isTaxApplied ? taxAmount : null,
        futVal: futVal,
        returns: returns,
        chart1: chart1,
        chart2: chart2,
    }
};