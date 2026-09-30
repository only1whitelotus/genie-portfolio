export type Discipline = "Design" | "Code";
export type Project = {
  slug: string;
  name: string;
  line: string;
  discipline: Discipline;
  tags: string[];
  cover: string;
  coverAlt: string;
  color: string;
  ink: string;
  role: string;
  tools: string;
  introduction: string;
  challenge: string;
  idea: string;
  chapters: {
    title: string;
    text: string;
    images: { src: string; alt: string }[];
  }[];
  deliverables: string[];
};

export const projects: Project[] = [
  {
    slug: "ecoloop",
    name: "Ecoloop",
    line: "A better loop starts with a better identity.",
    discipline: "Design",
    tags: ["Brand identity", "Product design"],
    cover: "ecoloop-main.png",
    coverAlt: "Ecoloop identity with lime green, teal and cyan applications",
    color: "#D4EB65",
    ink: "#153F32",
    role: "Lead Product Designer & Brand Architect",
    tools: "Figma · Adobe Creative Cloud · Prototyping",
    introduction:
      "An identity and product concept that makes recycling feel like something worth coming back to. One visual language, from a phone screen to the collection point.",
    challenge:
      "Recycling asks people to change a habit. The brief was to make that exchange clear: what to recycle, where to take it, and what comes back to you.",
    idea: "Build the identity around the loop itself. A continuous form connects the environmental purpose to an approachable reward-led product experience.",
    chapters: [
      {
        title: "A mark built to keep moving.",
        text: "The symbol gives the system a simple anchor. Its geometry carries through the wordmark, visual rhythm and supporting brand elements.",
        images: [
          {
            src: "ecoloop-logo-grid.png",
            alt: "Ecoloop logo construction and geometric grid",
          },
          {
            src: "ecoloop-logo-final.png",
            alt: "Final Ecoloop logo and wordmark",
          },
        ],
      },
      {
        title: "From identity to everyday encounters.",
        text: "The palette needs to be recognizable at street scale and useful at interface scale. Green establishes the category; a brighter supporting palette brings energy to the applications.",
        images: [
          {
            src: "ecoloop-billboard.png",
            alt: "Ecoloop outdoor billboard application",
          },
          { src: "ecoloop-bins.png", alt: "Ecoloop branded recycling bins" },
          { src: "ecoloop-id.png", alt: "Ecoloop identity card application" },
          { src: "ecoloop-polo.png", alt: "Ecoloop branded polo shirt" },
        ],
      },
      {
        title: "One system, different surfaces.",
        text: "The work extends beyond a standalone logo into a coordinated set of brand and product applications. These explorations show how the same identity can stay recognizable in different contexts.",
        images: [
          {
            src: "ecoloop-extra-1.png",
            alt: "Ecoloop visual system application",
          },
          {
            src: "ecoloop-extra-2.png",
            alt: "Additional Ecoloop brand and product exploration",
          },
        ],
      },
    ],
    deliverables: [
      "Visual identity system",
      "Logo construction",
      "Brand applications",
      "Product concept",
    ],
  },
  {
    slug: "fbl",
    name: "Fantasy BUSA League",
    line: "The game beyond the game.",
    discipline: "Code",
    tags: ["Product design", "Full-stack development"],
    cover: "thumbnails/fbl.png",
    coverAlt:
      "Fantasy BUSA League landing page with football player illustrations and a purple interface",
    color: "#D3C5F5",
    ink: "#272039",
    role: "Lead Software Designer & Developer",
    tools: "React · Tailwind CSS · Firebase · Cloud Messaging",
    introduction:
      "A fantasy football platform built around the campus game. Squad building, transfers and match information meet in a single product, supported by tools for the people running it.",
    challenge:
      "A fantasy game has two different audiences: managers following their teams and administrators keeping the competition accurate. Both need a clear way through a dense set of information.",
    idea: "Put the next decision at the center of each screen. Keep player information, squad management and competition updates connected, while giving administrative work its own space.",
    chapters: [
      {
        title: "Make the squad the starting point.",
        text: "The manager experience brings team information and player detail into the same visual system. Transfers have their own dedicated surface, with the surrounding context kept close.",
        images: [
          {
            src: "Userhome.jpeg",
            alt: "Fantasy BUSA League manager home screen",
          },
          {
            src: "Transfertab.jpeg",
            alt: "Fantasy BUSA League transfer management screen",
          },
          {
            src: "Playermodal.jpeg",
            alt: "Fantasy BUSA League player detail panel",
          },
        ],
      },
      {
        title: "Give the competition a home.",
        text: "News and statistics extend the experience beyond picking a team. The information architecture separates browsing the competition from taking action on a squad.",
        images: [
          {
            src: "Statscenter.jpeg",
            alt: "Fantasy BUSA League statistics center",
          },
          {
            src: "News.jpeg",
            alt: "Fantasy BUSA League competition news screen",
          },
        ],
      },
      {
        title: "Design the work behind the game.",
        text: "An administrative interface supports the operational side of the platform. Role-specific screens carry the same visual language without forcing every user through the same workflow.",
        images: [
          {
            src: "Adminhome.jpeg",
            alt: "Fantasy BUSA League administrator dashboard",
          },
          {
            src: "Adminsettings.jpeg",
            alt: "Fantasy BUSA League administrator settings",
          },
        ],
      },
    ],
    deliverables: [
      "Player and squad interfaces",
      "Transfer workflow",
      "Statistics and news",
      "Administration interface",
    ],
  },
  {
    slug: "rex",
    name: "Rex Sartorial",
    line: "An identity with a sense of permanence.",
    discipline: "Design",
    tags: ["Brand strategy", "Visual identity"],
    cover: "rex/hero-signage.png",
    coverAlt: "Metallic Rex Sartorial monogram mounted on a dark wall",
    color: "#CDD1D5",
    ink: "#22272D",
    role: "Brand Designer & Architect",
    tools: "Adobe Illustrator · Photoshop",
    introduction:
      "A visual identity for a business spanning real estate and corporate holdings. The work brings a precise monogram, restrained typography and material applications into one cohesive system.",
    challenge:
      "Create a recognizable identity that can feel assured across both corporate communications and physical environments.",
    idea: "Start with a strong, constructed monogram. Give it space, a disciplined palette and a supporting pattern that can scale across the brand.",
    chapters: [
      {
        title: "Precision at the center.",
        text: "The construction studies establish the proportions of the mark. A repeatable geometry gives the identity consistency as it moves from symbol to pattern.",
        images: [
          {
            src: "rex/grid-blueprint.png",
            alt: "Rex Sartorial monogram construction blueprint",
          },
          {
            src: "rex/grid-elements.png",
            alt: "Geometric components of the Rex Sartorial mark",
          },
        ],
      },
      {
        title: "A system with room to breathe.",
        text: "The monogram acts as both a signature and a structural element. Supporting applications balance scale, texture and clear hierarchy.",
        images: [
          {
            src: "rex/mockup-1.png",
            alt: "Collection of Rex Sartorial brand applications",
          },
          {
            src: "rex/monogram-pattern.png",
            alt: "Repeat pattern made from the Rex Sartorial monogram",
          },
        ],
      },
      {
        title: "Made to live in the real world.",
        text: "The identity is considered through physical touchpoints as well as flat artwork. Material, placement and restraint help the same mark work at different scales.",
        images: [
          {
            src: "rex/mockup-3.png",
            alt: "Rex Sartorial physical brand application",
          },
          {
            src: "rex/mockup-5.png",
            alt: "Rex Sartorial identity applied to collateral",
          },
        ],
      },
    ],
    deliverables: [
      "Brand direction",
      "Monogram and wordmark",
      "Pattern system",
      "Corporate collateral",
    ],
  },
  {
    slug: "foodify",
    name: "Foodify",
    line: "Good food. A very good first impression.",
    discipline: "Design",
    tags: ["Brand identity", "Digital experience"],
    cover: "foodify/1.png",
    coverAlt:
      "Foodify brand presentation with orange packaging, clothing and phone applications",
    color: "#F5A66F",
    ink: "#342014",
    role: "Brand Architect & UI/UX Designer",
    tools: "Figma · Adobe Illustrator · Photoshop",
    introduction:
      "A bright, appetite-led identity and digital experience for a food delivery concept. Built to connect the first tap with the bag that arrives at the door.",
    challenge:
      "Give a delivery brand an instantly recognizable character, then carry it consistently across small screens, packaging and everyday touchpoints.",
    idea: "Make orange the unmistakable signature. Pair that energy with a practical visual system that can organize the product experience and hold its own on physical packaging.",
    chapters: [
      {
        title: "An identity with appetite.",
        text: "The brand language combines a direct wordmark, bold color and playful applications. The system has enough character to be recognized even when the logo is small.",
        images: [
          { src: "foodify/2.png", alt: "Foodify brand identity exploration" },
          {
            src: "foodify/3.png",
            alt: "Foodify orange visual identity application",
          },
        ],
      },
      {
        title: "From the screen to the doorstep.",
        text: "The digital and physical experiences are treated as parts of the same journey. Interface and packaging share the same visual cues.",
        images: [
          {
            src: "foodify/6.png",
            alt: "Foodify mobile application shown on a phone",
          },
          { src: "foodify/10.png", alt: "Foodify branded delivery bag" },
        ],
      },
      {
        title: "Built to be seen out there.",
        text: "A series of brand applications tests the identity beyond a logo presentation: on objects, in use, and at different scales.",
        images: [
          { src: "foodify/7.png", alt: "Foodify merchandise application" },
          { src: "foodify/9.png", alt: "Foodify brand touchpoint" },
        ],
      },
    ],
    deliverables: [
      "Visual identity",
      "Mobile interface concept",
      "Packaging",
      "Merchandise",
    ],
  },
  {
    slug: "chop-central",
    name: "Chop Central",
    line: "From the counter to the kitchen.",
    discipline: "Code",
    tags: ["Product design", "Restaurant software"],
    cover: "thumbnails/chop-central.png",
    coverAlt: "Chop Central restaurant point of sale interface",
    color: "#E8BE79",
    ink: "#3A2B1D",
    role: "Product Designer & Developer",
    tools: "React · TypeScript · Tailwind CSS · Firebase · PWA",
    introduction:
      "A restaurant management system that connects the point of sale, kitchen display and reporting. Designed around the handoff between the person taking an order and the team preparing it.",
    challenge:
      "Ordering and preparation can become separate, disconnected workflows. A clear record needs to connect the transaction, the receipt and the work reaching the kitchen.",
    idea: "Treat an order as one journey. Payment creates a record; the receipt carries it forward; items requiring preparation reach the kitchen queue.",
    chapters: [
      {
        title: "One order, a clear path.",
        text: "The point of sale is the start of the workflow. The interface brings order entry into a structured flow that connects to receipts and downstream preparation.",
        images: [
          { src: "c1.png", alt: "Chop Central order and point of sale screen" },
          { src: "c2.png", alt: "Chop Central transaction workflow screen" },
        ],
      },
      {
        title: "Keep the kitchen focused.",
        text: "Items that require preparation are routed to the kitchen display; ready-made items do not need to add noise to that queue. The product separates operational tasks while retaining a shared order record.",
        images: [
          {
            src: "c3.png",
            alt: "Chop Central restaurant operations interface",
          },
          { src: "c4.png", alt: "Chop Central connected management screen" },
        ],
      },
      {
        title: "Make the operation visible.",
        text: "Management screens bring the operational data back into view. The responsive application is designed for use across tablets and mobile devices.",
        images: [
          { src: "c5.png", alt: "Chop Central reporting interface" },
          { src: "c6.png", alt: "Chop Central management dashboard" },
          { src: "c7.png", alt: "Chop Central application detail" },
        ],
      },
    ],
    deliverables: [
      "Point of sale",
      "Receipt workflow",
      "Kitchen display",
      "Reporting interfaces",
    ],
  },
];

export type Film = {
  slug: string;
  title: string;
  client: string;
  category: string;
  poster: string;
  description: string;
  credits: { label: string; value: string }[];
  file?: string;
  external?: string;
  legacyId: string;
};
export const films: Film[] = [
  {
    slug: "reckless-era",
    title: "An attitude, in motion.",
    client: "Reckless Era",
    category: "Collection launch",
    poster: "thumbnails/reck1.jpeg",
    file: "reckless-era",
    legacyId: "reckless-era-collection-launch",
    description:
      "A collection launch trailer built around the attitude of Reckless Era. Fashion, personality and a restless edit set the tone.",
    credits: [{ label: "Direction & edit", value: "Akinola Akinjide" }],
  },
  {
    slug: "reckless-launch-reel",
    title: "What it means to be reckless.",
    client: "Reckless Era",
    category: "Brand film",
    poster: "thumbnails/reck2.jpeg",
    external: "https://www.instagram.com/reel/DDU6I57NMIG/",
    legacyId: "reckless-era-launch-reel",
    description:
      "A short film exploring the boldness and confidence behind the brand.",
    credits: [
      { label: "Camera", value: "Techboy" },
      { label: "Direction & edit", value: "Akinola Akinjide" },
    ],
  },
  {
    slug: "reckless-personalities",
    title: "Wear your own personality.",
    client: "Reckless Era",
    category: "Fashion film",
    poster: "thumbnails/reck3.jpeg",
    external: "https://www.instagram.com/reel/DGQvlGzNw4-/",
    legacyId: "reckless-era-reel-02",
    description:
      "A playful collection of the different personalities that wear Reckless Era.",
    credits: [
      { label: "Camera", value: "Techboy" },
      { label: "Direction & edit", value: "Akinola Akinjide" },
    ],
  },
  {
    slug: "channel-opener",
    title: "Set the tone. Then roll.",
    client: "Channel opener",
    category: "Motion design",
    poster: "thumbnails/yte.jpeg",
    file: "channel-opener",
    legacyId: "channel-opener-animation",
    description:
      "A short animated opener that sets a channel’s energy and visual personality from its first frame.",
    credits: [{ label: "Motion design", value: "Akinola Akinjide" }],
  },
  {
    slug: "ciddy-collection",
    title: "A collection comes to life.",
    client: "Ciddy Fashion House",
    category: "Collection launch",
    poster: "thumbnails/ciddy.jpeg",
    file: "ciddy-collection",
    legacyId: "ciddy-collection-launch-film",
    description:
      "A short social cut for the Ciddy collection, balancing the pace of a launch with the elegance of the clothes.",
    credits: [{ label: "Brand", value: "Ciddy Fashion House" }],
  },
  {
    slug: "ciddy-launch",
    title: "Quiet confidence. On film.",
    client: "Ciddy Fashion House",
    category: "Fashion film",
    poster: "thumbnails/ciddy2.jpeg",
    external: "https://www.instagram.com/reel/C0a5dmbISmW/",
    legacyId: "ciddy-instagram-reel",
    description:
      "A cinematic launch film with a clean, measured visual direction.",
    credits: [
      { label: "Camera", value: "Techboy" },
      { label: "Direction", value: "Akinola Akinjide" },
      { label: "Edit", value: "Uthman Olapade" },
    ],
  },
  {
    slug: "fruision",
    title: "A little flavor, frame by frame.",
    client: "Fruision",
    category: "Product visualizer",
    poster: "thumbnails/fruison.jpeg",
    file: "fruision",
    legacyId: "fruision-product-visualizer",
    description:
      "A stylized product visualizer for a fruit drink, developed as part of a collaborative series exploring its flavors.",
    credits: [
      {
        label: "Creative collaboration",
        value: "Uthman Olapade & Akinola Akinjide",
      },
    ],
  },
  {
    slug: "busec-spotlight",
    title: "Time for the spotlight.",
    client: "BUSEC Spotlight Awards",
    category: "Announcement film",
    poster: "thumbnails/busec.jpeg",
    external: "https://www.instagram.com/reel/C6XJEyroJ74/",
    legacyId: "busec-spotlight-awards-announcement",
    description:
      "An announcement film built to bring clarity and excitement to the Spotlight Awards.",
    credits: [
      { label: "Camera & direction", value: "Akinola Akinjide" },
      { label: "Edit", value: "Uthman Olapade & Daniel Adekoya" },
    ],
  },
];

export const experiments = [
  {
    slug: "type-play",
    number: "01",
    name: "Type / play",
    discipline: "Typography",
    description:
      "Weight. Space. Scale. Find out how much a single word can say.",
  },
  {
    slug: "motion-study",
    number: "02",
    name: "In good time",
    discipline: "Motion",
    description:
      "Same journey, different feeling. Compose the movement and press play.",
  },
  {
    slug: "living-layout",
    number: "03",
    name: "Room to move",
    discipline: "Interaction",
    description:
      "One collection. Several ways to see it. Rearrange the studio wall.",
  },
];

export const contact = {
  email: "only1whitelotus@gmail.com",
  name: "Akinola Akinjide",
};
export const socialLinks = [
  { label: "Behance", href: "https://www.behance.net/whitelotus9" },
  { label: "Instagram", href: "https://www.instagram.com/creativegenie1/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/only1whitelotus" },
  { label: "GitHub", href: "https://github.com/only1whitelotus" },
];
