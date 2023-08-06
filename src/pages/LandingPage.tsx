import { useState, useRef, useEffect, useMemo, RefObject } from "react";
import Business from "../features/landing-page/Business";
import Developer from "../features/landing-page/Developer";
import Faq from "../features/landing-page/Faq";
import Footer from "../features/landing-page/Footer";
import Header from "../features/landing-page/Header";
import Hero from "../features/landing-page/Hero";
import JoinUs from "../features/landing-page/JoinUsForm";

function LandingPage() {
  const [activeSection, setActiveSection] = useState<number>(0);
  const [isSticky, setIsSticky] = useState<boolean>(false);

  const hero = useRef<HTMLDivElement>();
  const business = useRef<HTMLDivElement>();
  const developer = useRef<HTMLDivElement>();
  const faq = useRef<HTMLDivElement>();
  const join = useRef<HTMLDivElement>();

  const sectionRefs = useMemo(() => [hero, business, developer, faq, join], []);

  useEffect(() => {
    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = +entry.target.id;
          if (id >= 1) setIsSticky(true);
          if (id < 1) setIsSticky(false);
          setActiveSection(id);
        }
      });
    };

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Percentage of section visible to trigger intersection
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    sectionRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [sectionRefs]);

  return (
    <div>
      <Header isSticky={isSticky} activeSection={activeSection} />
      <div ref={hero as RefObject<HTMLDivElement>} id="0">
        <Hero />
      </div>
      <div ref={business as RefObject<HTMLDivElement>} id="1">
        <Business />
      </div>
      <div ref={developer as RefObject<HTMLDivElement>} id="2">
        <Developer />
      </div>
      <div ref={faq as RefObject<HTMLDivElement>} id="3">
        <Faq />
      </div>
      <div ref={join as RefObject<HTMLDivElement>} id="4">
        <JoinUs />
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
