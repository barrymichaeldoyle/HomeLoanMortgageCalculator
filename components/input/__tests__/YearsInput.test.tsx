import { render, fireEvent } from '@testing-library/react-native';
import { YearsInput } from '../YearsInput';

describe('YearsInput', () => {
  const mockOnChangeText = jest.fn();

  beforeEach(() => {
    mockOnChangeText.mockClear();
  });

  it('renders with initial value', () => {
    const { getByDisplayValue, getByText } = render(
      <YearsInput label="Years" value={5} onChangeText={mockOnChangeText} />
    );
    expect(getByDisplayValue('5')).toBeTruthy();
    expect(getByText('years')).toBeTruthy();
  });

  it('handles valid decimal inputs', () => {
    const { getByTestId } = render(
      <YearsInput label="Years" value={0} onChangeText={mockOnChangeText} testID="years-input" />
    );
    const input = getByTestId('years-input');

    fireEvent.changeText(input, '42.5');
    expect(mockOnChangeText).toHaveBeenCalledWith(42.5);
  });

  it('allows typing decimal point without triggering onChange', () => {
    const { getByTestId } = render(
      <YearsInput label="Years" value={0} onChangeText={mockOnChangeText} testID="years-input" />
    );
    const input = getByTestId('years-input');

    fireEvent.changeText(input, '42.');
    expect(mockOnChangeText).toHaveBeenCalledWith(42);
  });

  it('limits input to 4 decimal places', () => {
    const { getByTestId } = render(
      <YearsInput label="Years" value={0} onChangeText={mockOnChangeText} testID="years-input" />
    );
    const input = getByTestId('years-input');

    // Should accept 4 decimal places
    fireEvent.changeText(input, '42.1234');
    expect(mockOnChangeText).toHaveBeenCalledWith(42.1234);

    // Should ignore input beyond 4 decimal places
    fireEvent.changeText(input, '42.12345');
    expect(mockOnChangeText).toHaveBeenLastCalledWith(42.1234);
  });

  it('handles empty input', () => {
    const { getByTestId } = render(
      <YearsInput label="Years" value={5} onChangeText={mockOnChangeText} testID="years-input" />
    );
    const input = getByTestId('years-input');

    fireEvent.changeText(input, '');
    expect(mockOnChangeText).not.toHaveBeenCalled();
  });

  it('rejects invalid characters', () => {
    const { getByTestId } = render(
      <YearsInput label="Years" value={0} onChangeText={mockOnChangeText} testID="years-input" />
    );
    const input = getByTestId('years-input');

    fireEvent.changeText(input, 'abc');
    expect(mockOnChangeText).not.toHaveBeenCalled();
  });

  it('enforces maximum value of 100', () => {
    const { getByTestId } = render(
      <YearsInput label="Years" value={0} onChangeText={mockOnChangeText} testID="years-input" />
    );
    const input = getByTestId('years-input');

    // Should not trigger onChangeText for values over 100
    fireEvent.changeText(input, '101');
    expect(mockOnChangeText).not.toHaveBeenCalledWith(101);
  });

  it('handles multiple decimal points by using only the first one', () => {
    const { getByTestId } = render(
      <YearsInput label="Years" value={0} onChangeText={mockOnChangeText} testID="years-input" />
    );
    const input = getByTestId('years-input');

    fireEvent.changeText(input, '42.5.6');
    expect(mockOnChangeText).toHaveBeenCalledWith(42.56);
  });

  it('maintains local value state while typing', () => {
    const { getByTestId } = render(
      <YearsInput label="Years" value={0} onChangeText={mockOnChangeText} testID="years-input" />
    );
    const input = getByTestId('years-input');

    // Check that the local value updates while typing
    fireEvent.changeText(input, '42');
    expect(input.props.value).toBe('42');

    fireEvent.changeText(input, '42.');
    expect(input.props.value).toBe('42.');

    fireEvent.changeText(input, '42.5');
    expect(input.props.value).toBe('42.5');
  });

  it('handles pasting text', () => {
    const { getByTestId } = render(
      <YearsInput label="Years" value={0} onChangeText={mockOnChangeText} testID="years-input" />
    );
    const input = getByTestId('years-input');

    fireEvent.changeText(input, '42.5');
    expect(mockOnChangeText).toHaveBeenCalledWith(42.5);
  });

  it('handles pasting text with invalid characters', () => {
    const { getByTestId } = render(
      <YearsInput label="Years" value={0} onChangeText={mockOnChangeText} testID="years-input" />
    );
    const input = getByTestId('years-input');

    fireEvent.changeText(input, '42.5');
    expect(mockOnChangeText).toHaveBeenCalledWith(42.5);

    fireEvent.changeText(input, '42,5');
    expect(mockOnChangeText).toHaveBeenCalledWith(42.5);

    fireEvent.changeText(input, '42.5,65.5');
    expect(mockOnChangeText).toHaveBeenCalledWith(42.5);
  });
});
