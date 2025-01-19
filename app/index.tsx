import { verifyInstallation } from 'nativewind';
import { View } from 'react-native';

import AffordabilityIcon from '@/assets/icons/affordability.svg';
import RepaymentsIcon from '@/assets/icons/repayments.svg';

import '../global.css';
import { Button } from '../components/Button';
import { ScreenContainer } from '@/components/ScreenContainer';

export default function Index() {
  verifyInstallation();

  return (
    <ScreenContainer className="justify-center items-center">
      <View className="gap-4 w-full max-w-[600px]">
        <Button href="/affordability" outline fullWidth icon={AffordabilityIcon}>
          Affordability Calculator
        </Button>
        <Button href="/repayments" outline fullWidth icon={RepaymentsIcon}>
          Repayments Calculator
        </Button>
      </View>
    </ScreenContainer>
  );
}
