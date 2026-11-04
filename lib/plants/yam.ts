import type { Plant } from "./types";

export const yam: Plant = {
  slug: "yam",
  name: "Yam",
  latin: "Dioscorea rotundata",
  family: "Dioscoreaceae",
  category: "Roots & tuber",
  images: [
    {
      src: "/images/plants/yam/1.jpg",
    },
    {
      src: "/images/plants/yam/2.jpg",
    },
    {
      src: "/images/plants/yam/3.jpg",
    },
    {
      src: "/images/plants/yam/4.jpg",
    },
    {
      src: "/images/plants/yam/5.jpg",
    },
    {
      src: "/images/plants/yam/6.jpg",
    },
  ],
  zones: ["Tropical"],
  difficulty: "Demanding",
  lifecycle: "Annual climbing vine",
  featured: true,
  blurb:
    "The heavyweight of Nigerian farming: a climbing vine grown for its large underground tuber, planted from pieces of last year's yam and staked like a bean. It asks for deep soil, steady rain and real labour — and the harvest festival says why communities still bother.",
  states: [
    "abia",
    "anambra",
    "benue",
    "cross-river",
    "delta",
    "ebonyi",
    "edo",
    "ekiti",
    "enugu",
    "imo",
    "kaduna",
    "kogi",
    "kwara",
    "nasarawa",
    "niger",
    "ogun",
    "ondo",
    "osun",
    "oyo",
    "plateau",
    "rivers",
    "taraba",
  ],
  varieties: [
    {
      name: "White yam landraces (Dioscorea rotundata)",
      description:
        "Most Nigerian yam belongs to this group. Names are community-owned and seed yam passes between growers, so the same tuber may carry different names across villages.",
      type: "Landrace",
      source: "Grower-maintained",
    },
    {
      name: "Water yam (Dioscorea alata)",
      description:
        "Hardier than white yam and more forgiving of wet ground, but less prized for pounding.",
      type: "Landrace",
      source: "Grower-maintained",
    },
    {
      name: "Improved TDr lines",
      description:
        "Breeding lines selected for disease tolerance and a shorter growing season. Still mostly in research and multiplication, not yet common in markets.",
      type: "Introduced",
      source: "IITA",
    },
  ],
  nigeriaNote:
    "The yam belt runs through the middle belt and the south-east, with Benue at its heart. Across many communities the New Yam Festival (Iri Ji) marks the first harvest of the season.",
  facts: {
    light: "Full sun",
    water: "Steady rain through vine growth; dry weather as tubers mature",
    soil: "Deep, loose, fertile soil; traditionally grown on mounds or ridges",
    spacing: "Mounds about 1 m apart, one sett per mound",
    harvest: "6–9 months, when the leaves yellow and the vine dries",
    habit: "Twining vine several metres long, one large tuber per plant",
  },
  growing: [
    {
      title: "Build the mounds before the rains",
      body: "Yam wants deep, loose soil to swell in. Heap mounds or ridges in the dry season so they are ready when the first rain falls. Fresh, rested land gives the best tubers.",
    },
    {
      title: "Plant pieces of yam, not seed",
      body: "Yam is grown from 'seed yam' — whole small tubers or cut pieces of large ones, each with a healthy growing end. Plant one sett per mound as the rains begin. Seed yam is the biggest cost of the crop, which is why growers guard their best tubers for replanting.",
    },
    {
      title: "Stake the vines",
      body: "Once the vines run, give each plant a strong stake to climb. Vines left on the ground tangle, shade each other and feed the tuber poorly. Staking is the heaviest labour of the crop — plan where the stakes come from before planting.",
    },
    {
      title: "Weed early, then let the canopy work",
      body: "Keep the mounds clean while the vines are young. Once the leaves close over, the crop shades out most weeds on its own.",
    },
    {
      title: "Harvest when the vine dies back",
      body: "When the leaves yellow and the vine dries, the tuber is ready. Dig wide and carefully — a bruised or cut yam rots in storage. Lift on a dry day and let the tubers dry before storing them somewhere cool and airy.",
    },
  ],
  benefits: [
    {
      title: "The crop that stores itself",
      body: "Cured whole tubers keep for months in a dry, airy barn, carrying a household to the next season without refrigeration.",
    },
    {
      title: "Food and culture in one plant",
      body: "Yam is pounded, boiled, roasted and fried across Nigeria, and its harvest is celebrated — the New Yam Festival is one of the country's most widely kept farming traditions.",
    },
  ],
  cautions: [
    {
      title: "Seed yam is expensive for a reason",
      body: "A large share of the harvest goes straight back into the ground as planting material. Eat, sell and replant in that order, or next year's farm shrinks.",
    },
    {
      title: "Rot takes the harvest after it is lifted",
      body: "Bruised, wet or immature tubers rot fast in storage. Handle gently, dry before storing, and check the store regularly so one rotting yam does not spread to the rest.",
    },
    {
      title: "Always cook it",
      body: "Raw yam is not eaten; it is always cooked. This is practice, not a suggestion.",
    },
  ],
  companions: [
    {
      plant: "Maize",
      why: "The traditional early intercrop on fresh mounds. The maize is harvested before the yam vines close the canopy.",
    },
    {
      plant: "Cowpea",
      why: "Low cowpea covers the sides of the mound, protecting the soil without competing at the depth where the tuber swells.",
    },
  ],
  avoid: [
    {
      plant: "Another heavy root crop on the same mound",
      why: "The mound belongs to one tuber. Sharing it costs size on both sides.",
    },
  ],
  traditional: null,
  reviewedAt: "2026-11-04",
};
