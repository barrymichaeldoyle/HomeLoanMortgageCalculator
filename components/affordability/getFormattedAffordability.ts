interface AffordabilityParams {
  monthlyRepayments: number;
  deposit: number;
  monthlyServiceFee: number;
  interestRate: number;
  repaymentPeriod: number;
  locale?: string;
  currencySymbol?: string;
}

export function getFormattedAffordability({
  monthlyRepayments,
  deposit,
  monthlyServiceFee,
  interestRate,
  repaymentPeriod,
  locale = 'en-ZA',
  currencySymbol = 'R',
}: AffordabilityParams): string {
  // Handle invalid or missing inputs
  if (
    !monthlyRepayments ||
    !repaymentPeriod ||
    isNaN(monthlyRepayments) ||
    isNaN(deposit) ||
    isNaN(monthlyServiceFee) ||
    isNaN(interestRate) ||
    isNaN(repaymentPeriod) ||
    monthlyRepayments <= 0 ||
    repaymentPeriod <= 0
  ) {
    return `${currencySymbol} 0`;
  }

  // Ensure deposit and monthlyServiceFee are not negative
  const safeDeposit = Math.max(0, deposit);
  const safeMonthlyServiceFee = Math.max(0, monthlyServiceFee);

  // Convert annual interest rate to monthly (and from percentage to decimal)
  const monthlyInterestRate = Math.max(0, interestRate) / 100 / 12;

  // Available for loan repayments (excluding service fee)
  const availableForRepayment = monthlyRepayments - safeMonthlyServiceFee;

  let affordablePrice = 0;

  if (monthlyInterestRate === 0) {
    // Simple calculation when interest rate is 0
    affordablePrice = availableForRepayment * repaymentPeriod * 12 + safeDeposit;
  } else {
    // Calculate affordable loan amount using the loan payment formula
    const loanAmount =
      (availableForRepayment * (1 - Math.pow(1 + monthlyInterestRate, -(repaymentPeriod * 12)))) /
      monthlyInterestRate;

    affordablePrice = loanAmount + safeDeposit;
  }

  // Ensure the result is valid
  if (isNaN(affordablePrice) || !isFinite(affordablePrice)) {
    return `${currencySymbol} 0`;
  }

  // Round to nearest whole number
  const roundedAmount = Math.round(affordablePrice);

  // Format as currency string
  return `${currencySymbol} ${roundedAmount.toLocaleString(locale)}`;
}
