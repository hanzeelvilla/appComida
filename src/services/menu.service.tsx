import { api } from "./api";
import { MenuItem } from "../interfaces/menu.interface";

export const getMenu = async (): Promise<MenuItem[]> => {
  try {
    const response = await api.get("/api-fast-food");
    return response.data;
  } catch (error) {
    console.error("Error fetching menu:", error);
    throw error;
  }
};
