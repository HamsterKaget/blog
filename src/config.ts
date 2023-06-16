import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "http://hamsterkaget.my.id",
  author: "Radja Aulia Al Ramdani",
  desc: "A personal blog page, written using Astro Framework.",
  title: "HamsterKaget",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 5,
};

export const LOCALE = ["id-ID"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/hamsterkaget",
    linkTitle: `Follow ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Facebook",
    href: "#",
    linkTitle: `${SITE.title} on Facebook`,
    active: false,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/hamsterkageet",
    linkTitle: `Follow ${SITE.title} on Instagram`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/radjaauliaalramdani/",
    linkTitle: `Follow Radja Aulia Al Ramdani a.k.a ${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:radja@hamsterkaget.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/hamsterkageet",
    linkTitle: `Follow ${SITE.title} on Twitter`,
    active: true,
  },
  {
    name: "Twitch",
    href: "#",
    linkTitle: `${SITE.title} on Twitch`,
    active: false,
  },
  {
    name: "YouTube",
    href: "https://youtube.com/c/HamsterkagetStudio",
    linkTitle: `Subscribe Hamster Kaget Studio on YouTube`,
    active: true,
  },
  {
    name: "WhatsApp",
    href: "#",
    linkTitle: `${SITE.title} on WhatsApp`,
    active: false,
  },
  {
    name: "Snapchat",
    href: "#",
    linkTitle: `${SITE.title} on Snapchat`,
    active: false,
  },
  {
    name: "Pinterest",
    href: "#",
    linkTitle: `${SITE.title} on Pinterest`,
    active: false,
  },
  {
    name: "TikTok",
    href: "#",
    linkTitle: `${SITE.title} on TikTok`,
    active: false,
  },
  {
    name: "CodePen",
    href: "#",
    linkTitle: `${SITE.title} on CodePen`,
    active: false,
  },
  {
    name: "Discord",
    href: "#",
    linkTitle: `${SITE.title} on Discord`,
    active: false,
  },
  {
    name: "GitLab",
    href: "#",
    linkTitle: `${SITE.title} on GitLab`,
    active: false,
  },
  {
    name: "Reddit",
    href: "#",
    linkTitle: `${SITE.title} on Reddit`,
    active: false,
  },
  {
    name: "Skype",
    href: "#",
    linkTitle: `${SITE.title} on Skype`,
    active: false,
  },
  {
    name: "Steam",
    href: "#",
    linkTitle: `${SITE.title} on Steam`,
    active: false,
  },
  {
    name: "Telegram",
    href: "#",
    linkTitle: `${SITE.title} on Telegram`,
    active: false,
  },
  {
    name: "Mastodon",
    href: "#",
    linkTitle: `${SITE.title} on Mastodon`,
    active: false,
  },
];
