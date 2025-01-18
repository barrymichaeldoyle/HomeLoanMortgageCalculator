import { Stack } from 'expo-router';
import { Text, View } from 'react-native';

import HouseIcon from '@/assets/icons/house.svg';
import { colors } from '@/constants/colors';

// TODO: implement a different layout for web if we deploy there...

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary[500],
        },
        headerTintColor: colors.neutral[100],
        headerTitleStyle: {
          fontWeight: 'normal',
        },
        headerTitle: () => (
          <View className="flex-row items-center gap-2">
            <HouseIcon
              width={18}
              height={18}
              color={colors.neutral[100]}
              style={{ marginLeft: 16 }}
            />
            <Text className="text-lg text-neutral-100 font-semibold">Home Loan Calculator</Text>
          </View>
        ),
      }}
    />
  );
}
