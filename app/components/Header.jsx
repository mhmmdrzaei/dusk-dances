"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CTAButton from './CTAButton'; // Assuming CTAButton is a separate component

export default function Header({ settings }) {
  const [openMenus, setOpenMenus] = useState([]);

  const toggleMenu = (index) => {
    setOpenMenus((prev) => {
      if (prev.includes(index)) {
        return prev.filter((i) => i !== index); // Close menu if it was open
      } else {
        return [...prev, index]; // Open menu if it was closed
      }
    });
  };

  return (
    <header className="header-container">
      {/* Logo */}
      {settings?.headingLogo && (
        <div className="logo-container">
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
      <nav className="navigation-menu">
        <ul className="menu-list">
          {settings?.headingMenu?.map((item, index) => (
            <li key={index} className="menu-item">
              {/* Regular menu item or dropdown */}
              {item.menuType === 'direct' ? (
                <a
                  href={item.menuItemUrl}
                  className="menu-link"
                  style={{ color: item.hexColor }}
                >
                  {item.menuItemName}
                </a>
              ) : (
                <div className="submenu">
                  <button
                    onClick={() => toggleMenu(index)}
                    className="dropdown-button"
                    style={{
                      color: item.hexColor,
                    }}
                  >
                    {openMenus.includes(index) ? '−' : '+'} {item.menuItemName}
                  </button>

                  {openMenus.includes(index) && (
                    <ul
                      className="submenu-list"
                      style={{ backgroundColor: item.hexColor }}
                    >
                      {item.subMenuItems?.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <a
                            href={subItem.subMenuItemUrl}
                            className="submenu-link"
                            style={{ color: 'white' }}
                          >
                            {subItem.subMenuItemName}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Heading Side Menu with Buttons */}
      <div className="heading-side-menu">
        {settings?.headingsidemenu?.map((item, index) => (
          <div key={index}>
            {item?.linkType === 'button' ? (
              <CTAButton
                buttonLabel={item.menuItemName}
                buttonUrl={item.menuItemUrl}
                buttonColor={item.buttonStyle === 'orange' ? 'orange' : 'yellow'}
                openInNewWindow={false}
                buttonAlignment="left"
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
