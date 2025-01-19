interface RepaymentParams {
  purchasePrice: number;
  deposit: number;
  monthlyServiceFee: number;
  interestRate: number;
  repaymentPeriod: number;
  locale?: string;
  currencySymbol?: string;
}

export function getFormattedMonthlyRepayment({
  purchasePrice,
  deposit,
  monthlyServiceFee,
  interestRate,
  repaymentPeriod,
  locale = 'en-ZA',
  currencySymbol = 'R',
}: RepaymentParams) {
  // Handle invalid or missing inputs
  if (
    !purchasePrice ||
    !repaymentPeriod ||
    isNaN(purchasePrice) ||
    isNaN(deposit) ||
    isNaN(monthlyServiceFee) ||
    isNaN(interestRate) ||
    isNaN(repaymentPeriod) ||
    purchasePrice <= 0 ||
    repaymentPeriod <= 0
  ) {
    return `${currencySymbol} 0`;
  }

  // Ensure deposit and monthlyServiceFee are not negative
  const safeDeposit = Math.max(0, deposit);
  const safeMonthlyServiceFee = Math.max(0, monthlyServiceFee);

  // Return 0 if deposit is greater than or equal to purchase price
  if (safeDeposit >= purchasePrice) {
    return `${currencySymbol} 0`;
  }

  // Convert annual interest rate to monthly (and from percentage to decimal)
  const monthlyInterestRate = Math.max(0, interestRate) / 100 / 12;

  // Handle zero interest rate case separately to avoid division by zero
  if (monthlyInterestRate === 0) {
    const loanAmount = purchasePrice - safeDeposit;
    const monthlyRepayment = loanAmount / (repaymentPeriod * 12);
    const totalMonthlyPayment = Math.round(monthlyRepayment + safeMonthlyServiceFee);
    return `${currencySymbol} ${totalMonthlyPayment.toLocaleString(locale)}`;
  }

  // Convert years to months
  const numberOfPayments = repaymentPeriod * 12;

  // Calculate loan amount (purchase price minus deposit)
  const loanAmount = purchasePrice - safeDeposit;

  // Calculate monthly repayment using loan amortization formula
  const monthlyRepayment =
    (loanAmount * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments))) /
    (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

  // Ensure the result is valid
  if (isNaN(monthlyRepayment) || !isFinite(monthlyRepayment)) {
    return `${currencySymbol}0`;
  }

  // Add monthly service fee
  const totalMonthlyPayment = Math.round(monthlyRepayment + safeMonthlyServiceFee);

  // Format as currency string
  return `${currencySymbol} ${totalMonthlyPayment.toLocaleString(locale)}`;
}
