'use client';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';
import SvgIcon from './SvgIcon';
import Input from './Input';

export default function Footer({ settings }) {
  const { footer, socialLinks, email } = settings || {};

  return (
    <footer className="bg-black py-14 pl-6 pr-15 text-white">
      <div className="mx-auto flex flex-col lg:flex-row lg:justify-between gap-8">
        {/* Left Column */}
        <div className="flex-grow lg:max-w-[66%] space-y-4">
          {/* Top 3 Columns */}
          <div className="flex flex-col md:flex-row gap-14">
            {/* Column 1 */}
            <div className="flex-1">
              <h3 className="font-semibold text-lg mb-2">
                {footer?.column1?.heading}
              </h3>
              <div className="text-xs">
                {footer?.column1?.content && (
                  <PortableText value={footer.column1.content} />
                )}
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex-1">
              <h3 className="font-semibold text-lg mb-2">
                {footer?.column2?.heading}
              </h3>
              <div className="text-xs">
                {footer?.column2?.content && (
                  <PortableText value={footer.column2.content} />
                )}
              </div>
            </div>

            {/* Column 3 */}
            <div className="flex-1 flex justify-center">
              <div className="flex justify-center items-start">
                <h3 className="font-semibold text-lg mb-4">
                  <Input
                    title="SUBSCRIBE TO OUT NEWSLETTER"
                    label="Email Address"
                    ctaText="GO"
                    onSubmit={() => {}} // TODO
                  />
                </h3>
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="w-full">
            <h3 className="font-semibold text-lg mb-2">
              {footer?.row?.heading}
            </h3>
            <div className="text-xs">
              {footer?.row?.content && (
                <PortableText value={footer.row.content} />
              )}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:max-w-[33%]">
          {/* Social Links */}
          <div className="flex flex-col gap-4 mb-7">
            {socialLinks?.map((social, index) => (
              <a
                key={index}
                href={social.socialLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-600 hover:text-gray-900 transition-colors"
              >
                <SvgIcon svgContent={social.icon.svg} color="white" />
              </a>
            ))}
          </div>

          {/* Footer Menu */}
          <nav className="!flex !flex-col gap-4">
            {footer?.footerMenu?.map((item, index) => (
              <div key={index}>
                {item.linkType === 'button' ? (
                  <button
                    onClick={() => (window.location.href = item.menuItemUrl)}
                    className={`px-4 py-2 rounded-md font-medium transition-colors
                      ${
                        item.buttonStyle === 'orange'
                          ? 'bg-orange-500 text-white hover:bg-orange-600'
                          : 'bg-yellow-400 text-black hover:bg-yellow-500'
                      }`}
                  >
                    {item.menuItemName}
                  </button>
                ) : (
                  <Link
                    href={item.menuItemUrl}
                    className="font-semibold text-lg mb-2"
                  >
                    {item.menuItemName}
                  </Link>
                )}
              </div>
            ))}
          </nav>
          {/* Email Section */}
          <div className="text-white mt-8 text-center">
            <a href={`mailto:${email.emailUrl}`} className="text-xs">
              {email.emailLabel}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
