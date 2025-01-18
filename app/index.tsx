import { verifyInstallation } from 'nativewind';
import { Pressable, Text, View } from 'react-native';

import '../global.css';
import { Link, LinkProps } from 'expo-router';

export default function Index() {
  verifyInstallation();

  return (
    <View className="flex-1 justify-center items-center gap-4 bg-white">
      <HomePageButton title="Affordability Calculator" href="/affordability" />
      <HomePageButton title="Repayments Calculator" href="/repayments" />
    </View>
  );
}

function HomePageButton({ title, href }: { title: string; href: LinkProps['href'] }) {
  return (
    <Link href={href} asChild>
      <Pressable className="bg-blue-500 px-6 py-3 rounded-lg">
        <Text className="text-white font-semibold text-lg">{title}</Text>
      </Pressable>
    </Link>
  );
}
