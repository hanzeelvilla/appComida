import {
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList,
  StatusBar,
  Text,
} from "react-native";
import { useEffect, useState, useMemo } from "react";
import { useMenu } from "../hooks/useMenu";
import { FoodCard } from "../components/FoodCard";
import { SearchBar } from "../components/SearchBar";
import { CategoryFilter } from "../components/CategoryFilter";
import { MenuItem } from "../interfaces/menu.interface";

export default function App() {
  const { menu, loading } = useMenu();

  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [filteredMenu, setFilteredMenu] = useState<MenuItem[]>([]);

  const categories = useMemo(() => {
    const allCategories = menu.map((item) => item.category);
    return [...new Set(allCategories)];
  }, [menu]);

  useEffect(() => {
    let result = menu;

    if (selectedCategory !== "Todos") {
      result = result.filter((item) => item.category === selectedCategory);
    }

    if (searchText) {
      const textData = searchText.toUpperCase();
      result = result.filter((item) => {
        const itemData = item.name ? item.name.toUpperCase() : "".toUpperCase();
        return itemData.includes(textData);
      });
    }

    setFilteredMenu(result);
  }, [menu, searchText, selectedCategory]);

  if (loading)
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#FF6347" />
      </View>
    );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <SearchBar value={searchText} onChangeText={setSearchText} />

      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelect={setSelectedCategory}
      />

      <FlatList
        data={filteredMenu}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <FoodCard item={item} />}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>
              No hay resultados para "{searchText}" en {selectedCategory}
            </Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F2F2F2",
  },
  listContent: {
    padding: 16,
    paddingTop: 8,
    paddingBottom: 50,
  },
  emptyContainer: {
    alignItems: "center",
    marginTop: 50,
    paddingHorizontal: 20,
  },
  emptyText: {
    fontSize: 16,
    color: "#888",
    textAlign: "center",
  },
});
