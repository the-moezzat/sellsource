import FormJoin from "./FormJoin";

function JoinUs() {
  return (
    <div className=" bg-tertiary-9 p-16 max-lg:p-4" id="join">
      <div className="mx-auto flex w-4/6 flex-col items-center max-lg:w-11/12 max-sm:w-full">
        <p className=" mb-4 text-lg uppercase tracking-widest text-tertiary-2 max-lg:mb-2 max-lg:text-base max-md:text-sm max-sm:text-xs">
          Join us
        </p>
        <h2 className="mb-6 text-center text-4xl font-bold leading-normal text-tertiary-1 max-lg:text-3xl max-md:text-2xl max-sm:text-xl">
          Don’t miss the opportunity to be part of sellsource
        </h2>

        <FormJoin />
      </div>
    </div>
  );
}

export default JoinUs;
