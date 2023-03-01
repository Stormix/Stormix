import React, { useCallback, useMemo, useRef, useState } from 'react';
import useOnScreen from '@/hooks/useOnScreen';
import { BlurhashCanvas } from 'react-blurhash';

interface IImageLazyLoad {
  src: string;
  alt: string;
  blurHash: string;
  className?: string;
}

const ImageLazyLoad: React.FC<IImageLazyLoad> = (props) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const imageWrapper = useRef<HTMLDivElement>(null);
  const isImageVisibleOnScreen = useOnScreen(imageWrapper, '100px');

  const afterLoad = useCallback(() => {
    setTimeout(() => {
      setIsImageLoaded(true);
    }, 1000);
  }, []);

  const placeholder = useMemo(() => {
    if (isImageLoaded || !props.blurHash) return <></>;
    return (
      <div className="absolute w-full h-full">
        <BlurhashCanvas
          hash={props.blurHash || ''}
          style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, width: '100%', height: '70%' }}
          height={128}
          width={128}
          punch={1}
        />
      </div>
    );
  }, [isImageLoaded, props.blurHash]);

  return (
    <div ref={imageWrapper} className="flex-col min-h-[400px]">
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
