import { formatDistance, parse } from 'date-fns';
import React from 'react';
import useTextHighlighter from '../../hooks/useTextHighlighter';

const About: React.FC = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const since = formatDistance(parse('2019-08-29', 'yyyy-MM-dd', new Date()), new Date(), { addSuffix: true });

  const scrollHandler = useTextHighlighter<HTMLDivElement>(ref);

  React.useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [scrollHandler]);

  return (
    <div className="flex flex-col items-center justify-center w-3/6" id="about">
      <h3 className="text-5xl">
        .about(<span className="text-primary">&quot;me&quot;</span>)
      </h3>

      <div className="flex flex-col gap-4 mt-24 text-justify" ref={ref}>
        <p>
          I started web development when I was 14 and my first project was a music website where I hosted some music
          projects I made with a friend mine. (Stormix was my <i>&quot;artist&quot;</i> name)
        </p>
        <p>
          Fast-forward a few years, I became obsessed with web development, and started my journey as a freelance
          software developer. Since then, I have been helping clients around the world bring their ideas to reality.
        </p>
        <p>
          I moved to France {since}, to pursue an engineering degree in both software engineering and robotics at{' '}
          <span className="cursor-pointer text-primary">L&apos;École Centrale de Nantes</span>. During my time there, I
          worked on a few projects, ranging from small CRUD apps to full fledged web applications. I also worked part
          time as a freelance developer for the school&apos;s{' '}
          <span className="cursor-pointer text-primary">Junior Enterprise</span>.
        </p>
        <p>
          During my internships and my last year, I started a full time job working as the lead developer for a belgian
          startup known as <span className="cursor-pointer text-primary">Yogalive</span>. And in few months, we managed
          to build a full class booking and video on demand platform, along with mobile apps for both iOS and Android. I
          handled the entire development process, from the initial design implementation to the deployment of the final
          product.
        </p>
        <p>
          Unfortunately, towards the end of december 2021, <span className="cursor-pointer text-primary">Yogalive</span>{' '}
          decided to shut down the company and I switched to a new job. I&apos;m currently working as a full stack
          software engineer for a company known as <span className="text-blue-800 cursor-pointer">Metamaze</span>, where
          I&apos;m part of the team in charge of maintaining and developing the company&apos;s{' '}
          <span className="" title="Automated document processing">
            ADP
          </span>{' '}
          platform. I’m actively looking for new opportunities, preferably fulltime and remote, so if you have something
          in mind, let’s <span className="cursor-pointer text-primary">.chat()</span>.
        </p>

        <p>I primarily use the following technologies, tools and libraries:</p>

        <ul className="px-4 list-disc columns-3">
          <li>Typescript</li>
          <li>Python</li>
          <li>PHP</li>
          <li>Vue / React</li>
          <li>Web Components (Stencil)</li>
          <li>Node.js</li>
          <li>C++</li>
          <li>SQL / NoSQL</li>
          <li>Git</li>
          <li>Hybrid Apps (Capacitor)</li>
          <li>Docker</li>
          <li>Kubernetes / HELM</li>
          <li>CI / CD</li>
        </ul>

        <p>
          but feel free to go through the timeline below for a more comprehensive list of stuff I worked with in the
          past.
        </p>
      </div>
    </div>
  );
};

export default About;
