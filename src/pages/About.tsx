import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function About() {
  return (
    <div>
      <div className='lg:px-36 pt-16 bg-white'>
        <h1
          className='container-fluid text-center text-xl lg:text-3xl mt-8
          before:inline-block before:lg:w-48 before:md:w-40 before:sm:w-24 before:w-24 before:h-1 before:bg-golfWithBrianGreen before:mb-2 before:mr-8
          after:inline-block after:lg:w-48 after:md:w-40 after:sm:w-24 after:w-24 after:h-1 after:bg-golfWithBrianGreen after:mb-2 after:ml-8'
        >
          Meet Our Team
        </h1>
      </div>
      <section id='aboutBrian'>
        <meta
          name='About Golf with Brian owner Brian Conine'
          content='Golf with Brian specializes in striking irons better, driving the ball further, as well as players that want to "fix my slice".'
        />
        <div className='lg:float-left lg:mt-96 ml-12 sm:pr-4 lg:pr-0'>
          <img
            src='../../brian_swing.png'
            width={200}
            alt='Brian on the range at The Club at Westminster'
          />
          <p>Contact Brian: </p>
          <a
            href='tel:8083523318'
            className='hover:underline text-brightBlue block'
          >
            <FontAwesomeIcon
              icon={faPhone}
              className='fa-lg text-golfWithBrianGreen'
            />{' '}
            (808) 352-3318
          </a>
          <a
            href='mailto:brian.conine@golfwithbrian.com?subject=Golf with Brian - Information Request'
            className='hover:underline text-brightBlue'
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              className='fa-lg text-golfWithBrianGreen'
            />{' '}
            brian.conine@golfwithbrian.com
          </a>
        </div>
        <img
          src='../../sponsor_gear.png'
          width={200}
          alt='Titleist Golf Balls and Cobra Golf Sponsor Gear'
          className='hidden lg:float-right lg:inline lg:mt-134 2xl:mt-120 mr-12 sm:pl-4 lg:pl-0'
        />

        <div className='px-4 lg:px-56 py-8 pb-8 bg-white'>
          <div className='px-4 lg:px-36 bg-white'>
            <h3
              className='container-fluid text-3xl mt-8
        before:inline-block before:lg:w-24 before:md:w-20 before:sm:w-12 before:w-12 before:h-1 before:bg-golfWithBrianGreen before:mb-2 before:mr-8
        after:inline-block after:lg:w-24 after:md:w-20 after:sm:w-12 after:w-12 after:h-1 after:bg-golfWithBrianGreen after:mb-2 after:ml-8'
            >
              Brian
            </h3>
            <p className='py-4 bg-white indent-8'>
              Brian grew up in a small town in Upstate NY called Margaretville.
              He was a star baseball player and an honor roll student who spent
              his summers and weekends working at the local golf course, Hanah
              Mountain Resort and Country Club, working as a cart boy and a
              dishwasher at night.
            </p>
            <p className='pb-4 indent-8'>
              Throughout his high school years he worked at Hanah and learned
              the ins and outs of golf. From running the cart barn all the way
              to maintaining the golf course, even handling tournament
              operations. He also sat in on lessons as often as he could from
              the Head Professional Herman Keiser. By the time he graduated, not
              only was he proficient in all aspects of running a golf course but
              he also learned the proper mechanics and fundamentals of a golf
              swing and most importantly how to teach it on to others.
            </p>
            <p className='pb-4 indent-8'>
              After high school Brian joined the U.S. Army as a Combat Engineer
              and served for 5 years, 1 of those years was spent in Iraq
              conducting Route Clearance and locating IED’s. During his time in
              the military, golf stayed a very active part of his life, where he
              practiced and played regularly. After the Army, Brian became a
              private contractor for the Military as a UXO Technician, where he
              cleared old bomb testing sites of explosives and hazardous
              materials.
            </p>
            <p className='pb-4 indent-8'>
              A few years later Brian attended The Golf Academy of America and
              received an Associates Degree in Golf Management. That helped him
              land a job as an Outside Operations Manager for Legendary Golf
              Instructor David Leadbetter. Here Brian worked side by side with
              top players on both PGA and LPGA tours, sat in on lessons and
              assisted with drills. Brian quickly started doing all of the club
              repair work and learned to fit players and always did loft and lie
              adjustments for everyone that came to the Leadbetter Golf Academy.
            </p>
            <p className='pb-4 indent-8'>
              Brian started caddying for a few LPGA tour players as a fill in
              and on his off time worked did club fittings and lessons. Not much
              later he caught the eye of one of the largest golf club
              manufacturers in the world, Cobra Golf. Cobra/Puma Golf offered
              Brian a ambassador position to be a rep for their brand. Along
              with Cobra/Puma, Brian also landed sponsorship deals with
              Aero-Swing, iconic training to increase club head speed and power.
              Blue Tees Rangefinders which are top of the line rangefinders and
              Sweet Rollz Putter grips which are unique and stylish putter
              grips.
            </p>
            <p className='pb-4 indent-8'>
              Brian is now branding his own name, Golf With Brian. Where he
              offers exceptional service in club and ball fittings and lessons
              of all skill levels. Brian’s plan for Golf With Brian is to have
              everyone enjoy the game and find true happiness on the golf
              course. He still caddies and travels with a few LPGA tour players
              and and continues to grow his name.
            </p>
            <p className='pb-4 indent-8'>
              Brian’s unique approach to the game of golf is that he does
              everything with his clients. He doesn’t instruct, he provides
              details and examples and displays everything he teaches himself so
              you get to see it first hand. So you know that everything he has
              you do, he can do himself.{' '}
              <em>
                “That’s why I named the company <strong>Golf With Brian</strong>
                , to let my clients know that they aren’t alone and that we are
                doing this together”
              </em>{' '}
              .
            </p>
            <p className='pb-4 indent-8'>
              Brian doesn’t market a certain swing type and doesn’t have a
              “magic cure” for every golfer. He starts from the foundation and
              instills proper set up fundamentals and invites nothing but the
              best of habits to come to his clients.{' '}
              <em>
                “No matter what, for anything to last, you need a solid
                foundation.”
              </em>
            </p>
            <p className='pb-4 indent-8'>
              Brian provides the best all around service for everyone of his
              clients anything to do with golf he knows it.
            </p>
            <p className='pb-4 indent-8'>
              <em>
                “The best feeling ever is watching someone succeed and to
                witness first hand their excitement and knowing you had a part
                in that!!! No better feeling”
              </em>{' '}
              .
            </p>
          </div>
        </div>
      </section>
      <hr />
      <section id='aboutPhil'>
        <div className='lg:float-left mt-4 lg:mt-32 ml-12 sm:pr-4 lg:pr-0'>
          <img
            src='../../gwb_phil.jpg'
            width={200}
            alt='Golf with Brian Program Instructor Phil'
            className='mb-4'
          />
          <p>Contact Phil: </p>
          <a
            href='tel:2392008970'
            className='hover:underline text-brightBlue block'
          >
            <FontAwesomeIcon
              icon={faPhone}
              className='fa-lg text-golfWithBrianGreen'
            />{' '}
            (239) 200-8970
          </a>
          <a
            href='mailto:phil.bobst@golfwithbrian.com?subject=Golf with Brian - Information Request'
            className='hover:underline text-brightBlue'
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              className='fa-lg text-golfWithBrianGreen'
            />{' '}
            phil.bobst@golfwithbrian.com
          </a>
        </div>
        <div className='px-4 lg:px-56 pt-4 lg:pt-8 pb-8 bg-white lg:h-96'>
          <div className='lg:px-36 bg-white'>
            <h3
              className='container-fluid text-3xl mt-8
        before:inline-block before:lg:w-24 before:md:w-20 before:sm:w-12 before:w-12 before:h-1 before:bg-golfWithBrianGreen before:mb-2 before:mr-8
        after:inline-block after:lg:w-24 after:md:w-20 after:sm:w-12 after:w-12 after:h-1 after:bg-golfWithBrianGreen after:mb-2 after:ml-8'
            >
              Phil
            </h3>
            <p className='py-4 bg-white indent-8'>
              As a Naples native, Phil has seen all sorts of change in the
              growing area but one thing that hasn’t changed is how our bodies
              work. Phil is not only TPI Level 1, but he is Level 2 TPI
              (Titleist Performance Institute). Working with golfers for years
              correcting their body movement but more importantly explaining to
              them the importance of body mobility and stability throughout the
              golf swing to produce a good golf shot.
            </p>
            <p className='py-4 bg-white indent-8'>
              Phil specializes in understanding the correlation between a
              golfer’s physical limitations and their swing flaws. With the
              correct simple exercises Phil can eliminate those limitations and
              correct your golf swing. Phil’s truth is, fix your body and you
              can fix your swing!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
