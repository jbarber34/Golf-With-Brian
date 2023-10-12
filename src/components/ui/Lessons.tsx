export default function Lessons() {
  return (
    <section id='lessons' className='my-20 text-center'>
      <h2 className='font-black text-6xl pb-4'>
        A Plan for Every Golfer's Needs
      </h2>
      <p className='text-gray-500'>
        Simple and affordable price plans for any skill level.
      </p>
      <div className='grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-1 justify-between sm:mx-8 gap-4 text-center pt-8'>
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
              Sign Up
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
              Sign Up
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
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
