import React from "react";
import { ScrollView, Text, Pressable, StyleSheet, View } from "react-native";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onSelect: (category: string) => void;
}

export const CategoryFilter = ({
  categories,
  selectedCategory,
  onSelect,
}: CategoryFilterProps) => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <Pressable
          onPress={() => onSelect("Todos")}
          style={({ pressed }) => [
            styles.chip,
            selectedCategory === "Todos" && styles.chipSelected,
            pressed && styles.chipPressed,
          ]}
        >
          <Text
            style={[
              styles.text,
              selectedCategory === "Todos" && styles.textSelected,
            ]}
          >
            Todos
          </Text>
        </Pressable>

        {categories.map((cat, index) => (
          <Pressable
            key={index}
            onPress={() => onSelect(cat)}
            style={({ pressed }) => [
              styles.chip,
              selectedCategory === cat && styles.chipSelected,
              pressed && styles.chipPressed,
            ]}
          >
            <Text
              style={[
                styles.text,
                selectedCategory === cat && styles.textSelected,
              ]}
            >
              {cat}
            </Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F2F2F2",
    paddingVertical: 10,
  },
  scrollContent: {
    paddingHorizontal: 16,
  },
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    // Sombras
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  chipSelected: {
    backgroundColor: "#FF6347",
    borderColor: "#FF6347",
  },
  chipPressed: {
    opacity: 0.7,
    transform: [{ scale: 0.96 }],
  },
  text: {
    fontSize: 14,
    fontWeight: "600",
    color: "#757575",
    textTransform: "capitalize",
  },
  textSelected: {
    color: "#FFFFFF",
  },
});
