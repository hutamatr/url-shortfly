import React from "react";

import ScrollTop from "../UI/ScrollTop";

import facebookIcon from "../../assets/icons/icon-facebook.svg";
import twitterIcon from "../../assets/icons/icon-twitter.svg";
import pinterestIcon from "../../assets/icons/icon-pinterest.svg";
import instagramIcon from "../../assets/icons/icon-instagram.svg";
import { RiHeart2Fill } from "react-icons/ri";

interface SocialMedia {
  icon: string;
  url: string;
}

const socialMediaIcon: SocialMedia[] = [
  {
    icon: facebookIcon,
    url: "https://www.facebook.com/",
  },
  {
    icon: twitterIcon,
    url: "https://www.twitter.com/",
  },
  {
    icon: pinterestIcon,
    url: "https://www.pinterest.com/",
  },
  {
    icon: instagramIcon,
    url: "https://www.instagram.com/",
  },
];

const footerContentMenu: string[][] = [
  ["Features", "Link Shortening", "Branded Links", "Analytics"],
  ["Resources", "Blog", "Developers", "Support"],
  ["Company", "About", "Our Team", "Careers", "Contact"],
];

const footerContentFn = (footerContent: string[]) => {
  return (
    <ul className="flex flex-col gap-y-3 text-white">
      {footerContent.map((menu, index) => (
        <li
          key={`menu-${index}`}
          className={`${index === 0 ? "mb-3 font-bold" : "text-xs"}`}
        >
          {menu}
        </li>
      ))}
    </ul>
  );
};

const Footer = () => {
  return (
    <footer className="bg-neutral-very-dark-blue">
      <section className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-y-8 p-8 text-center md:flex-row md:items-start md:justify-between md:text-left">
        <h2 className="text-2xl font-bold text-white md:mr-10 lg:mr-20">
          Shortly
        </h2>
        {footerContentFn(footerContentMenu[0])}
        {footerContentFn(footerContentMenu[1])}
        {footerContentFn(footerContentMenu[2])}
        <ul className="flex flex-row items-center justify-center gap-x-4">
          {socialMediaIcon.map((social, index) => (
            <li key={`social-${index}`}>
              <a href={social.url} target="_blank">
                <img src={social.icon} alt={`socialMedia-${index}`} />
              </a>
            </li>
          ))}
        </ul>
      </section>
      <div className="flex flex-row items-center justify-center pb-4">
        <p className="flex flex-row gap-x-1 text-sm text-white">
          Made with
          <RiHeart2Fill className="animate-bounce text-lg text-red-600" />
          by
          <a
            href="https://github.com/hutamatr"
            target={"_blank"}
            className="hover:text-primary-cyan"
          >
            hutamatr
          </a>
        </p>
      </div>
      <ScrollTop />
    </footer>
  );
};

export default Footer;
