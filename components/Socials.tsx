import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faGithub,
  faInstagram,
  faLinkedin,
  faStackOverflow,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

const Socials: React.FC = () => {
  const socials = [
    {
      label: 'Facebook',
      icon: <FontAwesomeIcon icon={faFacebookF} />,
      url: 'https://www.facebook.com/',
    },
    {
      label: 'Twitter',
      icon: <FontAwesomeIcon icon={faTwitter} />,
      url: 'https://twitter.com/stormix_co',
    },
    {
      label: 'Github',
      icon: <FontAwesomeIcon icon={faGithub} />,
      url: 'https://github.com/Stormix',
    },
    {
      label: 'Linkedin',
      icon: <FontAwesomeIcon icon={faLinkedin} />,
      url: 'https://www.linkedin.com/in/anasmazouni/',
    },
    {
      label: 'Instagram',
      icon: <FontAwesomeIcon icon={faInstagram} />,
      url: 'https://www.instagram.com/stormix.co/',
    },
    {
      label: 'StackOverflow',
      icon: <FontAwesomeIcon icon={faStackOverflow} />,
      url: 'https://stackoverflow.com/users/3370660/stormix',
    },
  ];
  return (
    <div className="flex flex-col w-4 gap-4 text-white">
      {socials.map((social) => (
        <a key={social.url} href={social.url} target="_blank" className="" rel="noreferrer">
          {social.icon}
        </a>
      ))}
      <div className="h-48 ml-[5px] border-l border-white" />
    </div>
  );
};

export default Socials;
