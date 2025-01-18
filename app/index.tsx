import { verifyInstallation } from 'nativewind';
import { Text, View } from 'react-native';

import '../global.css';

export default function Index() {
  verifyInstallation();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
