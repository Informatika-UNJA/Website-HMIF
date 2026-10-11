import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";

function BrandIcon({ icon, size = 24, className }) {
  return (
    <FontAwesomeIcon
      icon={icon}
      className={className}
      style={{ width: size, height: size }}
    />
  );
}

export function InstagramIcon(props) {
  return <BrandIcon icon={faInstagram} {...props} />;
}

export function GithubIcon(props) {
  return <BrandIcon icon={faGithub} {...props} />;
}

export function LinkedinIcon(props) {
  return <BrandIcon icon={faLinkedinIn} {...props} />;
}
