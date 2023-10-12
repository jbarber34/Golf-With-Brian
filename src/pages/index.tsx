import Features from '~/components/ui/Features';
<<<<<<< HEAD
import Services from '~/components/ui/Services';
import Testimonials from '~/components/ui/Testimonials';
import Title from '~/components/ui/Title';
import Lessons from '~/components/ui/Lessons';

function Home() {
=======
import Testimonials from '~/components/ui/Testimonials';
import Title from '~/components/ui/Title';
import Lessons from '~/components/ui/Lessons';
import Sponsors from '~/components/ui/Sponsors';
import ImageCarousel from '~/components/ui/ImageCarousel';
import { useDisclosure } from '@mantine/hooks';

function Home() {
  const [modalBasicIsOpen, { open: modalBasicOpen, close: modalBasicClosed }] =
    useDisclosure(false);
  const [
    modalJuniorIsOpen,
    { open: modalJuniorOpen, close: modalJuniorClosed },
  ] = useDisclosure(false);
  const [
    modalPlayingIsOpen,
    { open: modalPlayingOpen, close: modalPlayingClosed },
  ] = useDisclosure(false);
  const [
    modalAcceleratorIsOpen,
    { open: modalAcceleratorOpen, close: modalAcceleratorClosed },
  ] = useDisclosure(false);
  const [modalAFIsOpen, { open: modalAFOpen, close: modalAFClosed }] =
    useDisclosure(false);
  const [
    modalFittingIsOpen,
    { open: modalFittingOpen, close: modalFittingClosed },
  ] = useDisclosure(false);

>>>>>>> 5a63fcd199a380decbf1aea58bb55c3de06002a9
  return (
    <div>
      <Title />
      <Features />
<<<<<<< HEAD
      <Services />
      <Testimonials />
      <Lessons />
=======
      <Testimonials />
      <Lessons
        modalBasicIsOpen={modalBasicIsOpen}
        modalJuniorIsOpen={modalJuniorIsOpen}
        modalPlayingIsOpen={modalPlayingIsOpen}
        modalAcceleratorIsOpen={modalAcceleratorIsOpen}
        modalAFIsOpen={modalAFIsOpen}
        modalFittingIsOpen={modalFittingIsOpen}
        openModalBasic={modalBasicOpen}
        closeModalBasic={modalBasicClosed}
        openModalJunior={modalJuniorOpen}
        closeModalJunior={modalJuniorClosed}
        openModalPlaying={modalPlayingOpen}
        closeModalPlaying={modalPlayingClosed}
        openModalAccelerator={modalAcceleratorOpen}
        closeModalAccelerator={modalAcceleratorClosed}
        openModalAF={modalAFOpen}
        closeModalAF={modalAFClosed}
        openModalFitting={modalFittingOpen}
        closeModalFitting={modalFittingClosed}
      />
      <ImageCarousel />
      <Sponsors />
>>>>>>> 5a63fcd199a380decbf1aea58bb55c3de06002a9
    </div>
  );
}
export default Home;
