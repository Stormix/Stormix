import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faStackOverflow, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const Socials: React.FC = () => {
  const socials = [
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
      label: 'StackOverflow',
      icon: <FontAwesomeIcon icon={faStackOverflow} />,
      url: 'https://stackoverflow.com/users/3370660/stormix',
    },
    {
      label: 'Email',
      icon: <FontAwesomeIcon icon={faEnvelope} className="block md:hidden" />,
      url: 'mailto:hello@stormix.co',
    },
  ];
  return (
    <div className="z-50 flex flex-row items-center w-full gap-4 p-4 bg-background-light dark:bg-background md:w-4 md:flex-col md:bg-none">
      <span className="flex flex-grow md:hidden">Get in touch: </span>

      {socials.map((social) => (
        <a
          key={social.url}
          href={social.url}
          target="_blank"
          className="transition-colors hover:text-primary"
          rel="noreferrer"
        >
          {social.icon}
        </a>
      ))}
      <div className="h-12 ml-[5px] border-l dark:border-background-light border-background hidden md:flex" />
    </div>
  );
};

export default Socials;
