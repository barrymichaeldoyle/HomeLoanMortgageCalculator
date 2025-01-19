import { Text, View } from 'react-native';

interface BottomBannerProps {
  label: string;
  value: string;
}

export function BottomBanner({ label, value }: BottomBannerProps) {
  return (
    <View className="absolute bottom-0 left-0 right-0 bg-primary-900 p-3 pb-6 justify-between items-center gap-[18px] rounded-t-[30px]">
      <Text className="text-white font-normal">{label}</Text>
      <Text className="text-white text-lg font-semibold">{value}</Text>
    </View>
  );
}
