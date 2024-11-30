import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SafetyGuidelinesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Safety Guidelines</Text>
      <Text>- Stay informed about fire risks.</Text>
      <Text>- Create an evacuation plan.</Text>
      <Text>- Keep emergency contacts ready.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default SafetyGuidelinesScreen;
