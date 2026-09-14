export type WineCategory = "红葡萄酒" | "白葡萄酒" | "香槟" | "甜酒";

export type Wine = {
  id: string;
  inventoryCode: string;
  winery: string;
  vintage: number;
  price: number;
  estimateRange: string;
  category: WineCategory;
  grade: string;
  classification: string | null;
  ranking: string;
  gradeRank: number;
  sortOrder: number;
  images: string[];
  description: string;
  composition: string;
  origin: string;
  production: string;
  palate: string;
  story: string;
  marketStatus: string;
  condition: string;
  quantity: number;
  reportPath: string;
  related: string[];
};

export type SortOption = "featured" | "price-asc" | "price-desc" | "vintage-desc" | "grade-desc";
