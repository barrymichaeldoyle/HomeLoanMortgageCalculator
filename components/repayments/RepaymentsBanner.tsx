import { useMemo } from 'react';

import { useRepaymentsStore } from '@/stores/repaymentsStore';

import { BottomBanner } from '../BottomBanner';
import { getFormattedMonthlyRepayment } from './getFormattedMonthlyRepayment';

export function RepaymentsBanner() {
  const { purchasePrice, deposit, monthlyServiceFee, interestRate, repaymentPeriod } =
    useRepaymentsStore();

  const value = useMemo(
    () =>
      getFormattedMonthlyRepayment({
        purchasePrice,
        deposit,
        monthlyServiceFee,
        interestRate,
        repaymentPeriod,
      }),
    [purchasePrice, deposit, monthlyServiceFee, interestRate, repaymentPeriod]
  );

  return <BottomBanner label="Monthly Repayments" value={value} />;
}
