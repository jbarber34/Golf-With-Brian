import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle,
  faBullseye,
  faChartLine,
} from '@fortawesome/free-solid-svg-icons';

export default function Features() {
  return (
    <section id='brands'>
      <div className='md:px-12 py-40'>
        <div className='grid md:grid-cols-3 sm:grid-cols-1 xl:mx-56 md:mx-2 gap-4 text-center pt-8'>
          <div className='mx-auto'>
            <i>
              <FontAwesomeIcon
                icon={faCheckCircle}
                className='text-7xl text-brightBlue mb-4'
              />
            </i>
            <h3 className='text-2xl font-black'>Easy to learn.</h3>
            <p className='px-20 w-80 mx-auto'>
              So easy to use, even your dog could lower its score.
            </p>
          </div>
          <div className='mx-auto'>
            <i>
              <FontAwesomeIcon
                icon={faBullseye}
                className='text-7xl text-brightBlue mb-4'
              />
            </i>
            <h3 className='text-2xl font-black'>Elite Clientele</h3>
            <p className='px-20 w-80 mx-auto'>
              We have worked with some of the best golfers in the world.
            </p>
          </div>
          <div className='mx-auto'>
            <i>
              <FontAwesomeIcon
                icon={faChartLine}
                className='text-7xl text-brightBlue mb-4'
              />
            </i>
            <h3 className='text-2xl font-black'>Guaranteed to work.</h3>
            <p className='px-20 w-80 mx-auto'>
              Improve your drive distance or your money back.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
