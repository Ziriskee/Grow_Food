import type { Plant } from "./types";

export const cassava: Plant = {
  slug: "cassava",
  name: "Cassava",
  latin: "Manihot esculenta",
  family: "Euphorbiaceae",
  category: "Roots & tuber",
  images: [
    {
      src: "/images/plants/cassava/1.jpg"
    },
    {
      src: "/images/plants/cassava/2.jpg"
    },
    {
      src: "/images/plants/cassava/3.jpg"
    },
    {
      src: "/images/plants/cassava/4.jpg"
    },
    {
      src: "/images/plants/cassava/5.jpg"
    },
    {
      src: "/images/plants/cassava/6.jpg"
    },
  ],
  zones: ["Tropical"],
  difficulty: "Easy",
  lifecycle: "Perennial grown as a seasonal crop",
  featured: true,
  blurb:
    "Planted from stem cuttings, not seed, then left to swell underground for months. It tolerates poor soil and dry spells once established, which is why it is treated as a food-security crop across Nigeria.",
  states: [
    "abia",
    "akwa-ibom",
    "anambra",
    "bayelsa",
    "benue",
    "cross-river",
    "delta",
    "ebonyi",
    "edo",
    "ekiti",
    "enugu",
    "imo",
    "kaduna",
    "kogi",
    "kwara",
    "lagos",
    "nasarawa",
    "niger",
    "ogun",
    "ondo",
    "osun",
    "oyo",
    "rivers",
    "taraba",
    "fct",
  ],
  varieties: [
    {
      name: "TME 419",
      description:
        "The mosaic-disease-tolerant variety that spread across Nigeria from the 1990s and became the benchmark other names are measured against.",
      type: "NASC-released",
      source: "IITA / NASC",
    },
    {
      name: "TMS 98/0505",
      description:
        "Improved type widely promoted for its yield and disease tolerance; a common name at multiplication centres.",
      type: "NASC-released",
      source: "IITA / NASC",
    },
    {
      name: "NR 8082",
      description:
        "Yellow-rooted, pro-vitamin A variety released for Nigerian growers.",
      type: "NASC-released",
      source: "NRCRI Umudike / NASC",
    },
    {
      name: "Sweet and bitter local types",
      description:
        "Farm-maintained cuttings that vary from place to place. Bitter types carry more of the natural cyanide-forming compounds and must be processed properly.",
      type: "Landrace",
      source: "Grower-maintained",
    },
  ],
  nigeriaNote:
    "Cassava grows across the south and the middle belt, and Nigeria produces more of it than any other country. Garri, fufu and lafun all start in this field.",
  facts: {
    light: "Full sun",
    water: "Moderate; needs rain early, then tolerates dry spells",
    soil: "Light, well-drained loamy sand; waterlogged ground rots the roots",
    spacing: "About 1 m between rows and 1 m between cuttings",
    harvest: "8–18 months after planting, dug as needed",
    habit: "Upright woody shrub, 1–2 m tall, with swollen storage roots",
  },
  growing: [
    {
      title: "Plant stem cuttings after the rains settle",
      body: "Cassava is grown from pieces of mature stem about 20–25 cm long, taken from healthy plants. Push each cutting into the soil at a slight angle with a few buds above ground. Plant after the first steady rains so the cuttings root without drying out.",
    },
    {
      title: "Keep the field clean for the first three months",
      body: "Cassava is slow to start, and weeds win easily while the cuttings establish. Weed early and often until the plants are tall enough to shade the ground themselves.",
    },
    {
      title: "Let the roots fill",
      body: "Once the leaves close over, cassava mostly looks after itself. The roots swell through the months, and there is no single harvest day — the crop can stay in the ground and be dug as the kitchen needs it.",
    },
    {
      title: "Lift and process promptly",
      body: "Loosen the soil around the base and pull the root cluster up with the stem. Fresh roots spoil within days once lifted, so plan the soaking, grating, fermenting or drying soon after harvest.",
    },
  ],
  benefits: [
    {
      title: "Reliable food in hard conditions",
      body: "Cassava keeps producing where cereals fail — on poor soils and through dry spells. That is why households treat it as the crop that is always there.",
    },
    {
      title: "Harvest on your own schedule",
      body: "The roots hold in the ground for months after they are ready. Dig when you need food, not when the weather forces you.",
    },
    {
      title: "The leaves feed too",
      body: "Young leaves are cooked as a leafy vegetable in many areas. They must always be cooked, never eaten raw.",
    },
  ],
  cautions: [
    {
      title: "Bitter types must be processed properly",
      body: "Bitter cassava contains natural cyanide-forming compounds. Soaking, fermenting, drying and cooking break them down — but skipping or shortening these steps is dangerous. Sweet types carry far less, and still must be cooked.",
    },
    {
      title: "Lifted roots do not keep",
      body: "Fresh roots start to spoil within days of harvest. Lift only what you can process, eat or sell quickly.",
    },
    {
      title: "Sick cuttings spread disease",
      body: "Cuttings taken from infected plants carry cassava mosaic disease into the new field. Source cuttings from clean, healthy plants.",
    },
  ],
  companions: [
    {
      plant: "Maize",
      why: "The classic Nigerian relay. Maize is harvested in three to four months while cassava is still establishing, so the two share the land without fighting for it.",
    },
    {
      plant: "Egusi (melon)",
      why: "The spreading melon vines cover the ground, holding moisture and choking weeds while the young cassava grows above them.",
    },
  ],
  avoid: [
    {
      plant: "A closed cereal canopy over young cuttings",
      why: "Cassava takes weeks to wake up. Planted under a dense stand of maize or sorghum, the shade beats it before it can compete. Intercrop with space and light.",
    },
  ],
  traditional: null,
  reviewedAt: "2026-11-04",
};
