import Business from "../features/landing-page/Business";
import Developer from "../features/landing-page/Developer";
import Faq from "../features/landing-page/Faq";
import Footer from "../features/landing-page/Footer";
import Header from "../features/landing-page/Header";
import Hero from "../features/landing-page/Hero";
import JoinUs from "../features/landing-page/JoinUsForm";

function LandingPage() {
  return (
    <div>
      <Header />
      <Hero />
      <Business />
      <Developer />
      <Faq />
      <JoinUs />
      <Footer />
    </div>
  );
}

export default LandingPage;
