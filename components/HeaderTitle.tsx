import { View, Text } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { colors } from '@/constants/colors';
import { FC, ReactNode } from 'react';

interface HeaderTitleProps {
  Icon: FC<SvgProps>;
  children: ReactNode;
}

export function HeaderTitle({ children, Icon }: HeaderTitleProps) {
  return (
    <View className="flex-row items-center gap-2">
      <Icon width={18} height={18} color={colors.neutral[100]} />
      <Text className="text-[17px] text-neutral-100 font-semibold">{children}</Text>
    </View>
  );
}
