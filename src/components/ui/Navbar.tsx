import Image from 'next/image';
import Link from 'next/link';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';

export function Navbar() {
  const router = useRouter();

  return (
    <Disclosure
      as='nav'
      className='fixed bg-brianBlue top-0 left-0 right-0 shadow z-50'
    >
      {({ open }) => (
        <>
          <div className='mx-auto max-w-7xl px-2 sm:px-4 lg:px-8'>
            <div className='flex h-16 justify-between'>
              <div className='flex px-2 lg:px-0'>
                <div className='flex flex-shrink-0 items-center'>
                  <Link passHref href='/'>
                    <Image
                      className='block h-8 w-auto lg:hidden hover:animate-bump'
                      src='/Golf_With_Brian_Text.png'
                      alt='Golf with Brian'
                      height='40'
                      width='166'
                    />
                  </Link>
                </div>
              </div>
              <div className='hidden lg:ml-6 lg:flex lg:space-x-8'>
                <Link href='/'>
                  <a
                    className={
                      router.pathname == '/'
                        ? 'inline-flex items-center border-b-2 border-legacyGold px-1 pt-1 text-sm font-medium text-white'
                        : 'inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-white hover:border-legacyGold hover:text-legacyGold'
                    }
                  >
                    Home
                  </a>
                </Link>
                <Link href='/About'>
                  <a
                    className={
                      router.pathname == '/About'
                        ? 'inline-flex items-center border-b-2 border-legacyGold px-1 pt-1 text-sm font-medium text-white'
                        : 'inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-white hover:border-legacyGold hover:text-legacyGold'
                    }
                  >
                    About Brian
                  </a>
                </Link>
                <Link href='/#lessons'>
                  <a
                    className={
                      router.pathname == '/#lessons'
                        ? 'inline-flex items-center border-b-2 border-legacyGold px-1 pt-1 text-sm font-medium text-white'
                        : 'inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-white hover:border-legacyGold hover:text-legacyGold'
                    }
                  >
                    Lessons
                  </a>
                </Link>
                <Link href='/#sponsors'>
                  <a
                    className={
                      router.pathname == '/#sponsors'
                        ? 'inline-flex items-center border-b-2 border-legacyGold px-1 pt-1 text-sm font-medium text-white'
                        : 'inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-white hover:border-legacyGold hover:text-legacyGold'
                    }
                  >
                    Sponsors
                  </a>
                </Link>
                <Link href='/#contact'>
                  <a
                    className={
                      router.pathname == '/#contact'
                        ? 'inline-flex items-center border-b-2 border-legacyGold px-1 pt-1 text-sm font-medium text-white'
                        : 'inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-white hover:border-legacyGold hover:text-legacyGold'
                    }
                  >
                    Contact Brian
                  </a>
                </Link>
              </div>
              <div className='flex items-center lg:hidden'>
                {/* Mobile menu button */}
                <Disclosure.Button className='inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-legacyGold'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='lg:hidden'>
            <div className='space-y-1 pt-2 pb-3'>
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800" */}
              <Link href='/'>
                <a
                  className={
                    'block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-white hover:border-golfWithBrianGreen hover:bg-gray-50 hover:text-gray-800'
                  }
                >
                  Home
                </a>
              </Link>
              <Link href='/About'>
                <a
                  className={
                    'block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-white hover:border-golfWithBrianGreen hover:bg-gray-50 hover:text-gray-800'
                  }
                >
                  About Brian
                </a>
              </Link>
              <Link href='/#lessons'>
                <a
                  className={
                    'block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-white hover:border-golfWithBrianGreen hover:bg-gray-50 hover:text-gray-800'
                  }
                >
                  Lessons
                </a>
              </Link>
              <Link href='/#sponsors'>
                <a
                  className={
                    'block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-white hover:border-golfWithBrianGreen hover:bg-gray-50 hover:text-gray-800'
                  }
                >
                  Sponsors
                </a>
              </Link>
              <Link href='/#contact'>
                <a
                  className={
                    'block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-white hover:border-golfWithBrianGreen hover:bg-gray-50 hover:text-gray-800'
                  }
                >
                  Contact Brian
                </a>
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
