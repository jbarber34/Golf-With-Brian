import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faStore,
  faEnvelope,
  faClock,
} from '@fortawesome/free-solid-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import {
  faFacebook,
  faInstagram,
  faYelp,
} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <section id='contact'>
      <div>
        <div className='bg-brianBlue grid grid-cols-3 place-items-center'>
          <div>
            <img
              //   className='image-center'
              src='/GWB_Grey.png'
              width={200}
              alt='Golf with Brian'
            />
          </div>
          <div>
            <div className='mb-4 mt-12 lg:mx-auto lg:max-w-screen-sm'>
              <h1 className='text-center ml-2 mt-2 text-xl text-white'>
                {' '}
                Contact Us{' '}
              </h1>
              <table cellPadding={6} className='m-auto text-white'>
                <tbody>
                  <tr>
                    <td>
                      <FontAwesomeIcon
                        icon={faPhone}
                        className='fa-lg text-gwbGreen'
                      />
                    </td>
                    <td className='text-sm'>(808) 352-3318</td>
                  </tr>
                  <tr>
                    <td>
                      <FontAwesomeIcon
                        icon={faStore}
                        className='fa-lg text-gwbGreen'
                      />
                    </td>
                    <td className='text-sm'>
                      555 Golf St. <br /> Fort Myers, FL 33905
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className='fa-lg text-gwbGreen'
                      />
                    </td>
                    <td className='text-sm'>Brian.conine@golfwithbrian.com</td>
                  </tr>
                </tbody>
              </table>
              <div className='text-center p-2'>
                <a
                  className='p-3'
                  href='https://instagram.com/legacyjewelersca?igshid=YmMyMTA2M2Y='
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className='fa-xl text-gwbGreen'
                  />
                </a>
                <a
                  className='p-3'
                  href='https://www.facebook.com/golfwithbrian/'
                >
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className='fa-xl text-gwbGreen'
                  />
                </a>
                <a className='p-3' href='https://yelp.to/A8bKkCzh5sb'>
                  <FontAwesomeIcon
                    icon={faYelp}
                    className='fa-xl text-gwbGreen'
                  />{' '}
                </a>
              </div>
            </div>
          </div>
          <div className='mb-24 mt-6 lg:mx-auto lg:max-w-screen-sm'>
            <h1 className='text-center ml-2 mt-2 text-xl text-white'>
              Store Hours
            </h1>
            <table cellPadding={6} className='m-auto text-white'>
              <tbody>
                <tr>
                  <td>
                    <FontAwesomeIcon
                      icon={faClock}
                      className='fa-lg text-gwbGreen'
                    />
                  </td>
                  <td className='text-sm'>
                    Mon-Fri: 10:00am – 6:00pm <br />
                    Sat: 10:00am - 5:00pm <br />
                    Sunday: Closed
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <footer className='bg-brianBlue text-white text-center text-xs pb-2'>
          <FontAwesomeIcon icon={faCopyright} className='fa-xs text-gwbGreen' />{' '}
          2022 Golf with Brian
        </footer>
      </div>
    </section>
  );
}
