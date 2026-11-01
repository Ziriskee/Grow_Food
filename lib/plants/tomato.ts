import type { Plant } from "./types";

export const tomato: Plant = {
  slug: "tomato",
  name: "Tomato",
  latin: "Solanum lycopersicum",
  family: "Solanaceae (nightshade)",
  category: "Fruiting vegetable",
  zones: ["Temperate", "Subtropical", "Mediterranean"],
  difficulty: "Moderate",
  lifecycle: "Annual in most gardens; short-lived perennial in the tropics",
  featured: true,
  blurb:
    "The most grown and the most overwatered plant in the world. Fruit set stops when nights stay above about 24°C, and irregular watering does more damage than any pest.",
  facts: {
    light: "Full sun, 6–8 hours",
    water: "Deep and steady, not daily sprinkling",
    soil: "Fertile, well drained, pH 6.0–6.8",
    spacing: "45–60 cm apart, 90 cm between rows",
    harvest: "60–85 days from transplanting",
    habit: "Vining types need staking; bush types stand alone",
  },
  growing: [
    {
      title: "Start them warm",
      body: "Sow 6–8 weeks before your last frost at about 20–25°C. Germination stalls below 15°C, which is the most common reason a first sowing fails.",
    },
    {
      title: "Pot on deeply",
      body: "Move seedlings into a deeper pot once they have two true leaves. Bury the stem up to the lowest leaves — tomatoes root along the buried stem and grow a stronger system.",
    },
    {
      title: "Harden off before planting out",
      body: "Spend 7–10 days moving plants outside for longer each day. Plant out only when nights stay above 10°C; cold nights below that stunt the plant for weeks.",
    },
    {
      title: "Stake at planting, not later",
      body: "Drive the support in beside the seedling on day one. Adding a stake to a grown plant damages roots and the stems that are already heavy with fruit.",
    },
    {
      title: "Water consistently, feed at first fruit",
      body: "Aim for even moisture. Watering that swings from drought to soaking splits fruit and causes blossom-end rot. Start a potassium-leaning feed once the first fruit set.",
    },
    {
      title: "Pick at colour break",
      body: "Fruit picked as it turns from green to pink finishes ripening indoors and avoids splitting. Remove side shoots on vining types if you want fewer, larger trusses.",
    },
  ],
  benefits: [
    {
      title: "Dense nutrition per square metre",
      body: "Ripe fruit supplies vitamin C, potassium and lycopene. A single staked plant in a large pot produces more usable food than most ornamental planting of the same footprint.",
    },
    {
      title: "A trap crop that earns its place",
      body: "Hornworm and whitefly arrive on tomatoes first, which makes them easy to find and remove before they reach plants you check less often.",
    },
    {
      title: "Flowers feed pollinators",
      body: "Left to open, the small yellow flowers are visited by bumblebees, which buzz-pollinate them. Let a side shoot flower at the end of the season instead of pinching everything.",
    },
  ],
  cautions: [
    {
      title: "The foliage is toxic",
      body: "Leaves, stems and unripe fruit contain solanine-type compounds. Do not feed trimmings to livestock or pets, and wash hands after stripping leaves.",
    },
    {
      title: "Blossom-end rot is a watering problem",
      body: "The sunken black base is caused by calcium not reaching the fruit, usually through uneven watering rather than a lack of calcium in the soil. Adding calcium rarely fixes it.",
    },
    {
      title: "Heat shuts fruit set down",
      body: "Above roughly 32°C by day and 24°C at night, pollen becomes unviable and flowers drop. In hot climates, choose heat-set varieties or plant for a cool-season crop.",
    },
    {
      title: "Late blight spreads in days",
      body: "In cool, wet weather the crop can collapse within a week. Space plants for airflow, water at the base, and remove infected plants rather than trying to rescue them.",
    },
  ],
  companions: [
    {
      plant: "Basil",
      why: "A widely repeated pairing. The pest-deterrence evidence is thin, but the two want the same sun and water, and basil fills the gap between tomato stems usefully.",
    },
    {
      plant: "French marigold",
      why: "Marigold roots release compounds that suppress root-knot nematodes in the soil around them. The effect is local to the root zone, not a whole-bed cure.",
    },
    {
      plant: "Flowering herbs (borage, coriander left to bolt)",
      why: "They bring in the pollinators and predatory wasps that tomato flowers and hornworm caterpillars attract. This is the pairing with the clearest mechanism behind it.",
    },
  ],
  avoid: [
    {
      plant: "Potato",
      why: "Both are nightshades sharing late blight and the same soil-borne problems. Growing them together means one outbreak takes both crops.",
    },
    {
      plant: "Fennel",
      why: "Fennel releases compounds that suppress nearby plants, and it competes hard for water. Keep it out of the vegetable bed entirely.",
    },
  ],
  traditional: null,
  reviewedAt: "2026-10-31",
};
