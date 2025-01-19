import { Stack } from 'expo-router';

import AffordabilityIcon from '@/assets/icons/affordability.svg';
import { HeaderTitle } from '@/components/HeaderTitle';
import { CurrencyInput } from '@/components/input/CurrencyInput';
import { ScreenContainer } from '@/components/ScreenContainer';
import { useState } from 'react';

export default function AffordabilityCalculator() {
  const [monthlyIncome, setMonthlyIncome] = useState(100_000);

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
      <CurrencyInput label="Monthly Income" value={monthlyIncome} onChangeText={setMonthlyIncome} />
    </ScreenContainer>
  );
}
