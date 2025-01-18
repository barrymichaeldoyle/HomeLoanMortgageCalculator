import { Stack } from 'expo-router';
import { View, Text } from 'react-native';

export default function AffordabilityCalculator() {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Stack.Screen options={{ headerBackTitle: 'Home' }} />
      <Text className="text-xl">Affordability Calculator</Text>
    </View>
  );
}
