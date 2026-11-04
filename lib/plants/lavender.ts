import type { Plant } from "./types";

export const lavender: Plant = {
  slug: "lavender",
  name: "Lavender",
  latin: "Lavandula angustifolia",
  family: "Lamiaceae (mint)",
  category: "Herb",
  images: [
    {
      src: "/images/plants/lavender/1.jpg",
    },
    { src: "/images/plants/lavender/2.jpg" },
    {
      src: "/images/plants/lavender/3.jpg",
    },
    {
      src: "/images/plants/lavender/4.jpg",
    },
    { src: "/images/plants/lavender/5.jpg" },
    {
      src: "/images/plants/lavender/6.jpg",
    },
  ],
  nigeriaNote:
    "Lavender is not reliably grown in Nigeria. Its needs — lean alkaline soil, dry air, cool nights — match almost no Nigerian zone, and even Jos Plateau humidity is usually too high. Treat any Nigerian lavender as a container experiment, not a crop.",
  zones: ["Mediterranean", "Temperate", "Arid"],
  difficulty: "Moderate",
  lifecycle: "Woody evergreen subshrub, short lived",
  featured: true,
  blurb:
    "Needs lean, alkaline, sharply drained soil. Rich compost and summer watering are the two fastest ways to lose it, and it rarely lives past eight years anyway.",
  facts: {
    light: "Full sun",
    water: "Sparse and deep; dry between waterings",
    soil: "Lean, gritty, alkaline, pH 6.7–8.0",
    spacing: "45–60 cm apart",
    harvest: "Flowers from the second year, mid-summer",
    habit: "Woody subshrub to 40–80 cm",
  },
  growing: [
    {
      title: "Take cuttings rather than sowing",
      body: "Seed germination is slow and the offspring vary. Cuttings from named varieties keep the habit and the oil quality you actually chose.",
    },
    {
      title: "Plant on grit, not compost",
      body: "Mix grit into the planting hole (grit is coarse sand or fine gravel) and set the crown just above the soil surface. Lavender roots rot in soil that stays wet around them.",
    },
    {
      title: "Do not feed it",
      body: "Rich soil makes soft, sprawling growth that flops and dies back in winter. The plant performs best where it is slightly starved.",
    },
    {
      title: "Harvest at half-open flowers",
      body: "Cut stems when the first flowers on the spike are open and the rest are still buds. That is when the scent holds best for drying.",
    },
    {
      title: "Prune every year, lightly",
      body: "Cut back to just above the woody base after flowering, leaving green growth below the cut. Cutting into old bare wood kills that branch permanently.",
    },
  ],
  benefits: [
    {
      title: "One of the best plants for pollinators",
      body: "In full flower a lavender hedge is worked continuously by bees and butterflies, and it delivers that in the lean part of the season when little else is open.",
    },
    {
      title: "Drought performance",
      body: "Once established it needs no watering in a normal summer, which makes it the sensible choice for a hot, dry border where other herbs fail.",
    },
    {
      title: "Structure and scent together",
      body: "The dense grey-green habit edges a path or holds a slope, and the scent carries on still evenings — a rare combination of functional and pleasant.",
    },
  ],
  cautions: [
    {
      title: "Wet soil kills it faster than cold",
      body: "In humid or heavy soils lavender rots at the base, usually in its second or third winter. If your ground holds water, grow it in a pot of gritty mix.",
    },
    {
      title: "It does not live forever",
      body: "Plants go woody and thin out after roughly five to eight years. Take cuttings every few years so you have replacements before the old plant gives up.",
    },
    {
      title: "Humidity is the enemy",
      body: "Dense planting in still, humid air brings on fungal problems that are hard to reverse. Leave space around each plant and prune to keep the centre open.",
    },
  ],
  companions: [
    {
      plant: "Rosemary, sage and thyme",
      why: "Identical demands: lean soil, sharp drainage, full sun. Growing them together means one bed preparation and one watering rule.",
    },
    {
      plant: "Roses",
      why: "A long-standing pairing in formal gardens. Lavender's early flowers bring in the beneficial insects that work the aphids on rose stems.",
    },
  ],
  avoid: [
    {
      plant: "Mint and moisture-loving herbs",
      why: "Their watering regime waterlogs the lavender crown. This is the pairing that most often kills one of the two within a season.",
    },
    {
      plant: "Vegetables in a rich bed",
      why: "Lavender wants poor, dry ground and vegetables want fertile, moist ground. One bed cannot be both.",
    },
  ],
  traditional: {
    summary:
      "Lavender is traditionally used for sleep, anxiety and headaches, most often as inhaled oil or a leaf tea, and the dried flowers are kept in linen and clothing.",
    reported: [
      "Undiluted essential oil irritates skin and should not be applied neat.",
      "Essential oil is not for internal use, and is kept away from small children.",
      "Leaf tea is a much weaker preparation than the oil, but it is still not recommended in pregnancy without advice.",
    ],
  },
  reviewedAt: "2026-10-31",
};
