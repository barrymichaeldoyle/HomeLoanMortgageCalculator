import { Stack } from 'expo-router';
import { useState } from 'react';

import RepaymentsIcon from '@/assets/icons/repayments.svg';
import { HeaderTitle } from '@/components/HeaderTitle';
import { ScreenContainer } from '@/components/ScreenContainer';
import { CurrencyInput } from '@/components/input/CurrencyInput';

export default function RepaymentsCalculator() {
  const [purchasePrice, setPurchasePrice] = useState(1_500_000);
  return (
    <ScreenContainer>
      <Stack.Screen
        options={{
          headerBackTitle: 'Home',
          headerTitle: () => <HeaderTitle Icon={RepaymentsIcon}>Repayments Calculator</HeaderTitle>,
        }}
      />
      <CurrencyInput label="Purchase Price" value={purchasePrice} onChangeText={setPurchasePrice} />
    </ScreenContainer>
  );
}
