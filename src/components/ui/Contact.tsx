// import Map from '../GoogleMap/Map'; // ADD BACK WHEN DONE TESTING
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faStore } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faInstagram,
  faYelp,
} from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
  return (
    <section id='contact'>
      {/* <div className='lg:my-24 lg:grid lg:grid-cols-2 lg:gap-4 place-content-evenly h-48'> */}
      <div>
        <div>
          {/* {' '} // ADD BACK WHEN DONE TESTING
            <Map />{' '} */}
        </div>
        <div className='mb-12 lg:mt-12 lg:mx-auto border-16 border-black lg:max-w-screen-sm'>
          <h1 className='text-center ml-2 mt-2 text-2xl'> Contact Us </h1>
          <table cellPadding={6} className='m-auto'>
            <tbody>
              <tr>
                <td>
                  <FontAwesomeIcon
                    icon={faPhone}
                    className='fa-lg text-black'
                  />
                </td>
                <td>(916) 510-2130</td>
              </tr>
              <tr>
                <td>
                  <FontAwesomeIcon
                    icon={faStore}
                    className='fa-lg text-black'
                  />
                </td>
                <td>
                  618 E Bidwell St. <br /> Folsom, CA 95630
                </td>
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
                className='fa-xl text-black'
              />
            </a>
            <a
              className='p-3'
              href='https://m.facebook.com/YourLegacyJewelers/'
            >
              <FontAwesomeIcon icon={faFacebook} className='fa-xl text-black' />
            </a>
            <a className='p-3' href='https://yelp.to/A8bKkCzh5sb'>
              <FontAwesomeIcon icon={faYelp} className='fa-xl text-black' />{' '}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

//   /* <div className='row'>
//       <div className='col-lg-6 mt-12'>
//         <div>Google Map Placeholder</div>
//       </div>
//       <div className='md:ml-36 mt-12 col-lg-3 col-md-4 col-sm-4 border border-4 border-dark rounded-3'>
//         <h1 className='text-2xl mt-2 text-center'> Contact Us </h1>
//         <table cellPadding={6}>
//           <tr>
//             <td>
//               <i className='fa fa-phone'></i>
//             </td>
//             <td>(916) 510-2130</td>
//           </tr>
//           <tr>
//             <td>
//               <i className='fas fa-store'></i>
//             </td>
//             <td>
//               618 E Bidwell St. <br /> Folsom, CA 95630
//             </td>
//           </tr>
//         </table>
//       </div>
//     </div> */
