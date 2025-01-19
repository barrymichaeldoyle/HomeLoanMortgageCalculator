import { View, Text, TextInput, TextInputProps } from 'react-native';

import { colors } from '@/constants/colors';

export interface InputProps extends TextInputProps {
  label: string;
  rightElement?: string;
}

export function Input({ label, rightElement, ...props }: InputProps) {
  return (
    <View className="w-full gap-1">
      <Text className="text-sm text-neutral-700 font-semibold">{label}</Text>
      <View className="w-full h-10 px-3 rounded-[10px] bg-white border border-neutral-300 flex-row items-center">
        <TextInput
          className="flex-1 min-w-0"
          placeholderTextColor={colors.neutral[500]}
          {...props}
        />
        {rightElement && (
          <Text className="text-neutral-500 ml-1 flex-shrink-0">{rightElement}</Text>
        )}
      </View>
    </View>
  );
}
