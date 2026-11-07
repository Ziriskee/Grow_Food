import type { Plant } from "./types";

export const soybean: Plant = {
  slug: "soybean",
  name: "Soybean",
  latin: "Glycine max",
  family: "Fabaceae",
  category: "Legume",
  zones: ["Tropical", "Subtropical"],
  difficulty: "Moderate",
  lifecycle: "Annual",
  featured: true,
  blurb:
    "The bean that is becoming a major Nigerian crop. Soybean is grown for its protein-rich seeds, which are processed into oil, animal feed, and human food. It is a short-season crop that fits into the savanna planting window.",
  images: [
    { src: "/images/plants/soybean/1.jpg" },
    { src: "/images/plants/soybean/2.jpg" },
    { src: "/images/plants/soybean/3.jpg" },
    { src: "/images/plants/soybean/4.jpg" },
    { src: "/images/plants/soybean/5.jpg" },
    { src: "/images/plants/soybean/6.jpg" },
  ],
  states: [
    "benue",
    "plateau",
    "nasarawa",
    "kaduna",
    "kano",
    "katsina",
    "jigawa",
    "bauchi",
    "gombe",
    "adamawa",
    "taraba",
    "kwara",
    "kogi",
    "niger",
    "fct",
    "oyo",
    "osun",
    "ogun",
    "ondo",
    "ekiti",
  ],
  varieties: [
    {
      name: "TGx 1448-2E",
      description:
        "Early maturing (80–90 days), resistant to bacterial blight and tolerant of low soil fertility. Widely adopted in the middle belt.",
      type: "NASC-released",
      source: "IITA / NASC",
    },
    {
      name: "TGx 1951-3F",
      description:
        "Medium maturing (95–105 days), high-yielding, suited to the Guinea savanna.",
      type: "NASC-released",
      source: "IITA / NASC",
    },
    {
      name: "TGx 1835-10E",
      description:
        "Early maturing (75–85 days), drought-tolerant, suited to the short-season zones of the north.",
      type: "NASC-released",
      source: "IITA / NASC",
    },
    {
      name: "Local types",
      description:
        "Farm-saved seed of introduced varieties. Seed quality and maturity vary.",
      type: "Landrace",
      source: "Grower-maintained",
    },
  ],
  nigeriaNote:
    "Soybean is a growing crop in the middle belt and north, especially in Benue, Plateau, and Kaduna. It is processed into oil and animal feed, and the leftover meal is used in human food.",
  facts: {
    light: "Full sun",
    water: "Moderate; needs steady rain through flowering and pod fill",
    soil: "Well-drained loam; tolerates slightly acidic soils",
    spacing: "Rows 45–60 cm apart, plants 5–10 cm apart",
    harvest: "75–105 days after planting, depending on variety",
    habit: "Bushy annual, 40–80 cm tall",
  },
  growing: [
    {
      title: "Plant with the first rains",
      body: "Soybean seeds are planted directly in the field. Drop 2–3 seeds per hole and thin to the strongest seedling. Plant early in the rains so the crop has the full season to fill the pods.",
    },
    {
      title: "Keep the field clean for the first three weeks",
      body: "Soybean seedlings are slow to cover the ground. Weed early, then let the plants shade the soil themselves.",
    },
    {
      title: "Harvest when the pods turn brown",
      body: "When the leaves fall and the pods turn brown, the seeds are ready. Pull the whole plant and hang it to dry for a few days.",
    },
    {
      title: "Thresh and store",
      body: "Beat the dry plants to release the seeds. Winnow to remove the chaff. Store in a dry, airtight container — soybean seeds are attacked by weevils like cowpea.",
    },
  ],
  benefits: [
    {
      title: "High-protein seeds",
      body: "Soybean seeds are 40% protein and 20% oil. They are processed into oil, animal feed, and human food like soy milk and tofu.",
    },
    {
      title: "A cash crop",
      body: "Soybean is in demand for oil processing and animal feed. A good harvest can be sold to processors or livestock farmers.",
    },
    {
      title: "Fixes nitrogen in the soil",
      body: "Like other legumes, soybean roots host bacteria that pull nitrogen from the air and feed the soil. The next crop planted in the same field grows better.",
    },
  ],
  cautions: [
    {
      title: "Shatters if harvested too late",
      body: "Overripe soybean pods split open and drop the seeds. Harvest as soon as the pods turn brown and the leaves fall.",
    },
    {
      title: "Weevils attack stored seeds",
      body: "Soybean seeds are attacked by weevils in storage. Keep the store dry and check regularly.",
    },
    {
      title: "Needs inoculant on new land",
      body: "If soybean has never been grown on the land, the seeds need to be coated with rhizobium inoculant before planting. Without it, the plants do not fix nitrogen and yield poorly.",
    },
  ],
  companions: [
    {
      plant: "Maize",
      why: "Maize and soybean are often intercropped. The maize grows tall while the soybean covers the ground and fixes nitrogen.",
    },
  ],
  avoid: [
    {
      plant: "Other legumes in the same bed year after year",
      why: "Soybean builds up soil diseases on its own ground. Rotate with a non-legume crop each season.",
    },
  ],
  traditional: null,
  reviewedAt: "2026-11-07",
};
