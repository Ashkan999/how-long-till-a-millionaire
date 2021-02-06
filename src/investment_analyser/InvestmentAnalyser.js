class InvestmentAnalyser {
  constructor(goalCapital) {
    this.goalCapital = goalCapital;
  }

  processUserData({ startCapital, annualReturn, monthlyInvestment }) {
    //TODO: input validation

    const annualReturnRate = annualReturn / 100;

    const processedData = [];
    processedData.push(startCapital);

    let i = 1;
    while (processedData[i - 1] < this.goalCapital) {
      let principalInterest = startCapital * Math.pow(1 + annualReturnRate, i);
      let futureValueOfDeposits =
        (monthlyInvestment *
          (Math.pow(1 + annualReturnRate, i + 1) - (1 + annualReturnRate))) /
        annualReturnRate;
      processedData.push(Math.round(principalInterest + futureValueOfDeposits));
      i++;
    }

    return processedData;
  }
}

export default InvestmentAnalyser;
