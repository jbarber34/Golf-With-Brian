import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGolfBall } from '@fortawesome/free-solid-svg-icons';

export default function Title() {
  return (
    <div className='bg-brianBlue text-white grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'>
      <div className='pt-16 m-auto text-3xl xl:text-5xl w-2/3 font-extrabold xl:col-span-2'>
        <h2>
          There's no magic cure, let's get better together, one day at a time!
        </h2>
        <div className='grid grid-cols-1 xl:grid-cols-2 justify-between pt-12'>
          <div className='xl:text-2xl w-64'>
            <Link href='https://www.cobragolf.com/'>
              <button className='bg-slate-900 border-solid border-2 border-slate-900 hover:bg-twinsGold text-white font-bold py-2 px-4 rounded-md'>
                <a>
                  <FontAwesomeIcon icon={faGolfBall} className='fa-md' />{' '}
                  Cobra/Puma
                </a>
              </button>
            </Link>
          </div>
          <div className='xl:text-2xl w-64 pt-4 xl:pt-0'>
            <Link href='https://www.aero-swing.com/'>
              <button className='bg-clear border-solid border-2 hover:bg-twinsGold text-white font-bold py-2 px-4 rounded-md'>
                <a>
                  <FontAwesomeIcon icon={faGolfBall} className='fa-md' />{' '}
                  Aero-Swing
                </a>
              </button>
            </Link>
          </div>
        </div>
        {/* <ul className='items-center flex mt-4 space-x-6 space-y-0 min-w-full'>
          <li className='text-black'>
            <Link href='https://www.cobragolf.com/'>
              <button className='bg-slate-900 hover:bg-twinsGold text-white font-bold py-2 px-4 rounded-md'>
                <a>
                  <FontAwesomeIcon icon={faGolfBall} className='fa-md' />{' '}
                  Cobra/Puma
                </a>
              </button>
            </Link>
          </li>
          <li className='text-black'>
            <Link href='https://www.aero-swing.com/'>
              <button className='bg-clear border-solid border-2 hover:bg-twinsGold text-white font-bold py-2 px-4 rounded-md'>
                <a>
                  <FontAwesomeIcon icon={faGolfBall} className='fa-md' />{' '}
                  Aero-Swing
                </a>
              </button>
            </Link>
          </li>
        </ul> */}
      </div>
      <div>
        <img
          className='m-auto mt-24 mb-8 border-solid border-4 border-neutral-50'
          src='/brian_cobra.jpeg'
          width={400}
          alt='coming soon'
        />
      </div>
    </div>
  );
}
