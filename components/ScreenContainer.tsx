import clsx from 'clsx';
import { ReactNode } from 'react';
import { View } from 'react-native';
import { KeyboardDismisser } from './KeyboardDismisser';

interface ScreenContainerProps {
  children: ReactNode;
  className?: string;
}

export function ScreenContainer({ children, className }: ScreenContainerProps) {
  return (
    <KeyboardDismisser>
      <View className={clsx('flex-1 bg-neutral-100 p-8', className)}>{children}</View>
    </KeyboardDismisser>
  );
}
