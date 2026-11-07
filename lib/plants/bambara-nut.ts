import type { Plant } from "./types";

export const bambaraNut: Plant = {
  slug: "bambara-nut",
  name: "Bambara nut",
  latin: "Vigna subterranea",
  family: "Fabaceae",
  category: "Legume",
  zones: ["Tropical"],
  difficulty: "Easy",
  lifecycle: "Annual",
  featured: true,
  blurb:
    "The ground bean that completes its harvest underground. Bambara nut is a drought-tolerant legume that produces pods beneath the soil, like a peanut. It is a traditional food across the savanna belt and a backup crop when the rains fail.",
  images: [
    { src: "/images/plants/bambara-nut/1.jpg" },
    { src: "/images/plants/bambara-nut/2.jpg" },
    { src: "/images/plants/bambara-nut/3.jpg" },
    { src: "/images/plants/bambara-nut/4.jpg" },
    { src: "/images/plants/bambara-nut/5.jpg" },
    { src: "/images/plants/bambara-nut/6.jpg" },
  ],
  states: [
    "adamawa",
    "bauchi",
    "benue",
    "borno",
    "gombe",
    "jigawa",
    "kaduna",
    "kano",
    "katsina",
    "kebbi",
    "kogi",
    "kwara",
    "nasarawa",
    "niger",
    "plateau",
    "sokoto",
    "taraba",
    "yobe",
    "zamfara",
  ],
  varieties: [
    {
      name: "Local brown and black types",
      description:
        "Farm-saved seed passed between neighbours. Seed colour varies from cream to brown to black. No NASC-released varieties exist yet.",
      type: "Landrace",
      source: "Grower-maintained",
    },
  ],
  nigeriaNote:
    "Bambara nut is a traditional crop of the savanna belt, especially in the north and middle belt. It is a backup crop when the rains fail, because it produces even in poor soil and dry conditions.",
  facts: {
    light: "Full sun",
    water: "Low; tolerates drought better than cowpea",
    soil: "Poor, sandy soils; does not need fertile ground",
    spacing: "Rows 30–45 cm apart, plants 15–20 cm apart",
    harvest: "90–120 days after planting",
    habit: "Low trailing vine, 15–30 cm tall, with underground pods",
  },
  growing: [
    {
      title: "Plant with the first rains",
      body: "Bambara nut seeds are planted directly in the field. Drop 2–3 seeds per hole and thin to the strongest seedling. Plant early in the rains so the crop has the full season to fill the pods underground.",
    },
    {
      title: "Keep the field clean for the first month",
      body: "Bambara nut seedlings are slow to cover the ground. Weed early, then let the vines shade the soil themselves.",
    },
    {
      title: "Let the pods fill underground",
      body: "Unlike cowpea, bambara nut pods develop beneath the soil. The plant flowers above ground, then the flower stalk pushes into the soil and the pod swells underground. Do not disturb the plants while the pods are filling.",
    },
    {
      title: "Harvest when the leaves yellow",
      body: "When the leaves turn yellow and dry, the pods are ready. Pull the whole plant and shake off the soil. The pods are attached to the roots.",
    },
    {
      title: "Dry and store",
      body: "Spread the plants in the sun for a few days to dry the pods. Then remove the pods from the roots and store in a dry, airy place. The seeds keep for months.",
    },
  ],
  benefits: [
    {
      title: "A complete food",
      body: "Bambara nut seeds are high in protein, carbohydrates, and oil. They can be boiled, roasted, or ground into flour.",
    },
    {
      title: "Produces in poor soil and dry weather",
      body: "Where other crops fail, bambara nut still gives a harvest. It is the backup crop that keeps families fed when the rains are short.",
    },
    {
      title: "Fixes nitrogen in the soil",
      body: "Like other legumes, bambara nut roots host bacteria that pull nitrogen from the air and feed the soil.",
    },
  ],
  cautions: [
    {
      title: "Slow to mature",
      body: "Bambara nut takes 90–120 days to mature, longer than cowpea. Plant early in the rains so the crop has the full season.",
    },
    {
      title: "Pods are underground",
      body: "You cannot see the pods filling. The only sign of readiness is the yellowing leaves. Harvest too early and the seeds are small; harvest too late and the pods rot in wet soil.",
    },
    {
      title: "Weevils attack stored seeds",
      body: "Like cowpea, bambara nut seeds are attacked by weevils in storage. Keep the store dry and check regularly.",
    },
  ],
  companions: [
    {
      plant: "Millet",
      why: "Millet is tall and shallow-rooted; bambara nut is low and deep-rooted. The two share the land without competing.",
    },
    {
      plant: "Sorghum",
      why: "Sorghum and bambara nut are often intercropped in the savanna. The sorghum provides light shade while the bambara nut covers the ground.",
    },
  ],
  avoid: [
    {
      plant: "Other legumes in the same bed year after year",
      why: "Bambara nut builds up soil diseases on its own ground. Rotate with a non-legume crop each season.",
    },
  ],
  traditional: null,
  reviewedAt: "2026-11-07",
};
