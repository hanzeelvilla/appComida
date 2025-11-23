import React, { createContext, useState, useContext, ReactNode } from "react";
import { MenuItem } from "../interfaces/menu.interface";

interface LikesContextType {
  likes: MenuItem[];
  toggleLike: (item: MenuItem) => void;
  isLiked: (id: number) => boolean;
}

const LikesContext = createContext<LikesContextType | undefined>(undefined);

export const LikesProvider = ({ children }: { children: ReactNode }) => {
  const [likes, setLikes] = useState<MenuItem[]>([]);

  const toggleLike = (item: MenuItem) => {
    setLikes((prev) => {
      const exists = prev.find((i) => i.id === item.id);
      if (exists) {
        return prev.filter((i) => i.id !== item.id);
      }
      return [...prev, item];
    });
  };

  const isLiked = (id: number) => {
    return likes.some((item) => item.id === id);
  };

  return (
    <LikesContext.Provider value={{ likes, toggleLike, isLiked }}>
      {children}
    </LikesContext.Provider>
  );
};

export const useLikes = () => {
  const context = useContext(LikesContext);
  if (!context) {
    throw new Error("useLikes debe usarse dentro de un LikesProvider");
  }
  return context;
};
