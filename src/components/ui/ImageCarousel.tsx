import { Carousel } from '@mantine/carousel';
import { AspectRatio, Image } from '@mantine/core';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const images = [
  { url: '/CarouselImages/brian_allie1.png', title: 'Brian and Allie White' },
  { url: '/CarouselImages/brian_allie2.png', title: 'Brian and Allie White' },
  { url: '/CarouselImages/brian_allie3.png', title: 'Brian and Allie White' },
  {
    url: '/CarouselImages/brian_chrisBerman.png',
    title: 'Brian and Chris Berman at QBE Shootout 2022',
  },
  {
    url: '/CarouselImages/brian_cobra.png',
    title: 'Brian at Cobra Golf Event',
  },
  { url: '/CarouselImages/brian_swing.png', title: 'Brian swinging club' },
  { url: '/CarouselImages/client_swing1.png', title: 'Client lesson' },
  { url: '/CarouselImages/image2.png', title: 'Brian and Pro Golfer' },
  { url: '/CarouselImages/titleist_balls.png', title: 'Titleist Sponsor' },
];

export default function ImageCarousel() {
  const slides = images.map((i) => (
    <Carousel.Slide key={i.url} className='my-auto text-white'>
      <AspectRatio ratio={720 / 1080} sx={{ maxWidth: 400 }} mx='auto'>
        <Image src={i.url} />
      </AspectRatio>
      <p className='text-center'>{i.title}</p>
    </Carousel.Slide>
  ));

  const autoplay = useRef(Autoplay({ delay: 4000 }));

  return (
    <div className='bg-brianBlue xl:px-20 px-8 py-20 2xl:mx-auto relative'>
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
