import React, { useEffect, useState } from "react";

export default function NavBar() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList[theme === "dark" ? "add" : "remove"]("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#resume", label: "Resume" },
    { href: "#services", label: "Services" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contacts", label: "Contacts" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/10 dark:bg-gray-900/10 backdrop-blur-md border-b border-white/20 dark:border-gray-700/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          {/* LEFT: Desktop links / Mobile hamburger */}
          <div className="flex items-center gap-3">
            {/* Mobile: Hamburger → hidden on lg */}
            <button
              className="lg:hidden p-2 rounded-lg border border-gray-200/30 dark:border-gray-700/30 text-gray-900 dark:text-gray-100 bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm"
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                   xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>

            {/* Desktop: Links */}
            <ul className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-800 dark:text-gray-200">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="hover:text-blue-600 dark:hover:text-amber-500 transition-colors px-2 py-1 rounded-md hover:bg-white/10 dark:hover:bg-gray-800/10 "
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT: Name / Dark mode toggle */}
          <h1
            role="button"
            tabIndex={0}
            onClick={() => setTheme(prev => (prev === "dark" ? "light" : "dark"))}
            onKeyDown={(e) => { if (e.key === "Enter") setTheme(prev => (prev === "dark" ? "light" : "dark")); }}
            className="text-lg sm:text-xl font-bold cursor-pointer select-none text-gray-900 dark:text-gray-100 hover:opacity-80 transition-colors px-2 py-1 rounded-md hover:bg-white/10 dark:hover:bg-gray-800/10"
            title="Toggle dark / light mode"
          >
            Umar Hussain
          </h1>
        </div>
      </nav>

      {/* MOBILE POPUP MENU */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm"
          onClick={closeMenu}
          role="dialog"
          aria-modal="true"
        >
          {/* Panel */}
          <div
            className="absolute left-1/2 -translate-x-1/2 top-20 w-[92%] max-w-sm rounded-2xl bg-white/20 dark:bg-gray-900/20 backdrop-blur-xl shadow-2xl border border-white/30 dark:border-gray-800/30 p-6 lg:hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">Menu</span>
              <button
                onClick={closeMenu}
                aria-label="Close menu"
                className="text-2xl leading-none text-black dark:text-gray-200 hover:bg-white/10 dark:hover:bg-gray-800/10 rounded-full w-8 h-8 flex items-center justify-center"
              >
                ×
              </button>
            </div>

            <ul className="space-y-4 text-base font-medium text-black dark:text-gray-100">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="block rounded-lg px-3 py-2 hover:text-amber-500 hover:bg-white/10 dark:hover:bg-gray-800/10 transition-colors"
                    onClick={closeMenu}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
