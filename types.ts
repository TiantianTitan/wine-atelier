export type WineCategory = "红葡萄酒" | "白葡萄酒" | "香槟" | "甜酒";

export type Wine = {
  id: string;
  inventoryCode: string;
  winery: string;
  vintage: number;
  price: number;
  category: WineCategory;
  grade: string;
  classification: string | null;
  gradeRank: number;
  sortOrder: number;
  image: string;
  description: string;
  composition: string;
  origin: string;
  quantity: number;
  related: string[];
};

export type SortOption = "featured" | "price-asc" | "price-desc" | "vintage-desc" | "grade-desc";
