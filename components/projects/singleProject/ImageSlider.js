import AwesomeSlider from 'react-awesome-slider';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/outline';

function ImageSlider({ images }) {
  return (
    <AwesomeSlider
      className="single-product__carousel md:hidden h-96 pt-10 lg:p-10"
      organicArrows={false}
      buttonContentRight={
        <ChevronRightIcon className="hover:text-white text-gray-600 h-10" />
      }
      buttonContentLeft={
        <ChevronLeftIcon className="hover:text-white  text-gray-600 h-10" />
      }
      bullets={false}
      fillParent={false}>
      {images.map((image) => (
        <div
          key={image.id}
          className="h-full w-full object-cover object-center">
          <img
            src={image.url}
            className="h-full w-full object-cover  object-center"
            alt={image.alt}
          />
        </div>
      ))}
    </AwesomeSlider>
  );
}

export default ImageSlider;
