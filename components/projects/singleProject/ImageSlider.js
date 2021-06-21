import Image from 'next/image';
import AwesomeSlider from 'react-awesome-slider';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/outline';

function ImageSlider(props) {
  const { images, open, setOpen, setPhotoIndex } = { ...props };

  return (
    <>
      <AwesomeSlider
        className="cursor-pointer single-product__carousel md:hidden h-96 pt-10 lg:p-10"
        organicArrows={false}
        buttonContentRight={
          <ChevronRightIcon className="hover:text-white text-gray-600 h-10" />
        }
        buttonContentLeft={
          <ChevronLeftIcon className="hover:text-white  text-gray-600 h-10" />
        }
        bullets={false}
        fillParent={false}>
        {images.map((image, index) => (
          <div
            key={image.id}
            className="h-full w-full object-cover object-center">
            <div className="relative w-full h-full">
              <Image
                src={image.url}
                alt={image.alt}
                layout="fill"
                className="cursor-pointer object-cover object-center rounded-t-md"
                onClick={() => {
                  setOpen(!open);
                  setPhotoIndex(index);
                }}
              />
            </div>
          </div>
        ))}
      </AwesomeSlider>
    </>
  );
}

export default ImageSlider;
