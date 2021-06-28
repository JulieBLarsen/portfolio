import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/outline';
import LoadingTag from './loading/LoadingTags';
import LoadingText from './loading/LoadingText';

function LoadingCard() {
  return (
    <div className="bg-white rounded-lg h-autoshadow hover:shadow-lg transition">
      <div className="animate-pulse grid grid-rows-2  h-auto">
        <div className="h-[219px] bg-purple-300 relative rounded-t-md"></div>
        <div className="h-full p-5 md:p-6 flex flex-col justify-between">
          <div className="flex flex-col justify-between">
            <LoadingTag />
            <div className="bg-gray-300 h-6 w-1/2 my-1"></div>
            <LoadingText />
          </div>
          <a className="block mt-2 text-base transition text-gray-300  font-bold">
            View project
            <ArrowRightIcon className="inline ml-2 h-6 w-6" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default LoadingCard;
