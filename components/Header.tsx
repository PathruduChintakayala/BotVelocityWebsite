"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "/platform", label: "Platform" },
  { href: "/execution-model", label: "Execution Model" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/solutions", label: "Solutions" },
  { href: "/architecture", label: "Architecture" },
  { href: "/blog", label: "Blog" },
  { href: "/company", label: "Company" },
  { href: "/security", label: "Security" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
    toggleRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    function handleClickOutside(e: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node)
      ) {
        closeMenu();
      }
    }

    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") {
        closeMenu();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isMenuOpen, closeMenu]);

  return (
    <header className="sticky top-0 z-50 bg-white/95 border-b border-neutral-200 backdrop-blur-sm">
      <div className="container-shell h-16 flex items-center justify-between gap-6">
        <Link
          href="/"
          aria-label="Bot Velocity home"
          className="inline-flex items-center gap-2 text-neutral-900 hover:text-indigo-600 shrink-0"
        >
          <img src="/logo.svg" alt="Bot Velocity logo" className="h-5 w-5" />
          <span className="font-semibold tracking-tight">Bot Velocity</span>
        </Link>
        <nav
          aria-label="Main navigation"
          className="hidden md:flex flex-1 items-center gap-4 text-sm text-neutral-600 overflow-x-auto whitespace-nowrap"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-neutral-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div ref={menuRef} className="md:hidden relative">
          <button
            ref={toggleRef}
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-md border border-neutral-300 p-2 text-neutral-700 hover:text-neutral-900 hover:border-neutral-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
          {isMenuOpen && (
            <div
              id="mobile-nav"
              role="menu"
              className="absolute right-0 mt-2 w-64 rounded-lg border border-neutral-200 bg-white p-3 shadow-lg"
            >
              <nav aria-label="Mobile navigation" className="flex flex-col gap-1 text-sm text-neutral-700">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    role="menuitem"
                    onClick={() => setIsMenuOpen(false)}
                    className="rounded-md px-3 py-2 hover:bg-neutral-100 hover:text-neutral-900 focus:outline-none focus:bg-neutral-100"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  role="menuitem"
                  onClick={() => setIsMenuOpen(false)}
                  className="mt-2 inline-flex items-center justify-center rounded-md bg-indigo-600 px-3 py-2 font-medium text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  Request Access
                </Link>
              </nav>
            </div>
          )}
        </div>
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500 shrink-0"
        >
          Request Access
        </Link>
      </div>
    </header>
  );
}
