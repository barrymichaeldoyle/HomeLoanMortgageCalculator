import { Input, InputProps } from './Input';
import { useState } from 'react';

interface YearsInputProps extends Omit<InputProps, 'value' | 'onChangeText'> {
  value: number;
  onChangeText: (value: number) => void;
}

export function YearsInput({ value, onChangeText, ...props }: YearsInputProps) {
  const [localValue, setLocalValue] = useState(value.toString());

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

  return (
    <Input
      {...props}
      value={localValue}
      onChangeText={handleChangeText}
      keyboardType="decimal-pad"
      rightElement="years"
    />
  );
}
