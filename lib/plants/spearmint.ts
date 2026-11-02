import type { Plant } from "./types";

export const spearmint: Plant = {
  slug: "spearmint",
  name: "Spearmint",
  latin: "Mentha spicata",
  family: "Lamiaceae (mint)",
  category: "Herb",
  images: [
    {
      src: "/images/plants/spearmint/1.jpg",
    },
    { src: "/images/plants/spearmint/2.jpg" },
    {
      src: "/images/plants/spearmint/3.jpg",
    },
    {
      src: "/images/plants/spearmint/4.jpg",
    },
    { src: "/images/plants/spearmint/5.jpg" },
    {
      src: "/images/plants/spearmint/6.jpg",
    },
  ],
  zones: ["Temperate", "Subtropical"],
  difficulty: "Easy",
  lifecycle: "Herbaceous perennial",
  featured: true,
  blurb:
    "Will take over a bed through runners within two seasons. Almost always grown in a sunken pot for that reason, and almost never grown from seed, because seedlings vary wildly.",
  facts: {
    light: "Part shade to full sun",
    water: "Constant moisture; tolerates wet soil",
    soil: "Any moist soil, pH 6.0–7.5",
    spacing: "30–45 cm, inside a container or root barrier",
    harvest: "60–90 days from planting, then cut repeatedly",
    habit: "Spreading perennial to 60 cm, via underground runners",
  },
  growing: [
    {
      title: "Start from a cutting, not seed",
      body: "Mint seed is slow, uneven and produces plants that are not the variety you wanted. A runner or a stem cutting roots in water in about two weeks.",
    },
    {
      title: "Contain the roots on day one",
      body: "Sink a pot with the base removed, or plant into a container. Mint spreads by runners under the surface and will cross a bed faster than you can pull it out.",
    },
    {
      title: "Cut it back hard",
      body: "After flowering the stems go woody and the leaves lose flavour. Cutting the plant back to about 10 cm forces fresh soft growth and a second usable crop.",
    },
    {
      title: "Divide every couple of years",
      body: "Old clumps die out in the middle and go woody at the edges. Lifting and replanting the vigorous outer pieces keeps the patch productive.",
    },
  ],
  benefits: [
    {
      title: "The most forgiving herb in the garden",
      body: "It tolerates wet soil, part shade and neglect, which makes it one of the few herbs that survives a damp corner where rosemary and lavender will not.",
    },
    {
      title: "Reliable pollinator traffic",
      body: "The late-summer flower spikes are heavily worked by bees and hoverflies at a point in the season when many other herbs have finished.",
    },
    {
      title: "Useful ground cover",
      body: "In a damp, awkward spot the spreading habit that makes it a nuisance in a vegetable bed becomes an advantage: it covers bare soil and suppresses weeds.",
    },
  ],
  cautions: [
    {
      title: "It does not stay where you put it",
      body: "Runners travel well beyond the planting hole within a single season. Pulling it out by hand rarely gets the whole runner, and each fragment regrows.",
    },
    {
      title: "It hybridises with other mints",
      body: "If you keep several mint types close together, seed from one will not come true to type, and the patch gradually becomes a mix.",
    },
    {
      title: "Rust and mildew in still air",
      body: "Dense, unpruned mint in a humid corner develops orange rust on the leaf undersides. Cut it back and open up the airflow.",
    },
  ],
  companions: [
    {
      plant: "Cabbage and other brassicas",
      why: "The strong scent is traditionally used to confuse cabbage-white butterflies. The effect is partial at best, but mint tolerates the same moisture the brassicas want.",
    },
    {
      plant: "Tomato",
      why: "Mint fills the damp, shaded ground under tomato plants that you would otherwise be weeding, and it tolerates the watering the tomatoes need.",
    },
  ],
  avoid: [
    {
      plant: "Anything in a small bed",
      why: "Mint is the bad companion more often than the good one. Its runners invade neighbouring root zones, and small beds give it nowhere to be contained.",
    },
    {
      plant: "Rosemary, lavender and thyme",
      why: "The Mediterranean herbs want sharp drainage and dry spells; mint wants constant moisture. One of the two will always be unhappy.",
    },
  ],
  traditional: {
    summary:
      "Mint tea is one of the most widely used traditional preparations, taken for digestion, bloating and congestion, and used as a cooling drink in hot weather.",
    reported: [
      "Concentrated mint oils are a very different dose from a cup of leaf tea and are not for infants or young children.",
      "Menthol can relax the valve at the top of the stomach and worsen reflux in people who already have it.",
      "People with gallstones or reflux are usually advised to be cautious with strong mint preparations.",
    ],
  },
  reviewedAt: "2026-10-31",
};
