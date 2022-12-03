import Features from '~/components/ui/Features';
// import Services from '~/components/ui/Services';
import Testimonials from '~/components/ui/Testimonials';
import Title from '~/components/ui/Title';
import Lessons from '~/components/ui/Lessons';
import Sponsors from '~/components/ui/Sponsors';

function Home() {
  return (
    <div>
      <Title />
      <Features />
      {/* <Services /> */}
      <Testimonials />
      <Lessons />
      <Sponsors />
    </div>
  );
}
export default Home;
