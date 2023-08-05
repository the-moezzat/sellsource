import { ChartLineUp, Clock, Gauge } from "@phosphor-icons/react";
import styled from "styled-components";
import { Button } from "../../ui/button";
import BusinessFeatureCard from "./BusinessFeatureCard";
import Subheading from "../../ui/Subheading";

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
`;

function Business() {
  return (
    <Section className="bg-[#F7F7F7]" id="business">
      <div className="col-start-2 col-end-12">
        <Subheading className=" mb-3 text-accent-6">
          Grow your business with us
        </Subheading>

        <h2 className="mb-4 text-4xl font-bold text-gray-8">
          Where businesses find best solutions
        </h2>
        <p className="mb-8 text-xl text-gray-6">
          Discover Hidden Gems: Unleash Software's Potential for Your Business
        </p>
        <a href="#join">
          <Button className="">Join now for free</Button>
        </a>
      </div>
      <div className="col-start-13 col-end-[24] h-72 overflow-hidden rounded-xl">
        <Image src="/business.jpg" />
      </div>
      <div className="col-start-2 col-end-[24] flex items-center justify-between gap-4">
        <BusinessFeatureCard
          title="revenue rate"
          feature="+15%"
          icon={<ChartLineUp />}
          text="Boost revenue with SellSource's innovative solutions."
        />
        <BusinessFeatureCard
          title="Time saved"
          feature="+70,000 hr"
          icon={<Clock />}
          text="Maximize productivity with SellSource's efficient software."
        />
        <BusinessFeatureCard
          title="Performance"
          feature="+40%"
          icon={<Gauge />}
          text="Elevate business with high-quality software from SellSource."
        />
      </div>
    </Section>
  );
}

export default Business;
