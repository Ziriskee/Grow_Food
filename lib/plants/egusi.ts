import type { Plant } from "./types";

export const egusi: Plant = {
  slug: "egusi",
  name: "Egusi (melon)",
  latin: "Citrullus lanatus",
  family: "Cucurbitaceae",
  category: "Fruiting vegetable",
  zones: ["Tropical"],
  difficulty: "Easy",
  lifecycle: "Annual trailing vine",
  featured: true,
  blurb:
    "The melon grown for its seeds, not its flesh. Egusi vines run along the ground, and the harvest is cracked open so the seeds can be dried and ground into the base of Nigeria's most cooked soup.",
  images: [
    {
      src: "/images/plants/egusi/1.jpg",
    },
    {
      src: "/images/plants/egusi/2.jpg",
    },
    {
      src: "/images/plants/egusi/3.jpg",
    },
    {
      src: "/images/plants/egusi/4.jpg",
    },
    {
      src: "/images/plants/egusi/5.jpg",
    },
    {
      src: "/images/plants/egusi/6.jpg",
    },
  ],
  states: [
    "benue",
    "niger",
    "nasarawa",
    "kogi",
    "kwara",
    "fct",
    "kaduna",
    "kebbi",
    "sokoto",
    "zamfara",
    "katsina",
    "kano",
    "jigawa",
    "bauchi",
    "gombe",
    "yobe",
    "borno",
    "adamawa",
    "taraba",
    "oyo",
    "osun",
    "ogun",
    "ondo",
    "ekiti",
    "anambra",
    "imo",
    "enugu",
    "ebonyi",
    "abia",
    "delta",
    "edo",
  ],
  varieties: [
    {
      name: "Local egusi",
      description:
        "Seed saved from fruits left to ripen fully on the vine. No released-variety list exists for egusi yet, so every grower's seed line is effectively a landrace.",
      type: "Landrace",
      source: "Grower-maintained",
    },
  ],
  nigeriaNote:
    "Benue and Niger are the heart of egusi production, but the vine grows in every zone of the country. Egusi soup is one of the most widely cooked soups in Nigeria.",
  facts: {
    light: "Full sun",
    water: "Moderate; rain through growth, dry weather while the seeds mature",
    soil: "Well-drained sandy loam; waterlogged ground rots the fruits",
    spacing:
      "Mounds about 1 m apart, two seeds per mound thinned to the strongest plant",
    harvest: "3–4 months, when the fruit yellows and the vine starts to dry",
    habit: "Trailing vine with round, mottled fruits",
  },
  growing: [
    {
      title: "Sow after the rains settle",
      body: "Drop two seeds per mound and thin to the strongest seedling once the vines start to run. Plant after the first steady rains — cold, wet soil rots the seed before it sprouts.",
    },
    {
      title: "Give the vines room to run",
      body: "Egusi sprawls. It needs no stakes, but it needs ground. Weed early while the vines are thin; once the leaves cover the soil, the crop shades out most weeds on its own.",
    },
    {
      title: "Let the fruit ripen fully",
      body: "Egusi is not eaten fresh from the field. The fruit must stay on the vine until the skin yellows and the vine dries — that is when the seeds inside fill out. Picking early costs you the harvest.",
    },
    {
      title: "Crack, scoop, dry",
      body: "Split the ripe fruit, scoop out the seeds, and dry them thoroughly before storing. Well-dried egusi seed keeps for months; wet seed goes mouldy within days.",
    },
  ],
  benefits: [
    {
      title: "The seed that makes the soup",
      body: "Ground egusi is the base of egusi soup. A small bowl of seed goes a long way, which is why the crop is grown even on small plots.",
    },
    {
      title: "Seed that keeps",
      body: "Dried egusi seed stores for months without spoiling, so the harvest can be used slowly through the season.",
    },
    {
      title: "Oil and substance in the seed",
      body: "Egusi seed is naturally rich in oil and protein, which is why the soup it makes carries a meal.",
    },
  ],
  cautions: [
    {
      title: "Wet seed goes mouldy",
      body: "Mouldy egusi seed is not safe to eat. Dry the seed fully and keep it somewhere dry. Throw out anything that smells off or has changed colour.",
    },
    {
      title: "Waterlogged ground kills the crop",
      body: "Egusi hates standing water. On heavy soil, plant on mounds so the roots and the resting fruits stay dry.",
    },
    {
      title: "Late rain spoils the drying",
      body: "Rain at harvest time wets the drying seeds and brings mould back. Time the sowing so the fruits mature into dry weather.",
    },
  ],
  companions: [
    {
      plant: "Maize",
      why: "The classic intercrop. Egusi trails at the base of the maize, covering the ground while the maize grows above. Both come off the land without fighting for it.",
    },
    {
      plant: "Cassava",
      why: "Egusi covers the ground between young cassava rows, holding moisture and choking weeds until the cassava is tall enough to take over.",
    },
  ],
  avoid: [
    {
      plant: "Cucumbers and other melons in the same bed",
      why: "They compete for the same ground and share the same leaf beetles and mildews, so one problem spreads across all of them.",
    },
  ],
  traditional: null,
  reviewedAt: "2026-11-04",
};
