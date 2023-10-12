// import Contact from '~/components/ui/Contact';
import Brands from '~/components/ui/Brands';
import Collections from '~/components/ui/Collections';
import Services from '~/components/ui/Services';
import Testimonials from '~/components/ui/Testimonials';
import Title from '~/components/ui/Title';

function Home() {
  return (
    <div>
      <Title />
      <Collections />
      <Brands />
      <Services />
      <Testimonials />
      {/* <Contact /> */}
    </div>
  );
}
export default Home;
