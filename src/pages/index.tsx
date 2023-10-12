import Features from '~/components/ui/Features';
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
    modalSamplerIsOpen,
    { open: modalSamplerOpen, close: modalSamplerClosed },
  ] = useDisclosure(false);
  const [modalAFIsOpen, { open: modalAFOpen, close: modalAFClosed }] =
    useDisclosure(false);
  const [
    modalFittingIsOpen,
    { open: modalFittingOpen, close: modalFittingClosed },
  ] = useDisclosure(false);

  return (
    <div>
      <Title />
      <Features />
      <Testimonials />
      <Lessons
        modalBasicIsOpen={modalBasicIsOpen}
        modalJuniorIsOpen={modalJuniorIsOpen}
        modalPlayingIsOpen={modalPlayingIsOpen}
        modalSamplerIsOpen={modalSamplerIsOpen}
        modalAFIsOpen={modalAFIsOpen}
        modalFittingIsOpen={modalFittingIsOpen}
        openModalBasic={modalBasicOpen}
        closeModalBasic={modalBasicClosed}
        openModalJunior={modalJuniorOpen}
        closeModalJunior={modalJuniorClosed}
        openModalPlaying={modalPlayingOpen}
        closeModalPlaying={modalPlayingClosed}
        openModalSampler={modalSamplerOpen}
        closeModalSampler={modalSamplerClosed}
        openModalAF={modalAFOpen}
        closeModalAF={modalAFClosed}
        openModalFitting={modalFittingOpen}
        closeModalFitting={modalFittingClosed}
      />
      <ImageCarousel />
      <Sponsors />
    </div>
  );
}
export default Home;
