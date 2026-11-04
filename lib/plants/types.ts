export type ClimateZone =
  | "Tropical"
  | "Subtropical"
  | "Temperate"
  | "Mediterranean"
  | "Arid"
  | "Highland";

export type Difficulty = "Easy" | "Moderate" | "Demanding";

/** A short titled paragraph: used for benefits and cautions. */
export type Note = {
  title: string;
  body: string;
};

/** A pairing with the mechanism spelled out, not just a plant name. */
export type Pairing = {
  plant: string;
  why: string;
};

export type GrowingStage = {
  title: string;
  body: string;
};

/**
 * Traditional use is deliberately its own type. It is the one block on a page
 * that describes what people do rather than what horticulture says, so it
 * cannot be modelled as another `benefit`.
 */
export type TraditionalUse = {
  summary: string;
  reported: string[];
};

export type PlantImage = {
  src: string;
  alt?: string;
  credit?: string;
};

export type PlantVariety = {
  /** NASC-released name where known; landrace otherwise, labelled. */
  name: string;
  description: string;
  /** How the name came to be in Nigerian hands. */
  type: "NASC-released" | "Landrace" | "Introduced";
  /** Where or who released/records it. */
  source: string;
};

export type Plant = {
  slug: string;
  name: string;
  latin: string;
  family: string;
  category: string;
  images?: PlantImage[];
  zones: ClimateZone[];
  difficulty: Difficulty;
  lifecycle: string;
  blurb: string;
  featured: boolean;
  /** Nigerian states where this plant is reliably grown. */
  states?: string[];
  /** One honest line on where this plant fits in Nigeria. */
  nigeriaNote?: string;
  /** Named varieties available to Nigerian growers. */
  varieties?: PlantVariety[];
  facts: {
    light: string;
    water: string;
    soil: string;
    spacing: string;
    harvest: string;
    habit: string;
  };
  growing: GrowingStage[];
  benefits: Note[];
  cautions: Note[];
  companions: Pairing[];
  avoid: Pairing[];
  traditional: TraditionalUse | null;
  reviewedAt: string;
};
