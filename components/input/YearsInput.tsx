import { useState, useEffect } from 'react';

import { Input, InputProps } from './Input';

interface YearsInputProps extends Omit<InputProps, 'value' | 'onChangeText' | 'defaultValue'> {
  value: number;
  onChangeText: (value: number) => void;
  defaultValue?: number;
}

export function YearsInput({ value, onChangeText, defaultValue, ...props }: YearsInputProps) {
  const [textValue, setTextValue] = useState(value.toString());
  const showReset = defaultValue !== undefined && value !== defaultValue;

  useEffect(() => {
    setTextValue(value.toString());
  }, [value]);

  function handleChangeText(text: string) {
    // Allow only numbers and one decimal point
    const sanitizedText = text.replace(/[^\d.]/g, '').replace(/(\..*)\./g, '$1');

    // Limit to 4 decimal places
    const parts = sanitizedText.split('.');
    if (parts.length > 1 && parts[1].length > 4) {
      return; // Ignore input if it exceeds 4 decimal places
    }

    setTextValue(sanitizedText);

    if (sanitizedText !== '.') {
      const parsed = parseFloat(sanitizedText);
      if (!isNaN(parsed) && parsed >= 0 && parsed <= 100) {
        onChangeText(parsed);
      }
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
      value={textValue}
      onChangeText={handleChangeText}
      keyboardType="decimal-pad"
      rightElement="years"
      showReset={showReset}
      onReset={handleReset}
    />
  );
}
