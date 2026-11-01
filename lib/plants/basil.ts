import type { Plant } from "./types";

export const basil: Plant = {
  slug: "basil",
  name: "Sweet basil",
  latin: "Ocimum basilicum",
  family: "Lamiaceae (mint)",
  category: "Herb",
  zones: ["Tropical", "Subtropical", "Temperate"],
  difficulty: "Easy",
  lifecycle: "Tender annual; behaves as a short-lived perennial in the tropics",
  featured: true,
  blurb:
    "Pinch the flowering tips or the leaf crop ends early. Basil bolts fast in dry heat and sulks below about 12°C, which is why it fails in spring more often than in summer.",
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
      body: "Basil seed needs light to germinate, so press it into the surface and barely cover. Keep it at 18–22°C; cold soil is the usual cause of a patchy row.",
    },
    {
      title: "Keep humidity up until it is up",
      body: "Germination takes 5–10 days. Cover the tray to hold moisture, then remove the cover the moment seedlings appear or they stretch and fall over.",
    },
    {
      title: "Pinch above the second leaf pair",
      body: "The first pinch decides the shape of the plant. Cutting above a leaf pair makes it branch into two, then four. Plants that are never pinched stay single-stemmed and go to flower early.",
    },
    {
      title: "Remove flower spikes on sight",
      body: "Once flowering starts, leaf production drops sharply and the leaves turn bitter. Cut the whole spike back to a leaf pair, not just the flower head.",
    },
    {
      title: "Water at the base",
      body: "Wet foliage overnight in cool weather is how downy mildew gets in, and it spreads fast. Water the soil, keep the leaves dry, and space plants so air moves.",
    },
  ],
  benefits: [
    {
      title: "High value per plant",
      body: "A few plants cut repeatedly outperform a whole row of most vegetables for kitchen value. One pinch of tips becomes a meal's worth of leaves within a fortnight.",
    },
    {
      title: "Flowers for pollinators",
      body: "If you let a plant flower at the end of the season, the spikes are heavily visited by bees when little else is open. The trade is a handful of leaves for a lot of insect traffic.",
    },
    {
      title: "Aromatic foliage as a distraction",
      body: "The scent is strong enough to mask the smell of neighbouring crops from some pests. Treat this as a supporting effect, not a control measure.",
    },
  ],
  cautions: [
    {
      title: "Cold is the main killer",
      body: "Below about 12°C growth stops, and a light frost ends the plant. In cool climates, treat basil as a summer crop and sow successionally rather than trying to overwinter it.",
    },
    {
      title: "Downy mildew arrives overnight",
      body: "Yellow patches on top of the leaf with grey fuzz underneath means the plant is finished. Remove it entirely — the spores persist in debris and on neighbouring plants.",
    },
    {
      title: "Concentrated oil is not the leaf",
      body: "Culinary leaves and pressed essential oil are different preparations at wildly different strengths. Do not substitute one for the other.",
    },
  ],
  companions: [
    {
      plant: "Tomato",
      why: "The classic pairing, and a practical one: both want full sun and steady water, and basil uses the shaded gap between tomato stems that would otherwise grow weeds.",
    },
    {
      plant: "Pepper",
      why: "Same heat and water needs, and the low basil canopy keeps moisture in the soil around pepper roots without crowding them.",
    },
    {
      plant: "Marigold",
      why: "Marigold draws in hoverflies whose larvae eat aphids, which are the pest most likely to reach basil in a greenhouse.",
    },
  ],
  avoid: [
    {
      plant: "Rue",
      why: "Rue is allelopathic and suppresses plants around it, including herbs. It belongs on its own, away from the kitchen bed.",
    },
    {
      plant: "Fennel",
      why: "Fennel both suppresses neighbours chemically and grows tall enough to shade basil out. The two do not share a bed well.",
    },
  ],
  traditional: {
    summary:
      "Basil leaf infusions are used in many culinary traditions as a digestive and a calmative, and the fresh leaf is applied to insect bites in some folk practice. The leaf as food and the essential oil as a concentrate are treated as different things here.",
    reported: [
      "The essential oil is a much stronger preparation than the leaf and is not a kitchen substitute.",
      "Estragole, a compound in basil oil, is flagged for large or repeated doses, particularly for young children and during pregnancy.",
      "Concentrated oils should not be applied neat to skin or taken internally without qualified guidance.",
    ],
  },
  reviewedAt: "2026-10-31",
};
