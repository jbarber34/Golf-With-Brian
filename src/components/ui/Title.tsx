import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGolfBall } from '@fortawesome/free-solid-svg-icons';

export default function Title() {
  return (
    <div className='py-16 relative text-white title-image'>
      <div className='absolute inset-0 bg-brianBlue opacity-80'></div>
      <div className='order-2 lg:order-1 pt-16 m-auto mt-12 md:mt-24 lg:mt-28  w-10/12 font-extrabold xl:col-span-2 text-center relative'>
        <h2 className='text-3xl xl:text-5xl pb-4'>
          Fort Myers Premium Golf Lessons and Club Fittings
        </h2>
        <div className='flex text-right justify-end'>
          <div className='text-xl xl:text-2xl w-8/12 xl:w-1/2'>
            <em>
              "There's no magic cure, let's get better together, one swing at a
              time!"
            </em>
            <br />
            <p className='confidentialInformation'>-Brian Conine</p>
          </div>
        </div>

        {/* Sponsor logo buttons */}
        {/* <div className='grid grid-cols-1 xl:grid-cols-2 pt-12 mx-auto'>
          <div className='xl:text-2xl w-64 mx-auto'>
            <Link href='https://www.cobragolf.com/'>
              <button className='bg-slate-900 border-solid border-2 border-slate-900 hover:bg-white hover:text-black text-white font-bold py-2 px-4 rounded-md'>
                <a>
                  <FontAwesomeIcon icon={faGolfBall} className='fa-md' />{' '}
                  Cobra/Puma
                </a>
              </button>
            </Link>
          </div>
          <div className='xl:text-2xl w-64 pt-4 xl:pt-0 mx-auto'>
            <Link href='https://www.aero-swing.com/'>
              <button className='bg-clear border-solid border-2 hover:border-black hover:text-black text-white font-bold py-2 px-4 rounded-md'>
                <a>
                  <FontAwesomeIcon icon={faGolfBall} className='fa-md' />{' '}
                  Aero-Swing
                </a>
              </button>
            </Link>
          </div>
        </div> */}
      </div>
      <div>
        {/* <img
          className='m-auto mt-24 mb-8 border-solid border-4 border-neutral-50 rounded'
          src='/brian_cobra.jpeg'
          width={400}
          alt='Golf with Brian Swing Coach Brian Conine'
        /> */}
      </div>
    </div>
  );
}
