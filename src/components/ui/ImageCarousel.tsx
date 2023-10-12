import { Carousel } from '@mantine/carousel';
import { AspectRatio, Image } from '@mantine/core';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const images = [
  {
    url: '/CarouselImages/brian_allie1.png',
    title: 'Brian and Allie White after a training session on the golf course',
  },
  {
    url: '/CarouselImages/brian_allie2.png',
    title:
      'Brian and Allie White after a range session to add distance with her driver',
  },
  {
    url: '/CarouselImages/brian_allie3.png',
    title: 'Brian and Allie White after a golf tournament',
  },
  {
    url: '/CarouselImages/brian_chrisBerman.png',
    title: 'Brian fitting Chris Berman for his golf clubs at QBE Shootout 2022',
  },
  {
    url: '/CarouselImages/brian_cobra.png',
    title: 'Brian at Cobra Golf Event fitting players for clubs',
  },
  // {
  //   url: '/CarouselImages/brian_swing.png',
  //   title: 'Brian on the range at The Club at Westminster in Lehigh Acres',
  // },
  {
    url: '/CarouselImages/image2.png',
    title: 'Brian and Pei Yung Chien before an LPGA Tour event',
  },
  {
    url: '/CarouselImages/titleist_balls.png',
    title: 'Titleist Golf Balls and Cobra Golf Sponsor Gear',
  },
  {
    url: '/CarouselImages/gwb_sponsored_golfer1.png',
    title: 'Golf with Brian Sponsored Golfer',
  },
  {
    url: '/CarouselImages/gwb_sponsored_golfer2.png',
    title: 'Golf with Brian Sponsored Golfer',
  },
  // {
  //   url: '/CarouselImages/gwb_sponsored_golfer3.jpg',
  //   title: 'Golf with Brian Sponsored Golfer',
  // },
  // {
  //   url: '/CarouselImages/gwb_sponsored_golfer4.jpg',
  //   title: 'Golf with Brian Sponsored Golfer',
  // },
  {
    url: '/CarouselImages/gwb_sponsored_golfer5.jpg',
    title: 'Golf with Brian Sponsored Golfer',
  },
  {
    url: '/CarouselImages/gwb_sponsored_golfer6.jpg',
    title: 'Golf with Brian Sponsored Golfer',
  },
  {
    url: '/CarouselImages/gwb_lesson1.jpg',
    title: 'Golf with Brian Lesson',
  },
  {
    url: '/CarouselImages/gwb_lesson2.jpg',
    title: 'Golf with Brian Lesson',
  },
  // {
  //   url: '/CarouselImages/gwb_lesson3.jpg',
  //   title: 'Golf with Brian Lesson',
  // },
  {
    url: '/CarouselImages/brian_haleyMoore.jpg',
    title: 'Brian with Haley Moore',
  },
];

export default function ImageCarousel() {
  const slides = images.map((i) => (
    <Carousel.Slide key={i.url} className='my-auto text-white'>
      <AspectRatio ratio={720 / 1080} sx={{ maxWidth: 400 }} mx='auto'>
        <Image src={i.url} alt={i.title} />
      </AspectRatio>
      {/* <p className='text-center'>{i.title}</p> */}
    </Carousel.Slide>
  ));

  const autoplay = useRef(Autoplay({ delay: 4000 }));

  return (
    <div className='bg-brianBlue xl:px-20 px-8 py-20 2xl:mx-auto relative'>
      <meta
        name='Golf with Brian Golf Experiences'
        content='This section includes features and examples of the lessons Golf with Brian provides, along with the different PGA and LPGA players Brian has interacted with.'
      />
      <Carousel
        // sx={{ maxWidth: 320 }}
        // mx='auto'
        slideGap={'md'}
        align='start'
        slideSize={'50%'}
        slidesToScroll={2}
        nextControlIcon={
          <FontAwesomeIcon icon={faArrowRight} className='fa-lg text-white' />
        }
        previousControlIcon={
          <FontAwesomeIcon icon={faArrowLeft} className='fa-lg text-white' />
        }
        loop
        withIndicators
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
      >
        {slides}
      </Carousel>
    </div>
  );
}
