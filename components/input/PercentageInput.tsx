import { useEffect, useState } from 'react';

import { Input, InputProps } from './Input';

interface PercentageInputProps extends Omit<InputProps, 'value' | 'onChangeText' | 'defaultValue'> {
  value: number;
  onChangeText: (value: number) => void;
  defaultValue?: number;
}

export function PercentageInput({
  value,
  onChangeText,
  defaultValue,
  ...props
}: PercentageInputProps) {
  const [textValue, setTextValue] = useState(value.toString());
  const showReset = defaultValue !== undefined && value !== defaultValue;

  useEffect(() => {
    setTextValue(value.toString());
  }, [value]);

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

    // Handle decimal point only case
    if (sanitizedText === '.') {
      return;
    }

    // Since we've already validated everything, we can safely call onChangeText
    if (!isNaN(parsed) && parsed >= 0) {
      onChangeText(parsed);
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
      rightElement="%"
      showReset={showReset}
      onReset={handleReset}
    />
  );
}
