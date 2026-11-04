export type PlantCategorySlug =
  | "herbs"
  | "leafy-vegetables"
  | "fruiting-vegetables"
  | "cereals-grains"
  | "roots-tubers"
  | "fruits-trees";

export type PlantCategory = {
  slug: PlantCategorySlug;
  name: string;
  description: string;
};

export const plantCategories: PlantCategory[] = [
  {
    slug: "herbs",
    name: "Herbs",
    description: "Aromatic plants grown mainly for leaves, flavour, and scent.",
  },
  {
    slug: "leafy-vegetables",
    name: "Leafy vegetables",
    description: "Plants grown mainly for edible leaves and young shoots.",
  },
  {
    slug: "fruiting-vegetables",
    name: "Fruiting vegetables",
    description: "Plants grown for edible fruits, pods, or seed heads.",
  },
  {
    slug: "cereals-grains",
    name: "Cereals & grains",
    description: "Grass-family crops grown for grain and bulk food.",
  },
  {
    slug: "roots-tubers",
    name: "Roots & tubers",
    description:
      "Crops grown for the swollen roots and tubers dug from the ground.",
  },
  {
    slug: "fruits-trees",
    name: "Fruits & trees",
    description:
      "Trees and tree crops grown for their fruit, seeds, and the harvest they carry for years.",
  },
];

const legacyCategoryToSlug: Record<string, PlantCategorySlug> = {
  herb: "herbs",
  herbs: "herbs",
  "leafy vegetable": "leafy-vegetables",
  "leafy vegetables": "leafy-vegetables",
  "fruiting vegetable": "fruiting-vegetables",
  "fruiting vegetables": "fruiting-vegetables",
  cereal: "cereals-grains",
  cereals: "cereals-grains",
  grain: "cereals-grains",
  grains: "cereals-grains",
  "cereals & grains": "cereals-grains",
  root: "roots-tubers",
  roots: "roots-tubers",
  tuber: "roots-tubers",
  tubers: "roots-tubers",
  "roots & tuber": "roots-tubers",
  "roots & tubers": "roots-tubers",
  "roots and tubers": "roots-tubers",
  fruit: "fruits-trees",
  fruits: "fruits-trees",
  tree: "fruits-trees",
  trees: "fruits-trees",
  "fruits & tree": "fruits-trees",
  "fruits & trees": "fruits-trees",
  "fruits and trees": "fruits-trees",
};

export function getCategorySlug(
  category: string,
): PlantCategorySlug | undefined {
  const normalized = category.trim().toLowerCase();
  return legacyCategoryToSlug[normalized];
}

export function getCategoryBySlug(
  slug: PlantCategorySlug,
): PlantCategory | undefined {
  return plantCategories.find((category) => category.slug === slug);
}

export function getCategoryName(category: string): string {
  const slug = getCategorySlug(category);

  if (!slug) {
    return category;
  }

  return getCategoryBySlug(slug)?.name ?? category;
}
