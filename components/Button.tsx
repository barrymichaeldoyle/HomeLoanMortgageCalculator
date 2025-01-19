import { Link, LinkProps } from 'expo-router';
import { FC, ReactNode } from 'react';
import { Pressable, Text, PressableProps, View } from 'react-native';
import { SvgProps } from 'react-native-svg';

import { colors } from '@/constants/colors';

type ButtonProps = {
  children: ReactNode;
  href?: LinkProps['href'];
  onPress?: PressableProps['onPress'];
  size?: 'sm' | 'md';
  outline?: boolean;
  fullWidth?: boolean;
  icon?: FC<SvgProps>;
  iconPosition?: 'left' | 'right';
};

export function Button({
  children,
  href,
  onPress,
  size = 'md',
  outline = false,
  fullWidth = false,
  icon: Icon,
  iconPosition = 'left',
}: ButtonProps) {
  const buttonContent = (
    <Pressable
      className={`
        flex-row items-center justify-center
        px-6 py-3 rounded-[12px]
        ${outline ? 'border bg-white border-primary-900' : 'bg-primary-900'}
        ${fullWidth ? 'w-full' : ''}
      `}
      onPress={onPress}
    >
      <View className="flex-row items-center justify-center gap-2">
        {Icon && iconPosition === 'left' && (
          <Icon
            width={24}
            height={24}
            color={outline ? colors.primary[900] : colors.neutral[100]}
          />
        )}
        <Text
          className={`
            font-semibold text-lg
            ${outline ? 'text-primary-900' : 'text-neutral-100'}
            ${fullWidth ? 'text-center' : ''}
          `}
        >
          {children}
        </Text>
        {Icon && iconPosition === 'right' && (
          <Icon
            width={24}
            height={24}
            color={outline ? colors.primary[900] : colors.neutral[100]}
          />
        )}
      </View>
    </Pressable>
  );

  if (href) {
    return (
      <Link href={href} asChild>
        {buttonContent}
      </Link>
    );
  }

  return buttonContent;
}
