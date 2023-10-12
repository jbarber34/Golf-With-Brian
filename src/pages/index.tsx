import Features from '~/components/ui/Features';
// import Services from '~/components/ui/Services';
import Testimonials from '~/components/ui/Testimonials';
import Title from '~/components/ui/Title';
import Lessons from '~/components/ui/Lessons';
import Sponsors from '~/components/ui/Sponsors';
import ImageCarousel from '~/components/ui/ImageCarousel';
import { useDisclosure } from '@mantine/hooks';
import mod from 'zod/lib';

function Home() {
  const [modalThreeIsOpen, { open: modalThreeOpen, close: modalThreeClosed }] =
    useDisclosure(false);
  const [modalSixIsOpen, { open: modalSixOpen, close: modalSixClosed }] =
    useDisclosure(false);
  const [modalTenIsOpen, { open: modalTenOpen, close: modalTenClosed }] =
    useDisclosure(false);

  return (
    <div>
      <Title />
      <Features />
      {/* <Services /> */}
      <Testimonials />
      <Lessons
        modalThreeIsOpen={modalThreeIsOpen}
        modalSixIsOpen={modalSixIsOpen}
        modalTenIsOpen={modalTenIsOpen}
        openModalThree={modalThreeOpen}
        closeModalThree={modalThreeClosed}
        openModalSix={modalSixOpen}
        closeModalSix={modalSixClosed}
        openModalTen={modalTenOpen}
        closeModalTen={modalTenClosed}
      />
      <ImageCarousel />
      <Sponsors />
    </div>
  );
}
export default Home;
