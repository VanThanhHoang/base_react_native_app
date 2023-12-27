import { SafeAreaView, StyleSheet, Text } from "react-native";
import React from "react";

const SampleScreen = () => {
  return <SafeAreaView style={styles.container}>
    <Text>Sample Screen</Text>
  </SafeAreaView>;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default SampleScreen
