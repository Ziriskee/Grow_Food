import type { Plant } from "./types";

export const peppers: Plant = {
  slug: "peppers",
  name: "Peppers",
  latin: "Capsicum annuum / Capsicum chinense",
  family: "Solanaceae",
  category: "Fruiting vegetables",
  zones: ["Tropical", "Subtropical"],
  difficulty: "Moderate",
  lifecycle: "Annual",
  featured: true,
  blurb:
    "The essential heat and flavour of Nigerian cooking. From the mild, fleshy tatashe to the fiery ata rodo, peppers share the same growing needs but deliver very different results in the pot.",
  images: [
    { src: "/images/plants/peppers/1.jpg" },
    { src: "/images/plants/peppers/2.jpg" },
    { src: "/images/plants/peppers/3.jpg" },
    { src: "/images/plants/peppers/4.jpg" },
    { src: "/images/plants/peppers/5.jpg" },
    { src: "/images/plants/peppers/6.jpg" },
  ],
  states: [
    "abia",
    "adamawa",
    "akwa-ibom",
    "anambra",
    "bauchi",
    "bayelsa",
    "benue",
    "borno",
    "cross-river",
    "delta",
    "ebonyi",
    "edo",
    "ekiti",
    "enugu",
    "fct",
    "gombe",
    "imo",
    "jigawa",
    "kaduna",
    "kano",
    "katsina",
    "kebbi",
    "kogi",
    "kwara",
    "lagos",
    "nasarawa",
    "niger",
    "ogun",
    "ondo",
    "osun",
    "oyo",
    "plateau",
    "rivers",
    "sokoto",
    "taraba",
    "yobe",
    "zamfara",
  ],
  varieties: [
    {
      name: "Ata Rodo (Scotch Bonnet / Habanero)",
      description:
        "Small, wrinkled, and very hot. This is the primary pepper used for Nigerian pepper sauce and rich stews. A little goes a long way.",
      type: "Landrace",
      source: "Grower-maintained",
    },
    {
      name: "Shombo (Cayenne-type)",
      description:
        "Elongated, moderately hot, and fleshy. It dries exceptionally well and is often ground into powder for long-term storage and spice blends.",
      type: "Landrace",
      source: "Grower-maintained",
    },
    {
      name: "Tatashe (Bell / Sweet Pepper type)",
      description:
        "Large, mild, and thick-fleshed. It provides the red base and bulk for most Nigerian stews without adding intense heat.",
      type: "Introduced",
      source: "Commercial seed stock",
    },
    {
      name: "Local Chilli (Ata Wewe / Bird's Eye)",
      description:
        "Tiny, extremely hot, and sharp. Used sparingly in specific local dishes where intense, immediate heat is required.",
      type: "Landrace",
      source: "Grower-maptained",
    },
  ],
  nigeriaNote:
    "Peppers are grown in every Nigerian state. The north dominates dry-season fadama (wetland) production, especially in Kano, Kaduna, and Jigawa, while the south grows them year-round in home gardens and commercial farms.",
  facts: {
    light: "Full sun",
    water: "Steady moisture; avoid soaking the leaves",
    soil: "Well-drained, fertile loam rich in organic matter",
    spacing: "45–60 cm apart in rows 60 cm apart",
    harvest: "60–90 days from transplanting; pick green or wait for red",
    habit: "Bushy annual, 40–80 cm tall",
  },
  growing: [
    {
      title: "Start in a seedbed",
      body: "Pepper seeds are small and need warmth to sprout. Sow them thinly in a shaded nursery bed or tray. Keep the soil moist but not waterlogged. Seedlings are ready to move in 4–6 weeks.",
    },
    {
      title: "Transplant carefully",
      body: "Move seedlings to the main field in the evening or on a cloudy day to reduce shock. Water them immediately after planting.",
    },
    {
      title: "Water at the base",
      body: "Peppers hate wet leaves. Water the soil directly to prevent fungal diseases. Mulch around the base to keep the soil moist and suppress weeds.",
    },
    {
      title: "Harvest regularly",
      body: "Pick peppers as soon as they reach the desired size and colour. Regular harvesting encourages the plant to produce more fruit.",
    },
  ],
  benefits: [
    {
      title: "The foundation of flavour",
      body: "Almost every Nigerian stew and soup starts with a pepper base. A good harvest feeds the kitchen for months, especially when dried.",
    },
    {
      title: "High in vitamins",
      body: "Peppers are packed with vitamin C and antioxidants, especially when eaten fresh and raw.",
    },
    {
      title: "Dries well for storage",
      body: "Shombo and ata rodo dry beautifully in the sun, allowing you to store the harvest and grind it into powder when fresh peppers are scarce.",
    },
  ],
  cautions: [
    {
      title: "Heat warning: protect your eyes",
      body: "The oils in hot peppers (capsaicin) can cause severe burning if they touch your eyes or sensitive skin. Always wash your hands thoroughly with soap after handling hot peppers, or wear gloves.",
    },
    {
      title: "Blossom-end rot",
      body: "A dark, sunken spot at the bottom of the fruit is usually caused by uneven watering, not a lack of calcium in the soil. Keep the soil moisture steady.",
    },
    {
      title: "Pest pressure",
      body: "Aphids and fruit borers love peppers. Check the undersides of leaves regularly. Remove affected fruits immediately to stop the spread.",
    },
  ],
  companions: [
    {
      plant: "Onion",
      why: "Onions help repel some of the pests that attack peppers, and they share similar water and soil needs.",
    },
    {
      plant: "Basil",
      why: "Basil is believed to improve the flavour of peppers and attracts beneficial insects that eat aphids.",
    },
  ],
  avoid: [
    {
      plant: "Fennel",
      why: "Fennel releases chemicals that can stunt the growth of pepper plants. Keep them far apart.",
    },
    {
      plant: "Other peppers or tomatoes",
      why: "Planting them too close together allows diseases like blight and pests to spread rapidly from one plant to the next. Rotate crops each season.",
    },
  ],
  traditional: null,
  reviewedAt: "2026-11-07",
};
