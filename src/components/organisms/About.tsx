import React from 'react';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-center w-3/6 h-screen" id="about">
      <h3 className="text-5xl">
        .about(<span className="text-primary">&quot;me&quot;</span>)
      </h3>

      <div className="flex flex-col gap-4 mt-24 text-justify">
        <p>
          Hello! My name is Anas and I enjoy building things that live on the internet. I started web development when I
          was 14 and my first project was a music website where I hosted some music projects I made with a friend mine.
          (Stormix was my &quot;artist&quot; name)
        </p>
        <p>
          Fast-forward a few years, I got hooked to web development, and started my journey as a freelance software
          developer. Since then, I have been helping clients around the world bring their ideas to reality.
        </p>
        <p>TODO </p>
        <p>
          {/* More recently, I received my Masters in both software engineering and robotics and started a full time job
          working for a startup known as <span className="cursor-pointer text-primary">Yogalive</span>. */}
          I’m actively looking for new opportunities, preferably fulltime and remote, so if you have something in mind,
          let’s <span className="cursor-pointer text-primary">.chat()</span>.
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
