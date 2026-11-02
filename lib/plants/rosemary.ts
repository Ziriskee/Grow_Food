import type { Plant } from "./types";

export const rosemary: Plant = {
  slug: "rosemary",
  name: "Rosemary",
  latin: "Salvia rosmarinus",
  family: "Lamiaceae (mint)",
  category: "Herb",
  images: [
    {
      src: "/images/plants/rosemary/1.jpg",
    },
    { src: "/images/plants/rosemary/2.jpg" },
    {
      src: "/images/plants/rosemary/3.jpg",
    },
    {
      src: "/images/plants/rosemary/4.jpg",
    },
    { src: "/images/plants/rosemary/5.jpg" },
    {
      src: "/images/plants/rosemary/6.jpg",
    },
  ],
  zones: ["Mediterranean", "Temperate", "Subtropical"],
  difficulty: "Moderate",
  lifecycle: "Woody evergreen perennial",
  featured: true,
  blurb:
    "Killed by kindness more often than by cold. It wants sharp drainage and no standing water around the crown, and it will not resprout from old bare wood if you cut back too hard.",
  facts: {
    light: "Full sun",
    water: "Low; deep and infrequent once established",
    soil: "Sharply drained, lean, pH 6.5–8.0",
    spacing: "60–90 cm apart",
    harvest: "Year-round once established, lightly",
    habit: "Evergreen shrub to 1–1.5 m",
  },
  growing: [
    {
      title: "Propagate from cuttings",
      body: "Seed is slow and uneven. Take 10 cm cuttings of this year's growth in late spring and they root in six to eight weeks in a mix of half soil, half grit.",
    },
    {
      title: "Plant it high, on a mound",
      body: "Set the crown slightly above the surrounding soil and let water run away from it. Rosemary that sits in a wet hollow rots at the base and dies without warning.",
    },
    {
      title: "Do not enrich the soil",
      body: "Rich compost produces soft, weak growth that is more cold-sensitive and less aromatic. Lean soil is what the plant evolved for.",
    },
    {
      title: "Water deeply, then leave it",
      body: "Established plants want a good soak and then a dry period. Frequent light watering keeps the roots shallow and the crown damp.",
    },
    {
      title: "Prune into green growth only",
      body: "Trim after flowering, cutting back into stems that still carry leaves. Old bare wood does not shoot again, and a hard cut into it leaves a permanent gap.",
    },
  ],
  benefits: [
    {
      title: "Evergreen structure in the herb bed",
      body: "It holds shape and colour through winter when most herbs have died back, which makes it useful as a low hedge along a path.",
    },
    {
      title: "Early nectar",
      body: "The flowers open early in the season, before most other forage, and are worked heavily by bees just out of winter.",
    },
    {
      title: "Drought tolerance once established",
      body: "A mature plant in the ground will go weeks without watering. That makes it a sensible choice for the dry, sunny edge of a plot.",
    },
  ],
  cautions: [
    {
      title: "Wet roots are fatal",
      body: "Root and crown rot in heavy or waterlogged soil is the most common cause of loss. If your soil holds water in winter, grow it in a pot or on a raised mound.",
    },
    {
      title: "Cold and wet together kill it",
      body: "Rosemary tolerates dry cold far better than cold with wet feet. A winter mulch that keeps the crown wet does more harm than the frost.",
    },
    {
      title: "Hard pruning is irreversible",
      body: "Cutting into old wood with no leaves growing from it usually leaves a dead stub. Keep pruning light and annual rather than corrective and severe.",
    },
  ],
  companions: [
    {
      plant: "Lavender, sage and thyme",
      why: "They want the same lean, sharply drained, sunny ground. Grouping them means one watering regime and one soil preparation instead of three.",
    },
    {
      plant: "Beans and brassicas",
      why: "Rosemary flowers bring in predators that hunt the caterpillars and aphids on both crops, while its roots stay deep and do not compete near the surface.",
    },
  ],
  avoid: [
    {
      plant: "Mint and other moisture lovers",
      why: "Their water regime is the opposite of rosemary's. Keeping them together guarantees the rosemary rots or the mint dries out.",
    },
    {
      plant: "Fennel",
      why: "Fennel suppresses nearby plants and its taproot competes hard for water in the same dry border where rosemary is growing.",
    },
  ],
  traditional: {
    summary:
      "Rosemary is used across Mediterranean traditions in hair rinses, as a memory herb, and in oils for aching joints. The leaf as a culinary herb and the essential oil as a concentrate are different preparations.",
    reported: [
      "The essential oil is toxic if swallowed and should never be taken internally without qualified supervision.",
      "Large internal doses of rosemary oil have been associated with seizures; high-dose medicinal use is avoided in pregnancy.",
      "Undiluted oil irritates skin. Culinary amounts of the leaf are a different matter entirely.",
    ],
  },
  reviewedAt: "2026-10-31",
};
