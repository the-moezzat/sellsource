import {
  CreditCard,
  FastForward,
  Globe,
  Lifebuoy,
} from "@phosphor-icons/react";
import styled from "styled-components";
import DeveloperFeatureCard from "./DeveloperFeatureCard";
import Subheading from "../../ui/Subheading";
import { Button } from "../../ui/button";

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  gap: 1rem;
  padding: 3rem 1.25rem;

  @media (max-width: 1180px) {
    gap: 0.5rem;
  }
`;

function Developer() {
  return (
    <Section className="grid-rows-[auto,auto] bg-accent-6" id="developer">
      <div className="col-start-2 col-end-[13] row-span-full grid grid-cols-2 gap-4 max-lg:col-start-1 max-[950px]:col-span-full max-[950px]:row-start-2 max-sm:row-start-3 max-sm:gap-2 max-[500px]:grid-cols-1">
        <DeveloperFeatureCard
          title="Simplify Sales Process"
          icon={<FastForward />}
          text="Effortlessly list and manage your software. SellSource streamlines
              the sales"
        />
        <DeveloperFeatureCard
          title="Reach Global Audiences"
          icon={<Globe />}
          text="Showcase your software to millions worldwide. Expand your reach"
        />
        <DeveloperFeatureCard
          title="Save & Secure Transactions"
          icon={<CreditCard />}
          text="Experience safe and transparent transactions. SellSource ensures
              fairness."
        />
        <DeveloperFeatureCard
          title="Thrive with SellSource"
          icon={<Lifebuoy />}
          text="Thrive in a supportive environment. SellSource empowers you."
        />
      </div>

      <div className="col-start-13 col-end-[24] max-lg:col-end-[25] max-[950px]:col-start-[13] max-[650px]:row-start-1 max-sm:col-span-full">
        <Subheading className=" mb-2 text-accent-2 max-lg:mb-1">
          For developer
        </Subheading>
        <h2 className="mb-4 text-4xl font-bold text-accent-10 max-lg:mb-2 max-lg:text-3xl">
          Where Developer Build for better world
        </h2>
        <p className="mb-8 text-xl text-accent-9 max-lg:mb-4 max-lg:text-base">
          Discover the Power of SellSource's Developer Tools for Unleashing Your
          Potential
        </p>
        <a href="#join">
          <Button className="">Join now for free</Button>
        </a>
      </div>

      <div className="col-start-13 col-end-[24] h-64 overflow-hidden rounded-xl max-lg:col-end-[25] max-[950px]:col-start-1 max-[950px]:col-end-13 max-[950px]:row-start-1 max-sm:col-span-full max-sm:row-start-2">
        <Image src="/developer.jpg" />
      </div>
    </Section>
  );
}

export default Developer;
