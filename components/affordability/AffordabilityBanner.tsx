import { useMemo } from 'react';

import { useAffordabilityStore } from '@/stores/affordabilityStore';

import { BottomBanner } from '../BottomBanner';
import { getFormattedAffordability } from './getFormattedAffordability';

export function AffordabilityBanner() {
  const { monthlyRepayments, deposit, monthlyServiceFee, interestRate, repaymentPeriod } =
    useAffordabilityStore();

  const value = useMemo(
    () =>
      getFormattedAffordability({
        monthlyRepayments,
        deposit,
        monthlyServiceFee,
        interestRate,
        repaymentPeriod,
      }),
    [monthlyRepayments, deposit, monthlyServiceFee, interestRate, repaymentPeriod]
  );

  return <BottomBanner label="Affordability" value={value} />;
}
