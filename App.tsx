import React from 'react';
import { StyleSheet, View } from 'react-native';

import ProfileScreen from './src/views/ProfileScreen/ProfileScreen';

import { Provider as PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <ProfileScreen />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
});
