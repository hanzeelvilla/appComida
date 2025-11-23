import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { MenuItem } from "../interfaces/menu.interface";
import { Ionicons } from "@expo/vector-icons";
import { useLikes } from "../context/Likes.context";

interface FoodCardProps {
  item: MenuItem;
}

export const FoodCard = ({ item }: FoodCardProps) => {
  const { toggleLike, isLiked } = useLikes();
  const liked = isLiked(item.id);

  return (
    <View style={styles.card}>
      <View>
        <Image
          source={{ uri: item.image }}
          style={styles.image}
          resizeMode="cover"
        />
        <Pressable
          onPress={() => toggleLike(item)}
          style={({ pressed }) => [
            styles.likeButton,
            pressed && styles.buttonPressed,
          ]}
        >
          <Ionicons
            name={liked ? "heart" : "heart-outline"}
            size={20}
            color={liked ? "#FF6347" : "#FFFFFF"}
          />
        </Pressable>
      </View>

      <View style={styles.infoContainer}>
        <View>
          <View style={styles.categoryBadge}>
            <Text style={styles.categoryText}>{item.category}</Text>
          </View>

          <Text style={styles.name} numberOfLines={2}>
            {item.name}
          </Text>
        </View>

        <Text style={styles.price}>${item.price.toFixed(2)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    marginBottom: 16,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 12,
    backgroundColor: "#f0f0f0",
  },
  likeButton: {
    position: "absolute",
    top: 6,
    right: 6,
    backgroundColor: "rgba(0,0,0,0.3)",
    borderRadius: 15,
    padding: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonPressed: {
    opacity: 0.7,
    transform: [{ scale: 0.9 }],
  },
  infoContainer: {
    flex: 1,
    marginLeft: 16,
    height: 90,
    justifyContent: "space-between",
  },
  categoryBadge: {
    alignSelf: "flex-start",
    backgroundColor: "#FFF0ED",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    marginBottom: 6,
  },
  categoryText: {
    color: "#FF6347",
    fontSize: 10,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  name: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1A1A1A",
    lineHeight: 20,
  },
  price: {
    fontSize: 18,
    fontWeight: "800",
    color: "#2E8B57",
  },
});
