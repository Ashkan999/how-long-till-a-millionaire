class InvestmentAnalyser {
  constructor(goalCapital) {
    this.goalCapital = goalCapital;
  }

  processUserData({ startCapital, annualReturn, monthlyInvestment }) {
    // TODO: input validation

    const annualReturnRate = annualReturn / 100;

    const processedData = [];
    processedData.push(startCapital);

    let i = 1;
    while (processedData[i - 1] < this.goalCapital) {
      const principalInterest = startCapital * (1 + annualReturnRate) ** i;
      const futureValueOfDeposits =
        (monthlyInvestment *
          ((1 + annualReturnRate) ** (i + 1) - (1 + annualReturnRate))) /
        annualReturnRate;
      processedData.push(Math.round(principalInterest + futureValueOfDeposits));
      i += 1;
    }

    return processedData;
  }
}

export default InvestmentAnalyser;
