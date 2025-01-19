import { View, Text, TextInput, TextInputProps, Pressable } from 'react-native';
import React, { useRef } from 'react';

import { colors } from '@/constants/colors';

export interface InputProps extends TextInputProps {
  label: string;
  rightElement?: string;
  showReset?: boolean;
  onReset?: () => void;
  resetText?: string;
}

export function Input({
  label,
  rightElement,
  showReset,
  onReset,
  resetText = 'Reset to default',
  ...props
}: InputProps) {
  const inputRef = useRef<TextInput>(null);

  function handleContainerPress() {
    inputRef.current?.focus();
  }

  return (
    <Pressable onPress={handleContainerPress}>
      <View className="w-full gap-1">
        <Text className="text-sm text-neutral-700 font-semibold">{label}</Text>
        <View className="w-full h-10 rounded-[10px] bg-white border border-neutral-300 flex-row items-center">
          <TextInput
            ref={inputRef}
            className="flex-1 min-w-0 px-3 h-full rounded-[10px] tracking-wide"
            placeholderTextColor={colors.neutral[500]}
            {...props}
          />
          {rightElement && (
            <Text className="text-neutral-500 ml-1 mr-3 flex-shrink-0 absolute right-0 pointer-events-none">
              {rightElement}
            </Text>
          )}
        </View>
        {showReset && (
          <Pressable onPress={onReset}>
            <Text className="text-xs text-primary-500 font-semibold mt-[-2px] ml-2">
              {resetText}
            </Text>
          </Pressable>
        )}
      </View>
    </Pressable>
  );
}
