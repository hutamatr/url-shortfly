import React from "react";

import facebookIcon from "../../assets/icons/icon-facebook.svg";
import twitterIcon from "../../assets/icons/icon-twitter.svg";
import pinterestIcon from "../../assets/icons/icon-pinterest.svg";
import instagramIcon from "../../assets/icons/icon-instagram.svg";

const footerContentMenu: string[][] = [
  ["Features", "Link Shortening", "Branded Links", "Analytics"],
  ["Resources", "Blog", "Developers", "Support"],
  ["Company", "About", "Our Team", "Careers", "Contact"],
];

const socialMediaIcon: string[] = [
  facebookIcon,
  twitterIcon,
  pinterestIcon,
  instagramIcon,
];

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center gap-y-8 bg-neutral-very-dark-blue p-8 text-center">
      <h2 className="text-2xl font-bold text-white">Shortly</h2>
      <ul className="flex flex-col gap-y-3 text-white">
        {footerContentMenu[0].map((menu, index) => (
          <li
            key={`menu-${index}`}
            className={`${index === 0 ? "mb-3 font-bold" : "text-xs"}`}
          >
            {menu}
          </li>
        ))}
      </ul>
      <ul className="flex flex-col gap-y-3 text-white">
        {footerContentMenu[1].map((menu, index) => (
          <li
            key={`menu-${index}`}
            className={`${index === 0 ? "mb-3 font-bold" : "text-xs"}`}
          >
            {menu}
          </li>
        ))}
      </ul>
      <ul className="flex flex-col gap-y-3 text-white">
        {footerContentMenu[2].map((menu, index) => (
          <li
            key={`menu-${index}`}
            className={`${index === 0 ? "mb-3 font-bold" : "text-xs"}`}
          >
            {menu}
          </li>
        ))}
      </ul>
      <ul className="flex flex-row items-center justify-center gap-x-4">
        {socialMediaIcon.map((icon, index) => (
          <li key={`social-${index}`}>
            <img src={icon} alt={`socialMedia-${index}`} />
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
