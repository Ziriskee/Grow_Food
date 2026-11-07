import { basil } from "./basil";
import { cassava } from "./cassava";
import { cucumber } from "./cucumber";
import { egusi } from "./egusi";
import { ewedu } from "./ewedu";
import { flutedPumpkin } from "./fluted-pumpkin";
import { lavender } from "./lavender";
import { maize } from "./maize";
import { ogbono } from "./ogbono";
import { okra } from "./okra";
import { onion } from "./onion";
import { rosemary } from "./rosemary";
import { spearmint } from "./spearmint";
import { tomato } from "./tomato";
import type { Plant } from "./types";
import { yam } from "./yam";

/**
 * Site order, not alphabetical. The hero now selects plants by stable slug,
 * but this order still controls browse listings and featured arrays.
 */
export const plants: Plant[] = [
  tomato,
  basil,
  flutedPumpkin,
  maize,
  spearmint,
  rosemary,
  okra,
  lavender,
  cassava,
  yam,
  ewedu,
  egusi,
  ogbono, cucumber,
onion,
];

export const featuredPlants = plants.filter((plant) => plant.featured);

export function getPlant(slug: string): Plant | undefined {
  return plants.find((plant) => plant.slug === slug);
}

export * from "./types";
