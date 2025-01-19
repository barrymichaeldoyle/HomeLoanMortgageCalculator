import { useMemo } from 'react';

import { useRepaymentsStore } from '@/stores/repaymentsStore';

import { BottomBanner } from '../BottomBanner';

export function RepaymentsBanner() {
  const { purchasePrice, deposit, monthlyServiceFee, interestRate, repaymentPeriod } =
    useRepaymentsStore();

  const value = useMemo(
    () =>
      getFormattedMonthlyRepayment(
        purchasePrice,
        deposit,
        monthlyServiceFee,
        interestRate,
        repaymentPeriod
      ),
    [purchasePrice, deposit, monthlyServiceFee, interestRate, repaymentPeriod]
  );

  return <BottomBanner label="Monthly Repayments" value={value} />;
}

function getFormattedMonthlyRepayment(
  purchasePrice: number,
  deposit: number,
  monthlyServiceFee: number,
  interestRate: number,
  repaymentPeriod: number,
  locale = 'en-ZA',
  currencySymbol = 'R'
) {
  // Return 0 if deposit is greater than or equal to purchase price
  if (deposit >= purchasePrice) {
    return `${currencySymbol}0`;
  }

  // Convert annual interest rate to monthly (and from percentage to decimal)
  const monthlyInterestRate = interestRate / 100 / 12;

  // Convert years to months
  const numberOfPayments = repaymentPeriod * 12;

  // Calculate loan amount (purchase price minus deposit)
  const loanAmount = purchasePrice - deposit;

  // Calculate monthly repayment using loan amortization formula
  const monthlyRepayment =
    (loanAmount * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments))) /
    (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

  // Add monthly service fee
  const totalMonthlyPayment = Math.round(monthlyRepayment + monthlyServiceFee);

  // Format as currency string
  return `${currencySymbol}${totalMonthlyPayment.toLocaleString(locale)}`;
}
