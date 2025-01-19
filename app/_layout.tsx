import { Stack } from 'expo-router';

import HouseIcon from '@/assets/icons/house.svg';
import { colors } from '@/constants/colors';
import { HeaderTitle } from '@/components/HeaderTitle';
import { View } from 'react-native';
import { ReactNode } from 'react';

// TODO: implement a different layout for web if we deploy there...

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary[500],
        },
        headerTintColor: colors.neutral[100],
        headerTitle: () => <HeaderTitle Icon={HouseIcon}>Home Loan Calculator</HeaderTitle>,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          contentComponent: ({ children }: { children: ReactNode }) => (
            <View className="flex-1 p-8">{children}</View>
          ),
        }}
      />
    </Stack>
  );
}
