import { View, Text, StyleSheet } from "react-native";

export default function Likes() {
  return (
    <View style={styles.container}>
      <Text>Favoritos Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
