import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { SelectorIcon } from '@heroicons/react/solid';

function Sort(props) {
  const { orders, sortBy, setSortBy } = { ...props };

  return (
    <Listbox value={sortBy} onChange={setSortBy}>
      {({ open }) => (
        <>
          <Listbox.Label>Sort by:</Listbox.Label>
          <div>
            <Listbox.Button className="cursor-pointer w-60 bg-white border border-gray-300 rounded-md shadow-sm px-3 py-2 text-left focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 sm:text-sm flex justify-between items-center">
              {sortBy.name}
              <SelectorIcon
                className="h-4 w-4 ml-2 text-gray-600"
                aria-hidden="true"
              />
            </Listbox.Button>
            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0">
              <Listbox.Options className="cursor-pointer w-60 absolute z-10 mt-1 bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                {orders.map((order) => (
                  <Listbox.Option key={order.id} value={order} as={Fragment}>
                    {({ active, selected }) => (
                      <li
                        className={`${
                          (active
                            ? 'text-white bg-purple-600'
                            : 'text-gray-800',
                          'cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-purple-500 hover:text-white flex')
                        } ${selected && 'bg-gray-100'}`}>
                        {order.name}
                      </li>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}

export default Sort;
