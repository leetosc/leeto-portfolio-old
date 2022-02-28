/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import { Disclosure, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';

const navigation = [
  { name: 'Home', href: '#', current: false, to: 'home' },
  { name: 'About', href: '#', current: false, to: 'about' },
  { name: 'Projects', href: '#', current: false, to: 'projects' },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Header() {
  return (
    <Disclosure as="nav" className="fixed w-full bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center  sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="mr-3 block h-10 w-auto"
                    src="/website.png"
                    alt="icon"
                  />
                  <Link href="/">
                    <a className="text-2xl font-bold text-white">Leeto</a>
                  </Link>
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <ScrollLink
                      key={item.name}
                      activeClass="font-bold"
                      className={classNames(
                        item.current
                          ? 'bg-gray-900 text-white'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'cursor-pointer rounded-md px-3 py-2 text-sm font-medium'
                      )}
                      to={item.to}
                      offset={-50}
                      spy={true}
                      smooth={true}
                      duration={1000}
                    >
                      {item.name}
                    </ScrollLink>
                  ))}
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className=" flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <Transition
              enter="transition-opacity duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map((item) => (
                  <ScrollLink
                    key={item.name}
                    to={item.to}
                    offset={-50}
                    spy={true}
                    smooth={true}
                    duration={1000}
                  >
                    <Disclosure.Button
                      className={classNames(
                        item.current
                          ? 'bg-gray-900 text-white'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  </ScrollLink>
                ))}
              </div>
            </Transition>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
