import React from 'react';
import LessonPlanModal from './LessonPlanModal';

interface Props {
  modalThreeIsOpen: any;
  openModalThree: any;
  closeModalThree: any;
  modalSixIsOpen: any;
  openModalSix: any;
  closeModalSix: any;
  modalTenIsOpen: any;
  openModalTen: any;
  closeModalTen: any;
}

export default function Lessons({
  modalThreeIsOpen,
  openModalThree,
  closeModalThree,
  modalSixIsOpen,
  openModalSix,
  closeModalSix,
  modalTenIsOpen,
  openModalTen,
  closeModalTen,
}: Props) {
  const lessonPackages = {
    three: [
      {
        title: '3-Lesson Package',
        feature:
          'Includes Trackman Launch monitor for accurate readings and better understanding of how we are going to improve your game.',
      },
      {
        feature:
          'An initial spec out to show your before and after (video and numbers).',
      },
      {
        feature: 'One free round of golf during use of package.',
      },
      {
        feature:
          "If you eat at the restaurant one time during your package and text me a pic of the receipt. I'll reimburse you $32.",
      },
    ],
    six: [
      {
        title: '6-Lesson Package',
        feature:
          'Includes Trackman Launch monitor for accurate readings and better understanding of how we are going to improve your game.',
      },
      {
        feature:
          'An initial spec out to show your before and after (video and numbers).',
      },
      {
        feature: 'Two free rounds of golf during use of package.',
      },
      {
        feature: 'One complimentary ball fitting (Titleist golf balls).',
      },
      {
        feature:
          "If you eat at the restaurant three times during your package and text me a pic of the receipt. I'll reimburse you $65.",
      },
    ],
    ten: [
      {
        title: '10-Lesson Package',
        feature:
          'Includes Trackman Launch monitor for accurate readings and better understanding of how we are going to improve your game.',
      },
      {
        feature:
          'An initial spec out to show your before and after (video and numbers).',
      },
      {
        feature: 'Three free rounds of golf during use of package.',
      },
      {
        feature: 'One complimentary ball fitting (Titleist golf balls).',
      },
      {
        feature:
          'One complimentary on-course training. Approaching greens, course management, fairway bunkers, and lots of short game.',
      },
      {
        feature:
          "If you eat at the restaurant five times during your package and text me a pic of the receipt. I'll reimburse you $100.",
      },
    ],
  };
  return (
    <section id='lessons' className='my-20 text-center'>
      <h2
        className='font-black text-5xl pb-4 container-fluid text-center text-3xl mt-8
        before:inline-block before:xl:w-44 before:lg:w-28 before:md:w-12 before:sm:w-24 before:w-24 before:h-1 before:bg-gwbGreen before:mb-2 before:mr-8
        after:inline-block after:xl:w-44 after:lg:w-28 after:md:w-12 after:sm:w-24 after:w-24 after:h-1 after:bg-gwbGreen after:mb-2 after:ml-8'
      >
        A Plan for Every Golfer's Needs
      </h2>
      <p className='text-gray-500'>
        Simple and affordable price plans for any skill level.
      </p>

      <div
        id='detailed-pricing'
        className='mt-8 w-11/12 mx-auto overflow-x-auto border rounded-lg shadow-md bg-gray-800 border-gray-700'
      >
        <div className='overflow-hidden min-w-max'>
          <div className='grid grid-cols-4 p-4 text-sm font-medium text-gray-900 bg-gray-100 border-t border-b border-gray-200 gap-x-16 dark:bg-gray-800 dark:border-gray-700 dark:text-white'>
            <div className='flex mx-auto'>What's Included?</div>
            <div>3-Lesson</div>
            <div>6-Lesson</div>
            <div>10-Lesson</div>
          </div>
          <div className='grid grid-cols-4 px-4 py-5 text-sm text-gray-700 border-b border-gray-200 gap-x-16 dark:border-gray-700'>
            <div className='text-gray-500 dark:text-gray-400'>
              Initial Assessment{' '}
              {/*(
              <a href='#' className='text-blue-600 hover:underline'>
                view all
              </a>
              ) */}
            </div>
            <div>
              <svg
                className='w-5 h-5 text-green-500 mx-auto'
                aria-hidden='true'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                  clip-rule='evenodd'
                ></path>
              </svg>
            </div>
            <div>
              <svg
                className='w-5 h-5 text-green-500 mx-auto'
                aria-hidden='true'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                  clip-rule='evenodd'
                ></path>
              </svg>
            </div>
            <div>
              <svg
                className='w-5 h-5 text-green-500 mx-auto'
                aria-hidden='true'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                  clip-rule='evenodd'
                ></path>
              </svg>
            </div>
          </div>
          <div className='grid grid-cols-4 px-4 py-5 text-sm text-gray-700 border-b border-gray-200 gap-x-16 dark:border-gray-700'>
            <div className='text-gray-500 dark:text-gray-400'>
              Trackman Monitoring
              {/* (
              <a href='#' className='text-blue-600 hover:underline'>
                view demo
              </a>
              ) */}
            </div>
            <div>
              <svg
                className='w-5 h-5 text-green-500 mx-auto'
                aria-hidden='true'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                  clip-rule='evenodd'
                ></path>
              </svg>
            </div>
            <div>
              <svg
                className='w-5 h-5 text-green-500 mx-auto'
                aria-hidden='true'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                  clip-rule='evenodd'
                ></path>
              </svg>
            </div>
            <div>
              <svg
                className='w-5 h-5 text-green-500 mx-auto'
                aria-hidden='true'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                  clip-rule='evenodd'
                ></path>
              </svg>
            </div>
          </div>
          <div className='grid grid-cols-4 px-4 py-5 text-sm text-gray-700 border-b border-gray-200 gap-x-16 dark:border-gray-700 dark:text-white'>
            <div className='text-gray-500 dark:text-gray-400'>
              Included Rounds of Golf (18 holes )
            </div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </div>
          <div className='grid grid-cols-4 px-4 py-5 text-sm text-gray-700 border-b border-gray-200 gap-x-16 dark:border-gray-700'>
            <div className='text-gray-500 dark:text-gray-400'>
              Ball Fitting (Titleist balls)
            </div>
            <div>
              <svg
                className='w-5 h-5 text-red-500 mx-auto'
                aria-hidden='true'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M16,11H2v-2h14V17z'
                  clip-rule='evenodd'
                ></path>
              </svg>
            </div>
            <div>
              <svg
                className='w-5 h-5 text-green-500 mx-auto'
                aria-hidden='true'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                  clip-rule='evenodd'
                ></path>
              </svg>
            </div>
            <div>
              <svg
                className='w-5 h-5 text-green-500 mx-auto'
                aria-hidden='true'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                  clip-rule='evenodd'
                ></path>
              </svg>
            </div>
          </div>
          <div className='grid grid-cols-4 px-4 py-5 text-sm text-gray-700 border-b border-gray-200 gap-x-16 dark:border-gray-700'>
            <div className='text-gray-500 dark:text-gray-400'>
              On-Course Training
            </div>
            <div>
              <svg
                className='w-5 h-5 text-red-500 mx-auto'
                aria-hidden='true'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M16,11H2v-2h14V17z'
                  clip-rule='evenodd'
                ></path>
              </svg>
            </div>
            <div>
              <svg
                className='w-5 h-5 text-red-500 mx-auto'
                aria-hidden='true'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M16,11H2v-2h14V17z'
                  clip-rule='evenodd'
                ></path>
              </svg>
            </div>
            <div>
              <svg
                className='w-5 h-5 text-green-500 mx-auto'
                aria-hidden='true'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                  clip-rule='evenodd'
                ></path>
              </svg>
            </div>
          </div>
          <div className='grid grid-cols-4 px-4 py-5 text-sm text-gray-700 border-b border-gray-200 gap-x-16 dark:border-gray-700 dark:text-white'>
            <div className='text-gray-500 dark:text-gray-400'>Rewards</div>
            <div>Up to $32</div>
            <div>Up to $65</div>
            <div>Up to $100</div>
          </div>
          <div className='grid grid-cols-4 px-4 py-5 text-sm text-gray-700 font-bold border-gray-200 gap-x-16 dark:border-gray-700 dark:text-white'>
            <div></div>
            <div className='mb-4'>$325 (save $50)</div>
            <div className='mb-4'>$600 (save $150)</div>

            <div className='mb-4'>$1,000 (save $250)</div>

            <div className='text-gray-500 dark:text-gray-400'></div>
            <div>
              <LessonPlanModal
                content={lessonPackages.three}
                open={openModalThree}
                close={closeModalThree}
                modalIsOpened={modalThreeIsOpen}
              ></LessonPlanModal>
            </div>
            <div>
              <LessonPlanModal
                content={lessonPackages.six}
                open={openModalSix}
                close={closeModalSix}
                modalIsOpened={modalSixIsOpen}
              ></LessonPlanModal>
            </div>
            <div>
              <LessonPlanModal
                content={lessonPackages.ten}
                open={openModalTen}
                close={closeModalTen}
                modalIsOpened={modalTenIsOpen}
              ></LessonPlanModal>
            </div>
          </div>
          <div className='text-xs text-gray-500 text-left pl-4'>
            *All perks from the plan must be used between the first and last
            lesson
          </div>
        </div>
      </div>
      {/* <div className='grid grid-cols-1 lg:grid-cols-5 sm:grid-cols-1 justify-between sm:mx-8 gap-4 text-center pt-8'>
        <div className='bg-white border rounded-lg shadow-md bg-gray-800 border-gray-700'>
          <p className='py-4 text-2xl font-black bg-gray-300 rounded-t-lg'>
            3-Lessons
          </p>
          <div className='p-5'>
            <h5 className='mb-2 text-4xl font-bold tracking-tight text-white'>
              $325 (save $50)
            </h5>
            <p className='mb-3 font-normal text-gray-400'>
              Initial Video Assessment
            </p>
            <p className='mb-3 font-normal text-gray-400'>
              Access To Lession Of The Month
            </p>
            <p className='mb-3 font-normal text-gray-400'>
              Bi-Montly Video Coaching
            </p>
            <button
              type='button'
              className='py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-700 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-700 w-56'
            >
              Learn More
            </button>
          </div>
        </div>
        <div className='bg-white border rounded-lg shadow-md bg-gray-800 border-gray-700'>
          <p className='py-4 text-2xl font-black bg-gray-300 rounded-t-lg'>
            Local Legend
          </p>
          <div className='p-5'>
            <h5 className='mb-2 text-4xl font-bold tracking-tight text-white'>
              $100 / mo
            </h5>
            <p className='mb-3 font-normal text-gray-400'>
              30-Minute Initial In-Person Assessment
            </p>
            <p className='mb-3 font-normal text-gray-400'>
              Unlimited Lession Video Access
            </p>
            <p className='mb-3 font-normal text-gray-400'>
              Monthly In-Person Coaching
            </p>
            <button
              type='button'
              className='py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-700 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-700 w-56'
            >
              Learn More
            </button>
          </div>
        </div>
        <div className='bg-white border rounded-lg shadow-md bg-gray-800 border-gray-700'>
          <p className='py-4 text-2xl font-black bg-gray-300 rounded-t-lg'>
            PGA Tour
          </p>
          <div className='p-5'>
            <h5 className='mb-2 text-4xl font-bold tracking-tight text-white'>
              $400 / mo
            </h5>
            <p className='mb-3 font-normal text-gray-400'>
              1-Hour Initial In-Person Assessment
            </p>
            <p className='mb-3 font-normal text-gray-400'>
              Unlimited Lession Video Access
            </p>
            <p className='mb-3 font-normal text-gray-400'>
              Weekly In-Person Coaching
            </p>
            <button
              type='button'
              className='py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-700 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-700 w-56'
            >
              Learn More
            </button>
          </div>
        </div>
        <div className='bg-white border rounded-lg shadow-md bg-gray-800 border-gray-700'>
          <p className='py-4 text-2xl font-black bg-gray-300 rounded-t-lg'>
            Casual
          </p>
          <div className='p-5'>
            <h5 className='mb-2 text-4xl font-bold tracking-tight text-white'>
              $10 / mo
            </h5>
            <p className='mb-3 font-normal text-gray-400'>
              Initial Video Assessment
            </p>
            <p className='mb-3 font-normal text-gray-400'>
              Access To Lession Of The Month
            </p>
            <p className='mb-3 font-normal text-gray-400'>
              Bi-Montly Video Coaching
            </p>
            <button
              type='button'
              className='py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-700 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-700 w-56'
            >
              Learn More
            </button>
          </div>
        </div>
        <div className='bg-white border rounded-lg shadow-md bg-gray-800 border-gray-700'>
          <p className='py-4 text-2xl font-black bg-gray-300 rounded-t-lg'>
            Casual
          </p>
          <div className='p-5'>
            <h5 className='mb-2 text-4xl font-bold tracking-tight text-white'>
              $10 / mo
            </h5>
            <p className='mb-3 font-normal text-gray-400'>
              Initial Video Assessment
            </p>
            <p className='mb-3 font-normal text-gray-400'>
              Access To Lession Of The Month
            </p>
            <p className='mb-3 font-normal text-gray-400'>
              Bi-Montly Video Coaching
            </p>
            <button
              type='button'
              className='py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-700 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-700 w-56'
            >
              Learn More
            </button>
          </div>
        </div>
      </div> */}
    </section>
  );
}
