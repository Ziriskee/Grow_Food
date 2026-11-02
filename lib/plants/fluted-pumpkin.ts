import type { Plant } from "./types";

export const flutedPumpkin: Plant = {
  slug: "fluted-pumpkin",
  name: "Fluted pumpkin",
  latin: "Telfairia occidentalis",
  family: "Cucurbitaceae (gourd)",
  category: "Leafy vegetable",
  images: [
    {
      src: "/images/plants/fluted-pumpkin/1.jpg",
    },
    { src: "/images/plants/fluted-pumpkin/2.jpg" },
    {
      src: "/images/plants/fluted-pumpkin/3.jpg",
    },
    {
      src: "/images/plants/fluted-pumpkin/4.jpg",
    },
    { src: "/images/plants/fluted-pumpkin/5.jpg" },
    {
      src: "/images/plants/fluted-pumpkin/6.jpg",
    },
  ],
  zones: ["Tropical"],
  difficulty: "Moderate",
  lifecycle: "Perennial vine grown as an annual for leaves, or kept for seed",
  featured: true,
  blurb:
    "Known as ugu in Igbo. A vigorous vine grown for leaves and for the protein-rich seeds milled into egusi. Plants are either male or female, so some vines never bear pods at all.",
  facts: {
    light: "Full sun; tolerates light shade",
    water: "High, but well drained",
    soil: "Fertile loam, pH 6.0–7.5",
    spacing: "1 m apart on a trellis; 50 × 30 cm in dense leaf plantings",
    harvest: "Leaf tips from about 8 weeks; pods after 4–6 months",
    habit: "Vine to 10 m or more; needs strong support",
  },
  growing: [
    {
      title: "Soak the hard seed first",
      body: "The seed coat is hard and germination is uneven. Nick or soak the seed for 12–24 hours before sowing, and expect some seeds to come up weeks after the rest.",
    },
    {
      title: "Raise seedlings, then transplant at six leaves",
      body: "Sow into a nursery bed or deep pots — the seedling develops a long main root fast and resents being moved once it is bigger. Transplant at roughly the six-leaf stage.",
    },
    {
      title: "Give it something serious to climb",
      body: "A fence, a strong trellis or standing maize will do; a bamboo tripod will not hold a mature vine. Fruit hanging from a weak support pulls the whole plant down.",
    },
    {
      title: "Harvest the tips, not the whole vine",
      body: "Cut the growing tips above a leaf pair and the vine branches. Cutting the vine back to the ground once kills the plant's momentum and delays the leaf crop by weeks.",
    },
    {
      title: "Expect gaps in the pod crop",
      body: "Plants are either male or female. If you want seed, plant several and do not remove the non-fruiting vines early — you need the males to pollinate the females.",
    },
  ],
  benefits: [
    {
      title: "A leaf crop that keeps producing",
      body: "Unlike a lettuce or a cabbage, the plant regrows after each cut. Established vines can be picked through a long season, which makes them efficient in small plots.",
    },
    {
      title: "Two crops from one plant",
      body: "The leaves are eaten as a vegetable and the seeds are processed into egusi. Few garden plants give a leaf crop and a protein-rich seed crop from the same planting.",
    },
    {
      title: "Fast shade and ground cover",
      body: "The vine covers a trellis or a fence line quickly, shading soil and suppressing weeds underneath while still producing food.",
    },
  ],
  cautions: [
    {
      title: "Raw seed is not a snack",
      body: "The seeds are eaten after processing and cooking, not raw. Treat the raw seed as a preparation step, not a food.",
    },
    {
      title: "It will smother what it climbs",
      body: "The vine does not distinguish between a trellis and a young fruit tree. Keep it on structures you control, and cut it back before it reaches the canopy.",
    },
    {
      title: "Dense planting hides disease",
      body: "The high-density leaf systems used for market production are humid inside, which suits fungal problems. Space for airflow if you are growing for leaves, and check under the leaves.",
    },
  ],
  companions: [
    {
      plant: "Maize",
      why: "In West African practice the vine is grown up standing maize stalks. The maize provides the support and the vine shades the soil at the maize's base.",
    },
    {
      plant: "Plantain and banana",
      why: "The vines use the trunks as support and the canopy gives the partial shade ugu tolerates well in hot, open ground.",
    },
  ],
  avoid: [
    {
      plant: "Other cucurbits (cucumber, melon, pumpkin)",
      why: "They share the same downy mildew and fruit-fly problems, and all of them compete for the same trellis space at the same time.",
    },
    {
      plant: "Young fruit trees",
      why: "The vine's weight and dense leaf cover will bend and shade out a young tree before the tree is established enough to carry it.",
    },
  ],
  traditional: {
    summary:
      "The leaf is a standard vegetable in West African cooking and is used in traditional practice as a tonic, often given to people recovering from illness and used in weaning foods. The seed is processed into egusi.",
    reported: [
      "Claims that the leaf 'builds blood' are a traditional belief rather than an established medical effect; the leaf is a source of iron, but absorption from plant sources varies with the rest of the meal.",
      "The leaf is usually cooked. Large amounts of raw leaf are not part of the usual preparation.",
    ],
  },
  reviewedAt: "2026-10-31",
};
