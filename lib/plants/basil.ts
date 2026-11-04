import type { Plant } from "./types";

export const basil: Plant = {
  slug: "basil",
  name: "Sweet basil",
  latin: "Ocimum basilicum",
  family: "Lamiaceae (mint)",
  category: "Herb",
  images: [
    { src: "/images/plants/basil/1.jpg" },
    { src: "/images/plants/basil/2.jpg" },
    { src: "/images/plants/basil/3.jpg" },
    { src: "/images/plants/basil/4.jpg" },
    { src: "/images/plants/basil/5.jpg" },
    { src: "/images/plants/basil/6.jpg" },
  ],
  states: [
    "lagos",
    "ogun",
    "oyo",
    "osun",
    "edo",
    "delta",
    "rivers",
    "enugu",
    "anambra",
    "imo",
    "abia",
    "akwa-ibom",
    "cross-river",
    "plateau",
    "kaduna",
    "fct",
  ],
  varieties: [
    {
      name: "Local sweet basil",
      description:
        "Seed saved in home and market gardens. No NASC-released basil list exists yet, so every packet is effectively a landrace.",
      type: "Landrace",
      source: "Grower-maintained",
    },
    {
      name: "Purple and lemon-scented types",
      description:
        "Occasional introduced ornamental-culinary types in urban nurseries; not registered and not stable from seed.",
      type: "Introduced",
      source: "Nursery stock",
    },
  ],
  nigeriaNote:
    "Basil is not a traditional Nigerian crop. It does well in southern home gardens and on the Jos Plateau, and fails in the hot dry north without shade and steady water.",
  zones: ["Tropical", "Subtropical", "Temperate"],
  difficulty: "Easy",
  lifecycle: "Tender annual; behaves as a short-lived perennial in the tropics",
  featured: true,
  blurb:
    "Pinch out the flower spikes as soon as they appear, or the leaf harvest ends early. Basil flowers fast in dry heat and stops growing below about 12°C (54°F), so spring plantings fail more often than summer ones.",
  facts: {
    light: "Full sun, 5–6 hours; afternoon shade in hot climates",
    water: "Keep moist; wilts within hours when dry",
    soil: "Loose and fertile, pH 6.0–7.0",
    spacing: "25–30 cm apart",
    harvest: "50–70 days from sowing, then continuously",
    habit: "Bushy annual to about 50 cm",
  },
  growing: [
    {
      title: "Sow warm and shallow",
      body: "Basil seed needs light to sprout, so press it into the surface and barely cover it. Keep it at 18–22°C (64–72°F). Cold soil is the usual reason a row comes up patchy.",
    },
    {
      title: "Keep the tray moist until seedlings appear",
      body: "Sprouting takes 5–10 days. Cover the tray to hold moisture, then take the cover off as soon as seedlings appear. Left covered too long, they stretch and fall over.",
    },
    {
      title: "Cut just above the second pair of leaves",
      body: "The first cut decides the shape of the plant. Cutting above a pair of leaves makes the plant split into two stems, then four. If you never cut it, it grows one main stem and flowers early.",
    },
    {
      title: "Remove flower spikes as soon as you see them",
      body: "Once flowering starts, the plant makes far fewer leaves and they can taste bitter. Cut the whole flower spike back to a pair of leaves — not just the flower top.",
    },
    {
      title: "Water at the base",
      body: "Wet leaves overnight in cool weather can bring on downy mildew, a leaf disease that spreads fast. Water the soil, keep the leaves dry, and space plants so air can move.",
    },
  ],
  benefits: [
    {
      title: "High value per plant",
      body: "A few plants cut again and again give more kitchen value than a whole row of most vegetables. One pinch of tips becomes a meal's worth of leaves within two weeks.",
    },
    {
      title: "Flowers for pollinators",
      body: "If you let a plant flower at the end of the season, the spikes are heavily visited by bees when little else is open. The trade is a handful of leaves for a lot of insect traffic.",
    },
    {
      title: "Scent as a distraction",
      body: "The scent is strong enough to mask the smell of neighbouring crops from some pests. Treat this as a small extra, not a way to control pests.",
    },
  ],
  cautions: [
    {
      title: "Cold is the main killer",
      body: "Below about 12°C (54°F), basil stops growing. A little frost can kill it. In cool places, grow basil in summer and plant a few seeds every few weeks. Don't try to keep one plant going all winter.",
    },
    {
      title: "Downy mildew arrives overnight",
      body: "Yellow patches on top of the leaf with grey fuzz underneath mean the plant is badly infected. Remove the whole plant. The disease can survive on dead leaves and on nearby plants.",
    },
    {
      title: "Concentrated oil is not the leaf",
      body: "Cooking basil leaves and basil essential oil are very different strengths. The oil is much stronger. Don't use one in place of the other.",
    },
  ],
  companions: [
    {
      plant: "Tomato",
      why: "The classic pairing, and a practical one: both want full sun and steady water, and basil fills the shaded gap between tomato stems where weeds would otherwise grow.",
    },
    {
      plant: "Pepper",
      why: "Same heat and water needs, and the low basil canopy keeps moisture in the soil around pepper roots without crowding them.",
    },
    {
      plant: "French marigold",
      why: "French marigold draws in hoverflies, small flying insects whose young eat aphids — the pest most likely to reach basil in a greenhouse.",
    },
  ],
  avoid: [
    {
      plant: "Rue",
      why: "Rue can hurt the plants around it, including other herbs. Grow it alone, away from the herbs you use for cooking.",
    },
    {
      plant: "Fennel",
      why: "Fennel can hurt the plants around it and grows tall enough to shade basil. Keep fennel and basil in separate beds.",
    },
  ],
  traditional: {
    summary:
      "Basil leaf tea is used in many traditional practices to help digestion and calm the stomach. In some folk practice, fresh leaves are placed on insect bites. Here, basil leaf as food and basil essential oil as a concentrate are treated as different things.",
    reported: [
      "Essential oil is much stronger than the leaf and is not a kitchen substitute.",
      "Estragole, a substance in basil oil, may be risky in large or repeated doses, especially for young children and during pregnancy.",
      "Do not apply undiluted oils to the skin or swallow them without expert guidance.",
    ],
  },
  reviewedAt: "2026-10-31",
};
