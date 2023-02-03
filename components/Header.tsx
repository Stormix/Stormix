import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';
import Logo from '../public/logo.svg';

const Header = () => {
  const paths = [
    {
      name: 'about',
      href: '/',
    },
    {
      name: 'resume',
      href: '/resume',
    },
    {
      name: 'projects',
      href: '/projects',
    },
    {
      name: 'contact',
      href: '/contact',
    },
  ];

  return (
    <div className="container grid items-center grid-cols-4 py-8 mx-auto">
      <div className="flex col-span-1">
        <Link href="/" className="">
          <Logo height={30} fill="white" />
        </Link>
      </div>

      <div className="col-span-2">
        <nav className="flex flex-row justify-center gap-4">
          {paths.map(({ name, href }) => (
            <Link key={href} href={href}>
              <a className="lowercase hover:text-primary">{`.${name}()`}</a>
            </Link>
          ))}
        </nav>
      </div>

      <div className="flex justify-end col-span-1">
        <LanguageSwitcher />
      </div>
    </div>
  );
};

export default Header;
