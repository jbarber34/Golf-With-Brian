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
<<<<<<< HEAD
          <div className='mx-auto max-w-7xl px-2 sm:px-4 lg:px-8'>
            <div className='flex h-16 justify-between'>
=======
          <div className='mx-auto px-2 sm:px-4 lg:px-8'>
            <div className='flex h-16 justify-between '>
>>>>>>> 5a63fcd199a380decbf1aea58bb55c3de06002a9
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
<<<<<<< HEAD
                        ? 'inline-flex items-center border-b-2 border-legacyGold px-1 pt-1 text-sm font-medium text-white'
                        : 'inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-white hover:border-legacyGold hover:text-legacyGold'
=======
                        ? 'inline-flex items-center border-b-2 border-golfWithBrianRed px-1 pt-1 text-sm font-medium text-white'
                        : 'inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-white hover:border-golfWithBrianRed hover:text-golfWithBrianRed'
>>>>>>> 5a63fcd199a380decbf1aea58bb55c3de06002a9
                    }
                  >
                    Home
                  </a>
                </Link>
                <Link href='/About'>
                  <a
                    className={
                      router.pathname == '/About'
<<<<<<< HEAD
                        ? 'inline-flex items-center border-b-2 border-legacyGold px-1 pt-1 text-sm font-medium text-white'
                        : 'inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-white hover:border-legacyGold hover:text-legacyGold'
                    }
                  >
                    About Brian
=======
                        ? 'inline-flex items-center border-b-2 border-golfWithBrianRed px-1 pt-1 text-sm font-medium text-white'
                        : 'inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-white hover:border-golfWithBrianRed hover:text-golfWithBrianRed'
                    }
                  >
                    About
>>>>>>> 5a63fcd199a380decbf1aea58bb55c3de06002a9
                  </a>
                </Link>
                <Link href='/#lessons'>
                  <a
                    className={
                      router.pathname == '/#lessons'
<<<<<<< HEAD
                        ? 'inline-flex items-center border-b-2 border-legacyGold px-1 pt-1 text-sm font-medium text-white'
                        : 'inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-white hover:border-legacyGold hover:text-legacyGold'
=======
                        ? 'inline-flex items-center border-b-2 border-golfWithBrianRed px-1 pt-1 text-sm font-medium text-white'
                        : 'inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-white hover:border-golfWithBrianRed hover:text-golfWithBrianRed'
>>>>>>> 5a63fcd199a380decbf1aea58bb55c3de06002a9
                    }
                  >
                    Lessons
                  </a>
                </Link>
<<<<<<< HEAD
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
=======
>>>>>>> 5a63fcd199a380decbf1aea58bb55c3de06002a9
                <Link href='/#sponsors'>
                  <a
                    className={
                      router.pathname == '/#sponsors'
<<<<<<< HEAD
                        ? 'inline-flex items-center border-b-2 border-legacyGold px-1 pt-1 text-sm font-medium text-white'
                        : 'inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-white hover:border-legacyGold hover:text-legacyGold'
=======
                        ? 'inline-flex items-center border-b-2 border-golfWithBrianRed px-1 pt-1 text-sm font-medium text-white'
                        : 'inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-white hover:border-golfWithBrianRed hover:text-golfWithBrianRed'
>>>>>>> 5a63fcd199a380decbf1aea58bb55c3de06002a9
                    }
                  >
                    Sponsors
                  </a>
                </Link>
<<<<<<< HEAD
              </div>
              <div className='flex items-center lg:hidden'>
                {/* Mobile menu button */}
                <Disclosure.Button className='inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-legacyGold'>
=======
                <Link href='/#contact'>
                  <a
                    className={
                      router.pathname == '/#contact'
                        ? 'inline-flex items-center border-b-2 border-golfWithBrianRed px-1 pt-1 text-sm font-medium text-white'
                        : 'inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-white hover:border-golfWithBrianRed hover:text-golfWithBrianRed'
                    }
                  >
                    Contact Brian
                  </a>
                </Link>
              </div>
              <div className='flex items-center lg:hidden'>
                {/* Mobile menu button */}
                <Disclosure.Button className='inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-golfWithBrianRed'>
>>>>>>> 5a63fcd199a380decbf1aea58bb55c3de06002a9
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
<<<<<<< HEAD
                    'block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-white hover:border-gwbGreen hover:bg-gray-50 hover:text-gray-800'
=======
                    'block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-white hover:border-golfWithBrianGreen hover:bg-gray-50 hover:text-gray-800'
>>>>>>> 5a63fcd199a380decbf1aea58bb55c3de06002a9
                  }
                >
                  Home
                </a>
              </Link>
              <Link href='/About'>
                <a
                  className={
<<<<<<< HEAD
                    'block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-white hover:border-gwbGreen hover:bg-gray-50 hover:text-gray-800'
=======
                    'block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-white hover:border-golfWithBrianGreen hover:bg-gray-50 hover:text-gray-800'
>>>>>>> 5a63fcd199a380decbf1aea58bb55c3de06002a9
                  }
                >
                  About Brian
                </a>
              </Link>
              <Link href='/#lessons'>
                <a
                  className={
<<<<<<< HEAD
                    'block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-white hover:border-gwbGreen hover:bg-gray-50 hover:text-gray-800'
=======
                    'block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-white hover:border-golfWithBrianGreen hover:bg-gray-50 hover:text-gray-800'
>>>>>>> 5a63fcd199a380decbf1aea58bb55c3de06002a9
                  }
                >
                  Lessons
                </a>
              </Link>
<<<<<<< HEAD
              <Link href='/#contact'>
                <a
                  className={
                    'block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-white hover:border-gwbGreen hover:bg-gray-50 hover:text-gray-800'
                  }
                >
                  Contact Brian
                </a>
              </Link>
              <Link href='/#sponsors'>
                <a
                  className={
                    'block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-white hover:border-gwbGreen hover:bg-gray-50 hover:text-gray-800'
=======
              <Link href='/#sponsors'>
                <a
                  className={
                    'block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-white hover:border-golfWithBrianGreen hover:bg-gray-50 hover:text-gray-800'
>>>>>>> 5a63fcd199a380decbf1aea58bb55c3de06002a9
                  }
                >
                  Sponsors
                </a>
              </Link>
<<<<<<< HEAD
=======
              <Link href='/#contact'>
                <a
                  className={
                    'block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-white hover:border-golfWithBrianGreen hover:bg-gray-50 hover:text-gray-800'
                  }
                >
                  Contact Brian
                </a>
              </Link>
>>>>>>> 5a63fcd199a380decbf1aea58bb55c3de06002a9
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
