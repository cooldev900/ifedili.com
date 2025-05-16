import { IProject } from '../models';

export default {
  "Omni Automotives": {
    id: "Omni Automotives",
    cover_image: "projects/Omni Automotives/cover.png",
    images: [
      "projects/Omni Automotives/1.png",
      "projects/Omni Automotives/2.png",
    ],
    name: "Omni Automotives",
    about: [
      "Providing Mobile ADAS Solutions and Diagnostics For The Collision and Auto Repair Industry."
    ],
    short_desc: "A Mobile ADAS Solutions and Diagnostics For The Collision and Auto Repair Industry.",
    platform: "Web",
    role: "Developer",
    category: "Project",
    isFeatured: true,
    links: {
      git: { link: "https://github.com/cooldev900/vue-storefront-ecommerce" },
      npm: { link: "https://omniautotech.com/" },
    },
    tools: ["js", "ejs"],
    year: 2020,
    isVisible: true
  },
  "louverture-finance": {
    id: "louverture-finance",
    cover_image: "projects/louverture-finance/cover.png",
    images: [
      "projects/louverture-finance/1.png",
      "projects/louverture-finance/2.png",
      "projects/louverture-finance/3.png",
      "projects/louverture-finance/4.png",
    ],
    name: "Louverture Finance",
    about: [
      "The gateway to defi. Premier compounding protocol that rewards you to own NFTs",
    ],
    short_desc: "The gateway to defi. Premier compounding protocol that rewards you to own NFTs",
    platform: "Web",
    role: "Developer",
    category: "Project",
    isFeatured: true,
    links: {
      and: { link: "https://www.louverture.finance/" },
    },
    tools: ["ionic", "ts", "fbase"],
    year: 2021,
    isVisible: true
  },
  "Hector Network": {
    id: "louverture-finance",
    cover_image: "projects/hector-network/cover.png",
    images: [
      "projects/hector-network/1.png",
      "projects/hector-network/2.png"
    ],
    name: "Hector Network",
    about: [
      "Hector Network is a decentralized exchange and DeFi protocol on the Fantom Opera Network.",
    ],
    short_desc: "Hector Network is a decentralized exchange and DeFi protocol on the Fantom Opera Network.",
    platform: "Web",
    role: "Developer",
    category: "Project",
    isFeatured: false,
    links: {
      and: { link: "https://hector-dao.vercel.app/" },
    },
    tools: ["sol", "ex", "nod"],
    year: 2021,
    isVisible: true
  },
  "spwan-world": {
    id: "spwan-world",
    cover_image: "projects/spwan-world/cover.png",
    images: [
      "projects/spwan-world/1.png",
      "projects/spwan-world/2.png",
      "projects/spwan-world/3.png"
    ],
    name: "Spwan World",
    about: [
      "Spwan is a NFT Marketplace for the SPWAN game.",
    ],
    short_desc: "Spwan is a NFT Marketplace.",
    platform: "Web",
    role: "Developer",
    category: "Project",
    isFeatured: false,
    links: {
    },
    tools: ["sol", "ex", "nod"],
    year: 2021,
    isVisible: true
  },
} as { [id: string]: IProject }