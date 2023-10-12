import React from 'react';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
/* Install pure-react-carousel using -> npm i pure-react-carousel */
export default function Testimonials() {
  return (
    <div className='grid sm:grid-flow-col mt-12'>
      <meta
        name='Golf Lesson Client Testimonials'
        content='This section offers feedback from Golf with Brian Clients. Brian has helped implement a swing overhaul, with an easy to understand coaching style and ability to fit players for clubs to fit their golf program.'
      />
      <div>
        <div className='flex items-center justify-between w-full z-0'>
          <div className='w-1/3 bg-white h-full' />
          <div className='w-4/6 ml-16 bg-gray-100 h-full' />
        </div>
        <div className='bg-brightBlue xl:px-20 px-8 py-20 2xl:mx-auto relative z-40'>
          {/* @ts-ignore */}
          <CarouselProvider
            naturalSlideWidth={100}
            isIntrinsicHeight={true}
            totalSlides={2}
            isPlaying
            interval={4000}
          >
            <h1 className='text-5xl text-center font-bold xl:block hidden leading-tight text-white'>
              What our customers are saying
            </h1>
            <h1 className='text-5xl text-center font-bold xl:hidden block leading-tight lg:leading-10 text-white'>
              What our customers are saying
            </h1>
            <div
              className='flex justify-between max-w-min m-auto items-center mt-4 before:inline-block before:md:w-52 before:sm:w-40 before:w-24 before:h-1 before:bg-golfWithBrianGreen before:mr-8
            after:inline-block after:md:w-52 after:sm:w-40 after:w-24 after:h-1 after:bg-golfWithBrianGreen after:ml-8
'
            >
              <i>
                <FontAwesomeIcon icon={faStar} className='text-xs text-white' />
              </i>
              <i>
                <FontAwesomeIcon icon={faStar} className='text-xs text-white' />
              </i>
              <i>
                <FontAwesomeIcon icon={faStar} className='text-xs text-white' />
              </i>
              <i>
                <FontAwesomeIcon icon={faStar} className='text-xs text-white' />
              </i>
              <i>
                <FontAwesomeIcon icon={faStar} className='text-xs text-white' />
              </i>
            </div>
            <Slider>
              {/* @ts-ignore */}
              <Slide index={0} tabIndex='null'>
                <div className='flex'>
                  <div className='mt-14 md:flex'>
                    {/* <div className='relative lg:w-1/2 sm:w-96 xl:h-96 h-80'>
                    <img
                      src='https://i.ibb.co/4g1D9cv/imgslider1.png'
                      alt='image of profile'
                      className='w-full h-full flex-shrink-0 object-fit object-cover shadow-lg rounded'
                    />
                    <div className='w-32 md:flex hidden items-center justify-center absolute top-0 -mr-16 -mt-14 right-0 h-32 bg-indigo-100 rounded-full'>
                      <img
                        src='https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg1.svg'
                        alt='commas'
                      />
                    </div>
                  </div> */}
                    <div className='w-full xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between'>
                      <div>
                        <h1 className='text-2xl font-semibold xl:leading-loose text-white'>
                          I love the feedback that Brian gives!
                        </h1>
                        <p className='text-base font-medium leading-6 mt-4 text-gray-300'>
                          Brian has been coaching my son Brennen for the last 6
                          months. My son was an intermediate golfer who had been
                          in a few golf tournaments, but had also grown 8 inches
                          in one year. We needed a swing overhaul. Brennen had
                          seen a few different coaches before Brian, but after
                          just one session with Brian saw results and really
                          liked his coaching style. After that first session,
                          Brian worked with me to come up with a training plan
                          for Brennen that worked with our schedule and budget.
                          Brian was able to fit golf clubs for Brennen to get
                          him using the right equipment as he really worked on
                          Brennen's fundamentals. I love the feedback that Brian
                          gives, with written reports on what he worked on,
                          videos to show mechanics, and what my son needs to
                          practice for the next time. Brian mixes golf
                          improvement tools along with just solid functional
                          swing patterns to help Brennen improve his game.
                          Brennen is looking forward to his spring golf season
                          as well as leading his 8th grade golf team.
                        </p>
                      </div>
                      <div className='mt-8'>
                        <p className='text-base font-medium leading-4 text-white'>
                          Chrysten Foley
                        </p>
                        <p className='text-base leading-4 mt-2 mb-4 text-gray-300'>
                          Fort Myers, FL
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Slide>
              <Slide index={1}>
                <div
                  className='flex relative'
                  style={{ transform: 'translateX(0%)' }}
                >
                  <div className='mt-14 md:flex'>
                    <div className='w-full xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between'>
                      <div>
                        <h1 className='text-2xl font-semibold xl:leading-loose text-white'>
                          Brian is a great motivator!
                        </h1>
                        <p className='text-base font-medium leading-6 mt-4 text-gray-300'>
                          Brian is my fourth swing teacher, he took me from a 10
                          handicap to a 5! He has worked with some of the best
                          in the game and now I know why. You shouldn't be
                          afraid to ask Brian questions, he will take the time
                          to answer with deeply thought out answers. I HIGHLY
                          recommend Brian, beginner, advanced, man, women, or
                          youth, he's great with everyone!
                        </p>
                      </div>
                      <div className='mt-8'>
                        <p className='text-base font-medium leading-4 text-white'>
                          Mitch Zehr
                        </p>
                        <p className='text-base leading-4 mt-2 mb-4 text-gray-300'>
                          North Ft. Myers, FL
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Slide>
            </Slider>
            <div className='flex items-center mt-8'>
              <ButtonBack
                className='cursor-pointer '
                role='button'
                aria-label='previous slide'
              >
                <i>
                  <FontAwesomeIcon
                    icon={faArrowLeft}
                    className='text-xs text-white'
                  />
                </i>
              </ButtonBack>

              <ButtonNext
                role='button'
                aria-label='next slide'
                className='cursor-pointer ml-2'
              >
                <i>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className='text-2xl text-white'
                  />
                </i>
              </ButtonNext>
            </div>
          </CarouselProvider>
        </div>
      </div>
    </div>
  );
}
