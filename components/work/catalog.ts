export interface WorkItem {
  title: string;
  caption: string;
  href: string;
  icon?: string;
  date?: string;
  external?: boolean;
  todo?: boolean;
}

export const caseStudies: WorkItem[] = [
  {
    title: "Phantom",
    caption: "Product Engineer",
    date: "2022 ~ 2026",
    href: "/phantom",
    icon: "/logos/phantom.svg",
  },
  {
    title: "Proof of Beauty",
    caption: "Experimental web3 / NFT / token projects",
    date: "2021 ~ 2022",
    href: "/pob",
    icon: "/logos/pob.svg",
  },
  {
    title: "Matcha",
    caption: "Decentralized crypto trading for the masses",
    date: "Q1-2 2021",
    href: "/0x",
    icon: "/logos/matcha.png",
  },
  {
    title: "BitPay",
    caption: "Software Engineer & Lead Product Designer",
    date: "2018 ~ 2020",
    href: "/bitpay",
    icon: "https://bitpay.com/img/wallet-logos/bitpay-wallet.svg",
  },
  {
    title: "BitPay Extension",
    caption: "Convert crypto to prepaid cards instantly & anonymously",
    date: "2020",
    href: "/bitpay/extension",
    icon: "/logos/bitpay-ext.svg",
  },
  {
    title: "BitPay Invoice: V4 System",
    caption: "Flagship payment gateway powering the network",
    date: "2019 ~ 2020",
    href: "/bitpay/invoice",
    icon: "https://bitpay.com/img/wallet-logos/bitpay-wallet.svg",
  },
  {
    title: "BitPay ID: V2 System",
    caption: "Consumer onboarding + KYC / AML",
    date: "2019",
    href: "/bitpay/id/v2",
    icon: "/logos/bitpay-light-gradient.svg",
  },
  {
    title: "Appsketiers",
    caption: "Director of Development & UX",
    date: "2017 ~ 2018",
    href: "/posts/appsketiers",
    icon: "/logos/appsketiers.png",
  },
  {
    title: "Photography",
    caption: "Experimenting with digital photography",
    href: "/projects/photography",
    icon: "/logos/instagram.svg",
  },
  {
    title: "Cycle 3D",
    caption: "Open source 3D printing project to recycle plastics",
    date: "2015 ~ 2016",
    href: "/projects/cycle-3d",
    icon: "/logos/cycle3d.svg",
  },
  {
    title: "Drexel ExCITe Center",
    caption: "Music & Entertainment Technology Lab",
    date: "Summer 2015",
    href: "/posts/drexel",
    icon: "/logos/drexel.png",
  },
  {
    title: "Lockheed Martin Space Systems",
    caption: "Engineering Department",
    date: "Summer 2015",
    href: "/posts/lockheed",
    icon: "/logos/lockheed-martin.svg",
  },
];

const selectedTitles = new Set([
  "Phantom",
  "Proof of Beauty",
  "Matcha",
  "BitPay Extension",
  "BitPay Invoice: V4 System",
  "BitPay ID: V2 System",
]);

export const selectedWork = caseStudies.filter((item) =>
  selectedTitles.has(item.title),
);

export const projects: WorkItem[] = [
  {
    title: "EPICS // MERGE",
    caption: "Advanced on-chain gen-art & VFX",
    date: "Summer 2022",
    href: "https://opensea.io/collection/epics-merge?search[numericTraits][0][name]=Spell%20Strength&search[numericTraits][0][ranges][0][min]=1&search[numericTraits][0][ranges][0][max]=10&search[sortAscending]=false&search[sortBy]=VIEWER_COUNT",
    icon: "/imgs/pob/merge-vfx-1.svg",
    external: true,
  },
  {
    title: "Absolute Brain F**k",
    caption: "On-chain rendering CodePen",
    date: "Q2 2022",
    href: "https://x.com/abf_dev",
    icon: "https://pbs.twimg.com/profile_images/1515494084323987464/W8IIwY8m_400x400.png",
    external: true,
  },
  {
    title: "HASH V3",
    caption: "1 ETH TX = 1 NFT / On-chain Wiki",
    date: "Q1 2022",
    href: "https://hash.pob.studio/",
    icon: "https://hash.pob.studio/assets/logos/hash.png",
    external: true,
  },
  {
    title: "SHOP",
    caption: "web3 / on-chain ecommerce",
    date: "Q4 2021",
    href: "https://shop.pob.studio/",
    icon: "/logos/pob.svg",
    external: true,
  },
  {
    title: "Product Design",
    caption: "Some design highlights on Dribbble",
    href: "https://dribbble.com/ash-bhimasani",
    icon: "/logos/dribbble.svg",
    external: true,
  },
  {
    title: "Open Source",
    caption: "My public contributions on GitHub",
    href: "https://github.com/16abhimasani",
    icon: "/logos/github.svg",
    external: true,
  },
];

export const openRoles: WorkItem[] = [
  {
    title: "Polymarket",
    caption: "Product",
    date: "2026 ~",
    href: "https://polymarket.com/",
    icon: "/logos/polymarket.svg",
    external: true,
    todo: true,
  },
  {
    title: "Coinbase",
    caption: "Software Engineer",
    date: "Summer 2021",
    href: "https://www.coinbase.com/prime/custody",
    icon: "https://bitpay.com/img/wallet-logos/coinbase.svg",
    external: true,
    todo: true,
  },
];
