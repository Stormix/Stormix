import React, { useCallback, useMemo, useRef, useState } from 'react';
import { Blurhash } from 'react-blurhash';
import useOnScreen from '@/hooks/useOnScreen';

interface IImageLazyLoad {
  src: string;
  alt: string;
  blurHash: string;
}

const ImageLazyLoad: React.FC<IImageLazyLoad> = (props) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const imageWrapper = useRef<HTMLDivElement>(null);
  const isImageVisibleOnScreen = useOnScreen(imageWrapper, '0px');

  const afterLoad = useCallback(() => {
    setTimeout(() => {
      setIsImageLoaded(true);
    }, 1000);
  }, []);

  const placeholder = useMemo(() => {
    if (isImageLoaded || !props.blurHash) return <></>;
    return (
      <Blurhash
        hash={props.blurHash || ''}
        width={'100%'}
        height={'100%'}
        resolutionX={32}
        resolutionY={32}
        punch={1}
      />
    );
  }, [isImageLoaded, props.blurHash]);

  return (
    <div ref={imageWrapper} className="w-full h-full">
      {placeholder}
      {isImageVisibleOnScreen && (
        <img
          src={props.src}
          loading="lazy"
          alt={props.alt}
          onLoad={afterLoad}
          className={`object-cover h-full w-full rounded-md ${!isImageLoaded ? 'hidden' : ''}`}
        />
      )}
    </div>
  );
};

export default ImageLazyLoad;
