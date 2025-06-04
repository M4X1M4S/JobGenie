import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarLogo,
} from "./components/Navbar";
import { useState } from "react";

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Define your navigation items
  const navItems = [
    { name: "Home", link: "#" },
    { name: "About", link: "#about" },
    { name: "Services", link: "#services" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <div className="bg-gray-600">
      <Navbar className="bg-gray-50">
        <NavBody>
          <NavbarLogo />
          <NavItems
            items={navItems}
            onItemClick={() => setMobileMenuOpen(false)}
          />
          <MobileNavToggle
            isOpen={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          />
        </NavBody>
        <MobileNav visible={true}>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            />
          </MobileNavHeader>
          <MobileNavMenu
            isOpen={mobileMenuOpen}
            onClose={() => setMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full py-2 text-center text-black dark:text-white"
              >
                {item.name}
              </a>
            ))}
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
};

export default App;
