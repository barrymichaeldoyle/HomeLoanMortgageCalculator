import { View, Text, TextInput, TextInputProps } from 'react-native';

import { colors } from '@/constants/colors';

interface InputProps extends TextInputProps {
  label: string;
}

export function Input({ label, ...props }: InputProps) {
  return (
    <View className="w-full gap-1">
      <Text className="text-sm text-neutral-700 font-semibold">{label}</Text>
      <TextInput
        className="w-full h-10 px-4 rounded-[10px] bg-white border border-neutral-300"
        placeholderTextColor={colors.neutral[500]}
        {...props}
      />
    </View>
  );
}
