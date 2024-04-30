"use client";

import { Category } from "@prisma/client";
import {
  FcEngineering,
  FcFilmReel,
  FcMultipleDevices,
  FcMusic,
  FcOldTimeCamera,
  FcSalesPerformance,
  FcSportsMode,
} from "react-icons/fc";
import { IconType } from "react-icons";

import { CategoryItem } from "./category-item";

interface CategoriesProps {
  items: Category[];
}

const iconMap: Record<Category["name"], IconType> = {
  Music: FcMusic,
  Photography: FcOldTimeCamera,
  Fitness: FcSportsMode,
  Accounting: FcSalesPerformance,
  "Computer Science": FcMultipleDevices,
  Filming: FcFilmReel,
  Engineering: FcEngineering,
};

// Default categories in case there are no categories fetched or provided
const defaultCategories: Category[] = [
  { id: "music", name: "Music" },
  { id: "photography", name: "Photography" },
  { id: "fitness", name: "Fitness" },
  { id: "accounting", name: "Accounting" },
  { id: "computer-science", name: "Computer Science" },
  { id: "filming", name: "Filming" },
  { id: "engineering", name: "Engineering" },
];

export const Categories = ({ items }: CategoriesProps) => {
  const categoriesToShow = items.length > 0 ? items : defaultCategories; // Use default categories if items are empty

  return (
    <div className="flex items-center gap-x-2 overflow-x-auto pb-2">
      {categoriesToShow.map((item) => (
        <CategoryItem
          key={item.id}
          label={item.name}
          icon={iconMap[item.name] || FcEngineering} // Fallback icon in case of missing map
          value={item.id}
        />
      ))}
    </div>
  );
};
