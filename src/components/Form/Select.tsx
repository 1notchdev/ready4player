import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/outline";

const Select = ({title, options, selected, onChange, width="180px"}) => {
    return (
        <Listbox value={selected} onChange={onChange}>
            <div className={`relative mt-1 w-[${width}]`}>
                <div className="w-full flex justify-between items-center gap-x-1 rounded bg-white/[0.06] py-2 pl-3">
                    <span className="text-sm text-gray-500">{title}:</span>
                    <Listbox.Button className="relative cursor-pointer text-left focus:outline-none sm:text-sm pr-10">
                        <span className="block truncate">{selected.label}</span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <SelectorIcon
                                className="h-5 w-5 text-gray-400"
                                aria-hidden="true"
                            />
                        </span>
                    </Listbox.Button>
                </div>
                <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {
                            options.map(opt => (
                                <Listbox.Option
                                    key={opt.value}
                                    className={({ active }) =>
                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                        active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                        }`
                                    }
                                    value={opt}
                                >
                                    {
                                    ({ selected }) => (
                                        <>
                                            <span
                                                className={`block truncate ${
                                                selected ? 'font-medium' : 'font-normal'
                                                }`}
                                            >
                                                {opt.label}
                                            </span>
                                            {
                                                selected ? (
                                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                    </span>
                                                ) : null
                                            }
                                            </>
                                        )
                                    }
                                </Listbox.Option>
                            ))
                        }
                    </Listbox.Options>
                </Transition>
            </div>
        </Listbox>
    )
}

export default Select;