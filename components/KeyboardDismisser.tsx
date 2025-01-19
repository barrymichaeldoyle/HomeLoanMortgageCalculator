import { ReactNode } from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

export function KeyboardDismisser({ children }: { children: ReactNode }) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      {children}
    </TouchableWithoutFeedback>
  );
}
