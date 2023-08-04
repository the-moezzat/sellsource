import { ChartLineUp, Clock, Gauge } from "@phosphor-icons/react";
import styled from "styled-components";

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

function Business() {
  return (
    <div className="grid  grid-cols-[repeat(24,1fr)] gap-4 bg-[#F7F7F7] px-5 py-12">
      <div className="col-start-2 col-end-12">
        <p className=" mb-2 uppercase tracking-widest text-tertiary-base">
          Grow your business with us
        </p>
        <h2 className="mb-4 text-4xl font-bold text-gray-8">
          Where businesses find best solutions
        </h2>
        <p className="mb-8 text-xl text-gray-7">
          Discover Hidden Gems: Unleash Software's Potential for Your Business
        </p>
        <button className="rounded-lg bg-primary-base px-8 py-3 font-medium text-tertiary-base">
          Join now for free
        </button>
      </div>
      <div className="col-start-13 col-end-[24] h-72 overflow-hidden rounded-xl">
        <Image src="/business.jpg" />
        {/* <img src="/business.jpg" alt="" className="h-full object-cover" /> */}
      </div>
      <div className="col-start-2 col-end-[24] flex items-center justify-between gap-4">
        <div className="rounded-xl border border-gray-4 bg-white p-4">
          <div className="mb-8 flex items-center  gap-4">
            <div className="rounded-xl bg-primary-1 p-2 text-4xl text-primary-9">
              <ChartLineUp />
            </div>
            <p className="text-lg  text-gray-7">revenue rate</p>
          </div>
          <p className="mb-4 text-5xl font-bold text-gray-9">+15%</p>
          <p className="text-lg text-gray-6">
            Boost revenue with SellSource's innovative solutions.
          </p>
        </div>
        <div className="rounded-xl border border-gray-4 bg-white p-4">
          <div className="mb-8 flex items-center gap-4">
            <div className="rounded-xl bg-primary-1 p-2 text-4xl text-primary-9">
              <Clock />
            </div>
            <p className="text-lg ">Time saved</p>
          </div>
          <p className="mb-4 text-5xl font-bold text-gray-9">+70,000 hr</p>
          <p className="text-lg text-gray-6">
            Maximize productivity with SellSource's efficient software.
          </p>
        </div>

        <div className="rounded-xl border border-gray-4 bg-white p-4">
          <div className="mb-8 flex items-center gap-4">
            <div className="rounded-xl bg-primary-1 p-2 text-4xl text-primary-9">
              <Gauge />
            </div>
            <p className="text-lg ">Performance</p>
          </div>
          <p className="mb-4 text-5xl font-bold text-gray-9">+40%</p>
          <p className="text-lg text-gray-6">
            Elevate business with high-quality software from SellSource.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Business;
