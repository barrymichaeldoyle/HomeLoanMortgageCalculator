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
      <View className="w-full h-10 rounded-[10px] bg-white border border-neutral-300 flex-row items-center">
        <TextInput
          className="flex-1 min-w-0 px-3 h-full rounded-[10px]"
          placeholderTextColor={colors.neutral[500]}
          {...props}
        />
        {rightElement && (
          <Text className="text-neutral-500 ml-1 mr-3 flex-shrink-0 absolute right-0 pointer-events-none">
            {rightElement}
          </Text>
        )}
      </View>
    </View>
  );
}
