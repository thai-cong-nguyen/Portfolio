// components
import Socials from "./Socials";

const Footer = () => {
  return (
    <div>
      <Socials
        containerStyles="flex items-center justify-center gap-x-3 mx-auto xl:mx-0"
        iconsStyles="text-foreground text-[22px] rounded-md p-1 transition-all hover:bg-accent"
      />
    </div>
  );
};

export default Footer;
