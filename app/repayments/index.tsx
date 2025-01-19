import { Stack } from 'expo-router';
import { useState } from 'react';

import RepaymentsIcon from '@/assets/icons/repayments.svg';
import { HeaderTitle } from '@/components/HeaderTitle';
import { ScreenContainer } from '@/components/ScreenContainer';
import { CurrencyInput } from '@/components/input/CurrencyInput';
import { View } from 'react-native';
import { YearsInput } from '@/components/input/YearsInput';
import { PercentageInput } from '@/components/input/PercentageInput';

export default function RepaymentsCalculator() {
  const [purchasePrice, setPurchasePrice] = useState(1_500_000);
  const [deposit, setDeposit] = useState(100_000);
  const [monthlyServiceFee, setMonthlyServiceFee] = useState(69);
  const [interestRate, setInterestRate] = useState(11.25);
  const [repaymentPeriod, setRepaymentPeriod] = useState(30);

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
              label="Repayment Period"
              value={repaymentPeriod}
              onChangeText={setRepaymentPeriod}
            />
          </View>
        </View>
      </View>
    </ScreenContainer>
  );
}
