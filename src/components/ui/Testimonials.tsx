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
import TestimonialSlide from './TestimonialSlide';
/* Install pure-react-carousel using -> npm i pure-react-carousel */
export default function Testimonials() {
  const testimonials = [
    {
      header: 'I love the feedback that Brian gives!',
      content: `Brian has been coaching my son Brennen for the last 6
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
      as well as leading his 8th grade golf team.`,
      client: 'Chrysten Foley',
      location: 'Fort Myers, FL',
    },
    {
      header: 'Brian is a great motivator!',
      content: `Brian is my fourth swing teacher, he took me from a 10
      handicap to a 5! He has worked with some of the best
      in the game and now I know why. You shouldn't be
      afraid to ask Brian questions, he will take the time
      to answer with deeply thought out answers. I HIGHLY
      recommend Brian, beginner, advanced, man, women, or
      youth, he's great with everyone!`,
      client: 'Mitch Zehr',
      location: 'North Ft. Myers, FL',
    },
    {
      header: 'Brian has a special way of making golf fun!',
      content: `I came to see Brian at a time where I had lost
      confidence in my driver. I have been to a lot of
      coaches in the past who have tried to make so many
      changes and overcomplicate the lesson that I've often
      left more confused than when I started. Brian is the
      complete opposite of that. He simplifies things and
      makes you feel completely relaxed with what you are
      doing. He only focuses on one, possibly two things
      which really enable you to work and improve on those
      before you move on to look at something else. His friendly approach to teaching makes you
      feel instantly relaxed which in turn leads to results.
      Most people getting a lesson on their driver are
      looking for how they can get more distance. Brian was
      more focused on set up and how I approached each shot
      as opposed to distance which he assured me would come
      with the correct set up. After my first one-hour
      session with Brian my set up had changed so
      significantly I could physically feel it and with that
      I was obviously seeing solid results with each shot.
      The biggest thing about Brian is it is so obvious that
      he loves the game of golf. That passion he has for the
      game is literally transferred to you when he is
      teaching. Brian has a special way of making golf fun,
      which it should be, whilst at the same time always
      putting 100% of his energy into making you better.`,
      client: 'Ed Rundle',
      location: 'Ontario, Canada',
    },
  ];

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
          <CarouselProvider
            naturalSlideHeight={100}
            naturalSlideWidth={100}
            isIntrinsicHeight={true}
            totalSlides={3}
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
                <TestimonialSlide testimonial={testimonials[0]} />
              </Slide>
              <Slide index={1}>
                <TestimonialSlide testimonial={testimonials[1]} />
              </Slide>
              <Slide index={2}>
                <TestimonialSlide testimonial={testimonials[2]} />
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
