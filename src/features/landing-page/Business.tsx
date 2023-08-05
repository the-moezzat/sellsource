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

function Business() {
  return (
    <div
      className="grid  grid-cols-[repeat(24,1fr)] gap-4 bg-[#F7F7F7] px-5 py-12"
      id="business"
    >
      <div className="col-start-2 col-end-12">
        <Subheading
          text="Grow your business with us"
          color="accent-5"
          className=" mb-3"
        />
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
    </div>
  );
}

export default Business;
