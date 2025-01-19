import { Stack } from 'expo-router';
import { View } from 'react-native';

import RepaymentsIcon from '@/assets/icons/repayments.svg';
import { HeaderTitle } from '@/components/HeaderTitle';
import { CurrencyInput } from '@/components/input/CurrencyInput';
import { PercentageInput } from '@/components/input/PercentageInput';
import { YearsInput } from '@/components/input/YearsInput';
import { ScreenContainer } from '@/components/ScreenContainer';
import { useRepaymentsStore } from '@/stores/repaymentsStore';
import { RepaymentsBanner } from '@/components/repayments/RepaymentsBanner';
import {
  DEFAULT_INTEREST_RATE_ZA,
  DEFAULT_LOAN_TERM_ZA,
  DEFAULT_MONTHLY_SERVICE_FEE_ZA,
} from '@/constants/constants';

export default function RepaymentsCalculator() {
  const {
    purchasePrice,
    deposit,
    monthlyServiceFee,
    interestRate,
    repaymentPeriod,
    setPurchasePrice,
    setDeposit,
    setMonthlyServiceFee,
    setInterestRate,
    setRepaymentPeriod,
  } = useRepaymentsStore();

  return (
    <ScreenContainer>
      <Stack.Screen
        options={{
          headerBackTitle: 'Home',
          headerTitle: () => <HeaderTitle Icon={RepaymentsIcon}>Repayments Calculator</HeaderTitle>,
        }}
      />
      <View className="gap-6">
        <CurrencyInput
          label="Purchase Price"
          value={purchasePrice}
          onChangeText={setPurchasePrice}
        />
        <CurrencyInput label="Deposit" value={deposit} onChangeText={setDeposit} />
        <CurrencyInput
          label="Monthly Service Fee"
          value={monthlyServiceFee}
          onChangeText={setMonthlyServiceFee}
          defaultValue={DEFAULT_MONTHLY_SERVICE_FEE_ZA}
          resetText="Reset to default"
        />
        <View className="flex-row gap-6">
          <View className="flex-1">
            <PercentageInput
              label="Interest Rate"
              value={interestRate}
              onChangeText={setInterestRate}
              defaultValue={DEFAULT_INTEREST_RATE_ZA}
              resetText={`Reset to prime`}
            />
          </View>
          <View className="flex-1">
            <YearsInput
              label="Loan Term"
              value={repaymentPeriod}
              onChangeText={setRepaymentPeriod}
              defaultValue={DEFAULT_LOAN_TERM_ZA}
              resetText={`Reset to ${DEFAULT_LOAN_TERM_ZA} years`}
            />
          </View>
        </View>
      </View>

      <RepaymentsBanner />
    </ScreenContainer>
  );
}
