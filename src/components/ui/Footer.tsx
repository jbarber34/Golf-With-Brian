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
<<<<<<< HEAD
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
=======
      <meta
        name='Contacting Golf with Brian'
        content='This section offers contact information for Golf with Brian swing coaching/lessons, located in Fort Myers/Lehigh Acres Florida.'
      />
      <div>
        <div className='bg-brianBlue grid grid-flow-cols sm:grid-cols-3 place-items-center mt-8'>
          <div>
            <img
              //   className='image-center'
              src='/Golf_With_Brian_Gray.png'
              width={200}
              alt='Golf with Brian - Ft. Myers Logo'
            />
          </div>
          <div>
            <div className='mb-4 sm:mt-12 lg:mx-auto lg:max-w-screen-sm'>
              <h1 className='text-center ml-2 mt-2 text-xl text-white'>
                {' '}
                Contact Brian{' '}
>>>>>>> 5a63fcd199a380decbf1aea58bb55c3de06002a9
              </h1>
              <table cellPadding={6} className='m-auto text-white'>
                <tbody>
                  <tr>
                    <td>
                      <FontAwesomeIcon
                        icon={faPhone}
<<<<<<< HEAD
                        className='fa-lg text-gwbGreen'
                      />
                    </td>
                    <td className='text-sm'>(808) 352-3318</td>
=======
                        className='fa-lg text-golfWithBrianGreen'
                      />
                    </td>
                    <td className='text-sm'>
                      {' '}
                      <a href='tel:8083523318' className='hover:underline'>
                        (808) 352-3318
                      </a>{' '}
                    </td>
>>>>>>> 5a63fcd199a380decbf1aea58bb55c3de06002a9
                  </tr>
                  <tr>
                    <td>
                      <FontAwesomeIcon
                        icon={faStore}
<<<<<<< HEAD
                        className='fa-lg text-gwbGreen'
                      />
                    </td>
                    <td className='text-sm'>
                      555 Golf St. <br /> Fort Myers, FL 33905
=======
                        className='fa-lg text-golfWithBrianGreen'
                      />
                    </td>
                    <td className='text-sm'>
                      <a
                        href='http://maps.google.com/?q=2199 Berkley Way, Lehigh Acres, Florida 33973'
                        className='hover:underline'
                      >
                        The Club at Westminster
                        <br /> 2199 Berkley Way <br /> Lehigh Acres, FL 33973
                      </a>
>>>>>>> 5a63fcd199a380decbf1aea58bb55c3de06002a9
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <FontAwesomeIcon
                        icon={faEnvelope}
<<<<<<< HEAD
                        className='fa-lg text-gwbGreen'
                      />
                    </td>
                    <td className='text-sm'>brian@golfwithbrian.com</td>
=======
                        className='fa-lg text-golfWithBrianGreen'
                      />
                    </td>
                    <td className='text-sm'>
                      {' '}
                      <a
                        href='mailto:Brian.conine@golfwithbrian.com?subject=Golf with Brian - Information Request'
                        className='hover:underline'
                      >
                        Brian.conine@golfwithbrian.com
                      </a>{' '}
                    </td>
>>>>>>> 5a63fcd199a380decbf1aea58bb55c3de06002a9
                  </tr>
                </tbody>
              </table>
              <div className='text-center p-2'>
                <a
                  className='p-3'
<<<<<<< HEAD
                  href='https://instagram.com/legacyjewelersca?igshid=YmMyMTA2M2Y='
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className='fa-xl text-gwbGreen'
=======
                  href='https://www.instagram.com/brian_conine/'
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className='fa-xl text-golfWithBrianGreen'
>>>>>>> 5a63fcd199a380decbf1aea58bb55c3de06002a9
                  />
                </a>
                <a
                  className='p-3'
<<<<<<< HEAD
                  href='https://m.facebook.com/YourLegacyJewelers/'
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
=======
                  href='https://www.facebook.com/golfwithbrian/'
                >
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className='fa-xl text-golfWithBrianGreen'
                  />
                </a>
                {/* <a className='p-3' href=''>
                  <FontAwesomeIcon
                    icon={faYelp}
                    className='fa-xl text-golfWithBrianGreen'
                  />{' '}
                </a> */}
              </div>
            </div>
          </div>
          {/* <div className='mb-24 mt-6 lg:mx-auto lg:max-w-screen-sm'>
>>>>>>> 5a63fcd199a380decbf1aea58bb55c3de06002a9
            <h1 className='text-center ml-2 mt-2 text-xl text-white'>
              Store Hours
            </h1>
            <table cellPadding={6} className='m-auto text-white'>
              <tbody>
                <tr>
                  <td>
                    <FontAwesomeIcon
                      icon={faClock}
<<<<<<< HEAD
                      className='fa-lg text-gwbGreen'
=======
                      className='fa-lg text-golfWithBrianGreen'
>>>>>>> 5a63fcd199a380decbf1aea58bb55c3de06002a9
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
<<<<<<< HEAD
          </div>
        </div>
        <footer className='bg-brianBlue text-white text-center text-xs pb-2'>
          <FontAwesomeIcon icon={faCopyright} className='fa-xs text-gwbGreen' />{' '}
          2022 Golf with Brian
=======
          </div> */}
          <div className='p-2 bg-white'>
            <a href='https://westminster-golf.com/' className='hover:underline'>
              <img
                //   className='image-center'
                src='/the_club_at_westminster.png'
                width={250}
                alt='The Club at Westminster - Lehigh Acres Logo'
              />
            </a>
          </div>
        </div>
        <footer className='bg-brianBlue text-white text-center text-xs pb-2'>
          <FontAwesomeIcon
            icon={faCopyright}
            className='fa-xs text-golfWithBrianGreen'
          />{' '}
          2023 Golf with Brian
>>>>>>> 5a63fcd199a380decbf1aea58bb55c3de06002a9
        </footer>
      </div>
    </section>
  );
}
