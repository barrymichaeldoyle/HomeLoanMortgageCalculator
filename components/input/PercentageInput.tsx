import { Input, InputProps } from './Input';
import React from 'react';

interface PercentageInputProps extends Omit<InputProps, 'value' | 'onChangeText'> {
  value: number;
  onChangeText: (value: number) => void;
}

export function PercentageInput({ value, onChangeText, ...props }: PercentageInputProps) {
  const [textValue, setTextValue] = React.useState(value.toString());

  function handleChangeText(text: string) {
    // Only allow numbers, a single decimal point, and comma (which we'll convert to period)
    if (!/^[\d.,]*$/.test(text)) {
      return;
    }

    // Replace commas with periods
    let sanitizedText = text.replace(',', '.');

    // Only allow a single period
    const periodCount = (sanitizedText.match(/\./g) || []).length;
    if (periodCount > 1) {
      return;
    }

    // Only allow numbers and a single decimal point
    if (!/^\d*\.?\d*$/.test(sanitizedText)) {
      return;
    }

    // Check decimal places before updating display
    const decimalPlaces = sanitizedText.includes('.') ? sanitizedText.split('.')[1].length : 0;
    if (decimalPlaces > 4) {
      return;
    }

    // Check value range before updating display
    const parsed = parseFloat(sanitizedText);
    if (!isNaN(parsed) && parsed >= 100) {
      return;
    }

    setTextValue(sanitizedText);

    if (sanitizedText === '' || sanitizedText === '.') {
      onChangeText(0);
      return;
    }

    // Since we've already validated everything, we can safely call onChangeText
    if (!isNaN(parsed) && parsed >= 0) {
      onChangeText(parsed);
    }
  }

  return (
    <Input
      {...props}
      value={textValue}
      onChangeText={handleChangeText}
      keyboardType="decimal-pad"
      rightElement="%"
    />
  );
}
