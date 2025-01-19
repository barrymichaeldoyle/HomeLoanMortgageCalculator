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
        />
        <View className="flex-row gap-6">
          <View className="flex-1">
            <PercentageInput
              label="Interest Rate"
              value={interestRate}
              onChangeText={setInterestRate}
            />
          </View>
          <View className="flex-1">
            <YearsInput
              label="Loan Term"
              value={repaymentPeriod}
              onChangeText={setRepaymentPeriod}
            />
          </View>
        </View>
      </View>

      <RepaymentsBanner />
    </ScreenContainer>
  );
}
