import { Pressable, Text, View } from 'react-native';

import './global.css';

export default function App() {
  return (
    <View>
      <Pressable
        className="items-center border p-4"
        style={({ pressed }) => (pressed ? { backgroundColor: 'red' } : { backgroundColor: 'white' })}
      >
        <Text>This should be red when pressed</Text>
      </Pressable>
    </View>
  );
}
