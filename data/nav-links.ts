import { v4 as uuidv4 } from "uuid";
import { NavLink } from "@/types/nav-link.types";

export const navLinks: NavLink[] = [
  {
    id: uuidv4(),
    label: "Home",
    href: "/",
    external: false,
  },

  {
    id: uuidv4(),
    label: "Inspira",
    href: "/inspira",
    external: false,
  },

  {
    id: uuidv4(),
    label: "About",
    scrollToId: "about-section",
  },

  {
    id: uuidv4(),
    label: "Mission & Vision",
    scrollToId: "mission-vision-section",
  },

  {
    id: uuidv4(),
    label: "Features",
    scrollToId: "features-section",
  },

  {
    id: uuidv4(),
    label: "Benefits",
    scrollToId: "benefits-section",
  },

  {
    id: uuidv4(),
    label: "Developer",
    scrollToId: "developer-section",
  },

  {
    id: uuidv4(),
    label: "GitHub",
    href: "https://github.com/reginaldchand02/inspira",
    external: true,
  },
];
