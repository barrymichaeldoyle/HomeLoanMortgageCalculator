import { Stack } from 'expo-router';
import { View } from 'react-native';

import AffordabilityIcon from '@/assets/icons/affordability.svg';
import { HeaderTitle } from '@/components/HeaderTitle';
import { CurrencyInput } from '@/components/input/CurrencyInput';
import { ScreenContainer } from '@/components/ScreenContainer';
import { PercentageInput } from '@/components/input/PercentageInput';
import { DEFAULT_INTEREST_RATE_ZA } from '@/constants/constants';
import { YearsInput } from '@/components/input/YearsInput';
import { DEFAULT_LOAN_TERM_ZA } from '@/constants/constants';
import { AffordabilityBanner } from '@/components/affordability/AffordabilityBanner';
import { useAffordabilityStore } from '@/stores/affordabilityStore';

export default function AffordabilityCalculator() {
  const {
    monthlyRepayments,
    deposit,
    monthlyServiceFee,
    interestRate,
    repaymentPeriod,
    setMonthlyRepayments,
    setDeposit,
    setMonthlyServiceFee,
    setInterestRate,
    setRepaymentPeriod,
  } = useAffordabilityStore();

  return (
    <ScreenContainer>
      <Stack.Screen
        options={{
          headerBackTitle: 'Home',
          headerTitle: () => (
            <HeaderTitle Icon={AffordabilityIcon}>Affordability Calculator</HeaderTitle>
          ),
        }}
      />
      <View className="gap-6">
        <CurrencyInput
          label="Monthly Repayments"
          value={monthlyRepayments}
          onChangeText={setMonthlyRepayments}
        />
        <CurrencyInput label="Deposit" value={deposit} onChangeText={setDeposit} />
        <CurrencyInput
          label="Monthly Service Fee"
          value={monthlyServiceFee}
          onChangeText={setMonthlyServiceFee}
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

      <AffordabilityBanner />
    </ScreenContainer>
  );
}
