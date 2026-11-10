/**
 * Portfolio content — the only file to edit when adding work or writing.
 *
 * A project with `featured: true` is listed under Selected work on the home
 * page. Every project is listed on /portfolio, grouped by `group`.
 * Append an essay to `writing` and it shows on both pages.
 *
 * Copy below is taken from the existing site or the published résumé.
 * Do not add employers, dates, metrics, or quotes that are not already there.
 *
 * TODO(ash): Name and URL for the current work ("composable exchange
 *   infrastructure" / "onchain money-movement SDK"). Nothing public to link.
 * TODO(ash): Polymarket is "2026– / Product" on the timeline, and the brief
 *   for this redesign calls it previous. Confirm the end date and a one-line
 *   description. No case study exists.
 * TODO(ash): 0x / Matcha dates disagree. Timeline says Spring 2021. Résumé
 *   says 2020–2021. Portfolio project date says Q1–2 2021. Not reconciled.
 * TODO(ash): Phantom's portfolio card used to say 2023. Timeline says
 *   2022–2026. The Phantom page says Dec 2022 – April 2026. Shown as the
 *   timeline plus the page's range.
 * TODO(ash): Which email is primary? Résumé uses ash@bhimasani.com. The
 *   previous footer used 16abhimasani@gmail.com. Both are linked.
 * TODO(ash): Proof of Beauty role. Timeline had no title. Résumé says
 *   Cofounder. The timeline caption is kept as the summary.
 */

export type Entry = {
  slug: string;
  title: string;
  /** Role, or the original caption when that was the subtitle. */
  detail?: string;
  /** One existing sentence. Omit rather than invent. */
  summary?: string;
  period?: string;
  href: string;
  external?: boolean;
};

export type Project = Entry & {
  group: "case-study" | "product" | "studio" | "earlier" | "other";
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "phantom",
    title: "Phantom",
    detail: "Product Engineer",
    summary: "Money Movement and Identity & Onboarding, Dec 2022 – April 2026.",
    period: "2022–2026",
    href: "/phantom",
    group: "case-study",
    featured: true,
  },
  {
    slug: "bitpay",
    title: "BitPay",
    detail: "Software Engineer & Lead Product Designer",
    summary:
      "A global cryptocurrency payment processor, mobile wallet, and debit card.",
    period: "2018–2020",
    href: "/bitpay",
    group: "case-study",
    featured: true,
  },
  {
    slug: "matcha",
    title: "Matcha",
    detail: "Software Engineer",
    summary: "Decentralized crypto trading for the masses",
    period: "Q1–2 2021",
    href: "/0x",
    group: "case-study",
    featured: true,
  },
  {
    slug: "proof-of-beauty",
    title: "Proof of Beauty",
    detail: "Cofounder",
    summary: "Experimental web3 / NFT / token projects",
    period: "2021–2022",
    href: "/pob",
    group: "case-study",
    featured: true,
  },
  {
    slug: "bitpay-extension",
    title: "BitPay Extension",
    summary: "Convert crypto to prepaid cards instantly & anonymously",
    period: "2020",
    href: "/bitpay/extension",
    group: "product",
  },
  {
    slug: "bitpay-invoice",
    title: "BitPay Invoice: V4 System",
    summary: "Flagship payment gateway powering the network",
    period: "2019–2020",
    href: "/bitpay/invoice",
    group: "product",
  },
  {
    slug: "bitpay-id",
    title: "BitPay ID: V2 System",
    summary: "Consumer onboarding + KYC / AML",
    period: "2019",
    href: "/bitpay/id/v2",
    group: "product",
  },
  {
    slug: "epics-merge",
    title: "EPICS // MERGE",
    summary: "Advanced on-chain gen-art & VFX",
    period: "Summer 2022",
    href: "https://opensea.io/collection/epics-merge?search[numericTraits][0][name]=Spell%20Strength&search[numericTraits][0][ranges][0][min]=1&search[numericTraits][0][ranges][0][max]=10&search[sortAscending]=false&search[sortBy]=VIEWER_COUNT",
    external: true,
    group: "studio",
  },
  {
    slug: "abf",
    title: "Absolute Brain F**k",
    summary: "On-chain rendering CodePen",
    period: "Q2 2022",
    href: "https://x.com/abf_dev",
    external: true,
    group: "studio",
  },
  {
    slug: "hash-v3",
    title: "HASH V3",
    summary: "1 ETH TX = 1 NFT / On-chain Wiki",
    period: "Q1 2022",
    href: "https://hash.pob.studio/",
    external: true,
    group: "studio",
  },
  {
    slug: "shop",
    title: "SHOP",
    summary: "web3 / on-chain ecommerce",
    period: "Q4 2021",
    href: "https://shop.pob.studio/",
    external: true,
    group: "studio",
  },
  {
    slug: "photography",
    title: "Photography",
    summary: "Experimenting with digital photography",
    href: "/projects/photography",
    group: "earlier",
  },
  {
    slug: "cycle-3d",
    title: "Cycle 3D",
    summary: "Open source 3D printing project to recycle plastics",
    period: "2015–2016",
    href: "/projects/cycle-3d",
    group: "earlier",
  },
  {
    slug: "dribbble",
    title: "Product Design",
    summary: "Some design highlights on Dribbble",
    href: "https://dribbble.com/ash-bhimasani",
    external: true,
    group: "other",
  },
  {
    slug: "github",
    title: "Open Source",
    summary: "My public contributions on GitHub",
    href: "https://github.com/16abhimasani",
    external: true,
    group: "other",
  },
];

export const projectGroups: { id: Project["group"]; title: string }[] = [
  { id: "case-study", title: "Case studies" },
  { id: "product", title: "Product" },
  { id: "studio", title: "Studio" },
  { id: "earlier", title: "Earlier" },
  { id: "other", title: "Elsewhere" },
];

export const experience: Entry[] = [
  {
    slug: "polymarket",
    title: "Polymarket",
    detail: "Product",
    period: "2026–",
    href: "https://polymarket.com/",
    external: true,
  },
  {
    slug: "phantom",
    title: "Phantom",
    detail: "Product Engineer",
    period: "2022–2026",
    href: "/phantom",
  },
  {
    slug: "proof-of-beauty",
    title: "Proof of Beauty",
    detail: "Experimental web3 / NFT / token projects",
    period: "2021–2022",
    href: "/pob",
  },
  {
    slug: "coinbase",
    title: "Coinbase",
    detail: "Software Engineer",
    period: "Summer 2021",
    href: "https://www.coinbase.com/prime/custody",
    external: true,
  },
  {
    slug: "0x",
    title: "0x Labs",
    detail: "Software Engineer",
    period: "Spring 2021",
    href: "/0x",
  },
  {
    slug: "bitpay",
    title: "BitPay",
    detail: "Software Engineer & Lead Product Designer",
    period: "2018–2020",
    href: "/bitpay",
  },
  {
    slug: "appsketiers",
    title: "Appsketiers",
    detail: "Director of Development & UX",
    period: "2017–2018",
    href: "/posts/appsketiers",
  },
  {
    slug: "gatech",
    title: "Georgia Institute of Technology",
    detail: "Computer Science: Artificial Intelligence & HCI",
    period: "2016–2021",
    href: "https://www.gatech.edu/about/rankings#:~:text=Computer%20Science%20ranks%20%231%20by,Guardian's%20QS%20World%20University%20Rankings.",
    external: true,
  },
  {
    slug: "drexel",
    title: "Drexel ExCITe Center",
    detail: "Music & Entertainment Technology Lab",
    period: "Summer 2015",
    href: "/posts/drexel",
  },
  {
    slug: "lockheed",
    title: "Lockheed Martin Space Systems",
    detail: "Engineering Department",
    period: "Summer 2015",
    href: "/posts/lockheed",
  },
  {
    slug: "stem",
    title: "Downingtown STEM Academy",
    detail: "IB Diploma: Engineering Pathway",
    period: "2012–2016",
    href: "https://en.wikipedia.org/wiki/Downingtown_STEM_Academy",
    external: true,
  },
];

export const writing: Entry[] = [
  {
    slug: "appsketiers",
    title: "Appsketiers",
    summary:
      "Director of Development & UX at a boutique mobile shop, starting sophomore year at Georgia Tech.",
    period: "2017–2018",
    href: "/posts/appsketiers",
  },
  {
    slug: "drexel",
    title: "Drexel ExCITe Center",
    summary: "Summer internship in the Music & Entertainment Technology Lab.",
    period: "Nov 12, 2015",
    href: "/posts/drexel",
  },
  {
    slug: "lockheed",
    title: "Lockheed Martin",
    summary: "Summer internship with Space Systems in King of Prussia.",
    period: "Nov 15, 2015",
    href: "/posts/lockheed",
  },
];

/** Handles from the previous intro line. Same destinations. */
export const profiles: { label: string; href: string }[] = [
  { label: "@polymarket", href: "https://twitter.com/Polymarket" },
  { label: "@phantom", href: "https://twitter.com/phantom" },
  { label: "@prrfbeauty", href: "https://twitter.com/prrfbeauty" },
  { label: "@coinbase", href: "https://twitter.com/coinbase" },
  { label: "@0xProject", href: "https://twitter.com/0xProject" },
  { label: "@bitpay", href: "https://twitter.com/BitPay" },
];

export const contacts: { label: string; href: string }[] = [
  { label: "ash@bhimasani.com", href: "mailto:ash@bhimasani.com" },
  { label: "16abhimasani@gmail.com", href: "mailto:16abhimasani@gmail.com" },
  { label: "Calendly", href: "https://calendly.com/ash-bhimasani/30min" },
  { label: "GitHub", href: "https://github.com/16abhimasani" },
  { label: "Twitter", href: "https://twitter.com/ash_bhimasani" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ash-bhimasani/" },
  { label: "Resume", href: "/Ash_Bhimasani_Resume_2026_HTML.pdf" },
];

export const featuredProjects = projects.filter((project) => project.featured);

export const otherProjects = projects.filter(
  (project) => project.group === "earlier" || project.group === "other",
);

export function projectsIn(group: Project["group"]): Project[] {
  return projects.filter((project) => project.group === group);
}
