import { XIcon, PlusIcon } from '@heroicons/react/outline';
import { useState } from 'react';

function FilterTag(props) {
  const { id, name, featuredTech, filteredTech, setFilteredTech } = {
    ...props,
  };
  const [active, setActive] = useState(true);

  function handleClick(currentId) {
    console.log(id);
    const item = filteredTech.find(({ id }) => id === currentId);

    console.log(item);
  }

  return (
    <span
      className={`cursor-pointer m-1 py-2  px-3 transition hover:shadow font-medium rounded-md  text-sm leading-loose ${
        active ? 'text-white bg-purple-600 hover:bg-purple-500' : 'bg-white '
      }`}
      onClick={() => handleClick(id)}>
      {active ? (
        <XIcon className="inline mr-2 w-4" />
      ) : (
        <PlusIcon className="inline mr-2 w-4" />
      )}
      {name}
    </span>
  );
}

export default FilterTag;
