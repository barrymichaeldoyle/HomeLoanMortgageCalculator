import { verifyInstallation } from 'nativewind';
import { View } from 'react-native';

import AffordabilityIcon from '@/assets/icons/affordability.svg';
import RepaymentsIcon from '@/assets/icons/repayments.svg';
import { ScreenContainer } from '@/components/ScreenContainer';
import { BottomBanner } from '@/components/BottomBanner';
import { PRIME_LENDING_RATE_ZA } from '@/constants/constants';

import '../global.css';
import { Button } from '../components/Button';

export default function Index() {
  verifyInstallation();

  return (
    <ScreenContainer>
      <View className="gap-4 w-full max-w-[600px]">
        <Button href="/affordability" outline fullWidth icon={AffordabilityIcon}>
          Affordability Calculator
        </Button>
        <Button href="/repayments" outline fullWidth icon={RepaymentsIcon}>
          Repayments Calculator
        </Button>
      </View>

      <BottomBanner label="Current Prime Lending Rate" value={`${PRIME_LENDING_RATE_ZA}%`} />
    </ScreenContainer>
  );
}
