import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://curadanatureza.receitagratis.com/", 
  author: "Anderson Kochanski",
  profile: "https://receitagratis.com/", 
  desc: "Receita Grátis: Mais de 15 mil receitas, dicas de culinária e o especial Curada Natureza para sua saúde.",
  title: "Receita Grátis",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 10, 
  scheduledPostMargin: 15 * 60 * 1000, 
  showArchives: true,
  showBackButton: true, 
  editPost: {
    enabled: false, 
    text: "Sugerir alteração",
    url: "https://github.com/reportertb2015-blip/portal-receitas/edit/main/",
  },
} as const;

export const LOCALE = {
  mainOutdated: "pt-BR", 
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/reportertb2015-blip/portal-receitas",
    linkTitle: `Repositório do Anderson`,
    active: true,
  },
];

// ESTA É A PARTE QUE FAZ O MENU APARECER NO ASTROPAPER:
export const navLinks = [
  {
    href: "/posts",
    linkText: "Receitas",
  },
  {
    href: "/categories",
    linkText: "Categorias",
  },
  {
    href: "/tags",
    linkText: "Cura Natureza",
  },
  {
    href: "/about",
    linkText: "Sobre",
  },
  {
    href: "/search",
    linkText: "Pesquisar",
  },
];
