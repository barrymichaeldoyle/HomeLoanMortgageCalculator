import { useState, useEffect } from 'react';

import { Input, InputProps } from './Input';

interface YearsInputProps extends Omit<InputProps, 'value' | 'onChangeText' | 'defaultValue'> {
  value: number;
  onChangeText: (value: number) => void;
  defaultValue?: number;
}

export function YearsInput({ value, onChangeText, defaultValue, ...props }: YearsInputProps) {
  const [localValue, setLocalValue] = useState(value.toString());
  const showReset = defaultValue !== undefined && value !== defaultValue;

  useEffect(() => {
    setLocalValue(value.toString());
  }, [value]);

  function handleChangeText(text: string) {
    // Allow only numbers and one decimal point
    const cleaned = text.replace(/[^\d.]/g, '').replace(/(\..*)\./g, '$1');

    // Limit to 4 decimal places
    const parts = cleaned.split('.');
    if (parts.length > 1 && parts[1].length > 4) {
      return; // Ignore input if it exceeds 4 decimal places
    }

    setLocalValue(cleaned);

    // Only convert to number if we have a valid decimal number
    if (cleaned !== '' && cleaned !== '.') {
      const parsed = parseFloat(cleaned);
      if (!isNaN(parsed) && parsed >= 0 && parsed <= 100) {
        onChangeText(parsed);
      }
    } else {
      onChangeText(0);
    }
  }

  function handleReset() {
    if (defaultValue !== undefined) {
      onChangeText(defaultValue);
    }
  }

  return (
    <Input
      {...props}
      value={localValue}
      onChangeText={handleChangeText}
      keyboardType="decimal-pad"
      rightElement="years"
      showReset={showReset}
      onReset={handleReset}
    />
  );
}
