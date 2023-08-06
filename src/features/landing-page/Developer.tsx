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

function Developer() {
  return (
    <div
      className="grid grid-cols-[repeat(24,1fr)] grid-rows-[auto,auto] gap-4 bg-accent-6 px-5 py-12"
      id="developer"
    >
      <div className="col-start-2 col-end-[13] row-span-full grid grid-cols-2 gap-4 max-lg:col-start-1">
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
      <div className="col-start-13 col-end-[24] max-lg:col-end-[25]">
        <Subheading className=" mb-2 text-accent-2">For developer</Subheading>
        <h2 className="mb-4 text-4xl font-bold text-accent-10">
          Where Developer Build for better world
        </h2>
        <p className="mb-8 text-xl text-accent-9">
          Discover the Power of SellSource's Developer Tools for Unleashing Your
          Potential
        </p>
        <a href="#join">
          <Button className="">Join now for free</Button>
        </a>
      </div>
      <div className="col-start-13 col-end-[24] h-64 overflow-hidden rounded-xl max-lg:col-end-[25]">
        <Image src="/developer.jpg" />
      </div>
    </div>
  );
}

export default Developer;
