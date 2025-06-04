import Link from "next/link";
import { PortableText } from "@portabletext/react";
import SvgIcon from "./SvgIcon";
import Input from "./Input";
import CTAButton from "./CTAButtonBox";

export default function Footer({ settings }) {
  const { footer, socialLinks, email } = settings || {};

  return (
    <footer>
      <div className="page-container">
              <section className="footerLeft">
        <div className=" footer-col footer-col-1">
          <h3>{footer?.column1?.heading}</h3>
          <div className="">
            {footer?.column1?.content && (
              <PortableText value={footer.column1.content} />
            )}
          </div>
        </div>
        <div className="footer-col footer-col-2">
          <h3>{footer?.column2?.heading}</h3>
          <div className="">
            {footer?.column2?.content && (
              <PortableText value={footer.column2.content} />
            )}
          </div>
        </div>
        <div className="footer-col footer-col-3 ">
          <div className="flex justify-center items-start">
            <Input
              title="SUBSCRIBE TO OUR NEWSLETTER"
              label="Email Address"
              ctaText="GO"
            />
          </div>
        </div>
        <div className="footer-col foooter-col-4">
          <h3 className="">{footer?.row?.heading}</h3>
          <div className="">
            {footer?.row?.content && (
              <PortableText value={footer.row.content} />
            )}
          </div>
        </div>
      </section>
      <section className="footerRight">
        <div className="socials-container">
          {socialLinks?.map((social, index) => (
            <a
              key={index}
              href={social.socialLink}
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <SvgIcon svgContent={social.icon.svg} color="white" />
            </a>
          ))}
        </div>
        <div className="footerMenu">
          {footer?.footerMenu?.map((item, index) => (
            <div key={index} >
              {item.linkType === "button" ? (
                
                <CTAButton
                  
                  value={{
                    buttonLabel: item.menuItemName,
                    buttonUrl: item.menuItemUrl,
                    buttonColor: `${item.buttonStyle === "pink" ? "pink" : "blue"}`,
                    openInNewWindow: false,
                    buttonAlignment: "right",
                  }}
                />
              ) : (
                <Link
                  
                  href={item.menuItemUrl}
                  className="footer-link"
                >
                  {item.menuItemName}
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      </div>

    </footer>
  );
}
