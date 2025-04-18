// components/ui/dropdown-menu.js
"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "lucide-react";

export function DropdownMenu({ label, children }) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none">
          {label}
          <ChevronDownIcon className="ml-2 -mr-1 h-4 w-4" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={React.Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 mt-2 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
          <div className="py-1">{children}</div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export function DropdownMenuTrigger({ children }) {
  return <>{children}</>;
}

export function DropdownMenuContent({ children }) {
  return <>{children}</>;
}

export function DropdownMenuItem({ onClick, children }) {
  return (
    <Menu.Item>
      {({ active }) => (
        <button
          onClick={onClick}
          className={`${
            active ? "bg-gray-100 text-gray-900" : "text-gray-700"
          } block w-full text-left px-4 py-2 text-sm`}
        >
          {children}
        </button>
      )}
    </Menu.Item>
  );
}
