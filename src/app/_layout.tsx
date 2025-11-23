import { Tabs } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { LikesProvider } from "../context/Likes.context";

export default function Layout() {
  return (
    <LikesProvider>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#FF6347",
          tabBarInactiveTintColor: "gray",
          headerStyle: {
            backgroundColor: "#FFFFFF",
          },
          headerTitleStyle: {
            fontWeight: "bold",
            color: "#1A1A1A",
          },
          headerShadowVisible: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Menú",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="restaurant-menu" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="Likes"
          options={{
            title: "Favoritos",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="favorite" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </LikesProvider>
  );
}
