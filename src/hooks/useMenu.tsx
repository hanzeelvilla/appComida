import { useEffect, useState } from "react";
import { MenuItem } from "../interfaces/menu.interface";
import { getMenu } from "../services/menu.service";

export const useMenu = () => {
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadMenu();
  }, []);

  const loadMenu = async () => {
    setLoading(true);
    try {
      const data = await getMenu();
      setMenu(data);
      //console.log(data);
    } catch (error) {
      console.error("Error loading menu:", error);
    } finally {
      setLoading(false);
    }
  };

  return { menu, loading };
};
