import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  Image,
} from "react-native";
import { useMenu } from "../hooks/useMenu";

export default function App() {
  const { menu, loading } = useMenu();

  if (loading)
    return (
      <ActivityIndicator
        size="large"
        color="#0000ff"
        style={styles.loadinContainer}
      />
    );

  return (
    <FlatList
      data={menu}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={{ marginVertical: 10, padding: 10, borderWidth: 1 }}>
          <Image
            source={{ uri: item.image }}
            style={{ width: 100, height: 100, marginBottom: 10 }}
          />
          <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
          <Text>Price: ${item.price}</Text>
          <Text>Category: {item.category}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  loadinContainer: {
    flex: 1,
    justifyContent: "center",
  },
});
