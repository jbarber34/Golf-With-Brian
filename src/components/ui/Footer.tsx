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
              </h1>
              <table cellPadding={6} className='m-auto text-white'>
                <tbody>
                  <tr>
                    <td>
                      <FontAwesomeIcon
                        icon={faPhone}
                        className='fa-lg text-golfWithBrianGreen'
                      />
                    </td>
                    <td className='text-sm'>
                      {' '}
                      <a href='tel:2398392781' className='hover:underline'>
                        (239) 839-2781
                      </a>{' '}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <FontAwesomeIcon
                        icon={faStore}
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
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <FontAwesomeIcon
                        icon={faEnvelope}
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
                  </tr>
                </tbody>
              </table>
              <div className='text-center p-2'>
                <a
                  className='p-3'
                  href='https://www.instagram.com/brian_conine/'
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className='fa-xl text-golfWithBrianGreen'
                  />
                </a>
                <a
                  className='p-3'
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
            <h1 className='text-center ml-2 mt-2 text-xl text-white'>
              Store Hours
            </h1>
            <table cellPadding={6} className='m-auto text-white'>
              <tbody>
                <tr>
                  <td>
                    <FontAwesomeIcon
                      icon={faClock}
                      className='fa-lg text-golfWithBrianGreen'
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
        </footer>
      </div>
    </section>
  );
}
