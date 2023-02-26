import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../atoms/Button';

const Contact: FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center w-full gap-4 my-24" id="contact">
      <h3 className="mb-6 text-5xl">.contact()</h3>
      <div className="flex flex-col justify-center w-11/12 lg:w-3/6 item-center">
        <p className="text-center">
          I am always on the lookout for new challenges and opportunities to learn and grow. If you have a project or
          idea that you think I could help with, I would love to hear from you. Please feel free to get in touch via the
          contact button below or through any of the social media links.
        </p>
      </div>
      <Button onClick={() => open('mailto:hello@stormix.co')} className="mt-4">
        {t('say-hello')}
      </Button>
    </div>
  );
};

export default Contact;
