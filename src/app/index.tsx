import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { api } from "../services/api";
import { getMenu } from "../services/menu.service";
import { MenuItem } from "../interfaces/menu.interface";
import { useEffect, useState } from "react";

export default function App() {
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadMenu();
  }, []);

  const loadMenu = async() => {
    setLoading(true);
    try {
      const data = await getMenu();
      setMenu(data);
      console.log(data)
    } catch (error) {
      console.error("Error loading menu:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text>Menú Screen</Text>
      <StatusBar style="auto" />
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
