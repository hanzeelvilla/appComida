import React from "react";
import { StyleSheet, View, FlatList, Text, StatusBar } from "react-native";
import { useLikes } from "../context/Likes.context";
import { FoodCard } from "../components/FoodCard";

export default function LikesScreen() {
  const { likes } = useLikes();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <FlatList
        data={likes}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <FoodCard item={item} />}
        // Mensaje cuando no hay favoritos
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emoji}>💔</Text>
            <Text style={styles.emptyTitle}>Aún no tienes favoritos</Text>
            <Text style={styles.emptySubtitle}>
              Ve al menú y dale amor a la comida que te guste.
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
  listContent: {
    padding: 16,
    paddingBottom: 50,
  },
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
    paddingHorizontal: 30,
  },
  emoji: {
    fontSize: 60,
    marginBottom: 20,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  emptySubtitle: {
    fontSize: 16,
    color: "#888",
    textAlign: "center",
    lineHeight: 24,
  },
});
