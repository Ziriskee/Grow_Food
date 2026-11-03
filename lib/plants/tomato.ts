import type { Plant } from "./types";

export const tomato: Plant = {
  slug: "tomato",
  name: "Tomato",
  latin: "Solanum lycopersicum",
  family: "Solanaceae (nightshade)",
  category: "Fruiting vegetable",
  images: [
    {
      src: "/images/plants/tomato/1.jpg",
    },
    { src: "/images/plants/tomato/2.jpg" },
    {
      src: "/images/plants/tomato/3.jpg",
    },
    {
      src: "/images/plants/tomato/4.jpg",
    },
    { src: "/images/plants/tomato/5.jpg" },
    {
      src: "/images/plants/tomato/6.jpg",
    },
  ],
  states: [
    "plateau",
    "kaduna",
    "bauchi",
    "kano",
    "sokoto",
    "kebbi",
    "zamfara",
    "jigawa",
    "katsina",
    "nasarawa",
    "benue",
    "gombe",
    "taraba",
  ],
  varieties: [
    {
      name: "Roma VF",
      description:
        "Determinate, oblong, thick-walled. Long-standing processing type; vulnerable to bacterial wilt and late blight.",
      type: "NASC-released",
      source: "NIHORT",
    },
    {
      name: "Ibadan Local",
      description:
        "Indeterminate landrace grown across the south; small fruit, tolerant of heat and local pest pressure.",
      type: "Landrace",
      source: "IITA / NIHORT",
    },
    {
      name: "Plato F1",
      description:
        "Hybrid with TYLCV resistance; grown under irrigation on the Jos Plateau and in the northern dry season.",
      type: "NASC-released",
      source: "East-West Seed",
    },
    {
      name: "UC82B",
      description:
        "Determinate, widely used for dry-season irrigated production in the north; firm fruit, good for transport.",
      type: "NASC-released",
      source: "NIHORT / commercial",
    },
  ],
  zones: ["Temperate", "Subtropical", "Mediterranean"],
  difficulty: "Moderate",
  lifecycle: "Annual in most gardens; short-lived perennial in the tropics",
  featured: true,
  blurb:
    "Probably the most overwatered plant in a garden. The plant may stop forming fruit when nights stay above about 24°C. Uneven watering causes more damage than any pest.",
  facts: {
    light: "Full sun, 6–8 hours",
    water: "Deep and steady, not daily sprinkling",
    soil: "Fertile, well drained, pH 6.0–6.8",
    spacing: "45–60 cm apart, 90 cm between rows",
    harvest: "60–85 days from transplanting",
    habit: "Climbing types need staking; bush types stand alone",
  },
  growing: [
    {
      title: "Start them warm",
      body: "Sow 6–8 weeks before the last very cold night of the season, at about 20–25°C. Seeds sprout slowly or fail below 15°C. This is the most common reason a first sowing fails.",
    },
    {
      title: "Move seedlings to deeper pots",
      body: "Move seedlings into a deeper pot once they have their first true leaves. Bury the stem up to the lowest leaves. Tomatoes can grow roots along the buried stem, which makes a stronger root system.",
    },
    {
      title: "Prepare young plants for outdoor life",
      body: "Spend 7–10 days moving plants outside for longer each day. Move them to the garden only when nights stay above 10°C. Colder nights can slow the plant down for weeks.",
    },
    {
      title: "Stake at planting, not later",
      body: "Drive the support in beside the seedling on day one. Adding a stake to a grown plant damages roots and the stems that are already heavy with fruit.",
    },
    {
      title: "Water evenly, then feed at the first fruit",
      body: "Keep the soil evenly moist. Watering that swings between very dry and very wet can split fruit and cause blossom-end rot — see the cautions below",
    },
    {
      title: "Pick when the colour starts to change",
      body: "Pick fruit when it just starts changing from green to pink. It will finish ripening indoors and is less likely to split. On climbing types, remove small side stems if you want fewer but larger fruit clusters.",
    },
  ],
  benefits: [
    {
      title: "Dense nutrition per square metre",
      body: "Ripe fruit supplies vitamin C, potassium and lycopene. A single staked plant in a large pot produces more usable food than most ornamental planting of the same footprint.",
    },
    {
      title: "A trap crop that earns its place",
      body: "Hornworm and whitefly show up on tomatoes first, which makes them easy to find and remove before they reach plants you check less often.",
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
      body: "The dark sunken spot at the bottom of the fruit is usually caused by uneven watering, not by missing calcium in the soil. Adding calcium rarely fixes it.",
    },
    {
      title: "Heat shuts fruit set down",
      body: "When days are above about 32°C and nights above about 24°C, flowers may drop without forming fruit. In hot climates, choose varieties that can set fruit in heat, or grow tomatoes in the cooler season.",
    },
    {
      title: "Late blight spreads fast",
      body: "In cool, wet weather, the crop can collapse within a week. Space plants so air can move, water at the base, and remove infected plants instead of trying to save them.",
    },
  ],
  companions: [
    {
      plant: "Basil",
      why: "A widely repeated pairing. There is little evidence it actually deters pests, but the two want the same sun and water, and basil fills the gap between tomato stems usefully.",
    },
    {
      plant: "French marigold",
      why: "Marigold roots release compounds that suppress root-knot nematodes in the soil around them. The effect is local to the root zone, not a whole-bed cure.",
    },
    {
      plant: "Flowering herbs (borage, coriander allowed to flower)",
      why: "They attract pollinators and helpful wasps that can attack tomato pests. This pairing has the clearest reason behind it.",
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
