import { Fragment, useState } from 'react';
import { Combobox, Transition } from '@headlessui/react';
import { FiChevronDown, FiCheck } from 'react-icons/fi';

type Option = {
  id: number;
  text: string;
};

type Props = {
  label: string;
  options: Option[];
};

export default function ComboboxInput({ label, options }: Props) {
  const [selected, setSelected] = useState(options[0]);
  const [query, setQuery] = useState('');

  const filteredPeople =
    query === ''
      ? options
      : options.filter((option) =>
          option.text
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        );

  return (
    <div className="flex flex-col gap-[6px] w-full">
      <label htmlFor={label} className="text-muted text-sm font-normal">
        {label}
      </label>
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative">
          <div className="relative w-full text-white bg-transparent border border-white/10 rounded-[3px] py-2 px-4">
            <Combobox.Input
              className="w-full bg-transparent text-white border-none text-sm leading-5 focus:outline-none"
              displayValue={(option: Option) => option.text}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <FiChevronDown
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-dark/50 py-1 text-base sm:text-sm">
              {filteredPeople.length === 0 && query !== '' ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredPeople.map((option) => (
                  <Combobox.Option
                    key={option.id}
                    className={({ active }) =>
                      `relative select-none py-2 pl-10 pr-4 cursor-pointer ${
                        active ? 'bg-primary text-white' : 'text-white'
                      }`
                    }
                    value={option}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {option.text}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-primary'
                            }`}
                          >
                            <FiCheck className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}
