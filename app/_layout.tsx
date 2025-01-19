import { Stack } from 'expo-router';

import HouseIcon from '@/assets/icons/house.svg';
import { colors } from '@/constants/colors';
import { HeaderTitle } from '@/components/HeaderTitle';

// TODO: implement a different layout for web if we deploy there...

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary[900],
        },
        headerTintColor: colors.neutral[100],
        headerTitle: () => <HeaderTitle Icon={HouseIcon}>Home Loan Calculator</HeaderTitle>,
        animation: 'simple_push',
        animationDuration: 250,
      }}
    />
  );
}
