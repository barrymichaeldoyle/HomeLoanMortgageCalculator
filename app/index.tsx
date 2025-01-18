import { verifyInstallation } from 'nativewind';
import { View } from 'react-native';

import AffordabilityIcon from '@/assets/icons/affordability.svg';
import HouseIcon from '@/assets/icons/house.svg';

import '../global.css';
import { Button } from '../components/Button';
import { Stack } from 'expo-router';

export default function Index() {
  verifyInstallation();

  return (
    <View className="flex-1 justify-center items-center bg-neutral-100 p-4">
      <Stack.Screen options={{ headerBackTitle: 'Home' }} />
      <View className="gap-4 w-full max-w-[600px]">
        <Button href="/affordability" outline fullWidth icon={AffordabilityIcon}>
          Affordability Calculator
        </Button>
        <Button href="/repayments" outline fullWidth icon={HouseIcon}>
          Repayments Calculator
        </Button>
      </View>
    </View>
  );
}
