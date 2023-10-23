interface Props {
  testimonial: {
    header: string;
    content: string;
    client: string;
    location: string;
  };
}

export default function TestimonialSlide({ testimonial }: Props) {
  return (
    <div className='flex relative' style={{ transform: 'translateX(0%)' }}>
      <div className='mt-14 md:flex'>
        <div className='w-full xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between'>
          <div>
            <h1 className='text-2xl font-semibold xl:leading-loose text-white'>
              {testimonial.header}
            </h1>
            <p className='text-base font-medium leading-6 mt-4 text-gray-300'>
              {testimonial.content}
            </p>
          </div>
          <div className='mt-8'>
            <p className='text-base font-medium leading-4 text-white'>
              {testimonial.client}
            </p>
            <p className='text-base leading-4 mt-2 mb-4 text-gray-300'>
              {testimonial.location}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
