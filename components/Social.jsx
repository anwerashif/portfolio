import Link from "next/link";

//import { FaUpwork } from "react-icons/fa6";
import { FaLinkedinIn, FaGithub, FaYoutube } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";

const socials = [
  {
    icon: <SiUpwork />,
    path: "https://www.upwork.com/freelancers/~0195563304b643df76",
  },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/a3ashif/",
  },
  {
    icon: <FaGithub />,
    path: "https://github.com/anwerashif/",
  },
  {
    icon: <FaYoutube />,
    path: "https://www.youtube.com/@iamanwerashif",
  },
];

const Social = ({containerStyles, iconStyles}) => {
  return <div className={containerStyles}>
    {socials.map((item, index) => {
      return (
        <Link key={index} href={item.path} className={iconStyles}>
          {item.icon}
        </Link>
      );
    })}
  </div>;
};

export default Social;