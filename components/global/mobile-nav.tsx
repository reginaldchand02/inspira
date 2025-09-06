"use client";

import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/nav-links";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import { LucideMenu } from "lucide-react";

export function MobileNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className={pathname === "/" ? "lg:hidden" : "sm:hidden"}>
        <LucideMenu
          size={20}
          className="cursor-pointer active:text-inspira-spark-highlight transition-colors"
        />
      </SheetTrigger>
      <SheetContent
        className={`overflow-y-auto pb-5 ${
          pathname === "/" ? "lg:hidden" : "sm:hidden"
        }`}
      >
        <SheetHeader>
          <SheetTitle>Navigation Menu</SheetTitle>
          <SheetDescription>
            Use this menu to navigate through the site.
          </SheetDescription>
        </SheetHeader>

        <nav className="px-4">
          <ul className="space-y-5">
            {navLinks.map((link) => {
              if ("href" in link) {
                return (
                  <li key={link.id}>
                    <Link
                      href={link.href}
                      target={link.external ? "_blank" : "_self"}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className={
                        pathname === link.href
                          ? "text-inspira-ai-accent"
                          : "active:text-inspira-spark-highlight"
                      }
                      onClick={handleClose}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              } else if ("scrollToId" in link) {
                if (pathname === "/") {
                  return (
                    <li key={link.id}>
                      <ScrollLink
                        duration={500}
                        to={link.scrollToId}
                        smooth
                        spy={true}
                        offset={-200}
                        className="cursor-pointer active:text-inspira-spark-highlight transition-colors"
                        onClick={handleClose}
                      >
                        {link.label}
                      </ScrollLink>
                    </li>
                  );
                }
              }
            })}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
