import { cl } from 'dynamic-class-list';
import React, { useRef } from 'react';

interface IImageLazyLoad {
  src: string;
  alt: string;
  blurHash: string;
  className?: string;
}

const ImageLazyLoad: React.FC<IImageLazyLoad> = (props) => {
  // const [isImageLoaded, setIsImageLoaded] = useState(false);
  const imageWrapper = useRef<HTMLDivElement>(null);

  // const afterLoad = useCallback(() => {
  //   setTimeout(() => {
  //     setIsImageLoaded(true);
  //   }, 0);
  // }, []);

  // const placeholder = useMemo(() => {
  //   if (isImageLoaded || !props.blurHash) return <></>;
  //   return (
  //     <div className="absolute w-full h-full">
  //       <BlurhashCanvas
  //         hash={props.blurHash || ''}
  //         style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, width: '100%', height: '70%' }}
  //         height={400}
  //         width={600}
  //         punch={1}
  //       />
  //     </div>
  //   );
  // }, [isImageLoaded, props.blurHash]);

  return (
    <div ref={imageWrapper} className={cl('flex-col', props.className)}>
      {/* {placeholder} */}
      <img
        src={props.src}
        loading="lazy"
        alt={props.alt}
        // onLoad={afterLoad}
        className={`object-cover h-full w-full rounded-md`}
      />
    </div>
  );
};

export default ImageLazyLoad;
