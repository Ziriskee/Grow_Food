import type { Plant } from "./types";

export const okra: Plant = {
  slug: "okra",
  name: "Okra",
  latin: "Abelmoschus esculentus",
  family: "Malvaceae (mallow)",
  category: "Fruiting vegetable",
  images: [
    {
      src: "/images/plants/okra/1.jpg",
    },
    { src: "/images/plants/okra/2.jpg" },
    {
      src: "/images/plants/okra/3.jpg",
    },
    {
      src: "/images/plants/okra/4.jpg",
    },
    { src: "/images/plants/okra/5.jpg" },
    {
      src: "/images/plants/okra/6.jpg",
    },
  ],
  zones: ["Tropical", "Subtropical"],
  difficulty: "Easy",
  lifecycle: "Annual",
  featured: true,
  blurb:
    "Pods turn woody within days of being ready. In heat you pick every other day or the plant stops producing, and the spines on some varieties will find your hands.",
  facts: {
    light: "Full sun",
    water: "Moderate and deep; tolerates short dry spells",
    soil: "Well drained, pH 5.8–7.0",
    spacing: "30–45 cm apart, 60–90 cm between rows",
    harvest: "50–65 days from sowing, then every 1–2 days",
    habit: "Upright annual to 1–2 m",
  },
  growing: [
    {
      title: "Soak the seed first",
      body: "The seed coat is hard. Soaking for 12–24 hours before sowing evens up germination, which otherwise straggles over two or three weeks.",
    },
    {
      title: "Sow into warm soil",
      body: "Okra will not germinate below about 15°C, and cold soil rots the seed. In cooler climates, raise it under cover and plant out once the ground has warmed properly.",
    },
    {
      title: "Thin hard",
      body: "Crowded okra stays short, sets fewer pods and hides the pods that do form. Thin to the final spacing once the seedlings are established.",
    },
    {
      title: "Pick small and often",
      body: "A pod is ready at 7–10 cm and woody a few days later. Picking every other day in heat keeps the plant in production; leaving pods to mature tells it to stop flowering.",
    },
    {
      title: "Strip the lower leaves",
      body: "Removing the lowest leaves improves airflow around the stem and makes pods easier to find. It also reduces the fungal problems that come with a dense, humid canopy.",
    },
  ],
  benefits: [
    {
      title: "It produces in real heat",
      body: "Most fruiting vegetables shut down in the hottest part of the season; okra keeps setting pods. That gap in the harvest is where it earns its place.",
    },
    {
      title: "Fast turnaround",
      body: "From sowing to the first pod is roughly two months, which makes it a useful follow-on crop or a quick return from a small bed.",
    },
    {
      title: "Leaves are edible too",
      body: "Young leaves can be cooked like spinach, though picking them reduces pod set. Grow a few extra plants if you want both.",
    },
  ],
  cautions: [
    {
      title: "The pods wait for nobody",
      body: "Two days late in hot weather and the pod is fibrous. This is the single most common reason people decide they dislike okra — it was picked late, not grown badly.",
    },
    {
      title: "Some varieties have spines",
      body: "The stems and pods of many varieties carry fine irritating hairs. Wear gloves and long sleeves when picking, especially in the heat.",
    },
    {
      title: "It shares pests with the whole bed",
      body: "Flea beetles and whitefly move between okra, eggplant and other summer crops. Check okra first, because the damage shows early on the new leaves.",
    },
  ],
  companions: [
    {
      plant: "Pepper and eggplant",
      why: "Same heat, sun and water needs, and the three together form a canopy that holds humidity at a level they all tolerate while shading bare soil.",
    },
    {
      plant: "Basil",
      why: "The low basil canopy covers the ground between okra stems and brings in the pollinators okra's large flowers depend on.",
    },
  ],
  avoid: [
    {
      plant: "Shading crops (tall maize rows, climbing vines)",
      why: "Okra needs heat and full sun to set pods. Anything that shades it reduces flowering and slows pod development.",
    },
    {
      plant: "Fennel",
      why: "Fennel suppresses neighbouring plants and pulls in the same beneficial insects okra relies on for pollination.",
    },
  ],
  traditional: {
    summary:
      "Okra mucilage is used in traditional practice as a soothing drink for stomach irritation, and the young leaf is cooked as a vegetable in many regions.",
    reported: [
      "The mucilage can slow the absorption of some medicines taken at the same time, so it is usually separated from medication rather than taken together.",
      "Pods are a common food; the traditional medicinal uses are about the mucilage, not a concentrated extract.",
    ],
  },
  reviewedAt: "2026-10-31",
};
