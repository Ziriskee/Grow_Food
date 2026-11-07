import type { Plant } from "./types";

export const cucumber: Plant = {
  slug: "cucumber",
  name: "Cucumber",
  latin: "Cucumis sativus",
  family: "Cucurbitaceae",
  category: "Fruiting vegetable",
  images: [
    {
      src: "/images/plants/cucumber/1.jpg",
    },
    {
      src: "/images/plants/cucumber/2.jpg",
    },
    {
      src: "/images/plants/cucumber/3.jpg",
    },
    {
      src: "/images/plants/cucumber/4.jpg",
    },
    {
      src: "/images/plants/cucumber/5.jpg",
    },
    {
      src: "/images/plants/cucumber/6.jpg",
    },
  ],
  zones: ["Tropical", "Subtropical"],
  difficulty: "Moderate",
  lifecycle: "Annual climbing vine",
  featured: true,
  blurb:
    "A fast-growing vine that produces cool, watery fruits. It needs steady water and warm weather, and the fruits must be picked young or they turn bitter and seedy.",
  states: [
    "lagos",
    "ogun",
    "oyo",
    "osun",
    "ondo",
    "ekiti",
    "edo",
    "delta",
    "rivers",
    "akwa-ibom",
    "cross-river",
    "anambra",
    "imo",
    "abia",
    "enugu",
    "ebonyi",
    "kogi",
    "kwara",
    "niger",
    "fct",
    "nasarawa",
    "benue",
    "plateau",
    "kaduna",
  ],
  varieties: [
    {
      name: "Local landraces",
      description:
        "Short, thick-skinned types grown in home gardens and sold in local markets. Seed saved from mature fruits.",
      type: "Landrace",
      source: "Grower-maintained",
    },
    {
      name: "Poinsett 76",
      description:
        "Introduced slicing type with smooth skin and uniform shape; common in commercial seed packs.",
      type: "Introduced",
      source: "Commercial seed stock",
    },
    {
      name: "Marketmore 76",
      description:
        "Disease-resistant slicing cucumber; grown in peri-urban farms near Lagos and Ibadan.",
      type: "Introduced",
      source: "Commercial seed stock",
    },
  ],
  nigeriaNote:
    "Cucumber grows across the south and middle belt during the rains. Dry-season cucumber on fadama land is common in the north, especially around Kaduna and Kano.",
  facts: {
    light: "Full sun",
    water: "High; steady moisture prevents bitter fruits",
    soil: "Rich, well-drained loam with plenty of organic matter",
    spacing: "Mounds 1 m apart, 2–3 seeds per mound thinned to the strongest",
    harvest: "50–70 days from sowing; pick fruits young",
    habit: "Trailing or climbing vine with tendrils",
  },
  growing: [
    {
      title: "Sow after the rains settle",
      body: "Cucumber seeds rot in cold, wet soil. Plant after the first steady rains, or under irrigation in the dry season. Drop 2–3 seeds per mound and thin to the strongest seedling.",
    },
    {
      title: "Give the vines room to run",
      body: "Cucumber vines spread fast. Stake them if space is tight, or let them trail on the ground. Weed early while the vines are thin; once the leaves cover the soil, the crop shades out most weeds.",
    },
    {
      title: "Water steadily",
      body: "Uneven watering makes the fruits bitter and misshapen. Keep the soil moist but not waterlogged. Mulch around the base to hold moisture.",
    },
    {
      title: "Pick fruits young",
      body: "Harvest cucumbers when they are still slender and the seeds are soft. Left too long, they turn yellow, bitter, and seedy. Pick every 2–3 days during peak season.",
    },
  ],
  benefits: [
    {
      title: "Fast to harvest",
      body: "From seed to first fruit in about 7 weeks. One of the quicker vegetable crops in the guide.",
    },
    {
      title: "Cool and refreshing",
      body: "Cucumbers are mostly water and eaten raw in salads and as a side dish. They cool the body in hot weather.",
    },
  ],
  cautions: [
    {
      title: "Bitter fruits from stress",
      body: "Dry soil, extreme heat, or overcrowding can make cucumbers bitter. Keep the plants well-watered and spaced.",
    },
    {
      title: "Powdery mildew in humid weather",
      body: "In wet, humid conditions, a white powdery coating can appear on the leaves. Space plants for airflow and avoid wetting the leaves when watering.",
    },
    {
      title: "Fruits spoil fast",
      body: "Fresh cucumbers keep only a few days in the fridge. Harvest only what you can use quickly.",
    },
  ],
  companions: [
    {
      plant: "Maize",
      why: "Cucumber vines can trail at the base of maize, covering the ground while the maize grows above.",
    },
    {
      plant: "Beans",
      why: "Beans fix nitrogen in the soil, which cucumbers need. The two share space without competing.",
    },
  ],
  avoid: [
    {
      plant: "Potato",
      why: "Potato and cucumber compete for the same nutrients and water. Planting them together shrinks both harvests.",
    },
    {
      plant: "Strong-smelling herbs (sage, mint)",
      why: "Some growers report that strong-smelling herbs can stunt cucumber growth. Keep them apart.",
    },
  ],
  traditional: null,
  reviewedAt: "2026-11-07",
};
