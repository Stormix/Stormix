import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faStackOverflow, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { cl } from 'dynamic-class-list';

const Socials: React.FC<{
  className?: string;
}> = ({ className }) => {
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
      icon: <FontAwesomeIcon icon={faEnvelope} className="block lg:hidden" />,
      url: 'mailto:hello@stormix.co',
    },
  ];
  return (
    <div
      className={cl(
        'z-50 flex flex-row items-center w-full gap-4 p-4 bg-background-light dark:bg-background lg:w-4 lg:flex-col lg:bg-none',
        className,
      )}
    >
      <span className="flex flex-grow lg:hidden">Get in touch: </span>

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
      <div className="h-12 ml-[5px] border-l dark:border-background-light border-background hidden lg:flex" />
    </div>
  );
};

export default Socials;
