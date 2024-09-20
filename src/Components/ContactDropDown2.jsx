import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
  ChevronDownIcon,
} from '@heroicons/react/16/solid'
import { useState } from 'react'
import { BiCustomize } from 'react-icons/bi'
import { FaHandshake } from 'react-icons/fa'
import { GiAutoRepair } from 'react-icons/gi'
import { MdRocketLaunch } from 'react-icons/md'

export default function ContactDropDown2() {

    const [isOpen, setIsOpen] = useState(false);

    const selectFunction = () => {

        setIsOpen(true);

    }

  return (
    <div className=" top-24 w-52 text-right">
      <Menu __demoMode>
        <MenuButton className="inline-flex items-center gap-2 rounded-md bg-gray-800 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
            onClick={selectFunction}
        >
          Select
          <ChevronDownIcon className="size-4 fill-white/60" />
        </MenuButton>

        {isOpen && (


        <MenuItems
        transition
        anchor="bottom end"
        className="w-52 origin-top-right rounded-xl border border-white/5 bg-white p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
      >
        <MenuItem>
          <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 text-black">
            <BiCustomize className="size-4 text-black" />
            Custom Kit
            <kbd className="ml-auto hidden font-sans text-xs text-black group-data-[focus]:inline">⌘E</kbd>
          </button>
        </MenuItem>
        <MenuItem>
          <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 text-black">
            <MdRocketLaunch className="size-4 text-black" />
            Boost Kit
            <kbd className="ml-auto hidden font-sans text-xs text-black group-data-[focus]:inline">⌘D</kbd>
          </button>
        </MenuItem>
        <div className="my-1 h-px bg-white/5" />
        <MenuItem>
          <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 text-black">
            <GiAutoRepair className="size-4 text-black" />
            Ultimate Suite
            <kbd className="ml-auto hidden font-sans text-xs text-black group-data-[focus]:inline">⌘A</kbd>
          </button>
        </MenuItem>
        <MenuItem>
          <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 text-black">
            <FaHandshake className="size-4 text-black" />
            Enquiry
            <kbd className="ml-auto hidden font-sans text-xs text-black group-data-[focus]:inline">⌘D</kbd>
          </button>
        </MenuItem>
      </MenuItems>

        )}

      </Menu>
    </div>
  )
}
