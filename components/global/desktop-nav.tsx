"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { navLinks } from "@/data/nav-links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Link as ScrollLink } from "react-scroll";

export function DesktopNav() {
  const pathname = usePathname();

  return (
    <NavigationMenu
      className={pathname === "/" ? "hidden lg:flex" : "hidden sm:flex"}
    >
      <NavigationMenuList>
        {navLinks.map((link) => {
          if ("href" in link) {
            return (
              <NavigationMenuItem key={link.id}>
                <NavigationMenuLink
                  asChild
                  className={
                    pathname === link.href
                      ? "text-inspira-ai-accent"
                      : "active:text-inspira-spark-highlight"
                  }
                >
                  <Link
                    href={link.href}
                    target={link.external ? "_blank" : "_self"}
                    rel={link.external ? "noopener noreferrer" : undefined}
                  >
                    {link.label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            );
          } else if ("scrollToId" in link) {
            if (pathname === "/") {
              return (
                <NavigationMenuItem key={link.id}>
                  <NavigationMenuLink
                    asChild
                    className="cursor-pointer active:text-inspira-spark-highlight transition-colors"
                  >
                    <ScrollLink
                      duration={500}
                      to={link.scrollToId}
                      smooth
                      spy={true}
                      offset={-200}
                    >
                      {link.label}
                    </ScrollLink>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              );
            }
          }
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
