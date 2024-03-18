export default function Sponsors() {
  return (
    <section id='sponsors' className='pt-8 lg:pt-20 pb-8 lg:pb-40'>
      <meta
        name='Golf Sponsors'
        content='This section lists the different Golf companies that back Golf with Brian along with discounts.'
      />
      <div className='text-center'>
        <h2
          className='font-black text-xl lg:text-5xl container-fluid text-center text-3xl my-8
        before:inline-block before:lg:w-48 before:md:w-40 before:sm:w-24 before:w-20 before:h-1 before:bg-golfWithBrianGreen before:mb-2 before:mr-8
        after:inline-block after:lg:w-48 after:md:w-40 after:sm:w-24 after:w-20 after:h-1 after:bg-golfWithBrianGreen after:mb-2 after:ml-8'
        >
          Sponsor Store
        </h2>
        {/* <p>
          Use promo code "Conine" at checkout to receive discounts for
          Aero-Swing (10%), Blue Tees (10%), and Sweet Rollz (15%).
        </p> */}
        <div className='grid grid-flow-col mx-auto mb-8 p-4 bg-brianBlue text-white lg:w-max'>
          <img
            src='/Golf_With_Brian_Red.png'
            alt='Golf with Brian Logo'
            width={100}
            className='my-auto'
          />
          <div className='grid grid-cols-1 sm:grid-cols-2 text-sm sm:text-lg'>
            <div className='my-auto md:pl-12 lg'>
              <p>Use promo code</p>{' '}
              <p className='text-golfWithBrianGreen lg:text-2xl font-extrabold'>
                "Conine"{' '}
              </p>{' '}
              <p className='pb-2 sm:pb-0'>at checkout to receive discounts </p>{' '}
            </div>
            <div className='my-auto sm:pl-12'>
              <div className='grid grid-cols-2'>
                Aero-Swing: &nbsp;
                <p className='cursiveFont text-xl'> (10%)</p>
              </div>
              <div className='grid grid-cols-2'>
                Blue Tees: &nbsp;
                <p className='cursiveFont text-xl'> (10%)</p>
              </div>
              <div className='grid grid-cols-2'>
                Sweet Rollz: &nbsp;
                <p className='cursiveFont text-xl'> (15%)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='md:px-12'>
        <div className='grid grid-cols-3 md:mx-40 mx-2 gap-4 text-center'>
          <a href='https://www.cobragolf.com/' className='my-auto'>
            <img
              className='my-auto'
              src='/CobraCrownC_Wordmark_Logo.png'
              alt='Cobra Golf Logo'
            />
          </a>
          <a href='https://www.pumagolf.com/' className='my-auto'>
            <img src='/puma_golf.png' alt='Puma Golf Logo' />
          </a>
          <a href='https://www.aero-swing.com/' className='my-auto'>
            <img src='/aero-swinglogo.png' alt='Aero Golf Swing Logo' />
          </a>
          <a href='https://www.blueteesgolf.com/' className='my-auto'>
            <img
              src='/blue_tees_nobg.png'
              alt='Bluetees Golf Logo'
              //   className='ml-24'
            />
          </a>
          <a href='https://sweetrollzgolf.com/' className='my-auto'>
            <img
              src='/sweet_rollz.png'
              alt='Sweet Rollz Golf Logo'
              //   className='ml-24'
            />
          </a>
          <a href='https://tptgolf.com/' className='my-auto'>
            <img
              src='/tpt.png'
              alt='TPT Golf Logo'
              //   className='ml-24'
            />
          </a>
          {/* <div className='h-full bg-brianBlue text-white flex flex-col justify-between min-w-min'>
            <div className='text-center my-auto px-4 py-4'>
              <img src='/Golf_With_Brian_Red.png' alt='Golf with Brian Logo' width={175} />
              <p className='w-36'>Use promo code</p>{' '}
              <p className='text-golfWithBrianGreen text-2xl font-extrabold w-36'>
                "Conine"{' '}
              </p>{' '}
              <p className='w-36'>at checkout to receive discounts </p>{' '}
              <p className='flex w-36 pt-4 pl-2'>
                Aero-Swing &nbsp;
                <p className='flex cursiveFont text-xl'> (10%)</p>
              </p>
              <p className='flex w-36 pl-2'>
                Blue Tees &nbsp;
                <p className='flex cursiveFont text-xl'> (10%)</p>
              </p>
              <p className='flex w-36 pl-2'>
                Sweet Rollz &nbsp;
                <p className='flex cursiveFont text-xl'> (15%)</p>
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
