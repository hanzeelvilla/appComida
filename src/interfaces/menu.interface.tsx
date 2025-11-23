export type category = "cafe" | "dona" | "galletas" | "hamburguesa" | "pastel" | "pizza";

export interface MenuItem {
  id: number;
  name: string;
  price: number;
  image: string;
  category: category;
}