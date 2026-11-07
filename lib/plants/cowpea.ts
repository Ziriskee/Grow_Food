import type { Plant } from "./types";

export const cowpea: Plant = {
  slug: "cowpea",
  name: "Cowpea",
  latin: "Vigna unguiculata",
  family: "Fabaceae",
  category: "Legume",
  zones: ["Tropical", "Subtropical"],
  difficulty: "Easy",
  lifecycle: "Annual",
  featured: true,
  blurb:
    "The bean that feeds Nigeria. Cowpea is the most widely grown legume in the country, and every part of the plant is eaten — the young leaves as ugu-style greens, the green pods as vegetables, and the dry seeds as the beans in moi moi and ewa agoyin.",
  images: [
    { src: "/images/plants/cowpea/1.jpg" },
    { src: "/images/plants/cowpea/2.jpg" },
    { src: "/images/plants/cowpea/3.jpg" },
    { src: "/images/plants/cowpea/4.jpg" },
    { src: "/images/plants/cowpea/5.jpg" },
    { src: "/images/plants/cowpea/6.jpg" },
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
      name: "Ife Brown",
      description:
        "Brown-seeded, early maturing (60–70 days), resistant to bacterial blight. Widely grown in the south-west and middle belt.",
      type: "NASC-released",
      source: "IITA / NASC",
    },
    {
      name: "IT89KD-288",
      description:
        "Brown-eyed, Striga-resistant, drought-tolerant. Replaced many landraces in the northern Guinea savanna.",
      type: "NASC-released",
      source: "IITA / NASC",
    },
    {
      name: "IT82E-16",
      description:
        "White-seeded, early maturing (55–65 days), suited to the short-season zones of the north.",
      type: "NASC-released",
      source: "IITA / NASC",
    },
    {
      name: "Local brown and white types",
      description:
        "Farm-saved seed passed between neighbours. Seed colour, size and maturity vary by village.",
      type: "Landrace",
      source: "Grower-maintained",
    },
  ],
  nigeriaNote:
    "Cowpea is grown in every Nigerian state. It is the most important legume in the north, where it is intercropped with millet and sorghum, and in the south, where the leaves and pods are eaten as vegetables.",
  facts: {
    light: "Full sun",
    water: "Moderate; tolerates dry spells once established",
    soil: "Well-drained sandy loam; tolerates poor soils better than most legumes",
    spacing: "Rows 45–60 cm apart, plants 20–30 cm apart",
    harvest: "60–90 days for dry beans; 30–40 days for green pods",
    habit: "Bushy or trailing annual, 30–60 cm tall",
  },
  growing: [
    {
      title: "Plant with the first rains",
      body: "Cowpea seeds rot in cold, wet soil. Plant after the first steady rains, when the soil is warm. Drop 2–3 seeds per hole and thin to the strongest seedling.",
    },
    {
      title: "Keep the field clean for the first three weeks",
      body: "Cowpea seedlings are slow to cover the ground, and weeds can smother them. Weed early, then let the plants shade the soil themselves.",
    },
    {
      title: "Harvest green pods or dry beans",
      body: "Pick green pods when they are plump but still tender — about 10 days after flowering. For dry beans, wait until the pods turn yellow and dry on the plant. Pull the whole plant and hang it to dry further.",
    },
    {
      title: "Thresh and store carefully",
      body: "Beat the dry plants to release the beans. Winnow to remove the chaff. Store in a dry, airtight container — cowpea weevils can destroy a bag of beans within weeks.",
    },
  ],
  benefits: [
    {
      title: "The bean that feeds Nigeria",
      body: "Cowpea is the most widely grown legume in the country. The dry beans are the base of moi moi, ewa agoyin, and akara.",
    },
    {
      title: "Three harvests from one plant",
      body: "The young leaves are cooked as greens, the green pods are eaten as vegetables, and the dry seeds are stored for months.",
    },
    {
      title: "Fixes nitrogen in the soil",
      body: "Cowpea roots host bacteria that pull nitrogen from the air and feed the soil. The next crop planted in the same field grows better.",
    },
  ],
  cautions: [
    {
      title: "Weevils attack stored beans",
      body: "Cowpea weevils can destroy a bag of dry beans within weeks. Store in airtight containers, or mix the beans with dried neem leaves to repel the insects.",
    },
    {
      title: "Flower drop in very hot weather",
      body: "When daytime temperatures stay above 35°C, flowers may drop without forming pods. Plant early in the rains so the crop flowers in cooler weather.",
    },
    {
      title: "Root rot in waterlogged soil",
      body: "Cowpea hates standing water. On heavy soil, plant on ridges so the roots stay dry.",
    },
  ],
  companions: [
    {
      plant: "Maize",
      why: "The classic Nigerian intercrop. Cowpea covers the ground and fixes nitrogen while the maize grows above.",
    },
    {
      plant: "Sorghum",
      why: "Sorghum and cowpea share the same planting window and do not compete for space or nutrients.",
    },
    {
      plant: "Millet",
      why: "Millet is tall and shallow-rooted; cowpea is low and deep-rooted. The two share the land without fighting.",
    },
  ],
  avoid: [
    {
      plant: "Other beans in the same bed year after year",
      why: "Cowpea builds up soil diseases on its own ground. Rotate with a non-legume crop each season.",
    },
  ],
  traditional: null,
  reviewedAt: "2026-11-07",
};
