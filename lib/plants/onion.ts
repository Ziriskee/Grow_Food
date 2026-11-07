import type { Plant } from "./types";

export const onion: Plant = {
  slug: "onion",
  name: "Onion",
  latin: "Allium cepa",
  family: "Amaryllidaceae",
  category: "Bulb vegetable",
  images: [
    {
      src: "/images/plants/onion/1.jpg",
    },
    {
      src: "/images/plants/onion/2.jpg",
    },
    {
      src: "/images/plants/onion/3.jpg",
    },
    {
      src: "/images/plants/onion/4.jpg",
    },
    {
      src: "/images/plants/onion/5.jpg",
    },
    {
      src: "/images/plants/onion/6.jpg",
    },
  ],
  zones: ["Tropical", "Subtropical", "Temperate"],
  difficulty: "Moderate",
  lifecycle: "Biennial grown as an annual",
  featured: true,
  blurb:
    "The bulb that flavours almost every Nigerian stew. Onions need a long cool season to form bulbs, and most of Nigeria's onions come from the dry-season farms of the north.",
  states: [
    "kaduna",
    "kano",
    "katsina",
    "jigawa",
    "sokoto",
    "kebbi",
    "zamfara",
    "bauchi",
    "gombe",
    "yobe",
    "borno",
    "adamawa",
    "plateau",
    "nasarawa",
    "niger",
    "kwara",
    "fct",
  ],
  varieties: [
    {
      name: "Violet de Galmi",
      description:
        "Red-skinned, pungent onion from Niger; the most widely grown type in northern Nigeria. Stores well.",
      type: "Introduced",
      source: "Commercial seed stock",
    },
    {
      name: "Red Creole",
      description:
        "Red-skinned, moderately pungent; grown in the middle belt and south under irrigation.",
      type: "Introduced",
      source: "Commercial seed stock",
    },
    {
      name: "White onion landraces",
      description:
        "Local white types grown in home gardens; smaller bulbs, milder flavour.",
      type: "Landrace",
      source: "Grower-maintained",
    },
  ],
  nigeriaNote:
    "Onion is a dry-season crop in the north. Sokoto, Kaduna, and Kano produce most of Nigeria's onions. The south grows onions only under irrigation and on a small scale.",
  facts: {
    light: "Full sun",
    water:
      "Moderate; steady moisture during bulb formation, dry off before harvest",
    soil: "Loose, fertile, well-drained loam; heavy clay gives misshapen bulbs",
    spacing: "Rows 30 cm apart, thin seedlings to 10 cm",
    harvest: "90–120 days from transplanting; when the tops fall over",
    habit: "Low rosette of hollow leaves with an underground bulb",
  },
  growing: [
    {
      title: "Sow in a seedbed, then transplant",
      body: "Onion seeds are tiny. Sow them thinly in a fine seedbed and keep moist. After 6–8 weeks, transplant the seedlings to the main field.",
    },
    {
      title: "Plant in the cool dry season",
      body: "In the north, sow seeds in October–November and transplant in December–January. Onions need cool weather to form bulbs; hot weather makes them bolt (flower early).",
    },
    {
      title: "Keep the bed clean and moist",
      body: "Onion seedlings are slow and easily smothered by weeds. Weed often and keep the soil moist but not waterlogged.",
    },
    {
      title: "Harvest when the tops fall",
      body: "When the leaves yellow and fall over, the bulbs are ready. Lift them carefully and let them dry in the shade for a week before storing.",
    },
  ],
  benefits: [
    {
      title: "The base of every stew",
      body: "Onions are the starting point for most Nigerian soups and stews. A small harvest feeds the kitchen for weeks.",
    },
    {
      title: "Stores well",
      body: "Dried onions keep for months in a cool, airy place. The harvest can be used slowly through the dry season.",
    },
  ],
  cautions: [
    {
      title: "Bolt in hot weather",
      body: "If planted too late or in hot weather, onions flower early and the bulbs stay small. Time the planting for the cool season.",
    },
    {
      title: "Rot in wet soil",
      body: "Onions hate waterlogged ground. Plant on raised beds or ridges in heavy soil, and avoid overwatering.",
    },
    {
      title: "Thrips attack the leaves",
      body: "Tiny silver-grey insects can silvery the leaves and stunt growth. Check plants regularly and treat with neem oil if needed.",
    },
  ],
  companions: [
    {
      plant: "Carrot",
      why: "Onion and carrot repel each other's main pests. Planting them together reduces damage to both.",
    },
    {
      plant: "Beetroot",
      why: "Both grow at similar speeds and share the same bed without competing.",
    },
  ],
  avoid: [
    {
      plant: "Beans and peas",
      why: "Onions can stunt the growth of beans and peas. Keep them in separate beds.",
    },
    {
      plant: "Other alliums (garlic, leeks)",
      why: "Planting onions next to other alliums invites the same pests and diseases to spread between them.",
    },
  ],
  traditional: null,
  reviewedAt: "2026-11-07",
};
