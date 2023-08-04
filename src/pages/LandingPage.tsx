import Business from "../features/landing-page/Business";
import Developer from "../features/landing-page/Developer";
import Header from "../features/landing-page/Header";
import Hero from "../features/landing-page/Hero";

function LandingPage() {
  return (
    <div>
      <Header />
      <Hero />
      <Business />
      <Developer />
    </div>
  );
}

export default LandingPage;
