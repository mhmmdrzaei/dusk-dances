"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import CTAButton from "@/app/components/CTAButtonBox";

export default function Header({ settings }) {
  const [openMenus, setOpenMenus] = useState([]);

const toggleMenu = (index) => {
  setOpenMenus((prev) =>
    prev.includes(index) ? [] : [index]
  );
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

      {/* Navigation Menu */}

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
                  <span
                    style={{
                      color: item.hexColor,
                    }}
                  >
                    {openMenus.includes(index) ? "−" : "+"}
                  </span>
                </button>
                {openMenus.includes(index) &&
                  (() => {
                    const items = item.subMenuItems || [];
                    const firstCol = items.slice(0, 3);
                    const secondCol = items.slice(3);
  const hasSecondCol = secondCol.length > 0;

                    return (
                      <section
                        className="submenu-list two-column-submenu"
                        style={{ backgroundColor: item.hexColor }}
                      >
                        <div className={` ${!hasSecondCol ? 'full-width-column' : 'submenu-column-left'}`}>
                          {firstCol.map((subItem, i) => (
                            <a
                              key={i}
                              href={subItem.subMenuItemUrl}
                              className="submenu-link"
                              style={{ color: "white" }}
                            >
                              {subItem.subMenuItemName}
                            </a>
                          ))}
                        </div>
                        <div className="submenu-column-right">
                          {secondCol.map((subItem, i) => (
                            <a
                              key={i}
                              href={subItem.subMenuItemUrl}
                              className="submenu-link"
                              style={{ color: "white" }}
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
                  buttonColor: `${item.buttonStyle === "pink" ? "pink" : "blue"}`,
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
    </header>
  );
}
