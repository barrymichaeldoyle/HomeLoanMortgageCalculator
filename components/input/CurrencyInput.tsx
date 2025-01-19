import { Input, InputProps } from './Input';

interface CurrencyInputProps extends Omit<InputProps, 'value' | 'onChangeText' | 'defaultValue'> {
  value: number;
  onChangeText: (value: number) => void;
  defaultValue?: number;
}

export function CurrencyInput({
  value,
  onChangeText,
  defaultValue,
  resetText = 'Reset to default',
  ...props
}: CurrencyInputProps) {
  const showReset = defaultValue !== undefined && value !== defaultValue;

  function formatCurrency(amount: number): string {
    // Show just the R symbol when amount is 0
    if (amount === 0) {
      return 'R ';
    }
    // Add rand sign and commas, no decimal places
    // TODO: cater for other locales later
    return `R ${amount.toLocaleString('en-ZA')}`;
  }

  const handleChangeText = (text: string) => {
    // Remove all non-digit characters
    const numbers = text.replace(/[^0-9]/g, '');

    // Convert to number, defaulting to 0 if empty
    const amount = numbers ? parseInt(numbers) : 0;

    // Call the parent's onChangeText with the numeric value
    onChangeText(amount);
  };

  function handleReset() {
    if (defaultValue !== undefined) {
      onChangeText(defaultValue);
    }
  }

  return (
    <Input
      {...props}
      value={formatCurrency(value)}
      onChangeText={handleChangeText}
      keyboardType="number-pad"
      showReset={showReset}
      onReset={handleReset}
    />
  );
}
