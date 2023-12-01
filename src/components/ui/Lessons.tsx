import React from 'react';
import LessonCard from './LessonCard';

interface Props {
  modalBasicIsOpen: any;
  openModalBasic: any;
  closeModalBasic: any;
  modalJuniorIsOpen: any;
  openModalJunior: any;
  closeModalJunior: any;
  modalPlayingIsOpen: any;
  openModalPlaying: any;
  closeModalPlaying: any;
  modalAcceleratorIsOpen: any;
  openModalAccelerator: any;
  closeModalAccelerator: any;
  modalAFIsOpen: any;
  openModalAF: any;
  closeModalAF: any;
  modalFittingIsOpen: any;
  openModalFitting: any;
  closeModalFitting: any;
  modalTenPackIsOpen: any;
  openModalTenPack: any;
  closeModalTenPack: any;
}

export default function Lessons({
  modalBasicIsOpen,
  openModalBasic,
  closeModalBasic,
  modalJuniorIsOpen,
  openModalJunior,
  closeModalJunior,
  modalPlayingIsOpen,
  openModalPlaying,
  closeModalPlaying,
  modalAcceleratorIsOpen,
  openModalAccelerator,
  closeModalAccelerator,
  modalAFIsOpen,
  openModalAF,
  closeModalAF,
  modalFittingIsOpen,
  openModalFitting,
  closeModalFitting,
  modalTenPackIsOpen,
  openModalTenPack,
  closeModalTenPack,
}: Props) {
  const lessonPackages = {
    basic: [
      {
        title: 'One and Done',
        feature:
          'One on one session with Brian Conine that offers instruction focused on the needs of the golfer.',
      },
      {
        feature:
          'The use of Trackman and a video summary with voice over are also included.',
      },
    ],
    basicDetails: {
      title: 'One and Done',
      price: '$125',
      description: "When you only need one lesson, we've got you",
    },
    junior: [
      {
        title: 'Junior Training Package',
        feature: '4 Sessions',
      },
      {
        subFeature: '2 one-hour on-range lessons',
      },
      {
        subFeature: '1-hour mobility and stability training with Phil Bobst',
      },
      {
        subFeature: '9-hole playing lesson',
      },
    ],
    juniorDetails: {
      title: 'Junior (16 & Under)',
      price: '$200',
      description: 'Get your junior playing their best golf',
    },
    playing: [
      {
        title: 'Playing Lesson',
        feature: '30-minute range warm up',
      },
      {
        feature: 'Course management strategizing',
      },
      {
        feature: 'Complimentary round of golf',
      },
      {
        feature: '6 complimentary golf balls',
      },
      {
        feature: 'Lunch is on us!',
      },
    ],
    playingDetails: {
      title: 'Playing Lesson',
      price: '$250',
      description:
        'Play a round of golf with Brian and learn how to lower your score',
    },
    accelerator: [
      {
        title: 'Accelerator Package',
        feature: 'Full bag fitting (1.5 hours)',
      },
      {
        feature: '"Get Off The Tee" Training (1-hour)',
      },
      {
        subFeature:
          'Use Trackman to focus on how you can drive the ball further.',
      },
      {
        feature: '100 Yards and In Training (1-hour)',
      },
    ],
    acceleratorDetails: {
      title: 'Accelerator Package',
      price: '$300',
      description:
        'Just like the title says, accelerate your game to the next level',
    },
    areaFocus: [
      {
        title: 'Area Focus Package',
        feature: 'This package helps you improve specific areas of your game',
      },
      {
        feature:
          'Areas include: Irons(5-9), Wedges(PW-64\u00b0), Hybrid and Fairway Woods, Driver, and Putter',
      },
      {
        feature: 'Club specs & range session (1.5 hours)',
      },
      {
        subFeature: 'Initial club specifications',
      },
      {
        feature: 'Mobility + stability training',
      },
      {
        subFeature: 'Training with Phil Bobst (TPI Level 2 Certified)',
      },
      {
        feature: 'Range lesson (1-hour)',
      },
      {
        feature: 'On-course lesson (Approximately 1-hour)',
      },
      {
        feature: 'Session overview of all information covered in the lesson',
      },
      {
        feature: 'FREE Merchandise!',
      },
    ],
    areaFocusDetails: {
      title: 'Area Focus Training',
      price: '$500/Area',
      description:
        'Our <em>BEST VALUE</em> program to build and develop the part of your game you struggle with the most',
      bestValue: '* Most Popular',
    },
    fitting: [
      {
        title: 'Fittings',
        feature: 'Full Bag - $150 (1.5 hours)',
      },
      {
        subFeature: 'Woods, Irons, Wedges, and Putter',
      },
      {
        feature: 'Irons - $75 (1-hour)',
      },
      {
        feature: 'Woods - $50 (1-hour)',
      },
      {
        feature: 'Putter - $75 (1-hour)',
      },
      {
        subFeature: 'Includes FREE Sweet Rollz putter grip!',
      },
      {
        feature: 'Ball (Titleist) - $125 (On-course)',
      },
      {
        subFeature: 'Includes FREE dozen of the golf ball you were fitted for!',
      },
    ],
    fittingDetails: {
      title: 'Fittings',
      price: 'Pricing Varies',
      description: "From just your ball to a full bag, we've got you covered",
    },
    tenPack: [
      {
        title: '10-Lesson Package',
        feature:
          '10 one-hour, one-on-one lessons with Brian Conine that focus on the needs of the golfer',
      },
      {
        feature: 'Use whenever you want, lessons never expire',
      },
    ],
    tenPackDetails: {
      title: '10-Lesson Package',
      price: '$1,000 (Save $250)',
      description: '10 Lessons',
    },
  };
  return (
    <section id='lessons' className='my-20 text-center'>
      <meta
        name='Golf Lessons'
        content='This section lists the different golf lesson packages Golf with Brian offers.'
      />
      <h2
        className='font-black text-xl md:text-3xl xl:text-5xl pb-4 container-fluid text-center text-3xl mt-8
        before:inline-block before:xl:w-44 before:lg:w-28 before:md:w-24 before:sm:w-24 before:w-8 before:h-1 before:bg-golfWithBrianGreen before:mb-2 before:sm:mr-8 before:mr-2
        after:inline-block after:xl:w-44 after:lg:w-28 after:md:w-24 after:sm:w-24 after:w-8 after:h-1 after:bg-golfWithBrianGreen after:mb-2 after:sm:ml-8 after:ml-2'
      >
        A Plan for Every Golfer's Needs
      </h2>
      <meta
        name='Lehigh Acres/Ft. Myers location'
        content='Golf with Brian lessons are located in Lehigh Acres/Fort Myers in Lee County Florida'
      />

      <p className='text-gray-500'>
        Simple and affordable price plans for any skill level. <br />
        All lessons held at{' '}
        <a href='https://westminster-golf.com/' className='hover:underline'>
          The Club at Westminster
        </a>
        and include the use of Trackman.
      </p>
      {/* New 8/12 Setup */}
      <div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 justify-between sm:mx-8 gap-4 text-center pt-8'>
        <LessonCard
          lessonContent={lessonPackages.basic}
          lessonDetails={lessonPackages.basicDetails}
          open={openModalBasic}
          close={closeModalBasic}
          modalIsOpened={modalBasicIsOpen}
        ></LessonCard>
        <LessonCard
          lessonContent={lessonPackages.tenPack}
          lessonDetails={lessonPackages.tenPackDetails}
          open={openModalTenPack}
          close={closeModalTenPack}
          modalIsOpened={modalTenPackIsOpen}
        ></LessonCard>
        <LessonCard
          lessonContent={lessonPackages.junior}
          lessonDetails={lessonPackages.juniorDetails}
          open={openModalJunior}
          close={closeModalJunior}
          modalIsOpened={modalJuniorIsOpen}
        ></LessonCard>
        <LessonCard
          lessonContent={lessonPackages.playing}
          lessonDetails={lessonPackages.playingDetails}
          open={openModalPlaying}
          close={closeModalPlaying}
          modalIsOpened={modalPlayingIsOpen}
        ></LessonCard>
        <LessonCard
          lessonContent={lessonPackages.accelerator}
          lessonDetails={lessonPackages.acceleratorDetails}
          open={openModalAccelerator}
          close={closeModalAccelerator}
          modalIsOpened={modalAcceleratorIsOpen}
        ></LessonCard>
        <LessonCard
          lessonContent={lessonPackages.areaFocus}
          lessonDetails={lessonPackages.areaFocusDetails}
          bestValue={lessonPackages.areaFocusDetails.bestValue}
          open={openModalAF}
          close={closeModalAF}
          modalIsOpened={modalAFIsOpen}
        ></LessonCard>
        <LessonCard
          lessonContent={lessonPackages.fitting}
          lessonDetails={lessonPackages.fittingDetails}
          open={openModalFitting}
          close={closeModalFitting}
          modalIsOpened={modalFittingIsOpen}
        ></LessonCard>
      </div>

      {/* OLD WAY TO DO LESSON CARD DETAILS */}
      {/* <div className='border rounded-lg shadow-md bg-slate-800 border-gray-700'>
          <p className='py-4 text-2xl font-black bg-gray-300 rounded-t-lg'>
            One and Done
          </p>
          <div className='p-5 relative h-full lg:mb-24'>
            <div>
              <h5 className='mb-2 text-4xl font-bold tracking-tight text-white'>
                $125
              </h5>
              <p className='text-xl mb-3 font-normal text-gray-400'>
                When you only need one lesson, we've got you
              </p>
            </div>
            <LessonPlanModal
              content={lessonPackages.basic}
              open={openModalBasic}
              close={closeModalBasic}
              modalIsOpened={modalBasicIsOpen}
            ></LessonPlanModal>
          </div>
        </div>
<div className='border rounded-lg shadow-md bg-gray-800 border-gray-700'>
          <p className='py-4 text-2xl font-black bg-gray-300 rounded-t-lg'>
            When One Isn't Enough
          </p>
          <div className='p-5 relative h-full'>
            <h5 className='mb-2 text-4xl font-bold tracking-tight text-white'>
              $1,000 (Savings of $250)
            </h5>
            <p className='text-xl mb-3 font-normal text-gray-400'>10 Lessons</p>
            <LessonPlanModal
              content={lessonPackages.tenPack}
              open={openModalTenPack}
              close={closeModalTenPack}
              modalIsOpened={modalTenPackIsOpen}
            ></LessonPlanModal>
          </div>
        </div>
        <div className='border rounded-lg shadow-md bg-slate-800 border-gray-700'>
          <p className='py-4 text-2xl font-black bg-gray-300 rounded-t-lg'>
            Junior (16 & Under)
          </p>
          <div className='p-5 relative h-full lg:mb-24'>
            <h5 className='mb-2 text-4xl font-bold tracking-tight text-white'>
              $200
            </h5>
            <p className='text-xl mb-3 font-normal text-gray-400'>
              Get your junior playing their best golf
            </p>
            <LessonPlanModal
              content={lessonPackages.junior}
              open={openModalJunior}
              close={closeModalJunior}
              modalIsOpened={modalJuniorIsOpen}
            ></LessonPlanModal>
          </div>
        </div>
        <div className='border rounded-lg shadow-md bg-slate-800 border-gray-700'>
          <p className='py-4 text-2xl font-black bg-gray-300 rounded-t-lg'>
            Playing Lesson
          </p>
          <div className='p-5 relative h-full'>
            <h5 className='mb-2 text-4xl font-bold tracking-tight text-white'>
              $250
            </h5>
            <p className='text-xl mb-3 font-normal text-gray-400'>
              Play a round of golf with Brian and learn how to lower your score
            </p>
            <LessonPlanModal
              content={lessonPackages.playing}
              open={openModalPlaying}
              close={closeModalPlaying}
              modalIsOpened={modalPlayingIsOpen}
            ></LessonPlanModal>
          </div>
        </div>
        <div className='border rounded-lg shadow-md bg-slate-800 border-gray-700'>
          <p className='py-4 text-2xl font-black bg-gray-300 rounded-t-lg'>
            Accelerator Package
          </p>
          <div className='p-5 relative h-full lg:mb-24'>
            <h5 className='mb-2 text-4xl font-bold tracking-tight text-white'>
              $300
            </h5>
            <p className='text-xl mb-3 font-normal text-gray-400'>
              Just like the title says, accelerate your game to the next level
            </p>
            <LessonPlanModal
              content={lessonPackages.accelerator}
              open={openModalAccelerator}
              close={closeModalAccelerator}
              modalIsOpened={modalAcceleratorIsOpen}
            ></LessonPlanModal>
          </div>
        </div>
        <div className='border rounded-lg shadow-md bg-slate-800 border-gray-700'>
          <p className='py-4 text-2xl font-black bg-gray-300 rounded-t-lg'>
            Area Focus Training
          </p>
          <div className='p-5 relative h-full'>
            <h5 className='mb-2 text-4xl font-bold tracking-tight text-white'>
              $500/Area <em className='text-sm'>* Most Popular</em>
            </h5>
            <p className='text-xl mb-3 font-normal text-gray-400'>
              Our <em>BEST VALUE </em> program to build and develop the part of
              your game you struggle with the most
            </p>
            <div>
              <LessonPlanModal
                content={lessonPackages.areaFocus}
                open={openModalAF}
                close={closeModalAF}
                modalIsOpened={modalAFIsOpen}
              ></LessonPlanModal>
            </div>
          </div>
        </div>
        <div className='border rounded-lg shadow-md bg-gray-800 border-gray-700'>
          <p className='py-4 text-2xl font-black bg-gray-300 rounded-t-lg'>
            Fittings
          </p>
          <div className='p-5 relative h-full lg:mb-24'>
            <h5 className='mb-2 text-4xl font-bold tracking-tight text-white'>
              Pricing Varies
            </h5>
            <p className='text-xl mb-3 font-normal text-gray-400'>
              From just your ball to a full bag, we've got you covered
            </p>
            <LessonPlanModal
              content={lessonPackages.fitting}
              open={openModalFitting}
              close={closeModalFitting}
              modalIsOpened={modalFittingIsOpen}
            ></LessonPlanModal>
          </div>
        </div> */}

      {/* COMPARISON TABLE */}
      {/* <div
        id='detailed-pricing'
        className='mt-8 w-11/12 mx-auto overflow-x-auto border rounded-lg shadow-md bg-gray-800 border-gray-700'
      >
        <div className='overflow-hidden min-w-max'>
          <div className='grid grid-cols-4 p-4 text-sm font-medium text-gray-900 bg-gray-100 border-t border-b border-gray-200 gap-x-16 dark:bg-gray-800 dark:border-gray-700 dark:text-white'>
            <div className='flex mx-auto'>What's Included?</div>
            <div>Basic Lesson</div>
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
      {/* </div>
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
              Trackman Monitoring */}
      {/* (
              <a href='#' className='text-blue-600 hover:underline'>
                view demo
              </a>
              ) */}
      {/* </div>
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
          <div className='text-xs text-gray-500 text-left pl-4 pb-4'>
            *All perks from the plan must be used between the first and last
            lesson
          </div>
        </div>
      </div> */}

      {/* EXAMPLE CARDS */}
      {/* <div className='grid grid-cols-1 lg:grid-cols-5 sm:grid-cols-1 justify-between sm:mx-8 gap-4 text-center pt-8'>
        <div className='border rounded-lg shadow-md bg-gray-800 border-gray-700'>
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
              className='py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none rounded-lg border border-gray-200 hover:bg-gray-700 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-700 w-56'
            >
              Learn More
            </button>
          </div>
        </div>
        <div className='border rounded-lg shadow-md bg-gray-800 border-gray-700'>
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
              className='py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none rounded-lg border border-gray-200 hover:bg-gray-700 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-700 w-56'
            >
              Learn More
            </button>
          </div>
        </div>
        <div className='border rounded-lg shadow-md bg-gray-800 border-gray-700'>
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
              className='py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none rounded-lg border border-gray-200 hover:bg-gray-700 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-700 w-56'
            >
              Learn More
            </button>
          </div>
        </div>
        <div className='border rounded-lg shadow-md bg-gray-800 border-gray-700'>
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
              className='py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none rounded-lg border border-gray-200 hover:bg-gray-700 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-700 w-56'
            >
              Learn More
            </button>
          </div>
        </div>
        <div className='border rounded-lg shadow-md bg-gray-800 border-gray-700'>
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
              className='py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none rounded-lg border border-gray-200 hover:bg-gray-700 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-700 w-56'
            >
              Learn More
            </button>
          </div>
        </div>
      </div> */}
    </section>
  );
}
