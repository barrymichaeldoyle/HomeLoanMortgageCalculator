import { Input, InputProps } from './Input';

interface YearsInputProps extends Omit<InputProps, 'value' | 'onChangeText'> {
  value: number;
  onChangeText: (value: number) => void;
}

export function YearsInput({ value, onChangeText, ...props }: YearsInputProps) {
  function handleChangeText(text: string) {
    const cleaned = text.replace(/[^0-9]/g, '');

    if (cleaned === '') {
      onChangeText(0);
      return;
    }
    const parsed = parseInt(cleaned, 10);
    if (!isNaN(parsed) && parsed >= 0 && parsed <= 100) {
      onChangeText(parsed);
    }
  }

  return (
    <Input
      {...props}
      value={value === 0 ? '' : value.toString()}
      onChangeText={handleChangeText}
      keyboardType="number-pad"
      rightElement="years"
    />
  );
}
