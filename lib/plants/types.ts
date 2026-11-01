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

export type Plant = {
  slug: string;
  name: string;
  latin: string;
  family: string;
  category: string;
  zones: ClimateZone[];
  difficulty: Difficulty;
  lifecycle: string;
  blurb: string;
  featured: boolean;

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

  /** `null` when there is no traditional-use record worth repeating. */
  traditional: TraditionalUse | null;

  reviewedAt: string;
};
