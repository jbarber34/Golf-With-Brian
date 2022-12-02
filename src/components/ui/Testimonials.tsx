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
          >
            <h1 className='text-5xl text-center font-bold xl:block hidden leading-tight text-white'>
              What our customers are saying
            </h1>
            <h1 className='text-5xl text-center font-bold xl:hidden block leading-tight lg:leading-10 text-white'>
              What our customers are saying
            </h1>
            <div
              className='flex justify-between max-w-min m-auto items-center mt-4 before:inline-block before:md:w-52 before:sm:w-40 before:w-24 before:h-1 before:bg-gwbGreen before:mr-8
            after:inline-block after:md:w-52 after:sm:w-40 after:w-24 after:h-1 after:bg-gwbGreen after:ml-8
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
                          Some of the best work that was done!
                        </h1>
                        <p className='text-base font-medium leading-6 mt-4 text-gray-300'>
                          Our core values are at the heart of all that we do.
                          They are integrated into our daily work lives and help
                          us to remember our customers always comes first, the
                          last thank you should always comes from us.
                        </p>
                      </div>
                      <div className='mt-8'>
                        <p className='text-base font-medium leading-4 text-white'>
                          Anna Smith
                        </p>
                        <p className='text-base leading-4 mt-2 mb-4 text-gray-300'>
                          Senior Web Designer
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
                          Some of the best work that was done!
                        </h1>
                        <p className='text-base font-medium leading-6 mt-4 text-gray-300'>
                          Our core values are at the heart of all that we do.
                          They are integrated into our daily work lives and help
                          us to remember our customers always comes first, the
                          last thank you should always comes from us.
                        </p>
                      </div>
                      <div className='mt-8'>
                        <p className='text-base font-medium leading-4 text-white'>
                          Anna Smith
                        </p>
                        <p className='text-base leading-4 mt-2 mb-4 text-gray-300'>
                          Senior Web Designer
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
