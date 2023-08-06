import { styled } from "styled-components";
import { Button } from "../../ui/button";
import { memo } from "react";

const Head = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* min-height: calc(100vh - 68px); */
  padding: 96px 18px;
  overflow: hidden;
`;

function Hero() {
  return (
    <Head>
      <h1 className="mb-10 text-center text-7xl font-bold text-tertiary-base">
        Empowering{" "}
        <span className="font-code text-primary-base">{"<Developers>"}</span>
        <br />
        Enabling{" "}
        <span className="relative font-hand text-8xl font-normal text-primary-base">
          Businesses
          <img
            src="/hand-line.svg"
            alt="hand drawing line"
            className="absolute -bottom-3 left-1/2 -translate-x-1/2"
          />
        </span>
      </h1>

      <p className="mb-16 w-2/5 text-center text-xl text-tertiary-4">
        Discover Hidden Gems: Unleash Software's Potential for Your Business
      </p>

      <div className="flex items-center gap-4">
        <a href="#join">
          <Button size={"lg"} className="px-20 py-6 text-lg">
            Join us
          </Button>
        </a>
        <div className="flex flex-col text-tertiary-5">
          <p>
            <span className="font-bold">+500</span> business
          </p>
          <p>
            <span className="font-bold">+200</span> developer
          </p>
        </div>
      </div>
      <img
        src="/circle-1.svg"
        alt="circle"
        className=" absolute -bottom-8 -right-16 -z-10 h-96 translate-x-1/2 rotate-180"
      />
      <img
        src="/circle-2.svg"
        alt="circle"
        className=" absolute -left-24 top-2 h-96 -translate-x-1/2 "
      />
    </Head>
  );
}

export default memo(Hero);
