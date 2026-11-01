import type { Plant } from "./types";

export const maize: Plant = {
  slug: "maize",
  name: "Maize",
  latin: "Zea mays",
  family: "Poaceae (grass)",
  category: "Cereal",
  zones: ["Tropical", "Subtropical", "Temperate", "Highland"],
  difficulty: "Easy",
  lifecycle: "Annual",
  featured: true,
  blurb:
    "Wind pollinated, so it wants a block rather than a single row. Water stress at silking costs more yield than at any other stage, and the difference shows up as missing kernels.",
  facts: {
    light: "Full sun",
    water: "High; critical from tasselling to silking",
    soil: "Deep and fertile, pH 5.8–7.0",
    spacing: "25–30 cm in rows 75 cm apart, in blocks of four or more rows",
    harvest: "70–120 days depending on type and climate",
    habit: "1.5–3 m annual grass",
  },
  growing: [
    {
      title: "Wait for warm soil",
      body: "Maize germinates poorly below about 10–12°C. Sowing into cold ground is the main reason a first planting comes up unevenly and never catches up.",
    },
    {
      title: "Sow in blocks, not single rows",
      body: "Pollen is carried on the wind, so plants need neighbours on every side. Four short rows beat one long row for the same number of seeds.",
    },
    {
      title: "Thin to the final spacing",
      body: "Two crowded plants produce less than one well-spaced plant. Thin early, while the competition is still easy to see.",
    },
    {
      title: "Protect the silking window",
      body: "The two weeks around silking decide the crop. If it is dry then, water it — this is the one stage where irrigation pays back most directly in filled cobs.",
    },
    {
      title: "Side-dress as it stretches",
      body: "Maize is a heavy nitrogen feeder. A side-dressing at knee height keeps the leaves green through grain fill; leave it too late and it feeds the stalk, not the cob.",
    },
    {
      title: "Harvest at the right stage for the use",
      body: "Sweet corn is picked when the silks brown and a pressed kernel runs milky. Grain maize stays in the field until the husks dry and a black layer forms at the kernel base.",
    },
  ],
  benefits: [
    {
      title: "A reliable bulk staple",
      body: "Few garden crops produce as much edible energy per area in a warm season, which is why it anchors smallholder systems across very different climates.",
    },
    {
      title: "Structure as well as food",
      body: "The stalks make windbreaks, fodder and mulch, and standing maize is the support that climbing crops are grown up in mixed systems.",
    },
    {
      title: "Works in a mixed bed",
      body: "In the classic three-sisters arrangement the maize carries the climb, a legume fixes nitrogen beside it, and a low squash shades the soil between the stems.",
    },
  ],
  cautions: [
    {
      title: "It cross-pollinates",
      body: "Sweet corn and field corn planted close together will cross, and the sweet crop loses eating quality that season. Separate plantings by distance or by timing.",
    },
    {
      title: "Storage is where the risk is",
      body: "Poorly dried or damp-stored maize is where aflatoxin develops. Dry it properly and keep it dry; this matters more than anything that happened in the field.",
    },
    {
      title: "Fall armyworm arrives fast",
      body: "The caterpillars feed in the whorl where sprays do not reach. Check plants from emergence, and hand-remove or use a directed treatment rather than blanket spraying.",
    },
    {
      title: "A heavy feeder that depletes beds",
      body: "Repeated maize without a legume rotation pulls nitrogen down season after season. Plan what follows it before you plant it.",
    },
  ],
  companions: [
    {
      plant: "Beans or cowpea",
      why: "Legumes fix nitrogen that the maize then uses, and the maize stalk carries the climbing bean. The pairing works because the two use different layers of the same bed.",
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
      "Maize silk is used in folk practice as a tea, traditionally for urinary complaints. This is a record of the practice, not evidence that it works.",
    reported: [
      "Silk tea is a traditional preparation and is not a substitute for treating an infection.",
      "Maize is a common allergen source in some regions, and mouldy grain is the serious risk, not the silk.",
    ],
  },
  reviewedAt: "2026-10-31",
};
