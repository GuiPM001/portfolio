"use client";

export default function Navbar() {
  const navLinks = [
    { href: "hero", label: "Home" },
    { href: "about", label: "About" },
    { href: "projects", label: "Projects" },
    { href: "contact", label: "Contact" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed z-50 left-1/2 top-5 -translate-x-1/2 w-[90%] md:w-full">
      <nav className="place-items-center">
        <div className="flex flex-row px-4 py-2 border border-gray-600 rounded-lg backdrop-blur-md font-semibold text-gray-300">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="cursor-pointer px-4 py-2 hover:text-sky-600 rounded-full"
            >
              {link.label}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}
