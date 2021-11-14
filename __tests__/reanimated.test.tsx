import React from 'react';
import { View, Button, Text } from 'react-native';
import { render, fireEvent } from '@testing-library/react-native';
import { useSharedValue } from 'react-native-reanimated';

const ViewTestComponent: React.FC = () => {
  const sv = useSharedValue(1);
  return <Text testID="text">{sv.value}</Text>;
};

const TestComponentWithSV: React.FC = () => {
  const sv = useSharedValue(1);

  return (
    <View>
      <Text testID="text">{sv.value}</Text>
      <Button
        testID="button"
        title="run"
        onPress={(): void => {
          sv.value = sv.value + 1;
        }}
      />
    </View>
  );
};

describe('SharedValue basic render', () => {
  test('Contains default value', () => {
    const { getByTestId } = render(<ViewTestComponent />);
    const text = getByTestId('text');
    expect(text.children[0]).toBe('1');
  });

  test('No changes value after click', () => {
    const { getByTestId } = render(<TestComponentWithSV />);
    const text = getByTestId('text');
    const button = getByTestId('button');

    expect(text.children[0]).toBe('1');
    fireEvent.press(button);
    expect(text.children[0]).toBe('1');
    fireEvent.press(button);
    expect(text.children[0]).toBe('1');
  });
});
