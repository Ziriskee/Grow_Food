import type { Plant } from "./types";

export const maize: Plant = {
  slug: "maize",
  name: "Maize",
  latin: "Zea mays",
  family: "Poaceae (grass)",
  category: "Cereal",
  images: [
    { src: "/images/plants/maize/1.jpg" },
    { src: "/images/plants/maize/2.jpg" },
    { src: "/images/plants/maize/3.jpg" },
    { src: "/images/plants/maize/4.jpg" },
    { src: "/images/plants/maize/5.jpg" },
    { src: "/images/plants/maize/6.jpg" },
  ],
  zones: ["Tropical", "Subtropical", "Temperate", "Highland"],
  difficulty: "Easy",
  lifecycle: "Annual",
  featured: true,
  blurb:
    "Plant corn in a block of several short rows, not one long row, because the wind carries its pollen. The two weeks when stringy hairs show on the cobs decide the crop: if the soil is dry then, some kernels won't grow.",
  facts: {
    light: "Full sun",
    water: "High; most important when the stringy hairs appear",
    soil: "Deep and fertile, pH 5.8–7.0",
    spacing: "25–30 cm in rows 75 cm apart, in blocks of four or more rows",
    harvest: "70–120 days depending on type and climate",
    habit: "1.5–3 m annual grass",
  },
  growing: [
    {
      title: "Wait for warm soil",
      body: "Maize sprouts poorly below about 10–12°C (50–54°F). Sowing into cold ground is the main reason a first planting comes up unevenly and never catches up.",
    },
    {
      title: "Sow in blocks, not single rows",
      body: "Pollen is carried on the wind, so plants need neighbours on every side. Four short rows beat one long row for the same number of seeds.",
    },
    {
      title: "Thin to the final spacing",
      body: "Two crowded plants produce less than one well-spaced plant. Thin early, while you can still see which is which.",
    },
    {
      title: "Protect the stringy-hair stage",
      body: "The two weeks around when stringy hairs appear on the cobs matter most. If the soil feels dry, water it. That is when water helps the cobs fill with kernels.",
    },
    {
      title: "Feed it while it grows tall",
      body: "Maize needs a lot of nitrogen. Add fertilizer near the base of the plant when it is about knee-high. This keeps the leaves green while the grains fill. Added too late, it feeds the stem more than the cob.",
    },
    {
      title: "Harvest at the right stage for the use",
      body: "Sweet corn is picked when the stringy hairs turn brown and a pressed grain gives out milky juice. Grain maize stays in the field until the husks dry and a dark layer forms at the base of each grain.",
    },
  ],
  benefits: [
    {
      title: "A reliable bulk staple",
      body: "Few garden crops produce as much food energy per area in a warm season, which is why it anchors smallholder systems across very different climates.",
    },
    {
      title: "Structure as well as food",
      body: "The stalks make windbreaks, fodder and mulch, and standing maize is the support that climbing crops are grown up in mixed systems.",
    },
    {
      title: "Works in a mixed bed",
      body: "In the classic three-sisters arrangement the maize carries the climb, a bean puts nitrogen back into the soil beside it, and a low squash shades the soil between the stems.",
    },
  ],
  cautions: [
    {
      title: "It cross-pollinates",
      body: "Sweet corn and field corn planted close together will cross, and the sweet crop loses eating quality that season. Separate plantings by distance or by timing.",
    },
    {
      title: "Storage is where the risk is",
      body: "Poorly dried or damp-stored maize is where aflatoxin develops — a poison made by mould. Dry it properly and keep it dry. This matters more than anything that happened in the field.",
    },
    {
      title: "Fall armyworm arrives fast",
      body: "The caterpillars feed inside the tight centre of young plants, where sprays may not reach. Check plants early, remove caterpillars by hand, or treat only the affected plants instead of spraying the whole field.",
    },
    {
      title: "A heavy feeder that drains beds",
      body: "Growing maize in the same bed year after year, with no beans in between, pulls nitrogen out of the soil season after season. Plan what follows it before you plant it.",
    },
  ],
  companions: [
    {
      plant: "Beans or cowpea",
      why: "Beans put nitrogen back into the soil that the maize then uses, and the maize stalk carries the climbing bean. The pairing works because the two use different layers of the same bed.",
    },
    {
      plant: "Squash or pumpkin",
      why: "The broad leaves shade the soil between maize stems, holding moisture and suppressing weeds without competing for height.",
    },
    {
      plant: "Fluted pumpkin",
      why: "In West African practice the vine is grown up the standing stalks, so the maize provides support for a second crop from the same ground.",
    },
  ],
  avoid: [
    {
      plant: "Fennel",
      why: "Fennel suppresses neighbouring plants and attracts the same beneficial insects away from where you want them.",
    },
    {
      plant: "Tomato",
      why: "Both are heavy feeders attacked by the same caterpillars. Together they strip a bed's fertility and give a pest two hosts instead of one.",
    },
  ],
  traditional: {
    summary:
      "The stringy hairs are used in folk practice as a tea, traditionally for urinary problems. This is a record of the practice, not evidence that it works.",
    reported: [
      "Stringy-hair tea is a traditional preparation and is not a substitute for treating an infection.",
      "Maize is a common allergen source in some regions, and mouldy grain is the serious risk, not the stringy hairs.",
    ],
  },
  reviewedAt: "2026-10-31",
};
