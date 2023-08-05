import {
  CreditCard,
  FastForward,
  Globe,
  Lifebuoy,
} from "@phosphor-icons/react";
import styled from "styled-components";

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

function Developer() {
  return (
    <div className="grid grid-cols-[repeat(24,1fr)] grid-rows-[auto,auto] gap-4 bg-accent-6 px-5 py-12" id="developer">
      <div className="col-start-2 col-end-[13] row-span-full grid grid-cols-2 gap-4">
        <div className="flex flex-col items-start justify-between gap-4 rounded-2xl bg-accent-10 p-4">
          <p className="text-2xl font-medium text-accent-1 ">
            Simplify Sales Process
          </p>
          <div className="mt-auto space-y-2">
            <div className="inline-block rounded-xl bg-accent-1 p-2 text-3xl text-accent-10 ">
              <FastForward />
            </div>
            <p className="text-accent-3">
              Effortlessly list and manage your software. SellSource streamlines
              the sales
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start justify-between gap-4 rounded-2xl bg-accent-10 p-4">
          <p className="text-2xl font-medium text-accent-1 ">
            Reach Global Audiences
          </p>
          <div className="mt-auto space-y-2">
            <div className="inline-block rounded-xl bg-accent-1 p-2 text-3xl text-accent-10 ">
              <Globe />
            </div>
            <p className="text-accent-3">
              Showcase your software to millions worldwide. Expand your reach
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start justify-between gap-4 rounded-2xl bg-accent-10 p-4">
          <p className="text-2xl font-medium text-accent-1 ">
            Secure <br />
            Transactions
          </p>
          <div className="mt-auto space-y-2">
            <div className="inline-block rounded-xl bg-accent-1 p-2 text-3xl text-accent-10 ">
              <CreditCard />
            </div>
            <p className="text-accent-3">
              Experience safe and transparent transactions. SellSource ensures
              fairness.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start justify-between gap-4 rounded-2xl bg-accent-10 p-4">
          <p className="text-2xl font-medium text-accent-1 ">
            Thrive with SellSource
          </p>
          <div className="mt-auto space-y-2">
            <div className="inline-block rounded-xl bg-accent-1 p-2 text-3xl text-accent-10 ">
              <Lifebuoy />
            </div>
            <p className="text-accent-3">
              Thrive in a supportive environment. SellSource empowers you.
            </p>
          </div>
        </div>
      </div>
      <div className="col-start-13 col-end-[24]">
        <p className=" mb-2 uppercase tracking-widest text-accent-2">
          For developer
        </p>
        <h2 className="mb-4 text-4xl font-bold text-accent-10">
          Where Developer Build for better world
        </h2>
        <p className="mb-8 text-xl text-accent-9">
          Discover the Power of SellSource's Developer Tools for Unleashing Your
          Potential
        </p>
        <button className="rounded-lg bg-primary-base px-8 py-3 font-medium text-tertiary-base">
          Join now for free
        </button>
      </div>
      <div className="col-start-13 col-end-[24] h-64 overflow-hidden rounded-xl">
        <Image src="/developer.jpg" />
      </div>
    </div>
  );
}

export default Developer;
