import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  let [title] = useState('hello')
  let uri = 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!!!!!!!{title}</Text>
      <Image source={{ uri }} style={styles.width}></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  width: {
    width: '100%',
    height: 200,
  }
});
