"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import CTAButton from "@/app/components/CTAButtonBox";

export default function Header({ settings }) {
  const [openMenus, setOpenMenus] = useState([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = (index) => {
    setOpenMenus((prev) => (prev.includes(index) ? [] : [index]));
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="header-container">
      {/* Logo */}
      {settings?.headingLogo && (
        <div className="logo-header">
          <Link href="/">
            <Image
              src={settings.headingLogo.asset.url}
              alt="Logo"
              width={400}
              height={300}
            />
          </Link>
        </div>
      )}

      {/* Hamburger Button */}
      <button className="hamburger-button" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? "✕" : "☰"}
      </button>

      {/* Navigation + Side Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
        <nav className="menu-list">
          {settings?.headingMenu?.map((item, index) => (
            <li key={index} className="menu-item">
              {item.menuType === "direct" ? (
                <a
                  href={item.menuItemUrl}
                  className="menu-link"
                  style={{ color: item.hexColor }}
                >
                  {item.menuItemName}
                </a>
              ) : (
                <>
                  <button
                    onClick={() => toggleMenu(index)}
                    className="dropdown-button"
                  >
                    {item.menuItemName}{" "}
                    <span style={{ color: item.hexColor }}>
                      {openMenus.includes(index) ? "−" : "+"}
                    </span>
                  </button>
                  {openMenus.includes(index) &&
                    (() => {
                      const items = item.subMenuItems || [];
                     
                      

                      return (
                        <section
                          className="submenu-list"
                          style={{ backgroundColor: item.hexColor }}
                        >
                          <div
                            className="full-width-column"
                                
                          >
                            {items.map((subItem, i) => (
                              <a
                                key={i}
                                href={subItem.subMenuItemUrl}
                                className="submenu-link"
                              >
                                {subItem.subMenuItemName}
                              </a>
                            ))}
                          </div>
                        </section>
                      );
                    })()}
                </>
              )}
            </li>
          ))}
        </nav>

        <div className="heading-side-menu">
          {settings?.headingsidemenu?.map((item, index) => (
            <div key={index}>
              {item?.linkType === "button" ? (
                <CTAButton
                  value={{
                    buttonLabel: item.menuItemName,
                    buttonUrl: item.menuItemUrl,
                    buttonColor: `${
                      item.buttonStyle === "pink" ? "pink" : "blue"
                    }`,
                    openInNewWindow: false,
                    buttonAlignment: "left",
                  }}
                />
              ) : (
                <a
                  href={item.menuItemUrl}
                  className="side-menu-link"
                  style={{ color: item.hexColor }}
                >
                  {item.menuItemName}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
