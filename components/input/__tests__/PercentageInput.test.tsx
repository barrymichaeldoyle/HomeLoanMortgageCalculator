import { render, fireEvent } from '@testing-library/react-native';

import { PercentageInput } from '../PercentageInput';

describe('PercentageInput', () => {
  const mockOnChangeText = jest.fn();

  beforeEach(() => {
    mockOnChangeText.mockClear();
  });

  it('renders with initial value', () => {
    const { getByDisplayValue, getByText } = render(
      <PercentageInput label="Percentage" value={50} onChangeText={mockOnChangeText} />
    );
    expect(getByDisplayValue('50')).toBeTruthy();
    expect(getByText('%')).toBeTruthy();
  });

  it('handles valid number inputs', () => {
    const { getByTestId } = render(
      <PercentageInput
        label="Percentage"
        value={0}
        onChangeText={mockOnChangeText}
        testID="percentage-input"
      />
    );
    const input = getByTestId('percentage-input');

    fireEvent.changeText(input, '42');
    expect(mockOnChangeText).toHaveBeenCalledWith(42);
  });

  it('handles decimal inputs', () => {
    const { getByTestId } = render(
      <PercentageInput
        label="Percentage"
        value={0}
        onChangeText={mockOnChangeText}
        testID="percentage-input"
      />
    );
    const input = getByTestId('percentage-input');

    fireEvent.changeText(input, '42.5');
    expect(mockOnChangeText).toHaveBeenCalledWith(42.5);
  });

  it('converts comma to period', () => {
    const { getByTestId } = render(
      <PercentageInput
        label="Percentage"
        value={0}
        onChangeText={mockOnChangeText}
        testID="percentage-input"
      />
    );
    const input = getByTestId('percentage-input');

    fireEvent.changeText(input, '42,5');
    expect(mockOnChangeText).toHaveBeenCalledWith(42.5);
  });

  it('rejects multiple decimal points', () => {
    const { getByTestId } = render(
      <PercentageInput
        label="Percentage"
        value={0}
        onChangeText={mockOnChangeText}
        testID="percentage-input"
      />
    );
    const input = getByTestId('percentage-input');

    fireEvent.changeText(input, '42.5.3');
    expect(mockOnChangeText).not.toHaveBeenCalledWith(42.53);
  });

  it('limits decimal places to 4', () => {
    const { getByTestId } = render(
      <PercentageInput
        label="Percentage"
        value={0}
        onChangeText={mockOnChangeText}
        testID="percentage-input"
      />
    );
    const input = getByTestId('percentage-input');

    fireEvent.changeText(input, '42.5432');
    expect(mockOnChangeText).toHaveBeenCalledWith(42.5432);

    fireEvent.changeText(input, '42.54321');
    expect(mockOnChangeText).not.toHaveBeenCalledWith(42.54321);
  });

  it('prevents values >= 100', () => {
    const { getByTestId } = render(
      <PercentageInput
        label="Percentage"
        value={0}
        onChangeText={mockOnChangeText}
        testID="percentage-input"
      />
    );
    const input = getByTestId('percentage-input');

    fireEvent.changeText(input, '100');
    expect(mockOnChangeText).not.toHaveBeenCalledWith(100);
  });
  it('handles empty input', () => {
    const { getByTestId } = render(
      <PercentageInput
        label="Percentage"
        value={50}
        onChangeText={mockOnChangeText}
        testID="percentage-input"
      />
    );
    const input = getByTestId('percentage-input');

    fireEvent.changeText(input, '');
    expect(mockOnChangeText).not.toHaveBeenCalledWith();
  });

  it('rejects invalid characters', () => {
    const { getByTestId } = render(
      <PercentageInput
        label="Percentage"
        value={0}
        onChangeText={mockOnChangeText}
        testID="percentage-input"
      />
    );
    const input = getByTestId('percentage-input');

    fireEvent.changeText(input, 'abc');
    expect(mockOnChangeText).not.toHaveBeenCalled();
  });

  it('handles pasting text', () => {
    const { getByTestId } = render(
      <PercentageInput
        label="Percentage"
        value={0}
        onChangeText={mockOnChangeText}
        testID="percentage-input"
      />
    );
    const input = getByTestId('percentage-input');

    fireEvent.changeText(input, '42.5');
    expect(mockOnChangeText).toHaveBeenCalledWith(42.5);

    fireEvent.changeText(input, '42,5');
    expect(mockOnChangeText).toHaveBeenCalledWith(42.5);

    fireEvent.changeText(input, '42.5,65.5');
    expect(mockOnChangeText).toHaveBeenCalledWith(42.5);
  });

  it('handles pasting text with invalid characters', () => {
    const { getByTestId } = render(
      <PercentageInput
        label="Percentage"
        value={0}
        onChangeText={mockOnChangeText}
        testID="percentage-input"
      />
    );
    const input = getByTestId('percentage-input');

    fireEvent.changeText(input, 'abc');
    expect(mockOnChangeText).not.toHaveBeenCalled();

    fireEvent.changeText(input, '-42.5');
    expect(mockOnChangeText).not.toHaveBeenCalled();

    fireEvent.changeText(input, '42 5');
    expect(mockOnChangeText).not.toHaveBeenCalled();
  });
});
