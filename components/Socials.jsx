"use client";

// icons
import {
  RiLinkedinFill,
  RiFacebookFill,
  RiDiscordFill,
  RiGithubFill,
  RiTwitterFill,
  RiMailFill,
  RiTelegramFill,
} from "react-icons/ri";

const pathIcons = [
  {
    path: "https://www.facebook.com/thaicong21072003",
    name: <RiFacebookFill />,
  },
  {
    path: "/",
    name: <RiDiscordFill />,
  },
  {
    path: "https://github.com/thai-cong-nguyen",
    name: <RiGithubFill />,
  },
  {
    path: "https://twitter.com/0xHarryNguyenVN",
    name: <RiTwitterFill />,
  },
  {
    path: "mailto:nguyenthaicong265@gmail.com",
    name: <RiMailFill />,
  },
  {
    path: "https://t.me/HarryRiddle",
    name: <RiTelegramFill />,
  },
  {
    path: "https://www.linkedin.com/in/nguyen-thai-cong-3b651721b/",
    name: <RiLinkedinFill />,
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {pathIcons.map((icon, index) => {
        return (
          <a href={icon.path} key={index} target="_blank">
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </a>
        );
      })}
    </div>
  );
};

export default Socials;
